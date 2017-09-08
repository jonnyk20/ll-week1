function fnA(){
  var a = 1
  return function fna(){
    console.log(b);
  }
}

function fnB(){
  var b = 2;
  return fnA();
}

console.log(fnB()());
