// notice how you dont even need to create a function for this 

/*
for(let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let i = 2; i <= 10; i = i + 2) {
    console.log(i);
}

let fruits = ["apple ", "Banna", "oranage"];

for (let i = 0;  i < fruits.length; i++){
  console.log(fruits[i]);
}


let teams = ["Wolves", "Real Madrid", "PSG"];

for (i = 0; i < teams.length; i++){
  console.log(teams[i])
}
  */

// Bonus question 

for (let i = 10; i >= 0; i = i - 1){
  
  if (i === 0){
    console.log("Liftoff! ");
  } else {
    console.log("countdown " + i)
  }
}