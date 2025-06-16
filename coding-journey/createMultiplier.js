/*
🚀 Challenge: createMultiplier
Write a function called createMultiplier that takes a number x and returns a new function.

The returned function should take a number y and return the result of x * y. */

// Step 1: Define the factory function
function createMultiplier(x) {
    return function(y) {
        return x * y;
    };
}

// Step 2: Use it to create specific multipliers
const double = createMultiplier(2);  // x = 2
const triple = createMultiplier(3);  // x = 3
const timesTen = createMultiplier(10); // x = 10

// Step 3: Call them with values for y
console.log(double(5));    // 2 * 5 = 10
console.log(triple(5));    // 3 * 5 = 15
console.log(timesTen(3));  // 10 * 3 = 30

