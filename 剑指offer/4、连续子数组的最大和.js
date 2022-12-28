/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
 */
var maxSubArray = function (nums) {
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    nums[i] += Math.max(nums[i - 1], 0)
    max = Math.max(max, nums[i])
  }

  return max
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums))