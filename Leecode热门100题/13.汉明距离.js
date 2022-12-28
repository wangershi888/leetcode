/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 * https://leetcode.cn/problems/hamming-distance/?favorite=2cktkvj
 */
var hammingDistance = function (x, y) {
  // 找到大的
  let max = Math.max(x, y).toString(2);
  let min = Math.min(x, y).toString(2);
  let res = 0;
  // 位数补齐
  while (min.length !== max.length) {
    min = "0" + min;
  }
  for (let i = max.length - 1; i >= 0; i--) {
    max[i] !== min[i] && res++;
  }
  return res;
};

const x = 1;
const y = 4;
console.log(hammingDistance(x, y));
