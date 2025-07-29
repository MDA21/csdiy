import re
import requests
from time import sleep


BASE_URL = 'http://pumpk1n.com'
SESSION = requests.Session()

token_pattern = re.compile(r"token=([0-9a-f]+)")

for i in range(1, 1338):
    # 1 请求首页拿到新的 token
    resp = SESSION.get(BASE_URL + '/lab0.php')
    m = token_pattern.search(resp.text)
    token = m.group(1)

    # 2 带 token 请求 flag
    resp2 = SESSION.get(f"{BASE_URL}/flag.php?token={token}")
    print(f"({i}/1337) token={token} → {resp2.text.strip()}")
  
    #sleep(0.1)  # 等一下，防止被限流