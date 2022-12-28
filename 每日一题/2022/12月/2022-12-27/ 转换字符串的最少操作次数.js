/**
 * @param {string} s
 * @return {number}
 * https://leetcode.cn/problems/minimum-moves-to-convert-string/
 */
var minimumMoves = function (s) {
  if (!s.includes("X")) return 0;
  // 遍历，找出包含O最多的字符串
  let t = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "X") {
      i += 2; // 因为每次只能改3个，所以当前X后边的两个必然会被改为O
      t++;
    }
  }
  return t;
};

const s = "OOOO";
console.log(minimumMoves(s));
