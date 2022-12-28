/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 * https://leetcode.cn/problems/count-items-matching-a-rule/
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const keyMap = {
    "type": 0,
    "color": 1,
    "name": 2
  }
  return items.filter(item => {
    return item[keyMap[ruleKey]] === ruleValue
  }).length
};

let items = [["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]]
let ruleKey = "type"
let ruleValue = "phone"
console.log(countMatches(items, ruleKey, ruleValue))