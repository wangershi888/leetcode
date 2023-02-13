// “ababac” —— “ababa”
// “aaabbbcceeff” —— “aaabbb”

function delMinStr(str) {
  let numMap = {};
  for (let i = 0; i < str.length; i++) {
    if (numMap[str[i]]) {
      numMap[str[i]]++;
    } else {
      numMap[str[i]] = 1;
    }
  }
  let min = 0;
  Object.keys(numMap).forEach((item) => {
    min = min === 0 ? numMap[item] : Math.min(min, numMap[item]);
  });
  for (let i in numMap) {
    if (numMap[i] === min) {
      str = str.replace(i, "");
    }
  }
  return str;
}

const str = "aaabbbcceeff";
console.log(delMinStr(str));
