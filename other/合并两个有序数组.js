/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * https://leetcode.cn/problems/merge-sorted-array/
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < nums2.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      if (nums2[i] > nums1[j - m]) {
        nums1.splice(nums1.length - m, 0, nums2[i])
        break;
      }
      if (nums2[i] < nums1[0]) {
        nums1.unshift(nums2[i])
        break;
      }
      if (nums1[j] > nums2[i]) {
        nums1.splice(j - 1, 0, nums2[i])
        break;
      }
      nums1.length--
      m--
    }
  }
  return nums1;
};

let nums1 = [0]
let m = 0
let nums2 = [1]
let n = 1

console.log(merge(nums1, m, nums2, n))