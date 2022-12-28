/**
 * @param {string} s
 * @return {string}
 * https://leetcode.cn/problems/longest-palindromic-substring/?favorite=ex0k24j
 */
var longestPalindrome = function (s) {
  // 动态规划类型问题
  // 1、初始化状态
  // 2、构建状态容器
  // 3、状态转移方程
  let len = s.length;
  let dp = new Array(len).fill(0).map(() => new Array(len).fill(false));
  let max = 1; start = 0

  for (let j = 1; j < len; j++) {
    for (let i = 0; i < len - 1 && i < j; i++) {
      // 判断当前是否相等
      if (s.charAt(i) !== s.charAt(j)) {
        // 不相等
        dp[i][j] = false
      } else {
        if (j - i < 3) {
          // 说明中间已经没有了
          dp[i][j] = true
        } else {
          // 中间还有进行状态转移
          dp[i][j] = dp[i + 1][j - 1]
        }
      }
      // 当前是回文且 j > i
      if (dp[i][j] && j - i + 1 > max) {
        // 当前长度大于max
        max = j - i + 1
        start = i
      }
    }
  }
  return s.substring(start, start + max)
};

const s = "babad"
console.log(longestPalindrome(s))