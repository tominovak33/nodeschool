fs = require('fs');
expected_extension = process.argv[3];


function getFiles(){
	fs.readdir(process.argv[2] ,function callback(error, contents){
		for (var file in contents) {
			if (filter(contents[file]) === true){
				console.log(contents[file]);
			}
		} 

	})
}


function filter(filename){
	var split_name = filename.split('.');
	if (split_name.length > 1) {
		var extension = split_name[split_name.length-1];
		if (extension === expected_extension) {
			return true;
		}
	}

	return false;
}

getFiles();