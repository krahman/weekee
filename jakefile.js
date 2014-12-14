/**
 * Created by nevda on 14/12/14.
 */
task("default", ["lint"]);

desc("lint everything");
task("lint", [], function() {
    var lint = require("./build/lint/lint_runner.js");

    var files = new jake.FileList();
    files.include("**/*.js");
    files.exclude(["build", "node_modules"]);
    lint.validateFileList(files.toArray(), {}, {});
});
