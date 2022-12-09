/* Ask the user how much money he has, and depending on the value, suggest to him what he should do*/
3
let userInput = prompt("You don't know what to do for the winter holiday? Tell us how much money in euros do you have?");
let input = parseFloat(userInput);

if (input <= 100) {
    console.log("It is better for you to stay at home.");
} else if (input > 100 && input <= 500) {
    console.log("You shoud go in another city.");
} else if (input > 500 && input <= 1000) {
    console.log("You should visit some neighbour country.");
} else if (input > 1000 && input <= 2000) {
    console.log("You should visit some another country in Europe.");
} else if (input > 2000) {
    console.log("You should visit another continent.")
} else {
    console.log("You entered invalid number.")
}
/*Write javascript code that will get an input from the user and calculate which 
Chinese Zodiac a given year is in Formula for Chinese Zodiac caluclation: (year - 4) % 12. */

let birthYear = parseInt(prompt("Enter your birth year:"));
let formula = (birthYear - 4) % 12;

if (birthYear <= 1900) {
    console.log("Enter a valid year")
} else if (birthYear >= 2023) {
    console.log("You are not born yet!")
} else if (formula === 0) {
    console.log("You are a rat!")
} else if (formula === 1) {
    console.log("You are an ox")
} else if (formula === 2) {
    console.log("You are a tiger")
} else if (formula === 3) {
    console.log("You are a rabbit")
} else if (formula === 4) {
    console.log("You are a dragon")
} else if (formula === 5) {
    console.log("You are a snake")
} else if (formula === 6) {
    console.log("You are a horse")
} else if (formula === 7) {
    console.log("You are a goat")
} else if (formula === 8) {
    console.log("You are a monkey")
} else if (formula === 9) {
    console.log("You are a rooster")
} else if (formula === 10) {
    console.log("You are a dog")
} else if (formula === 11) {
    consolee.log("You are a pig")
} else {
    console.log("Please enter a valid year!")
} 