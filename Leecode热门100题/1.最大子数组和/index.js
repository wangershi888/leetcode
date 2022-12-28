/**
 * @param {number[]} nums
 * @return {number}
 */
// Kadane算法扫描一次整个数列的所有数值，
// 在每一个扫描点计算以该点数值为结束点的子数列的最大和（正数和）。
// 该子数列由两部分组成：以前一个位置为结束点的最大子数列、该位置的数值。
// 因为该算法用到了“最佳子结构”（以每个位置为终点的最大子数列都是基于其前一位置的最大子数列计算得出, 
// 该算法可看成动态规划的一个例子。
// 状态转移方程：sum[i] = max{sum[i-1]+a[i],a[i]}   
// 其中(sum[i]记录以a[i]为子序列末端的最大序子列连续和)

function  maxSubArray2  ( nums ) {
  if (!nums.length) {
      return;
  };
  // 在每一个扫描点计算以该点数值为结束点的子数列的最大和（正数和）。
  let max_ending_here = nums[0];
  let max_so_far = nums[0];

  for (let i = 1; i < nums.length; i ++ ) {
      // 以每个位置为终点的最大子数列 都是基于其前一位置的最大子数列计算得出,

      max_ending_here = Math.max ( nums[i], max_ending_here + nums[i]);
      max_so_far = Math.max ( max_so_far, max_ending_here);
  };

  return max_so_far;
};



var maxSubArray = function (nums) {
  let numing, numstar, max = nums[0];
  for (let i = 0; i < nums.length; i++) {
      if (numstar > 0) {
          numing = numstar + nums[i];//如果之前的和大于0则当前和,等于之前和加当前值
      }
      else {
          numing = nums[i];//否则当前和,等于当前值
      }
      if (numing > max) {
          max = numing;//如果当前和大于最大和，则更新最大和
      }
      numstar = numing;//该轮循环结束后，将当前和保存为下一轮循环的之前和
  }
  return max
};

// [5.4.-1,7,8]
let a = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

console.log(maxSubArray(a))