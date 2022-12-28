/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let j = 0;
  for(let i = 1; i < nums.length; i ++) {
    if(nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i -= 1
    }
  }
  return nums.length
};



console.log(removeDuplicates([1,1,2]))