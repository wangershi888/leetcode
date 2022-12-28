/**
 * https://leetcode-cn.com/problems/base-7/
 * @param {number} num
 * @return {string}
 */
 var convertToBase7 = function(num) {
   if(num < 7 && num > -7) return num.toString()
  let res = []
  while(num) {
    res.push(num %7)
    num = parseInt(num / 7)
  }
  return res.reverse().join('')
};

// let num = 0
let num = -6
console.log(convertToBase7(num))