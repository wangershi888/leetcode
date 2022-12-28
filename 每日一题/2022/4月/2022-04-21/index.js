var lengthLongestPath = function(input) {
  const stack = new Stack();
  let max = 0;
  const arr = input.split('\n'), list = [];
  // 将输入转换成 [层级，文件夹名/文件名]
  for(const item of arr) {
      let count = 0, temp = item;
      while(temp.startsWith('\t')) {
          temp = temp.slice(1);
          count++;
      }
      list.push([count, temp]);
  }
//    console.log(list);
  // stack 栈中存储的数据，从栈顶到栈底按照层级从大到小存储，遇到小的则出栈，然后计算最长路径，再将当前层级 push 入栈
  for(const file of list) {
      while(!stack.isEmpty() && stack.top()[0] >= file[0]) {
          stack.pop();
      }
      // 遇到文件则统计路径，否则入栈
      if (file[1].indexOf('.') > -1) {
       //    console.log(file[1]);
          // 计算最长路径
       if (!stack.isEmpty()) {
           let filepath = stack.stack.reduce((acc, item) => {
               // console.log(item);
               // console.log("acc ", acc);
               if (!acc) {
                   return acc + item[1]
               } else {
                   return acc + '/' + item[1];
               }
           }, '');
           filepath = filepath ? filepath + '/' + file[1] : file[1];
           // console.log(filepath);
               max = Math.max(max, filepath.length);
       } else {
           max = Math.max(max, file[1].length);
       }
      } else {
          stack.push(file);
      }
      

      
  }
  return max;
};

var Stack = function() {
   this.stack = [];
   this.count = 0;
}

Stack.prototype.push = function(item) {
   this.stack[this.count] = item;
   this.count = this.count + 1;
}

Stack.prototype.pop = function() {
   this.count = this.count - 1;
   return this.stack.pop();
}

Stack.prototype.top = function() {
   const idx = this.count - 1;
   return this.stack[idx];
}
Stack.prototype.isEmpty = function() {
   return this.count === 0;
}