/**
 * @param {number[]} nums
 * @return {number[]}
 * https://leetcode.cn/problems/product-of-array-except-self/?favorite=ex0k24j
 */
var productExceptSelf = function (nums) {
  let len = nums.length
  let res = nums.slice(0)
  // 求左边的乘
  let j = 0
  for (let i = 1; i < len; i++) {
    res[i] = res[i - 1] * nums[i]
  }
};

const nums = [-1, 1, 0, -3, 3]
console.log(productExceptSelf(nums))