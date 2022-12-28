/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.cn/problems/maximum-product-of-two-elements-in-an-array/
 */
var maxProduct = function (nums) {
  let max1 = Math.max(...nums)
  nums.splice(nums.indexOf(max1), 1)
  let max2 = Math.max(...nums)
  return (max1 - 1) * (max2 - 1)
};

let nuns = [3,7]

console.log('thi sis asdf', maxProduct(nuns))