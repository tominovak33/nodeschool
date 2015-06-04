
var http = require('http');
var url  = require('url');

var port = process.argv[2];

var server = http.createServer(function (request, response) {
    // request handling logic..
    response.writeHead(200, { 'Content-Type': 'application/json' })
	var query_string = url.parse(request.url, true);
	var time = query_string.query.iso;

	if (/^\/api\/parsetime/.test(request.url)) {
		result = getParsedTime(time);
	}
	else if (/^\/api\/unixtime/.test(request.url)) {
		result = getUnixTime(time);
	}
	else {
		result = "none";
	}

    
    response.end(result);
 
});

server.listen(port);


function getUnixTime(time) {
	return "unix"
}

function getParsedTime(time) {
	return "normal"
}