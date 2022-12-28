/**
 * @param {number[]} nums
 * @return {number[]}
 * https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
 */
var exchange = function (nums) {
  // for (let i = 0; i < nums.length; i++) {
  //   console.log(nums[i]);
  //   if (nums[i] % 2) {
  //     // 是奇数
  //     nums.unshift(...nums.splice(i, 1));
  //   }
  // }
  for(let i = 0, j = 1; i < nums.length; i ++) {
    if(nums[i] % 2) {
      // 是奇数，和下一位进行交换
    }
  }
  return nums;
};

const nums = [1, 2, 3, 4]; //[1,3,2,4]
console.log(exchange(nums));
