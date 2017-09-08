
list = [];

if (!list.length) {
  list.push('coconut milk');
}
console.log(list);

// var x = 5;

// (function () {
//     var x;
//     console.log(x);
//     x = 10;
//     console.log(x); 
// })();








// var a = 1;

// if (true) {
//   let a = 2;
//   console.log(a);
// }

// console.log(a);

//    Example 2  
// var a = 1;
// var six = (function() {
//   var a = 6;
//   return function() {
//     // JavaScript "closure" means I have access to 'a' in here,
//     // because it is defined in the function in which I was defined.
//     console.log(a); // alerts '6'
//   };
// })();

// function execute(){
//   return six;
// }
// execute()();