// import axios from 'axios'
const Base64 = require('../base64To')
const axios = require('axios');
let Time = require('time.js')
const fs = require('fs')
const data = require('./data.js')


let content = ''



const decodeAndPost = function (data) {
    // console.log(data)
    data.forEach(item => {
        let base64Data = Base64.encode(JSON.stringify(item))
        axios.post('https://we.cqupt.edu.cn/api/mrdk/post_mrdk_info.php', {
            "key": base64Data
        }).then((res) => {

            content += item.name + JSON.stringify(res.data) + '\n'
            console.log(item.name, res.data)

        })
    });

}

const saveLog = function () {
    let time = +new Date;
    time = Number(time.toString().slice(0, 10))
    let date = Time(time, "%y年%M月%d日%h时%m分%s秒")
    setTimeout(() => {
        fs.writeFile('log.txt', content + date + '\n' + '\n', {
            flag: 'a+'
        }, err => {
            if (err) {
                console.error(err)
                return
            }
            //文件写入成功。
            console.log("文件写入成功。")
        })
    }, 1000)
}

function main() {
    decodeAndPost(data)
    setTimeout(() => {
        saveLog()
    }, 500)


}
main()