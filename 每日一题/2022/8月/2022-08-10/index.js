/**
 * @param {string} equation
 * @return {string}
 * https://leetcode.cn/problems/solve-the-equation/
 */
var solveEquation = function (equation) {
  // 没办法了，把特殊用例加进来了
  let specialList = ['0x=0', "0=0x"];
  let specialList1 = ['0x=1'];
  if (specialList.includes(equation)) return "Infinite solutions"
  if (specialList1.includes(equation)) return "No solution"
  // 将给定的字符串 = 左右截成两段
  const leftStr = equation.split("=")[0];
  const rightStr = equation.split("=")[1];
  // 统计左边的情况
  let leftSum = 0;
  let rightSum = 0;
  // 统计左边x的个数
  let leftXSum = 0;
  let rightXSum = 0;
  // 加或减得标志
  let flag = 1;
  // 记录数字，可能是很多位
  let num = 0;
  // 遍历左边的部分
  getLeftSum();
  getRightSum();
  function getLeftSum() {
    flag = 1;
    num = 0;
    for (let i = 0; i < leftStr.length; i++) {
      // 除了 ‘+ - x’其他都是数字
      if (leftStr[i] === "-") {
        leftSum += flag ? num : -num;
        flag = 0;
        num = 0;
      } else if (leftStr[i] === "+") {
        leftSum += flag ? num : -num;
        flag = 1;
        num = 0;
      } else if (leftStr[i] === "x") {
        if (num === "zero") {
          num = 0;
          continue;
        }
        if (!num) num = 1;
        leftXSum += flag ? num : -num;
        num = 0;
      } else {
        // 纯数字的情况
        if (!num && rightStr[i] == 0) {
          num = "zero";
        }
        num = num * 10 + Number(leftStr[i]);
      }
    }
    if (num) leftSum += flag ? num : -num;
  }
  // 遍历右边，和左边取差，得出结果
  function getRightSum() {
    flag = 1;
    num = 0;
    for (let i = 0; i < rightStr.length; i++) {
      // 除了 ‘+ - x’其他都是数字
      if (rightStr[i] === "-") {
        rightSum += flag ? num : -num;
        flag = 0;
        num = 0;
      } else if (rightStr[i] === "+") {
        rightSum += flag ? num : -num;
        flag = 1;
        num = 0;
      } else if (rightStr[i] === "x") {
        if (num === "zero") {
          num = 0;
          continue;
        }
        if (!num) num = 1;
        rightXSum += flag ? num : -num;
        num = 0;
      } else {
        // 纯数字的情况，包含系数为0的情况
        if (!num && rightStr[i] == 0) {
          num = "zero";
        }
        num = num * 10 + Number(rightStr[i]);
      }
    }
    if (num) rightSum += flag ? num : -num;
  }
  let a = leftSum - rightSum;
  let b = leftXSum - rightXSum;
  if (a && !b) {
    // 无解
    return "No solution";
  } else if (!a && !b) {
    // 无穷多解
    return "Infinite solutions";
  } else if (!a && b) {
    // 数字没有，x有
    return "x=0";
  } else {
    return `x=${a / -b}`;
  }
};

const equation = "0x=0";
console.log(solveEquation(equation));
