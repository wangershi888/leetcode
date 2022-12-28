/**
 * @param {number} k
 * @return {number}
 * https://leetcode.cn/problems/get-kth-magic-number-lcci/
 */
var getKthMagicNumber = function (k) {
  let arr = new Array(k + 1).fill(0);
  let i = 2, p3 = 1, p5 = 1, p7 = 1;
  arr[1] = 1;
  while (i <= k) {
    const t3 = arr[p3] * 3;
    const t5 = arr[p5] * 5;
    const t7 = arr[p7] * 7;
    arr[i] = Math.min(t3, t5, t7);

    if (arr[i] === t3) {
      p3++;
    }
    if (arr[i] === t5) {
      p5++;
    }
    if (arr[i] === t7) {
      p7++;
    }
    i++
  }
  console.log(arr)
  return arr[k];
};


const k = 5
console.log(getKthMagicNumber(k))