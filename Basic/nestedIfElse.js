// Nested if else 

//winning the number 19 /* game logic

//like 19 is your guess is right
// 17 too low 
// 20 too high

let winningNumber= 19;
let userGuess=Number(prompt("guess a number"));
// "12" in string  so we can convert into the number.
// console.log(userGuess);
// console.log(typeof userGuess,userGuess);

if (userGuess=== winningNumber) {
    console.log("your guess is right");
} else {
    if (userGuess<winningNumber) {
        console.log("your guess is too low");
    } else {
        console.log("too high");
    }
}