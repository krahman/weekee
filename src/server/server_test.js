/**
 * Created by nevda on 15/12/14.
 */

'use strict';

var server = require('./server.js');

exports.testNothing = function(test) {
    test.ok(3, server.getNumber(), 'number');
    test.done();
};
