 const Time = require('time.js')
 let time = +new Date;
 currentTime = Number(time.toString().slice(0, 10))
 const startTime = Time(time, "%y-%M-%d %h:%m:%s");
 const endTime = Time(time + 3600000 * 3, "%y-%M-%d %h:%m:%s")
 console.log(startTime)
 console.log(endTime)
 //  const endTime = Time(time, "%y-%M-%d %h:%m:%s");
 module.exports = [{
     "xh": "2019211780",
     "name": "李贤杰",
     "xy": "计算机学院\\人工智能学院",
     "nj": "2019",
     "openid": "oIaII0aCPlt1t8RFbvKc7AVLJUzQ",
     "wcmdd": "重庆市,重庆市,南岸区",
     "qjsy": "吃饭",
     "wcxxdd": "吃饭",
     "sfly": "请选择",
     "wcrq": startTime,
     "qjlx": "市内3小时离返校",
     "yjfxsj": endTime,
     "beizhu": "",
     "timestamp": currentTime
 }]