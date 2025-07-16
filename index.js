/**
 * *************************
 * _________________________
 * @description:
 * __________________________
 * *************************
 * This file serves as the entry point for the Node.js application, demonstrating the use of ES6 modules to import functions from other files.
 * 
 */
import getPosts, {getPostsLength}  from "./postController.js";


console.log(`The post length: ${getPostsLength()}`)

console.log(getPosts());




/* Using the CommonJS import syntax to import functions from utils.js
const {generateRandomNumber, celciusToFahrenheit} = require('./utils'); //Uses the commonJs import syntax

console.log(`Random Number: ${generateRandomNumber()}`);

console.log(`Celcius to Fahrenheit: ${celciusToFahrenheit(0)}`); */