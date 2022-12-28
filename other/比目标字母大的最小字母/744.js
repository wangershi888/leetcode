let letters = 'asdf'
let target = 'y'
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {
  let more = null;
  let min = null;
  for(let i = 0; i < letters.length; i ++) {
    min = !min ? letters[i] : min > letters[i] ? letters[i] : min;
    if(letters[i] > target) {
      more = !more ? letters[i] : letters[i] < more ? letters[i] : more
    }
  }
  return more ? more : min;
};