var function1 = require('./mod1');
var function2 = require('./mod2');
var a = 2;

console.log(function2(function1(a)));
