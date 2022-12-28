/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.cn/problems/partition-array-into-disjoint-intervals/
 */
var partitionDisjoint = function (nums) {
  // 左边最大的比右边最小的小就行
  let i = 0;
  let leftMax = nums[i];
  while (i < nums.length) {
    leftMax = Math.max(nums[i], leftMax);
    // 判断是不是右边最小的，如果是返回i，如果不是i ++
    if (isRightMin()) {
      return i + 1;
    } else {
      i++;
    }
  }
  function isRightMin() {
    // 判断是不是右边最小的
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < leftMax) return false;
    }
    return true;
  }
  return i + 1;
};

console.log("res", partitionDisjoint([5,0,3,8,6]));
