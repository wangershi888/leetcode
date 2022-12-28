/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * https://leetcode.cn/problems/move-zeroes/
 */
var moveZeroes = function (nums) {
  let length = nums.length;
  for (let i = 0; i < length; i++) {

    if (nums[i] === 0) {
      console.log('asdfasdf', nums[i])
      nums.push(...nums.splice(i, 1))
      // length -= 1
      i -= 1;
    }
  }
  return nums;
};

const nums = [0, 0, 1]
console.log(moveZeroes(nums))