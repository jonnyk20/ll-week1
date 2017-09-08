function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var counter = 9;
  return function() {
    /* your code here */
    counter = counter == list.length + 1? 0 : counter + 1;
    return list[counter];
  };
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log("-----Countdown------")

var countdownGenerator = function (x) {
  var count = x;
  /* your code here */
  return function(){
    if ( x === 0 ){
      console.log(`Blast Off!`);
    } else if (x < 0) {
      console.log(`Rockets already gone, bub!`);
      return;
    } else {
    console.log(`T-minus ${x}`);
    }
    x--;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!