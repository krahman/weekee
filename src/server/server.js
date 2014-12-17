/**
 * Created by nevda on 15/12/14.
 */
'use strict';

var http = require('http');
var server = http.createServer();

exports.start = function(portNumber) {

    if (!portNumber) throw new Error('Port number is required');

    server.on('request', function(req, res) {
        res.end('Hello World');
    });
    server.listen(portNumber);
};

exports.stop = function(callback) {
    server.close(callback);
};
