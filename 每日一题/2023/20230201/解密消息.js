/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 * https://leetcode.cn/problems/decode-the-message/
 */
var decodeMessage = function (key, message) {
  let encodeMap = new Map();
  let messageKey = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let j = 0;
  let res = "";
  for (let i = 0; i < key.length; i++) {
    if (key[i] !== " " && !encodeMap.get(key[i])) {
      encodeMap.set(key[i], messageKey[j]);
      j++;
    }
  }
  for (let i = 0; i < message.length; i++) {
    res += message[i] !== " " ? encodeMap.get(message[i]) : " ";
  }
  return res;
};

const key = "the quick brown fox jumps over the lazy dog";
const message = "vkbs bs t suepuv";
console.log(decodeMessage(key, message));
