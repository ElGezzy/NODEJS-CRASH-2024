// @description: This code demonstrates how to use Node.js EventEmitter to create and handle custom events.
// It is usually used to handle Real-time events in applications, such as user interactions or system notifications.
import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log('Hello, ' + name);
}

function goodbyehandler(name){
    console.log('Goodbye, ' + name);
}

// Register event listeners
myEmitter.on('greet', greetHandler); // Registering the greet event, which will call greetHandler when emitted
myEmitter.on('goodbye', goodbyehandler); // Registering the goodbye event, which will call goodbyehandler when emitted

//Emit events
myEmitter.emit('greet', 'John'); // Output: Hello, John
myEmitter.emit('goodbye', 'John'); // Output: Goodbye, John

// Error handling
myEmitter.on('error', (err) => {
    console.error('An Error occurred:', err)
})

//Simulate an error
myEmitter.emit('error', new Error('Something went wrong'));
