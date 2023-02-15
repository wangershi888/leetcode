// 比如这个函数输入一个1，那么要求函数返回A
const A = [1, 2, 3];
const B = [4, 5, 6];
const C = [7, 8, 9];

function test(num) {
  let res = [];
  let arrayNameMap = {
    0: "A",
    1: "B",
    2: "C",
  };
  res.push(A);
  res.push(B);
  res.push(C);
  for (let i = 0; i < res.length; i++) {
    if (res[i].includes(num)) {
      return arrayNameMap[i];
    }
  }
  return null;
}
console.log(test(4));
