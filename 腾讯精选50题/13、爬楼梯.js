/**
 * https://leetcode.cn/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n < 0) return 0
  if(n === 2) return 2
  if(n === 1) return 1
  let a = 1
  let b = 2
  let sum = a + b
  for(let i = 3; i < n; i ++) {
    sum = a + b
    a = b
    b = sum
  }
  return sum
};

console.log(climbStairs(7))
