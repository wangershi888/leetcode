/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * https://leetcode.cn/problems/reverse-bits/
 */
var reverseBits = function (n) {
  let res = 0;
  let s = n.toString();
  let index = n.length
};

const n = 11111111111111111111111111111101;
console.log(reverseBits(n));
