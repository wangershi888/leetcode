/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * https://leetcode.cn/problems/search-insert-position/
 */
var searchInsert = function (nums, target) {
  let index = nums.indexOf(target);
  if (index !== -1) return index;
  if (nums[0] > target) return 0;
  if (nums[nums.length - 1] < target) return nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      return i;
    }
  }
};

// 输入: nums = [1,3,5,6], target = 5
// 输出: 2
let nums = [1, 3, 5, 6];
let target = 2;
console.log(searchInsert(nums, target));
