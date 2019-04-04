var ags = process.argv.slice(2);

for(var i = 0; i < ags.length; i++) {
  var result = "";

  for(var j = ags[i].length - 1; j >= 0; j--) {
    result += ags[i][j];
  }
  console.log(result);
}


