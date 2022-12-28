/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 * https://leetcode.cn/problems/check-if-two-string-arrays-are-equivalent/
 */
var arrayStringsAreEqual = function (word1, word2) {
  return word1.join('') === word2.join('')
};

let word1 = ['ab', 'c']
let word2 = ['a', 'bc']
console.log(arrayStringsAreEqual(word1, word2))