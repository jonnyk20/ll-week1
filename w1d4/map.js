var words = ["ground", "control", "to", "major", "tom"];

function map(arr, fn){
  var output = [];
  arr.forEach(function(element,index) {
    output[index] = fn(element);
  });
  console.log(output);
}


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
