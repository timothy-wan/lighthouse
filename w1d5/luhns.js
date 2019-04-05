var check = function(num) {
  if (num < 10) {
    return false;
  }
  var input = createNumArray(num);
  var digitToCheck = input.pop();
  var summed = summedArr(input);
  var totalSum = sumDigit(summed);
  var total = digitToCheck + totalSum;
  var boo = total % 10 === 0;
  return total % 10 === 0; // return boolean for validation
}

var createNumArray = function(num) {
  return num.toString().split("").map(Number);
}

var summedArr = function(numbers) {
  var sum = [];
  numbers.forEach(function(e, i) {
    var value = e;
    if(i % 2 === 1) {
      value *= 2;
      if(value > 9) {
        value -= 9;
      }
    }
    sum.push(value);
  });
  return sum;
}
var sumDigit = function(numbers) {
  var sum = 0;
  numbers.forEach(function(e) {
    sum += e;
  });
  return sum;
}

module.exports = check;