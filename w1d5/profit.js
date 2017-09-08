var prices = [45, 24, 35, 31, 40, 38, 11];

function profits(arr){
  var allProfits = [];
  arr.forEach((number, i)=>{
    if (i == arr.length - 1) {return;}
    var profits = [];
    for (var n = i + 1; n < arr.length; n++){
      profits.push(arr[n] - arr[i]);
    }
    allProfits[i] = Math.max.apply(null, profits);
  });
 var max = Math.max.apply(null, allProfits);
 return max > 0? max : -1;

}
console.log(profits(prices));

//Come back to it