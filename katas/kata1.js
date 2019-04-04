let sumLargestNumbers = function(data) {
  data.sort(function(a,b) {return a - b});
  var end = data.length - 1;
  return data[end] + data[end - 1];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));