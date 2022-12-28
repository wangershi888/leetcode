/**
 * @param {number[]} nums
 * @return {number[]}
 * https://leetcode.cn/problems/minimum-subsequence-in-non-increasing-order/
 */
var minSubsequence = function (nums) {
  let sum = nums.reduce((a, b) => a + b, 0)
  nums.sort((a, b) => a - b).reverse();
  let res = []
  while (res.reduce((a, b) => a + b, 0) <= sum) {
    res.push(...nums.splice(0, 1))
    sum = nums.reduce((a, b) => a + b, 0)
  }
  return res;
};

let nums = [4,4,7,6,7]
console.log(minSubsequence(nums))