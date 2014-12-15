/**
 * Created by nevda on 14/12/14.
 */
/*global desc, task, jake, fail, nodeunit*/

(function() {
    "use strict";

    desc("Build and test");
    task("default", ["lint", "test"]);

    desc("Test everything");
    task("test", [], function() {
        var reporter = require("nodeunit").reporters.default;
        reporter.run(['test', 'src/server/server_test.js']);
    });

    desc("Lint everything");
    task("lint", [], function() {

        var lint = require("./build/lint/lint_runner.js");
        var files = new jake.FileList();

        files.include("**/*.js");
        files.exclude(["node_modules"]);

        var options = nodeLintOptions();
        var passed = lint.validateFileList(files.toArray(), options, {});
        if (!passed) fail("Lint failed");
    });

    function nodeLintOptions() {
        var options = {
            bitwise: true,
            curly: false,
            eqeqeq: true,
            forin: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            noempty: true,
            nonew: true,
            regexp: true,
            undef: true,
            strict: true,
            trailing: true,
            node: true
        };
        return options;
    }
}());
