/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * https://leetcode.cn/problems/partition-to-k-equal-sum-subsets/
 */
var canPartitionKSubsets = function (nums, k) {
  let sum = nums.reduce((i, j) => i + j, 0)
  // console.log(sum)
  if (sum % k) return false
  // 这里进行子集拆分
  memo.clear();
  let target = Math.floor(sum / k);
  return backtrack(k, 0, nums, 0, 0, target);
};

let memo = new Map();

/**
 * @param {number} k 第 k 个桶
 * @param {number} bucket 第 k 个桶装的数字和
 * @param {number[]} nums 可选数字的数组
 * @param {number} start 可选数字起始索引
 * @param {number} used 已经使用过的数字
 * @param {number} target 桶要装的目标和
 * @returns {boolean} 是否能划分
 */
function backtrack(k, bucket, nums, start, used, target) {
  if (k === 0) {
    return true; // 所有的桶都满了 用完了
  }

  if (bucket === target) {
    // 当前桶达成目标
    // 进入下一个桶的穷举
    let r = backtrack(k - 1, 0, nums, 0, used, target);
    // 缓存结果
    memo.set(used, r);
    return r;
  }

  if (memo.has(used)) {
    // 减少冗余计算
    return memo.get(used);
  }

  // 站在桶的角度来选数字
  for (let i = start; i < nums.length; i++) {
    // 剪枝
    // 已经使用过了
    if ((used >> i) & 0x1) continue;
    // 超出目标值
    if (bucket + nums[i] > target) continue;

    used |= 1 << i; // 使用标记
    if (backtrack(k, bucket + nums[i], nums, i + 1, used, target)) {
      return true;
    }
    used ^= 1 << i; // 取消标记
  }

  return false;
}




let nums = [2, 2, 2, 2, 3, 4, 5]
let k = 4

console.log(canPartitionKSubsets(nums, k))