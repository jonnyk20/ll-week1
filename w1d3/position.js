function countLetters(str){
  var letterIndexes = {};
  for (var i = 0; i<str.length;i++) {
    var currentLetter = str[i];
    if (currentLetter === ' ') {
        continue;
    }
    if (!letterIndexes[currentLetter]) {
      letterIndexes[currentLetter] = [];
    } 
    letterIndexes[currentLetter].push(i);
  }
  return letterIndexes;
}


console.log(countLetters("lighthouse in the house"));

