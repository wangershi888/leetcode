/**
 * https://leetcode.cn/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  s = s.toString();
  let maxPalindromeStr = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      maxPalindromeStr = isPalindrome(s.substr(i, j + 1)) && s.substr(i, j + 1).length > maxPalindromeStr.length ? s.substr(i, j + 1) : maxPalindromeStr;
    }
  }

  function isPalindrome(s) {
    s = s.toString();
    for (let i = 0, j = s.length - 1; i < s.length; i++, j--) {
      if (s[i] !== s[j]) {
        return false;
      }
    }
    return true;
  }
  return maxPalindromeStr;
};