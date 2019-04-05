var bottlesPurchased = function(money) {
  return Math.floor(money / 2);
}

var getFreeBottleCaps = function(bottles) {
  return Math.floor(bottles / 4);
}

var getFreeEmptyBottles = function(bottles) {
  return Math.floor(bottles / 2);
}

var capCount = function(bottles) {
  return bottles % 4;
}

var emptyCount = function(bottles) {
  return bottles % 2;
}

var input = 10; // 10 dollars to start
var currentBottleCount = bottlesPurchased(input);
var totalBottleCount = 0; // figure out how many they purchased
var freeBottlesCap = 0;
var freeBottlesEmpty = 0;
var capsRemaining = 0;
var emptyRemaining = 0;



var calculatingBottles = function() {
    totalBottleCount += currentBottleCount; // adds new bottles to total
    freeBottlesCap = getFreeBottleCaps(currentBottleCount); //
    freeBottlesEmpty = getFreeEmptyBottles(currentBottleCount);
    totalBottlesRedeemed = freeBottlesEmpty + freeBottlesCap;
    capsRemaining = capCount(currentBottleCount) + totalBottlesRedeemed;
    emptyRemaining = emptyCount(currentBottleCount) + totalBottlesRedeemed;
    console.log('----------------');
    console.log('current: ', currentBottleCount);
    console.log('total: ', totalBottleCount);
    console.log('caps: ', capsRemaining);
    console.log('bottles: ', emptyRemaining);

    currentBottleCount += totalBottlesRedeemed;
    return totalBottleCount;
}



do {
  calculatingBottles();
} while(capsRemaining >= 4 || emptyRemaining >= 2);

console.log(getFreeEmptyBottles(10));