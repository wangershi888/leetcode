/**
 * @param {number[]} arr
 * @return {number[]}
 * https://leetcode.cn/problems/rank-transform-of-an-array/
 */
var arrayRankTransform = function (arr) {
  //   let list = new Array(...arr).sort((a, b) => a - b);
  let list = [...new Set(arr)].sort((a, b) => a - b);
  let map = new Map();
  for (let i = 0; i < list.length; i++) {
    map.set(list[i], i + 1);
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = map.get(arr[i]);
  }
  return arr;
};

// let a = [37, 12, 28, 9, 100, 56, 80, 5, 12];
let a = [100, 100, 100];

console.log(arrayRankTransform(a));
