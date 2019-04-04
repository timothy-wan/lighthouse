// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(elm, i) {
    if (elm === "Waldo") {
      found(i);   // execute callback
    }
  });
}

function actionWhenFound(num) {
  console.log("Found him at index: " + num + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);