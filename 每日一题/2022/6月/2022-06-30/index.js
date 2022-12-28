function zhishu(n) {
  let a = []
  for(let i = 1; i <= n; i ++) {
    isZhishu(i) ? a.splice(i, 0, i) : a.push(i)
  }
  return a;
}

function isZhishu(n) {
  for(let i = 2; i <n; i ++) {
    if(n % i === 0) {
      return false
    }
  }
  return true
}
let n = 5;
console.log(zhishu(n))