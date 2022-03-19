// let Time = require('time.js')
// var time = +new Date;

// console.log(Time(time, "%y年%M月%d日%h时%m分%s秒"))
// Time(time, "%y年%M月%d日%h时%m分%s秒"); // xxxx年xx月xx日xx时xx分xx秒
// Time(time, "%y-%M-%d %h:%m:%s"); //xxxx-xx-xx xx:xx:xx

// // Time.ago(time); // 刚刚
// let time = new Date;
// console.log(time.getTime())
// console.log(time.getDate())
//编码
// let a = new Buffer(String).toString('base64');

let Time = new Date(1642348533000) //1642951448709
console.log(new Date().toDateString())
console.log(Time.toLocaleDateString())
//解码
// new Buffer(base64Str, 'base64').toString();