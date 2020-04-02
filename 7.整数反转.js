/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */

const reverse = function (x) {
    const border = 2 ** 31; // 2的31次方 
    const max = border - 1; // 2147483647
    const min = -border; // // 2147483648
    const isNegative = x < 0;
    const str = String(isNegative ? Math.abs(x) : x).split('').reverse().join('');
    const num = (isNegative ? -1 : 1) * str; //转换字符串为数字，当"021" * 1 时会转换成 21
    return (num > max || num < min || isNaN(num)) ? 0 : num;
};

// console.time("start");
// console.log("NaN reverse =>", reverse(NaN));
// console.log("null reverse =>", reverse(null));
// console.log("undefined reverse =>", reverse(undefined));
// console.log("1534236469 reverse =>", reverse(1534236469));
// console.log("1212395981218312123959812183 reverse =>", reverse(1212395981218312123959812183))
// console.log("123 reverse =>", reverse(123));
// console.log("-123 reverse =>", reverse(-123));
// console.log("120 reverse =>", reverse(120));
// console.timeEnd("start");
// @lc code=end

