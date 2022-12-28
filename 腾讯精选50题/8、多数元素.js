/**
 * https://leetcode-cn.com/problems/majority-element/
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let obj = {}
  let max = 0;
  let maxNum = null;
  for(let i = 0; i < nums.length; i ++) {
    obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1
  }
  for(let i in obj) {
    if(obj[i] > max) {
      max = obj[i]
      maxNum = i
    }
  }
  return maxNum
};

let nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums))


// 输入：nums = [3,2,3]
// 输出：3
// 示例 2：

// 输入：nums = [2,2,1,1,1,2,2]
// 输出：2