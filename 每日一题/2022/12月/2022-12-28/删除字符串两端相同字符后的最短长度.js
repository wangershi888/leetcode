/**
 * @param {string} s
 * @return {number}
 * https://leetcode.cn/problems/minimum-length-of-string-after-deleting-similar-ends/
 */
var minimumLength = function (s) {
  let i = 0;
  let j = s.length - 1;
  while (s[i] === s[j] && i < j) {
    if (j - i === 1) {
      return 0;
    }
    if (s[i + 1] == s[i]) {
      i++;
    } else if (s[j - 1] == s[j]) {
      j--;
    } else {
      i++;
      j--;
    }
  }
  return j - i + 1; // 从0开始
};

const s = "cabaabac";
console.log(minimumLength(s));
