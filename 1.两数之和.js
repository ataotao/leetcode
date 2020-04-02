/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// const random = () => Math.floor(Math.random() * 10 + 1);
// const _nums = Array(100000)
//   .fill(0)
//   .map(v => random());
// const _target = random();

const twoSum = function(nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (hash[n] !== undefined) {
      return [hash[n], i];
    }
    hash[target - n] = i;
  }
  return [];
};

// console.log("_nums", _nums);
// console.log("_target", _target);

// console.time("start twoSum");
// console.log(twoSum(_nums, _target));
// console.timeEnd("start twoSum");
// @lc code=end
