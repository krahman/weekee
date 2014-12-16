/**
 * Created by nevda on 15/12/14.
 */
'use strict';

var http = require('http');
var server = http.createServer();

exports.start = function() {
    server.on('request', function(req, res) {
        res.end();
    });
    server.listen(8181);
};

exports.stop = function(callback) {
    server.close(callback);
};
