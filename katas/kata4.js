const instructorWithLongestName = function(instructors) {
  var longest = 0;
  var index = 0;
  for(var i = instructors.length - 1; i >= 0; i--) {
    if(instructors[i].name.length > longest) {
      index = i;
      longest = instructors[i].name.length;
    }
  }
  return instructors[index];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
