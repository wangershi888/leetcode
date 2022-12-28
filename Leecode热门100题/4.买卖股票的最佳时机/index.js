/**
 * @param {number[]} prices
 * @return {number}
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
 */

// 待优化。。。

// var maxProfit = function (price) {
//   let max = 0;
//   for (let i = price.length; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       // 从前到i，找出最大值
//       if (price[i] > price[j] && max < price[i] - price[j])
//         max = price[i] - price[j];
//     }
//   }

//   return max;
// };

let prices = [1, 2];

var maxProfit = function (prices) {
  // 从后往前遍历，因为如果从前往后的话，无法找出何时卖出股票最贵
  // 找出当前位置相对的后边的最大的元素
  // 求差值
  let maxArr = new Array(prices.length).fill(0)
  let curMax = 0
  let max = 0

  for(let i = prices.length - 1; i > 0; i --) {
    if(curMax < prices[i]) curMax = prices[i] // 最大值重新赋值
    // 给每个位置进行赋值
    maxArr[i - 1] = curMax;
  }
  console.log('asdfasdf', maxArr)
  // 遍历找出最大值
  for(let i = 0; i < prices.length; i ++) {
    let gap = maxArr[i] - prices[i]
    if(max < gap) max = gap
  }
  return max
};

console.log(maxProfit(prices));
