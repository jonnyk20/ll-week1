var result = "";
var arr = process.argv;


arr.slice(2).forEach(function(element) {
    var str = element.substring(1) + element[0] + "ay";
    result += str + " ";
});

console.log(result.slice(0, -1));

// Map and then Join