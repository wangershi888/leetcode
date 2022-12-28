/**
 * @param {string} command
 * @return {string}
 * https://leetcode.cn/problems/goal-parser-interpretation/
 */
var interpret = function (command) {
  while (command.includes('(')) {
    console.log(command)
    command = command.replace('()', 'o').replace('(al)', 'al')
  }
  return command
};


// G -> G
// () -> o
// (al) -> al
const command = "G()(al)"
console.log(interpret(command))