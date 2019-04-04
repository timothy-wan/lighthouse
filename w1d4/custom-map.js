var words = ["ground", "control", "to", "major", "tom"];

var map = function(arr, func) {
  var result = [];
  arr.forEach(function(elm) {
    result.push(func(elm));
  });
  return result;
}


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});