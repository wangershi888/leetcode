/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * https://leetcode.cn/problems/check-permutation-lcci/
 */
var CheckPermutation = function (s1, s2) {
  for (let i = 0; i < s1.length; i++) {
    s2 = s2.replace(s1[i], "");
  }
  return !s2.length;
};
const s1 = "abb";
const s2 = "bba";
console.log(CheckPermutation(s1, s2));

// 输入: s1 = "abc", s2 = "bca"
// 输出: true

// 输入: s1 = "abc", s2 = "bad"
// 输出: false

// aab baa
