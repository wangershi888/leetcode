/**
 * https://leetcode.cn/problems/find-all-duplicates-in-an-array/
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let res = {}
  let a = []
  for(let i = 0; i < nums.length; i ++) {
    res[nums[i]] = res[nums[i]] ? res[nums[i]] += 1 : 1
  }
  for(let i in res) {
    if(res[i] > 1) a.push(i)
  }
  return a
};


let nums = [4,3,2,7,8,2,3,1]
console.log(findDuplicates(nums))