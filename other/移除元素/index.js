/**
 * https://leetcode-cn.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  for(let i = 0; i < nums.length; i ++) {
    if(nums[i] === val) {
      nums.splice(i, 1)
      i -= 1
    }
  }
  return nums.length
};

console.log(removeElement([3,2,2,3], 3));