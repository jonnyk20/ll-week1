var myarray=[25, 8, 7, 41]
myarray.sort(function(a,b){ //Array now becomes [41, 25, 8, 7]
    return b - a;
});
console.log(myarray);

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a, b){
  if (a.name < b.name) {
    return - 1;
  } else if (a.name > b.name){
    return 1;
  }
  return b.age - a.age;
});

console.log(students);