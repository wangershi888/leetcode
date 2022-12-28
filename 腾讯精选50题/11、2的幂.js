/**
 * https://leetcode-cn.com/problems/power-of-two/
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  while(!(n === 1)) {
    if(parseInt(n) === n) {
      n = n / 2
    }else {
      return false
    }
  }
  return true
};

console.log(isPowerOfTwo(0))
