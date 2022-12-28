/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 * https://leetcode.cn/problems/count-the-number-of-consistent-strings/
 */
var countConsistentStrings = function (allowed, words) {
  let count = 0
  for (let i = 0; i < words.length; i++) {
    words[i].split('').every(s => allowed.includes(s)) &&  count ++;
  }
  return count
};

const allowed = 'ab'
const words = ["ad", "bd", "aaab", "baa", "badab"]

console.log(countConsistentStrings(allowed, words))