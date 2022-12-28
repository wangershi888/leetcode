/**
 * https://leetcode-cn.com/problems/richest-customer-wealth/
 * @param {number[][]} accounts
 * @return {number}
 * 
 */
//  给你一个 m x n 的整数网格 accounts ，其中 accounts[i][j] 是第 i​​​​​​​​​​​​ 位客户在第 j 家银行托管的资产数量。返回最富有客户所拥有的 资产总量 。

//  客户的 资产总量 就是他们在各家银行托管的资产数量之和。最富有客户就是 资产总量 最大的客户。
 
//  来源：力扣（LeetCode）
//  链接：https://leetcode-cn.com/problems/richest-customer-wealth
//  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 法一：

var maximumWealth = function(accounts) {
  return Math.max(...accounts.map(i => i.reduce((a,j) => a+j), 0));
};


// 法二：
var maximumWealth = function(accounts) {
  let max = 0;
  for(let i = 0; i < accounts.length; i ++) {
    var curAccounts = sum(accounts[i])
    if(max < curAccounts) {
      max = curAccounts;
    }
  }
  return max;
};

function sum (arr) {
  let cur = 0;
  arr.forEach(item => {
    cur += item;
  })
  return cur;
}

let arr = [[1,5],[7,3],[3,5]];
console.log(maximumWealth(arr));