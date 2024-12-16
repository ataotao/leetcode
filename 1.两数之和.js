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
const random = () => Math.floor(Math.random() * 10 + 1);
const _nums = Array(1000)
  .fill(0)
  .map((v) => random());
const _target = random();
// const _nums = [
//   1, 7, 7, 7, 2, 5, 5, 7, 6, 6, 10, 9, 5, 3, 3, 2, 9, 9, 5, 10, 1, 8, 8, 7, 2,
//   4, 4, 9, 2, 10, 1, 2, 7, 2, 4, 9, 2, 6, 10, 1, 3, 1, 5, 3, 3, 10, 2, 2, 1, 5,
//   6, 8, 2, 5, 9, 3, 6, 4, 7, 1, 8, 9, 4, 6, 1, 10, 2, 2, 7, 9, 3, 6, 10, 1, 9,
//   4, 7, 4, 9, 4, 8, 6, 6, 2, 4, 1, 3, 4, 5, 3, 5, 7, 10, 3, 5, 1, 7, 2, 4, 4, 4,
//   9, 6, 6, 3, 7, 5, 9, 3, 6, 5, 8, 8, 4, 7, 3, 9, 10, 1, 2, 7, 4, 10, 5, 8, 8,
//   10, 4, 2, 6, 8, 8, 4, 2, 5, 3, 2, 8, 8, 10, 1, 7, 6, 1, 1, 9, 5, 3, 7, 7, 9,
//   9, 9, 1, 7, 9, 3, 1, 8, 1, 2, 6, 9, 5, 6, 3, 4, 9, 8, 9, 5, 10, 1, 2, 8, 10,
//   10, 10, 1, 1, 6, 7, 8, 10, 3, 3, 4, 3, 8, 2, 1, 7, 3, 10, 9, 6, 4, 6, 9, 6, 6,
//   5, 5, 4, 6, 7, 4, 1, 8, 1, 6, 10, 3, 9, 7, 5, 4, 5, 1, 8, 6, 1, 3, 5, 2, 5,
//   10, 3, 10, 2, 3, 8, 5, 8, 5, 9, 1, 6, 3, 9, 4, 4, 7, 10, 1, 6, 3, 5, 1, 9, 5,
//   4, 2, 3, 1, 2, 2, 5, 3, 6, 2, 8, 6, 9, 8, 7, 6, 3, 5, 2, 8, 3, 4, 7, 4, 3, 5,
//   7, 3, 3, 3, 9, 3, 5, 5, 2, 9, 8, 9, 2, 10, 9, 5, 7, 2, 6, 4, 3, 5, 5, 6, 5, 7,
//   10, 7, 10, 6, 8, 2, 1, 8, 8, 5, 5, 8, 5, 5, 10, 7, 8, 2, 10, 6, 1, 10, 1, 8,
//   10, 10, 1, 1, 9, 3, 1, 5, 1, 7, 2, 9, 10, 3, 8, 1, 5, 2, 10, 7, 1, 10, 8, 2,
//   4, 6, 1, 8, 4, 7, 3, 5, 6, 9, 5, 7, 4, 8, 4, 10, 7, 9, 9, 7, 8, 7, 2, 4, 10,
//   9, 4, 8, 8, 4, 3, 9, 3, 4, 7, 5, 8, 10, 1, 6, 4, 6, 3, 6, 3, 10, 9, 4, 5, 10,
//   9, 9, 8, 10, 2, 10, 7, 1, 2, 6, 10, 10, 9, 3, 4, 8, 6, 7, 1, 10, 2, 6, 5, 5,
//   7, 6, 9, 9, 7, 6, 10, 3, 8, 3, 5, 6, 9, 1, 7, 7, 5, 8, 7, 1, 6, 6, 2, 8, 3, 5,
//   10, 9, 9, 6, 4, 9, 8, 2, 3, 6, 4, 1, 6, 5, 6, 2, 4, 4, 3, 4, 5, 8, 5, 10, 2,
//   6, 3, 2, 9, 5, 7, 6, 2, 5, 10, 4, 7, 1, 8, 5, 2, 1, 10, 1, 8, 7, 7, 3, 1, 9,
//   1, 9, 1, 1, 10, 2, 7, 3, 4, 4, 1, 6, 1, 4, 2, 6, 7, 5, 9, 3, 7, 8, 6, 1, 1,
//   10, 4, 7, 5, 1, 10, 6, 5, 9, 6, 1, 8, 5, 8, 9, 9, 4, 8, 7, 2, 1, 7, 1, 1, 7,
//   2, 5, 4, 4, 5, 9, 10, 2, 2, 8, 1, 1, 9, 3, 5, 7, 3, 4, 9, 7, 1, 7, 5, 8, 4, 7,
//   8, 1, 2, 3, 7, 6, 6, 1, 2, 5, 9, 5, 1, 7, 8, 7, 8, 1, 3, 3, 8, 10, 5, 10, 2,
//   1, 2, 6, 10, 1, 2, 1, 9, 7, 7, 5, 5, 10, 9, 1, 6, 3, 1, 7, 1, 4, 3, 7, 10, 2,
//   4, 7, 1, 2, 4, 2, 9, 9, 3, 5, 2, 9, 2, 5, 10, 10, 8, 4, 1, 10, 4, 2, 7, 7, 8,
//   3, 6, 8, 2, 9, 8, 3, 5, 8, 4, 10, 3, 4, 1, 9, 8, 5, 7, 8, 3, 9, 2, 1, 3, 1, 7,
//   6, 9, 9, 10, 6, 5, 9, 3, 4, 8, 1, 10, 3, 6, 5, 4, 1, 8, 3, 8, 7, 9, 6, 1, 3,
//   9, 9, 3, 1, 1, 2, 10, 5, 3, 1, 1, 6, 7, 3, 4, 6, 6, 8, 6, 7, 3, 9, 6, 5, 1, 2,
//   2, 8, 4, 5, 4, 9, 2, 1, 6, 1, 7, 9, 4, 9, 9, 8, 1, 1, 3, 7, 6, 9, 7, 1, 8, 9,
//   10, 5, 7, 6, 7, 4, 9, 5, 7, 10, 1, 6, 10, 6, 8, 4, 3, 8, 1, 1, 9, 5, 4, 10, 2,
//   5, 6, 8, 5, 2, 1, 3, 9, 10, 10, 3, 6, 5, 3, 5, 3, 5, 9, 6, 4, 3, 4, 9, 9, 5,
//   1, 5, 10, 3, 5, 7, 8, 4, 4, 1, 4, 9, 7, 2, 1, 3, 4, 9, 7, 3, 6, 4, 4, 3, 10,
//   4, 2, 5, 2, 6, 4, 2, 7, 2, 4, 9, 1, 4, 2, 7, 6, 6, 6, 8, 5, 1, 8, 6, 5, 3, 9,
//   3, 9, 10, 3, 10, 9, 9, 6, 3, 1, 2, 8, 3, 8, 6, 6, 8, 1, 6, 5, 1, 6, 2, 9, 10,
//   5, 1, 4, 9, 7, 7, 4, 6, 2, 5, 9, 5, 10, 8, 3, 9, 10, 8, 5, 8, 3, 7, 6, 10, 6,
//   2, 6, 9, 2, 1, 10, 8, 5, 6, 10, 2, 5, 5, 9, 2, 2, 1, 10, 9, 8, 4, 9, 10, 7, 7,
//   4, 3, 1, 2, 3, 4, 1, 8, 8, 2, 7, 6, 2, 6, 5, 6, 3, 7, 9, 10, 6, 5, 4, 4, 6, 5,
//   6, 3, 9, 9, 4, 9, 2, 3, 1, 8, 7, 5, 8, 2, 8, 8, 4, 2, 5, 5, 2, 6, 3, 8, 2, 3,
//   8, 10, 4, 4, 8, 1, 7, 6, 5, 7, 4, 1, 3, 6, 3, 4, 6,
// ];
// const _target = 8;

/** 解题0（推荐，高效hash） */
function twoSum(nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (hash[n] !== undefined) {
      return [hash[n], i];
    }
    hash[target - n] = i;
  }
  return [];
}

// 解题1
function twoSum1(nums, target) {
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    for (let idx = 0; idx < nums.length; idx++) {
      const filter_num = nums[idx];
      if (idx !== index && num + filter_num === target) {
        return [index, idx];
      }
    }
  }
}
// 解题2
function twoSum2(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const find_index = nums.findIndex(
      (v, idx) => idx !== i && v + num === target
    );

    if (find_index > -1) {
      return [find_index, i];
    }
  }
}

// 解题3(推荐1 暴力循环)
function twoSum3(nums, target) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}

// 解题4(推荐2 map高效hash)
function twoSum4(nums, target) {
  const n = nums.length;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const x = target - nums[i];
    if (map.has(x)) {
      return [i, map.get(x)];
    } else {
      map.set(nums[i], i);
    }
  }
}

// console.log('_nums', JSON.stringify(_nums));
// console.log('_target', JSON.stringify(_target));

console.time('start twoSum');
console.log(twoSum(_nums, _target));
console.timeEnd('start twoSum');

// console.time('start twoSum1');
// console.log(twoSum1(_nums, _target));
// console.timeEnd('start twoSum1');

// console.time('start twoSum2');
// console.log(twoSum2(_nums, _target));
// console.timeEnd('start twoSum2');

// console.time('start twoSum3');
// console.log(twoSum3(_nums, _target));
// console.timeEnd('start twoSum3');

// console.time('start twoSum4');
// console.log(twoSum4(_nums, _target));
// console.timeEnd('start twoSum4');
// @lc code=end
