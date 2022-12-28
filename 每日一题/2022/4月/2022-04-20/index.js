/**
 * https://leetcode-cn.com/problems/goat-latin/
 * @param {string} sentence
 * @return {string}
 */
 var toGoatLatin = function(sentence) {
  let vowelList = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let res = []
  let suffix = 'ma'
  sentence.split(' ').forEach((item) => {
    suffix += 'a'
    res.push(vowelList.includes(item.slice(0, 1)) ? `${item}${suffix}` : `${item.slice(1)}${item.slice(0, 1)}${suffix}`)
  })
  return res.join(' ')
};
