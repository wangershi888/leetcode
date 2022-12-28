/**
 * @param {string[]} operations
 * @return {number}
 * https://leetcode.cn/problems/final-value-of-variable-after-performing-operations/
 */
var finalValueAfterOperations = function (operations) {
  let num = 0;
  operations.forEach((item) => {
    item.includes("++") ? num++ : num--;
  });
  return num;
};

const operations = ["++X", "++X", "X++"];
console.log(finalValueAfterOperations(operations));
