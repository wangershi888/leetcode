/**
 * https://leetcode-cn.com/problems/string-to-integer-atoi/
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let res = ''
    let map = ['-', '+','1','2','3','4','5','6','7','8','9','0']
    for(let i = 0; i < s.length; i ++) {
      if(map.includes(s[i])) {
        res += s[i]
      }
    }
    return res
};

let a = '-123'

console.log(myAtoi(a))