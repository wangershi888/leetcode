/**
 * n个人围成一圈，传花，每传n次，花在谁身上，谁出局，看谁赢
 * */

// function a(arr, n) {
//   let i = 0;

//   while (!(arr.length === 1)) {
//     if (arr.length < n) {
//       return arr[n - arr.length - 1];
//     }
//     if (i % n === 2) {
//       arr.splice(i, 3);
//       i = 0;
//     } else {
//       i++;
//     }
//   }
//   return a[0];
// }

// 使用循环列表思路：
// 循环链表
function chuanhua(arr, n) {
  let a = [...arr];
}

let arr = ["a", "b", "c", "d", "e", "f"];
let n = 3;

console.log(a(arr, n));
