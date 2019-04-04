const blocksAway = function(directions) {
  var taxi = {
    east: 0,
    north: 0,
  };
  var state = 1;
  for(i = 0; i < directions.length; i += 2) {

    if(directions[i] === 'right') {
      if(state === 4) {
        state = 1;
      } else {
        state++;
      }
    }
    if(directions[i] === 'left') {
      if(state === 1) {
        state = 4;
      } else {
        state--;
      }
    }
    if(directions[i] === 'left' && i === 0) state = 1;

    switch(state) {
      case 1:
        taxi.north += directions[i + 1];
        break;
      case 2:
        taxi.east += directions[i + 1];
        break;
      case 3:
        taxi.north -= directions[i + 1];
        break;
      case 4:
        taxi.east -= directions[i + 1];
        break;
    }
  }
  return taxi;
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));