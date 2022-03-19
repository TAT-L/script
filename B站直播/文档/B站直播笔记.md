## 2020-3-8

- [x] 在本地使用putty、FinalShell、xshell远程连接到服务器

- [x] 安装部署宝塔面板

- [x] 上传自己的文件到服务器

- [x] 使用wordpress搭建自己的个人博客

- [x] 部署自己的爬虫脚本（自动签到）

- [x] 网站备案

  买个域名+买个服务器（备案服务号  sadasd--sad-asdasd-asdas）+ 你的身份证+阿里云APP （人脸识别）+核检单+网站昵称（我爱吃苹果        XXX官网--GG）

  阿里云  初审 一个工作日； 30天之天    

  

  weibe.com

  微博   weibo.com

  域名：https://www.baidu.com/      DNS     ip：123.123.123.123

  crontab

  vim  /etc/crontab

  目标：每天 上午9:00 签到

  分钟  小时  日期 月份 周几 用户名  命令

  0         9       *       *      *      root   /usr/bin/python3.6    /home/qiandao/qiandao.py

  0         9       *       *      *      root   /home/qiandao/test.sh

  

  shell

  
  
  \#!/bin/bash
  
  /usr/bin/python3.6   /home/qiandao/qiandao.py
  
  
  
  重新启动crontab程序
  
  /etc/init.d/cron restart
  

爬虫（签到脚本）+linux（vim命令、crontab） shell



Python全栈之巅

回复“0308” 领取今天的所有资料

回复“阿里云”  获取服务器购买/领取链接



