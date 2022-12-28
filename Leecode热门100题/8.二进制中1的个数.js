/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let sum = 0;
  let arr = n.toString(2).split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "1") sum++;
  }
  return sum;
};

let sum = 00000000000000000000000000001011;
console.log(hammingWeight(sum));
