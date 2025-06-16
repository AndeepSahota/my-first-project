// Quick Review 
// ------------------------------------------------------------
// Write a function called canDrive that takes age as input and:
// Returns "You can drive" if age is 17 or older
// Returns "Too young" otherwise

function canDrive(age){
    if(age >= 18 ){
        return "You can drive";
    } else {
        return "Too young";
    }
}

console.log(canDrive(16))
console.log(canDrive(23))

// Write a function called greetTime that takes hour (0–23) and:
// Logs "Good morning" if < 12
//"Good afternoon" if < 18
//"Good evening" otherwise

function greetTime(hour){
    if(hour < 12){
        console.log("Good Morning")
    } else if (hour < 18) {
        console.log("Good Afternoon")
    } else {
        console.log("Good evening")
    }
}

console.log(greetTime(5))
console.log(greetTime(13))
console.log(greetTime(20))