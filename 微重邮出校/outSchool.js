const axios = require('axios')
const data = require('./data.js')
const Base64 = require('../base64To')
let content = ''


const decodeAndPost = function (data) {
    // console.log(data)
    data.forEach(item => {
        let base64Data = Base64.encode(JSON.stringify(item))
        axios.post('https://we.cqupt.edu.cn/api/lxsp_new/post_lxsp_spxx.php', {
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
        fs.writeFile('./微重邮出校/log.txt', content + date + '\n' + '\n', {
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
}
main()