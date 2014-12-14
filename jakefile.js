/**
 * Created by nevda on 14/12/14.
 */
task("default", ["lint"]);

desc("lint everything here");
task("lint", [], function() {
    var lint = require("./build/lint/lint_runner.js");
    lint.validateFile("jakefile.js", {}, {});
});
