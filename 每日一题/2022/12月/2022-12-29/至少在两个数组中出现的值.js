/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 * https://leetcode.cn/problems/two-out-of-three/
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  let res = Array.from(new Set([...nums1, ...nums2, ...nums3]));
  let i = 0;
  while (res.length && i < res.length) {
    if (
      (nums1.includes(res[i]) &&
        (nums2.includes(res[i]) || nums3.includes(res[i]))) ||
      (nums2.includes(res[i]) &&
        (nums1.includes(res[i]) || nums3.includes(res[i]))) ||
      (nums3.includes(res[i]) &&
        (nums2.includes(res[i]) || nums1.includes(res[i])))
    ) {
      // 说明符合条件
      i++;
    } else {
      // 删掉当前元素
      res.splice(i, 1);
    }
  }
  return res;
};

let nums1 = [1, 2, 2];
let nums2 = [4, 3, 3];
let nums3 = [5];
console.log(twoOutOfThree(nums1, nums2, nums3));
