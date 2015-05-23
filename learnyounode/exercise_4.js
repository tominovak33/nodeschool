var fs = require('fs');

function processFile(){
	fs.readFile(process.argv[2] , function callback(error, contents){
		file = contents.toString();
		var lines = file.split("\n").length-1;
		console.log(lines);
	})
}

processFile();