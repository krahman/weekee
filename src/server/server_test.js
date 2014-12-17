/**
 * Created by nevda on 15/12/14.
 */

'use strict';

var http = require('http');
var testServer = require('./server.js');
var options = {
    hostname: 'localhost',
    port: 8181,
    agent: false
};

exports.tearDown = function(done) {
    testServer.stop(function() {
        done();
    });
};

exports.testServerResponseToGet = function(test) {
    testServer.start();
    var request = http.get(options, function(res) {
        test.equals(res.statusCode, 200, 'Server Status Test');
        test.done();
    });
    request.end();
};

exports.testServerResponseHelloWorld = function(test) {
    testServer.start();
    var request = http.get(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            test.equals(chunk, 'Hello World', 'Hello World Test');
        });
        res.on('end', function() {
            test.done();
        });
    });
    request.end();
};

