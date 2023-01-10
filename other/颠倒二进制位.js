/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * https://leetcode.cn/problems/reverse-bits/
 */
var reverseBits = function (n) {
  var bin = [];
  while (n) {
    bin.unshift(n % 2);
    n = parseInt(n / 2);
  }
  while (bin.length < 32) bin.unshift(0);

  var re = 0;
  for (var i = 0; i < 32; i++) {
    re += bin[i] * Math.pow(2, i);
  }
  return re;
};

const n = 11111111111111111111111111111101;
console.log(reverseBits(n));
