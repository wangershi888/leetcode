function selectSort(a) {
  for (let i = 0; i < a.length; i++) {
    var index = i; // 当前最小值的下标
    for (let j = i + 1; j < a.length; j++) {
      if (a[index] > a[j]) {
        index = j; // 拿到最小值的下标
      }
    }
    if (index !== i) {
      a[i] = a[index] + a[i];
      a[index] = a[i] - a[index];
      a[i] = a[i] - a[index];
    }
  }
  console.log(arr);
}

let arr = [3, 2, 4, 1, 5, 0];
console.log(selectSort(arr));
