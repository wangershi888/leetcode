/**
 * @param {number[]} arr
 * @return {number}
 * https://leetcode.cn/problems/max-chunks-to-make-sorted/
 */
var maxChunksToSorted = function (arr) {
  // 1. 前一块的最大值一定是后一块最小值 减 1
  // 2. 长度为 i+1 的子数组，最大值为 i, 那么就是一个区块
  let max = 0;
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i])
    if (i === max) res++
  }
  return res
};


console.log(maxChunksToSorted([4,3,2,1,0]))