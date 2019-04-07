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

var input = process.argv[2];
var freeBottlesCap = 0;
var freeBottlesEmpty = 0;
var freeCapsTotal = 0;
var freeEmptyTotal = 0;
var capsRemaining = bottlesPurchased(input);
var emptyRemaining = bottlesPurchased(input);
var totalBottleCount = bottlesPurchased(input);  // figure out how many they purchased


var calculatingBottles = function() {
  freeBottlesCap = getFreeBottleCaps(capsRemaining); // 1 bottle
  freeBottlesEmpty = getFreeEmptyBottles(emptyRemaining); // 2 bottles
  freeCapsTotal += freeBottlesCap;
  freeEmptyTotal += freeBottlesEmpty;
  totalBottlesRedeemed = freeBottlesEmpty + freeBottlesCap; // 3 bottles
  totalBottleCount += totalBottlesRedeemed; // adds new 5 bottles to total
  capsRemaining = capCount(capsRemaining) + totalBottlesRedeemed; // 1 + 5 is wrong => 1 + 3
  emptyRemaining = emptyCount(emptyRemaining) + totalBottlesRedeemed; // 1 + 3
  console.log('----------------');
  console.log('Total Bottles: ', totalBottleCount);
  console.log('Remaining Caps: ', capsRemaining);
  console.log('Remaingin Bottles: ', emptyRemaining);
  console.log('Total Earned: ', totalBottlesRedeemed);
  console.log('   From Bottles: ', freeEmptyTotal);
  console.log('   From Caps: ', freeCapsTotal);

}

while(capsRemaining >= 4 || emptyRemaining >= 2) {
  calculatingBottles();
}

