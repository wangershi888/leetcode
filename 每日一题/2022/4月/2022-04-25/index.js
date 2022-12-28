var Solution = /** @class */ (function () {
    function Solution(nums) {
        console.log(111);
        this.nums = nums;
    }
    Solution.prototype.pick = function (target) {
        console.log('asdf', target);
        var count = 0;
        var result = -1;
        for (var i = 0; i < this.nums.length; i++) {
            if (this.nums[i] === target) {
                count++;
                if (Math.random() < 1 / count) {
                    result = i;
                }
            }
        }
        console.log('this is result', result);
        return result;
    };
    return Solution;
}());
var a = new Solution([1, 2, 3, 4, 4, 4]);
console.log('1', a.pick(3));
