var http = require ("http");
var url = process.argv[2];
var requests_counter = 0;
var all_the_data = '';

http.get(url, function (returned_data) {
	returned_data.setEncoding('utf8');
	returned_data.on('data', function(data){
		requests_counter ++;
		all_the_data += data;
	});
	returned_data.on('end', function(){
		console.log(requests_counter);
		console.log(all_the_data);
	})
});