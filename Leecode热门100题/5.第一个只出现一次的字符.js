/**
 * @param {string} s
 * @return {character}
 * https://leetcode.cn/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return s[i];
  }
  return " ";
};

let a = "abaccdeff";
console.log(firstUniqChar(a));
