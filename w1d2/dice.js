var times = process.argv[2];

function collect(number) {
  var rolls = [];
  for (var i = 0; i < number; i++) {
    rolls.push(roll());
  }
  return rolls;
}

function roll() {
  var minimum = 1;
  var maximum = 6;
  var range = maximum - minimum;
  return Math.round((Math.random() * range) + 1);
}

console.log("Rolled " + times + " dice: " + collect(times).join(", "));