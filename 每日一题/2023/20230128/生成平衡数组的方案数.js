/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.cn/problems/ways-to-make-a-fair-array/
 */
var waysToMakeFair = function (nums) {
  let sum = 0;
  let oddSum = 0; // 奇数总和
  let evenSum = 0; // 偶数综合
  let perfixOddSum = 0; // 当前位置前边的奇数和
  let perfixEvenSum = 0; // 当前位置前边的偶数和
  for (let i = 0; i < nums.length; i++) {
    i % 2 ? (oddSum += nums[i]) : (evenSum += nums[i]);
  }

  // 最后对比奇偶和的关系
  for (let i = 0; i < nums.length; i++) {
    let o = 0;
    let e = 0;
    // 记录已经遍历的和
    i % 2 ? (perfixOddSum += nums[i]) : (perfixEvenSum += nums[i]);
    // 删掉当前位置后进行比较
    if (i % 2) {
      // 如果当前为奇数，那么需要对当前数前边的奇数求和，后边的偶数求和
      o = perfixOddSum + evenSum - perfixEvenSum;
    } else {
      // 如果当前为偶数，那么需要对当前数前边的偶数求和，后边的奇数求和
      e = perfixEvenSum + oddSum - perfixOddSum;
    }
    o === e && sum++;
  }
  return sum;
};

const nums = [1, 1, 1];
console.log(waysToMakeFair(nums));
