// let s = 'aabaab!bb'
// let arrayModel = s.split('')

// let result = []
// let temp = []
// let fun = function (start, end) {
//     let nextEnd
//     let nextStart
//     if (start != 0)
//         temp = arrayModel.slice(start, end)
//     for (let i = end; i < arrayModel.length; i++) {
//         nextEnd = i + 1
//         let item = arrayModel[i]
//         if (!temp.includes(item)) {
//             temp.push(item)
//         } else {
//             nextStart = temp.indexOf(item) + start + 1

//             if (temp.length > result.length) {
//                 result = temp
//             }
//             fun(nextStart, nextEnd)
//             return
//         }

//     }
//     if (temp.length > result.length) {
//         result = temp
//     }
   

// }


// fun(0, 0)
// console.log(result)

var lengthOfLongestSubstring = function (s) {
    // 哈希集合，记录每个字符是否出现过
    const occ = new Set();
    const n = s.length;
    // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
    let rk = -1,
        ans = 0;
    for (let i = 0; i < n; ++i) {
        if (i != 0) {
            // 左指针向右移动一格，移除一个字符
            occ.delete(s.charAt(i - 1));
        }
        while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
            // 不断地移动右指针
            occ.add(s.charAt(rk + 1));
            ++rk;
        }
        // 第 i 到 rk 个字符是一个极长的无重复字符子串
        ans = Math.max(ans, rk - i + 1);
    }
    return ans;
};
let a = lengthOfLongestSubstring('sfsdffsdf')
console.log(a)