/**
 * @param {string} s
 * @return {string}
 * https://leetcode.cn/problems/reformat-the-string/
 */
var reformat = function (s) {
  let numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let sNumList = [];
  let sStrList = [];
  let firstLine = null;
  let secLine = null;
  let newS = "";
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (numList.includes(s[i])) {
      sNumList.push(s[i]);
    } else {
      sStrList.push(s[i]);
    }
  }
  firstLine = sNumList.length > sStrList.length ? sNumList : sStrList;
  secLine = sNumList.length > sStrList.length ? sStrList : sNumList;
  for (let i = 0; i < firstLine.length; i++) {
    newS += firstLine[i];
    if (secLine[j] !== undefined) {
      newS += secLine[j];
    } else {
      if (i === firstLine.length - 1) {
        continue;
      }
      return "";
    }
    j++;
  }
  return newS;
};

const s = "covid2019";
console.log(reformat(s));
