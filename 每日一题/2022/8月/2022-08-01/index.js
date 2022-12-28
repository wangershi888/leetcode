/**
 * @param {number} n
 * @return {string}
 * https://leetcode.cn/problems/generate-a-string-with-characters-that-have-odd-counts/
 */
 var generateTheString = function (n) {
    //   let strList = ["a", "b", "z"];
    //   let str = "";
    //   for (let i = 0; i < n; i++) {
    //     str += strList[0];
    //   }
    //   if (!(n % 2)) {
    //     str = str.slice(0, str.length -1 ) + strList[1]
    //   }
    //   return str;
    return ("a".repeat(n - 1)) + ((n % 2) ? "a" : "b");
  };
  
  let n = 4;
  console.log(generateTheString(n));
  