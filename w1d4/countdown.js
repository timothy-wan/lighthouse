var countdownGenerator = function (x) {

  return function() {
    switch(true) {
      case (x > 0):
        console.log('T-minus ' + x + '...');
        break;
      case(x === 0):
        console.log('Blast off!');
        break;
      case(x < 0):
        console.log('Rockets already gone, bub!');
        break;
    }
    x--;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!