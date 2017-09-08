var a = 3;

function privateFunction(b){
  console.log("The sum is:", b + a) ;
}

module.exports = {
  myFunction: function (b){
    return privateFunction(b);
  }
};