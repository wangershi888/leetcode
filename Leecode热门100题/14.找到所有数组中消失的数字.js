/**
 * @param {number[]} nums
 * @return {number[]}
 * https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/?favorite=2cktkvj
 */
var findDisappearedNumbers = function (nums) {
  let n = nums.length;
  let res = [];
  for (let i = 1; i <= n; i++) {
    !nums.includes(i) && res.push(i);
  }
  return res;
};

let nums = [4, 3, 2, 7, 8, 2, 3, 1];
// [5,6]

console.log(findDisappearedNumbers(nums));
