/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.cn/problems/minimum-value-to-get-positive-step-by-step-sum/
 */
var minStartValue = function (nums) {
  let sum = 0;
  let min = 1;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    min = Math.min(sum, min)
  }
  return min < 1 ? Math.abs(min) + 1 : min
};

// const nums = [-3, 2, -3, 4, 2]
const nums = [2,3,5,-5,-1]
console.log(minStartValue(nums))