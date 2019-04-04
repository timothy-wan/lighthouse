var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a, b) {
  if(a.name < b.name) { //if then a less than b move lower
    return -1;
  } else if (a.name > b.name) { //if a is greater move higher
    return 1;
  } else if (a.name === b.name) { //if names are equal, check age
    if(a.age - b.age > 0) {
      return 0;
    } else {
      return 1;
    }
  }
});
console.log(students);