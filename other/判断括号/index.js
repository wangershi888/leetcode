/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  while(true) {
    let len = s.length
    s = s.replace('()', '').replace('[]', '').replace('{}', '')
    if(len === s.length) {
      return len === 0
    }
  }
};


console.log(isValid('{[()]}'))

// {[()]}