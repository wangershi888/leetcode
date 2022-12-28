/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 * https://leetcode.cn/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/
 */
var nearestValidPoint = function (x, y, points) {
  let min = 0; // 最小的点为自身
  let minIndex = -1;
  let flag = false;
  for (let i = 0; i < points.length; i++) {
    // 当前的点有效，且小于最小点
    if (points[i][0] === x || points[i][1] === y) {
      let instance = Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y);
      if (!min && !flag) {
        flag = true;
        min = instance;
        minIndex = i;
      }
      if (min > instance) {
        min = instance;
        minIndex = i;
      }
    }
  }
  return minIndex;
};

let points = [[1, 1], [1,1]];
let x = 1;
let y = 1;
console.log(nearestValidPoint(x, y, points));
