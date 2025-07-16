/**
 * *************************
 * _________________________
 * @description:
 * __________________________
 * *************************
 *  Demonstrates Node.js 'process' object features: command-line arguments, environment variables, process info, memory usage, uptime, and exit event handling. Shows both usage and event listener setup.

 */
//Process as a whole
console.log(process);

//argv. Good for developing command line interfaces
console.log(process.argv);
console.log(process.argv[3]);

//process.env
console.log(process.env);

//pid
console.log(process.pid);

// cwd()
console.log(process.cwd());

//title
console.log(process.title);

//memoryUsage()
console.log(process.memoryUsage())

//uptime()
console.log(process.uptime());

//eventListener that listens to exit
process.on('exit', (code) => {
    console.log(`About to exit with code ${code}`);
})

//exit()
process.exit(0);