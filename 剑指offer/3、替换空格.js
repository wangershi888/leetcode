/**
 * @param {string} s
 * @return {string}
 * https://leetcode.cn/problems/ti-huan-kong-ge-lcof/
 */
 var replaceSpace = function(s) {
    return s.replace(/\s/g, '%20');
};

let s = 'we asdf asdf f';
console.log(replaceSpace(s))