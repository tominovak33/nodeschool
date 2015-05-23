var http = require ("http");

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var responses = [];
var count = 0;

urls.forEach(function (url, i){
	var all_the_data = '';

	http.get(url, function (returned_data) {
		returned_data.setEncoding('utf8');
		returned_data.on('data', function(data){
			all_the_data += data;
		});
		returned_data.on('end', function(){
			responses[i] = all_the_data;
			count ++;
			if (count == urls.length){
				console.log(responses.join('\n'));
			}
		})
	});

});