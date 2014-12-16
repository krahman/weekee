/**
 * Created by nevda on 15/12/14.
 */

'use strict';

var http = require('http');
var serverFile = require('./server.js');

exports.testServerResponseToGet = function(test) {
    serverFile.start();
    var options = {
        hostname: 'localhost',
        port: 8181
    };
    http.get(options, function(response) {
        test.equals(response.statusCode, 200, 'Server Status Test');
        console.log('test successful');
        test.done();
    }).on('error', function(e) {
        console.log('Got error ' + e.message);
    });

};

exports.tearDown = function(done) {
    serverFile.stop(function() {
        done();
    });
};
