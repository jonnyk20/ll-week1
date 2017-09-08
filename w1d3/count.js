function countLetters(str){
  var letterCount = {};
  // Remove spaces and split into arrray
  var letterArray = str.replace(/ /g,'').split("");
  letterArray.forEach(function(letter) {
    // If letter property exists, increment by 1, otherwise make it = 1
    letterCount[letter] = ( letterCount[letter] ) ? letterCount[letter] + 1 : 1;
  });
  return letterCount;
}

console.log(countLetters("lighthouse in the house"));