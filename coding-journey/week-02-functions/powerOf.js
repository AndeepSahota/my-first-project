// Main function 
function createPowerFunction(x){

    // Returns a function 
    return function(y){
        // Part where I am getting confused 
        return y ** x;
    }

    
}

// A little function, but not a function. Where do 2 go? Create power function is 2. Y == 5
const squared = createPowerFunction(2);
console.log(squared(5));

// Same again here 
const cube = createPowerFunction(3);
console.log(cube(5));

const powerOfFour = createPowerFunction(4);
console.log(powerOfFour(2)); // should return 16 (2 * 2 * 2 * 2)
