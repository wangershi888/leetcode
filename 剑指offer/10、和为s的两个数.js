/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode.cn/problems/he-wei-sde-liang-ge-shu-zi-lcof/?favorite=xb9nqhhg
 */
var twoSum = function (nums, target) {
  let i = 0

  while (nums.indexOf(target - nums[i]) === -1 && nums[i] < target) {
    i++
  }
  return [nums[nums.indexOf(target - nums[i])], nums[i]]
};

const nums = [10,26,30,31,47,60]
const target = 40
console.log(twoSum(nums, target))