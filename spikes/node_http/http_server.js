/**
 * Created by nevda on 17/12/14.
 */

'use strict';

var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
    console.log('Received request');

    var body = '<html><head>' +
        '<title>HTTP Spike</title>' +
        '</head>' +
        '<body><p>This is a spike of Node\'s HTTP server.</p>' +
        '</body>' +
        '</html>';

    response.end(body);
});

server.listen(8181);

console.log('Server started.');
