/**
 * https://leetcode-cn.com/problems/binary-gap/
 * @param {number[][]} grid
 * @return {number}
 */
 var binaryGap = function(n) {
  let str = n.toString(2)
  console.log(str)
  let max = 0;
  let pre = 0;
  for(let i = 1; i < str.length; i ++) {
    if(str[i] === '1') {
      max = Math.max(max, i - pre)
      pre = i
    }
  }
  return max
};
