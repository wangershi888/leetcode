/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 * https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/?favorite=xb9nqhhg
 */
var reverseLeftWords = function (s, n) {
  let a = s.substring(0, n)
  return s.replace(a, '') + a
};

const s = 'lrloseumgh'
const n = 6
console.log(reverseLeftWords(s, n))