/**
 * *************************
 * _________________________
 * @description:
 * __________________________
 * *************************
 * Demonstrates Node.js OS module functionalities such as retrieving user information, total memory, and free memory in both bytes and gigabytes.
 */
import os from 'os';

//userInfo()
console.log('User Info', os.userInfo());

//totalmem()
console.log('Total Memory in Bytes:', os.totalmem());
console.log('Total Memory in GigaBytes:', (os.totalmem()/(1024*1024*1024)).toFixed(4))
console.log('')

//freemem()
console.log('Free Memory in Bytes:', os.freemem());
console.log('Free Memory in GigaBytes:', (os.freemem()/(1024*1024*1024)).toFixed(4))