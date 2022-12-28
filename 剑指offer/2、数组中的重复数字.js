/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 */
var findRepeatNumber = function (nums) {
  let a = new Map();
  for (let i = 0; i < nums.length; i++) {
    let size = a.size;
    a.set(nums[i], i);
    if (a.size !== size + 1) return nums[i];
  }
  return 0
};

let nums = [2, 3, 4, 5, 1, 1, 3, 2];
console.log(findRepeatNumber(nums));
