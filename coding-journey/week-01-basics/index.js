function sayHello(name){
    return `Hello, ${name}!`;

}

console.log(sayHello("Andeep"));

// Create a variable 
let age = 20; 

// If statement 
if (age >= 18){
    console.log("You're an adult"); 
} else {
    console.log("You're underage")
}

// Function is age 
function isAdult(age){

    if (age >= 18){
        return true;
    } else {
        return false;
    }
}
console.log(isAdult(20));

// getGreeting(hour)

function getGreeting(hour){
    if(hour < 12){
        console.log("Good Morning!");

     } else if(hour < 18){
            console.log("Good Afternoon");
        
        } else {
             console.log("Good Evening");
                
            }
}
console.log(getGreeting(8));
console.log(getGreeting(13));
console.log(getGreeting(20));

// Can vote 

function isEligibleToVote(age, citizenship) {
    if (age >= 18 && citizenship === "UK") {
        return true;
    } else {
        return false;
    }
}

console.log(isEligibleToVote(20, "UK"));
console.log(isEligibleToVote(20, "India"));
console.log(isEligibleToVote(17, "UK"));

// passwordStrength 

function passwordStrength(password) {
    if (password.length >= 12) {
        return "Strong password";
    } else if (password.length >= 8) {
        return "Medium";
    } else {
        return "Weak af password";
    }
}

console.log(passwordStrength("helloworld123")); // Strong password
console.log(passwordStrength("pass1234"));       // Medium
console.log(passwordStrength("123"));            // Weak af password


