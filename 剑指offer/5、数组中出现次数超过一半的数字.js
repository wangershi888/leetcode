/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.cn/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/
 */
// var majorityElement = function (nums) {
//   let count = Math.floor(nums.length / 2)
//   let obj = {}
//   for (let i = 0; i < nums.length; i++) {
//     obj[nums[i]] ? obj[nums[i]] += 1 : obj[nums[i]] = 1
//   }
//   for (let key in obj) {
//     if (obj[key] > count) {
//       return key
//     }
//   }
// };

// 方法二
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if ((nums.lastIndexOf(nums[i]) - nums.indexOf(nums[i])) >= Math.floor(nums.length / 2)) {
      return nums[i]
    } else {
      i = nums.lastIndexOf(nums[i])
    }
  }
}

let nums = [1, 2, 3, 2, 2, 2, 5, 4, 2]
console.log(majorityElement(nums))