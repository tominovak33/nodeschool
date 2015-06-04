var http = require('http')
var map = require('through2-map');

var port = process.argv[2];

var server = http.createServer(function (request, response) {
    // request handling logic...
    if (request.method != 'POST') {
    	return response.end('only deal with post requests');
    }
    
    request.pipe(map(function (request) {
      return request.toString().toUpperCase();
    })).pipe(response)

});

server.listen(port);