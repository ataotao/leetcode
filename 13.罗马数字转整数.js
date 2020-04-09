/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let ans = 0;
  for (let i = 0; i < s.length; ) {
    const matchTwo = map[s.substring(i, i + 2)];
    if (matchTwo) {
      // 取两位hash匹配
      ans += matchTwo;
      i += 2;
    } else {
      // 取一位hash匹配
      ans += map[s.substring(i, i + 1)];
      i++;
    }
  }
  return ans;
};

// const romanToInt = function (s) {
//   const config = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//     IV: 4,
//     IX: 9,
//     XL: 40,
//     XC: 90,
//     CD: 400,
//     CM: 900,
//   };
//   let count = 0;
//   for (let i = 0; i < s.length; i += 2) {
//     // 分割字符串为2个一组
//     let str = s.substring(i, i + 2);
//     let num = config[str];
//     if (num) {
//       // 匹配时，累加数字
//       count += num;
//     } else {
//       // 不匹配时，取第一位，i位数回退一格
//       num = config[str[0]];
//       if (num) {
//         count += num;
//         i -= 1;
//       } else {
//         throw new Error("error");
//       }
//     }
//   }
//   //   console.log(count);
//   return count;
// };

// romanToInt("XXVII"); // 27
// romanToInt("III"); // 3
// romanToInt("IV"); // 4
// romanToInt("IX"); // 9
// romanToInt("LVIII"); // 58
// romanToInt("MCMXCIV"); //1994
// @lc code=end
