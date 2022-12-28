/**
 * @param {number} n - a positive integer
 * @return {number}
 * https://leetcode.cn/problems/number-of-1-bits/
 */
var hammingWeight = function (n) {
  let res = 0
  for (let i = 0; i < n.length; i++) {
    n[i] === '1' && res++
  }
  return res
};

let n = '00000000000000000000000000001011'
console.log(hammingWeight(n))