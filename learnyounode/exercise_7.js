var http = require ("http");

var url = process.argv[2];

http.get(url, function (returned_data) {
	returned_data.setEncoding('utf8');
	returned_data.on('data', console.log);
	//Solution
	//response.on('error', console.error)
});