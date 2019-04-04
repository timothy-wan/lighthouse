var ags = process.argv.slice(2);
var input = Number(ags[0]);
var results = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

function rollADice(num) {
  for(var i = 0; i < input; i++) {
    num.push(getRandomInt(6));
  }
  return num;
}

results = rollADice(results);
console.log("Rolled " + input + " dice: " + results.join(", "));