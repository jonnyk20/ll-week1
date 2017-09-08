var arr = process.argv;

function reverse(str) {
  var newStr = '';
  for(var i = 0; i < str.length; i++){
    newStr = str[i] + newStr
  }
  return newStr;
}
process.argv.slice(2).forEach(function(item){
  console.log(reverse(item));
});
// for (i = 2; i < arr.length; i++){
//     console.log(reverse(arr[i]));
// }
//forEach