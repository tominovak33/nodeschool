fs = require('fs');

module.exports = function getFiles(dir, expected_extension, callback) {

	function extension_matches(filename) {
		var split_name = filename.split('.');
		if (split_name.length > 1) {
			var actual_extension = split_name[split_name.length-1];
			return actual_extension === expected_extension;
		}

		return false;
	}

	fs.readdir(dir, function (err, contents) {
		if (err) {
			return callback(err);
		}

		output = contents.filter(extension_matches);

		callback(null, output);

	})
}




