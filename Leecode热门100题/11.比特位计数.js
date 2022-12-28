/**
 * @param {number} n
 * @return {number[]}
 * https://leetcode.cn/problems/counting-bits/
 */
var countBits = function (n) {
  let res = []
  for (let i = 0; i <= n; i++) {
    res.push(getCarryNum(i));
  }
  function getCarryNum(num) {
    let sum = 0;
    while (num) {
      sum += num % 2
      num = parseInt(num / 2)
    }
    return sum
  }
  return res
};

console.log(countBits(5))