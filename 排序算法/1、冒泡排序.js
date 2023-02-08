function bubleSort(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        a[j] = a[i] + a[j];
        a[i] = a[j] - a[i];
        a[j] = a[j] - a[i];
      }
    }
  }
  console.log(arr);
}

let arr = [3, 2, 4, 1, 5, 0];
console.log(bubleSort(arr));
