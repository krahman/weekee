/**
 * Created by nevda on 14/12/14.
 */
desc("Example!");
task("example", ["dependency"], function() {
    console.log("example task");
});
task("hello", function() {
    console.log("hello world!!");
});
task("dependency", function() {
    console.log("run dependency");
})
