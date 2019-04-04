var input = [45, 24, 35, 31, 40, 38, 11]; // 16 is expected
var input2 = [1, 10, 5, 20, 6, 7];  // 19 is expected
var input3 = [1, 2, 3, 4]; // 3 is expected
var input4 = [100, 50, 20]; // -1 is expected

var maxProfit = function(stock) {
  var largestProfit = 0;
  if(stock.length <= 1) {
    return -1;
  }
  for(var i = 0; i < stock.length - 1; i++) {
    for(var j = i + 1; j < stock.length; j++) {
      var profit = stock[j] - stock[i];
      if(profit > largestProfit) {
        largestProfit = profit;
      }
    }
  }
  if(largestProfit <= 0) {
    return -1;
  }
  return largestProfit;
}

console.log(maxProfit(input) === 16);
console.log(maxProfit(input2) === 19);
console.log(maxProfit(input3) === 3);
console.log(maxProfit(input4) === -1);