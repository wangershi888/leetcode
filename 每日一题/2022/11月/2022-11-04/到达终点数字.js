/**
 * @param {number} target
 * @return {number}
 * https://leetcode.cn/problems/reach-a-number/
 */
var reachNumber = function (target) {
  let sum = 0;
  let times = 0;
  target = Math.abs(target);
  while (sum < target || (target + sum) % 2 !== 0) {
    times++;
    sum += times;
  }
  return times;
};
