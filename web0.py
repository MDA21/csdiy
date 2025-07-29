import re
import requests
from time import sleep


BASE_URL = 'http://pumpk1n.com'
SESSION = requests.Session()

token_pattern = re.compile(r"token=([0-9a-f]+)")

for i in range(1, 1338):
    # 1 请求首页拿到新的 token
    resp = SESSION.get(BASE_URL + '/lab0.php')
    if resp.status_code != 200:
        print(f"[!] 第 {i} 次请求首页失败，状态码 {resp.status_code}")
        break

    m = token_pattern.search(resp.text)
    if not m:
        print(f"[!] 第 {i} 次没找到 token,页面内容片段:{resp.text[:100]!r}")
        break
    token = m.group(1)

    # 2 带 token 请求 flag
    resp2 = SESSION.get(f"{BASE_URL}/flag.php?token={token}")
    print(f"({i}/1337) token={token} → {resp2.text.strip()}")

    # 等一下，防止被限流
    sleep(0.1)