// class Solution {
//   nums: number[]
//   constructor(nums: number[]) {
//     console.log(111)
//     this.nums = nums
//   }

//   pick(target: number): number {
//     console.log('asdf', target);
//     let count = 0
//     let result = -1
//     for (let i = 0; i < this.nums.length; i++) {
//       if (this.nums[i] === target) {
//         count++
//         if (Math.random() < 1 / count) {
//           result = i
//         }
//       }
//     }
//     console.log('this is result', result);
//     return result
//   }
// }


// var a = new Solution([1, 2, 3, 4, 4, 4]);
// console.log('1', a.pick(3));

class Solution {
  nums: number[]
  constructor(nums: number[]) {
    this.obj = nums;
  }

  pick(target: number): number {
    let obj = {}
    for(let i = 0; i < this.nums.length; i ++) {
      if(!obj[i]) obj[i] = []
      obj[i].push()
    }
  }
}