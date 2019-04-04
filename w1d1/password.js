var ags = process.argv.slice(2);
console.log(obfuscate(ags[0]));

function obfuscate(password) {
  var output = "";
  for(var i = 0; i < password.length; i++) {
    switch(password[i]) {
      case 'a':
        output += '4';
        break;
      case 'e':
        output += '3';
        break;
      case 'o':
        output += '0';
        break;
      case 'l':
        output += '1';
        break;
      default:
        output += password[i];
    }
  }
  return output;
}