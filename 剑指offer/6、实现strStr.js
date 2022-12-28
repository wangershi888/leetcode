/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * https://leetcode.cn/problems/implement-strstr/
 */
var strStr = function (haystack, needle) {
  let target = ''
  if(!needle) return 0
  for (let i = 0; i < haystack.length; i ++) {
    target += haystack[i]
    if (target.endsWith(needle)) {
      return i + 1 - needle.length
    }
  }
  return -1
};

const haystack = "a"
const needle = ""
console.log(strStr(haystack, needle))