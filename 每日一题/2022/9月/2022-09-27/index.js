/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * https://leetcode.cn/problems/check-permutation-lcci/
 */
var CheckPermutation = function (s1, s2) {
  let a = s2
  for (let i = 0; i < s1.length; i++) {
    a= a.replace(s1[i], '')
  }
  return a.length === 0
};

let s1 = "abc"
let s2 = "bca"

console.log(CheckPermutation(s1, s2))