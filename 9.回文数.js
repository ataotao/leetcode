/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if(x < 0) return false;
    // const _x = String(x);
    const _x = x + ''; // 转为字符串，试验与toString()的效率区别
    return _x === _x.split('').reverse().join('');
};
// @lc code=end

