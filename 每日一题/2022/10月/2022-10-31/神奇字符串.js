/**
 * @param {number} n
 * @return {number}
 * https://leetcode.cn/problems/magical-string/
 */
var magicalString = function (n) {
  let s = '122'
  let i = 2
  while (s.length <= n) {
    const newS = s[s.length - 1] === '1' ? '2' : '1'
    const rep = s[i] === '1' ? 1 : 2
    const tail = newS.repeat(rep)
    s += tail
    i++
  }
  return s.slice(0, n).split('').filter(item => item === '1').length
};

console.log(magicalString(6))