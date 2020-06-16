"use strict";
exports.__esModule = true;
// get job id
var Chalk = require("chalk");
var jobId = process.argv[3];
if (jobId === undefined) {
    Chalk.red("JobId argument is missing - process exit");
    process.exit();
}
console.log(process.argv[3]);
console.log(process.argv);
