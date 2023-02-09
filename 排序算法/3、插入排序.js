// 将当前的数插入到已经排序好的序列里边

function insertSort(arr) {
  // 从1开始，第一位不需要排序
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    let temp = arr[i];
    for (; j > 0; j--) {
      if (arr[j - 1] <= temp) {
        // 不用排序，就是当前最大的
        break;
      }
      arr[j] = arr[j - 1];
    }
    arr[j] = temp;
  }
  return arr;
}

let arr = [3, 2, 5, 1, 6];
console.log(insertSort(arr));
