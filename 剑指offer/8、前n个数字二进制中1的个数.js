/**
 * @param {number} n
 * @return {number[]}
 * https://leetcode.cn/problems/w3tCBm/?favorite=e8X3pBZi
 */
var countBits = function (n) {
  let res = []
  for (let i = 0; i <= n; i++) {
    res.push(i.toString(2).split('').reduce((pre, cur) => { return Number(cur) + Number(pre) }, 0))
  }
  return res
};

console.log(countBits(5))