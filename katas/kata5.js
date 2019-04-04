const urlEncode = function(text) {
  var input = text.trim();
  var result = '';
  for(var i = 0; i < input.length; i++) {
    if(input[i] === ' ') {
      result += '%20';
    } else {
      result += input[i];
    }
  }
  return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));