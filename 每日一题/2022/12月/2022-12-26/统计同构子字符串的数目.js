/**
 * @param {string} s
 * @return {number}
 * https://leetcode.cn/problems/count-number-of-homogenous-substrings/
 */
var countHomogenous = function (s) {
  let res = 0;
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++; // 如果等于上一位，在当前count的基础上继续计数
    } else {
      count = 1;
    }
    res += count;
  }
  return res % (10 ** 9 + 7);
};

const s = "zzzzz";
console.log(countHomogenous(s));
