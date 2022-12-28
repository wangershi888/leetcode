class RandomizedSet {
  nums: number[]
  val2idx: Map<number, number>

  constructor() {
      this.nums = []
      this.val2idx = new Map<number, number>()
  }

  insert(val: number): boolean {
      if(!this.val2idx.has(val)){
          this.nums.push(val)
          this.val2idx.set(val, this.nums.length-1)
          return true
      }
      return false
  }

  remove(val: number): boolean {
      if(this.val2idx.has(val)){
          let idx = this.val2idx.get(val)
          //move last to idx
          this.nums[idx] = this.nums[this.nums.length-1]
          this.val2idx.set(this.nums[this.nums.length-1], idx)
          //delete
          this.nums.pop()
          this.val2idx.delete(val)
          return true
      }
      return false
  }

  getRandom(): number {
     let r = Math.floor(Math.random() * this.nums.length)
     return this.nums[r]
  }
}

/**
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/
