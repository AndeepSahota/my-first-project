// Arrow function 
const double = i => i * i; 
console.log(double(5));

// example const square = x => x * x;






function total(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(total(1,2,3));

function total(...numbers){
    return numbers.reduce((total, num) => total * num);
}

