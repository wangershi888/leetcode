/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 * https://leetcode.cn/problems/merge-strings-alternately
 */
var mergeAlternately = function (word1, word2) {
  let res = "";
  let i = 0;
  while (!(i === word1.length || i === word2.length)) {
    res += word1[i];
    res += word2[i];
    i++;
  }
  if (i < word1.length) {
    res += word1.substring(i, word1.length);
  }
  if (i < word2.length) {
    res += word2.substring(i, word2.length);
  }
  return res;
};

let word1 = "abcd";
let word2 = "pq";

console.log(mergeAlternately(word1, word2));
