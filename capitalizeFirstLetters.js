// capitalizeFirstLetters.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE
// function capitalizeFirstLetters(input) {
//     return input.length > 0
//     ? input[0].toUpperCase() + input.slice(1)
//     : '';
// }


// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirst, 'function');
// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirst.length, 1);
// Check that capitalizeFirstLetters transforms 'javaScript is cool' correctly
assert.strictEqual(capitalizeFirst('javaScript is cool'), 'JavaScript Is Cool');
// Check that capitalizeFirstLetters transforms 'javaScript' correctly
assert.strictEqual(capitalizeFirst('javaScript'), 'JavaScript');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirst('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirst(''), '');
