var outer = function() {
  var x = 10;

  var inner = function() {
    console.log("The value of x is: " + x);
  }
  return inner;
};

var foo = outer();
foo();
//
function makeIdGenerator() {
  var id = 0;

  // The following is the closure function
  return function() {
    // This inner function accesses and assigns the value of
    // the variable id, which was defined in the parent function
    id += 1;
    return id;
  }
}

// makeIdGenerator returns a function which is assigned to
// the variable nextId
var nextId = makeIdGenerator();

console.log(nextId()); // Logs: 1
console.log(nextId()); // Logs: 2

// Dice Roll
var rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
};

console.log(rollDie());  // 1 (for example)