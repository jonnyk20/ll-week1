

function loopyLighthouse(start, end, increment, factor1, factor2){
  for (var num = start; num <= end; num += increment) {
    var output = "";
    if (num % factor1 === 0) {
      output += "Loopy";
    }
    if (num % factor2 === 0) {
      output += "Lighthouse";
    }
    console.log(output === "" ? num : output);
  }
}

console.log(loopyLighthouse(100, 150, 2, 4, 6));



//Fizz Buzzz
//Array of numbers