/**
 * https://leetcode-cn.com/problems/nim-game/
 * @param {number} n
 * @return {boolean}
 */
 var canWinNim = function(n) {
  if(n%4) return true
  return false
};

console.log(canWinNim(5))