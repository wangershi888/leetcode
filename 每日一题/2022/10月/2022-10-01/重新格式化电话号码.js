/**
 * @param {string} number
 * @return {string}
 * https://leetcode.cn/problems/reformat-phone-number/
 */
var reformatNumber = function (number) {
  let numStr = number.replace(/ /g, '').replace(/-/g, '').split('')
  let length = numStr.length
  let font = []
  let end = []
  for (let i = 0; i < length; i += 3) {
    end.push(numStr.slice(i, i + 3))
  }
  if (length % 3 === 1) {
    font = end.splice(0, end.length - 2)
    end = ([].concat(...end[end.length - 2], ...end[end.length - 1]))
    font.push(end.splice(0, 2))
    font.push(end)
    return font.join('-').replace(/,/g, '')
  }
  return [...end].join('-').replace(/,/g, '')
};

let number = "1-23-45 63311123"

console.log(reformatNumber(number))



// 其他解法
// function reformatNumber(number: string): string {
//   //@ts-ignore
//   const str = number.replaceAll(/\-|\s/g, '')
//   const arr = Array(Math.ceil(str.length / 3)).fill(0).map((_, i) => str.slice(i * 3, i * 3 + 3))

//   if (arr[arr.length - 1].length === 1) {
//     arr[arr.length - 1] = arr[arr.length - 2].slice(-1) + arr[arr.length - 1]
//     arr[arr.length - 2] = arr[arr.length - 2].slice(0, 2)
//   }

//   // console.log(arr)
//   return arr.join('-')
// };