/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.cn/problems/sign-of-the-product-of-an-array/
 */
// var arraySign = function (nums) {
//   if (nums.includes(0)) return 0;
//   let res = nums.reduce((pre, cur) => {
//     return pre * cur;
//   }, 1);
//   console.log(res);
//   return res < 0 ? -1 : 1;
// };

var arraySign = function (nums) {
  if (nums.includes(0)) return 0;
  let a = 0;
  nums.forEach((item) => {
    a += !(item > 0);
  });
  return a % 2 ? -1 : 1;
};

const nums =  [-1,1,-1,1,-1]
console.log(arraySign(nums));
