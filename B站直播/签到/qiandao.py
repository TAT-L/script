# -*- coding: utf-8 -*-
# @Time  : 2020/03/08 下午9:00
# @Author: MagicHuang
# @File  : qiandao.py


import requests
import time


url = 'https://www.zztuku.com/user-signin.html'
headers = {
    'referer': 'https://www.zztuku.com',
    'cookie': 'PHPSESSID=k4s467t017gbelap5tj57okp26; Hm_lvt_36d091ca4167858e40c7bf39f954e3f9=1642440576,1642440603; Hm_lpvt_36d091ca4167858e40c7bf39f954e3f9=1642440798',
    'x-requested-with': 'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36'
}
response = requests.post(url=url, headers=headers)
now = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())
msg = response.json()
try:
    with open('log.txt', 'a') as f:
        f.write('{} --- {}\n'.format(now, msg))
        f.close()
        print(msg)
except Exception as e:
    print(e)
