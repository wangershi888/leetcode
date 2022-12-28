/**
 * @param {number[]} nums
 * @return {number[]}
 * https://leetcode.cn/problems/sort-array-by-increasing-frequency/
 */
var frequencySort = function (nums) {
  let obj = {}
  let res = []
  nums.forEach(item => {
    obj[item] = obj[item] ? obj[item] += 1 : 1
  })
  const arr = Object.entries(obj).sort((a, b) => {
    return a[1] === b[1] ? Number(b[0]) - Number(a[0]) : a[1] - b[1]
  })
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i][1]; j++) {
      res.push(Number(arr[i][0]))
    }
  }
  return res
};

let nums = [2,3,1,3,2]
console.log(frequencySort(nums))