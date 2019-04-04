let numberOfVowels = function(data) {
  var result = 0;
  for(var i = 0; i < data.length; i++) {
    switch(data[i]) {
      case 'a':
        result++;
        break;
      case 'e':
        result++;
        break;
      case 'i':
        result++;
        break;
      case 'o':
        result++;
        break;
      case 'u':
        result++;
        break;
    }
  }
  return result;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));