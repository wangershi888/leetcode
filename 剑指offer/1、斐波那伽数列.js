/**
 * https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof/
 * @param {number} n
 * @return {number}
 */


var fib = function(n) {
  let arr = [0, 1]
  for(let i = 2; i <= n; i ++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % (1e9 + 7)
  }
  return arr[n]
};
console.log(fib(45))
