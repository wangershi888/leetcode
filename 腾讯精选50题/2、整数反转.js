/**
 * https://leetcode-cn.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  let result = 0
  let tar = Math.abs(x)
  while(tar) {
    result = result * 10 + tar % 10
    tar = parseInt(tar / 10)
  }
  if(result < Math.pow(-2, 31) || result > (Math.pow(2, 31) - 1)) return 0
  return x < 0 ? result * -1 : result
};


let x = 1534236469
console.log('asdfasdf', reverse(x))