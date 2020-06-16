
// get job id
import * as Chalk from 'chalk';

let jobId = process.argv[3];
if(jobId === undefined) {
    Chalk.red("JobId argument is missing - process exit");
    process.exit()
}
console.log(process.argv[3]);
console.log(process.argv);
