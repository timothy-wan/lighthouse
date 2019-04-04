function loopyLighthouse(range, multiples, words) {
  for(var num = range[0]; num <= range[1]; num++) {
    var output = "";
    if(num % multiples[0] === 0) {
      output += words[0];
    }
    if(num % multiples[1] === 0) {
      output += words[1];
    }
    console.log(output === "" ? num : output);
  }
}

loopyLighthouse([100, 200], [3, 4], ["Loopy", "Lighthouse"]);
