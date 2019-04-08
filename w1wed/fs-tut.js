var fs = require('fs');
var buf = new Buffer(1024);

var readName = process.argv[2];
var writeName = process.argv[3];

fs.mkdir('/tmp/test', function(err) {
  if(err) {
    return console.error(err);
  }
});

fs.open(readName, 'r', function(err, fd) {
  if(err) {
    return console.error(err);
  }
  console.log('File opened successfully!');
  console.log('Reading the file now.');
  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
    if(err) {
      console.error(err);
    }
    if(bytes > 0) {
      // console.log(buf.slice(0, bytes).toString());
      fs.writeFile('test.txt', buf.slice(0, bytes).toString(), function(err) {
        if(err) {
          return console.error(err);
        }
      });
    }
  });
});
console.log('End of Program.');