var ags = process.argv.slice(2);
var output = "";

for(var i = 0; i < ags.length; i++) {
  var temp = ags[i].substr(1,ags[i].length - 1);
  var word = temp + ags[i][0];
  for(var j = 0; j < word.length; j++) {
    output += word[j];
  }
  output += 'ay ';
}

console.log(output);