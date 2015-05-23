var my_module = require('./exercise_6_module.js');

my_module(process.argv[2], process.argv[3], function (err, data) {

	if (err) {
		console.log(err);
		return;
	}

	data.forEach(function (item) {
		console.log(item)
	});

});