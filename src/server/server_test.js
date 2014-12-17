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


exports.testServerResponseToGet = function(test) {
    testServer.start();
    var request = http.get(options, function(res) {
        test.equals(res.statusCode, 200, 'Server Status Test');
        testServer.stop(function() {
            test.done();
        });
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
            testServer.stop(function() {
                test.done();
            });
        });
    });
    request.end();
};

exports.testServerRunsCallbackWhenStopCompletes = function(test) {
    testServer.start();
    testServer.stop(function() {
        test.done();
    });
};
