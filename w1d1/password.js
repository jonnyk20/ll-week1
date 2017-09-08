var input = process.argv[2];
var replacements = [['a', '4'], ['e', '3'], ['o', '0'], ['l', '1']] 

function replace(str, repl){
  return str.split(repl[0]).join(repl[1])
}

replacements.forEach(function(rpArr){
  input = replace(input, rpArr);
})

console.log(input) ;

