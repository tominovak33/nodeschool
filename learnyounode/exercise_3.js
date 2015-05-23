var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]); //second arg as 'utf8'

buffer = buffer.toString();

var lines = buffer.split("\n");

console.log(lines.length-1);