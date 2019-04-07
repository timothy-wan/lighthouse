function mode(arr) {
  var object = {};
  arr.forEach(function(e) {
    if(object[e]) {
      object[e]++;
    } else {
      object[e] = 1;
    }
  });
  var test = Array.from(object);
  console.log(test);
  var numberKey = Object.keys(object);
  var counter = -1000000;
  var freqOcc;
  numberKey.forEach(function(id) {
    var app = object[id];
    if(app > counter) {
      counter = app;
      freqOcc = id;
    }
  });
  return freqOcc;
}
var arr1 = [1,2,3,4,5,6];
mode(arr1);