/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 * https://leetcode.cn/problems/maximum-repeating-substring/
 */
var maxRepeating = function (sequence, word) {
  let word1 = word;
  let time = 0;
  while (sequence.includes(word1)) {
    time += 1;
    word1 += word;
  }
  return time;
};

const sequence = "ababc";
const word = "ba";
console.log(maxRepeating(sequence, word));
