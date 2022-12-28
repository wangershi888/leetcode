/**
 * https://leetcode-cn.com/problems/single-number/
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  for(let i = 0; i < nums.length; i ++) {
    if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) return nums[i]
  }
};

let nums = [4,1,2,1,2]
console.log(singleNumber(nums))



// 输入: [2,2,1]
// 输出: 1

// 输入: [4,1,2,1,2]
// 输出: 4