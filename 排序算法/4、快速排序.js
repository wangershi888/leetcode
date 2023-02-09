/**
 * 也叫递归排序
 * 分为三步：
 * 1、数组中选择一个点作为基准点
 * 2、比基准点小的，放到左边，比基准点大的放到右边
 * 3、利用递归将所有数据执行上述操作
 * */
function quickSort(arr) {
  // 跳出递归条件
  if (arr.length < 2) {
    return arr;
  }
  let left = [];
  let right = [];
  // 获取基准值
  let pivotIndex = Math.floor(arr.length / 2);
  // 将基准值从数组中取出来
  let pivotItem = arr.splice(pivotIndex, 1)[0];
  // 循环排序
  for (let i = 0; i < arr.length; i++) {
    if (pivotItem < arr[i]) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  // 递归调用
  return [...quickSort(left), pivotItem, ...quickSort(right)];
}

let arr = [3, 2, 5, 1, 6, 32, 8];
console.log(quickSort(arr));
