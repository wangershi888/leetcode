/**
 * https://leetcode.cn/problems/sort-array-by-parity/
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
   let res = []
  for(let i = 0; i < nums.length; i ++) {
    nums[i] % 2 ? res.push(nums[i]) : res.unshift(nums[i])
  }
  return res
};


let num = [3,1,2,4]
console.log(sortArrayByParity(num))