/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    if(!strs.length) return '';
    let res = '';
    // 取得位数最短的字符
    const min = Math.min.apply(null, strs.map((v) => v.length));
    let short = strs.find((v) => v.length === min) || '';
    let j = short.length;
    while (j > 0) {
      let txt = short.substring(0, j);
      const every = strs.every(str => str.indexOf(txt) === 0 );
      if(every) {
        // 取得完全一致的字符
        res = txt;
        break;
      }
      j--;
    }
    return res;
};


// var longestCommonPrefix = function(strs) {
//     if(!strs.length) return '';
//     let [a, ...b] = strs;
//     let result = '';
//     for(let i = 0; i < a.length; i++){
//         let flag = b.every(item => item[i] === a[i]);
//         if(flag) result += a[i];
//         else break;
//     }
//     return result;
// };


// @lc code=end
