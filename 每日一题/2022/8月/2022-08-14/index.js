/**
 * @param {string} s
 * @return {number}
 * https://leetcode.cn/problems/maximum-score-after-splitting-a-string/
 */
var maxScore = function (s) {
  let sum = 0;
  let left = '';
  let right = '';
  for (let i = 1; i < s.length; i++) {
    left = s.substring(0, i)
    right = s.substring(i, s.length)
    console.log('sum', findLeftZero(), findRightOne(), sum)
    sum = Math.max(findLeftZero() + findRightOne(), sum)
  }
  // 找出左边0的个数
  function findLeftZero() {
    console.log('left', left)
    let sum = 0;
    for (let i = 0; i < left.length; i++) {
      sum += left[i] === '0' ? 1 : 0
    }
    return sum;
  }
  // 找出右边1的个数
  function findRightOne() {
    console.log('right', right)
    let sum = 0;
    for (let i = 0; i < right.length; i++) {
      sum += right[i] === '1' ? 1 : 0
    }
    return sum;
  }
  return sum;
};


let s = '00'
console.log(maxScore(s))