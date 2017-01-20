/*
	21 Jan 2017
	Taufiq Ismail
	server menggunakan node js
	TutorialsPoint
*/

var http = require("http");

http.createServer(function(request, response) {
    // Send the HTTP header
    // HTTP Status : 200 : Ok
    // Content Type : text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body as "hello world"
    response.end('Hello world\n');

}).listen(8081);

// Console will print message
console.log('Server is running at http://127.0.0.1:8081/');