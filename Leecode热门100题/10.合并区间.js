/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * https://leetcode.cn/problems/merge-intervals/
 */
var merge = function (intervals) {
  let res = [];
  for (let i = 0; i < intervals.length; i++) {
    if (!res.length) res.push(intervals[0]);
    for (let j = 0; j < res.length; j++) {
      if (res[j][0] < intervals[i][0] && res[j][1] >= intervals[i][0]) {
        // 替换右边界
        res[j][1] = intervals[i][1];
      } else if (res[j][0] > intervals[i][0] && res[j][0] <= intervals[i][1]) {
        // 替换左边界
        res[j][0] = intervals[i][0];
      } else {
        res.push(intervals[i]);
        break;
      }
    }
  }
  res.splice(0, 1);
  return res;
};

let intervals = [
  [1, 4],
  // [4, 5],
  // [5, 8],
  // [5, 8]
  [1, 5]
];
console.log(merge(intervals));
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
