/**
 * @param {number[]} arr
 * @return {number}
 * https://leetcode.cn/problems/sum-of-subarray-minimums/
 */
var sumSubarrayMins = function (arr) {
  let len = arr.length
  let res = 0
  for (let i = 0; i < len; i++) {
    let min = arr[i]
    for (let j = i; j < len; j++) {
      min = Math.min(arr[j], min)
      res += min
    }
  }
  return res % (10 ** 9 + 7)
};

// 法二
// var sumSubarrayMins = function (arr) {
//   let res = arr.reduce((a, c) => {
//     return a + c
//   }, 0)
//   console.log(res)
//   let resStack = []
//   let j = 0;
//   for (let i = 1; i <= arr.length; i++) {
//     resStack.push(Math.min.apply(null, arr.slice(j, i)))
//   }
//   // 遍历单调栈
//   for (let i = 0; i < resStack.length; i++) {
//     res += resStack[i] * i
//   }
//   return res
// }


const arr = [3, 1, 2, 4]

console.log(sumSubarrayMins(arr))