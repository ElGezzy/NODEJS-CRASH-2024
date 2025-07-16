/**
 * *************************
 * _________________________
 * @description: 
 * __________________________
 * *************************
 * Provides utility functions for generating random numbers and converting Celsius to Fahrenheit. Uses CommonJS module.exports for exporting functions.
 */
function generateRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenheit(celcius){
    return (celcius * 9)/5 +32;
}

module.exports = {generateRandomNumber, celciusToFahrenheit}; //Exports the functions so they can be used in other files. Uses the CommonJS module system.
// In CommonJS, we use module.exports to export functions or objects from a module.