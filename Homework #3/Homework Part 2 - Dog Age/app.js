/*
Write a function that will return:
Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
Note: Call the function in console to see answer
Bonus: Make the same function work for converting dog to human years as well
*/


function calculateDogsAge(years) {


    let userChoice = parseInt(prompt("Insert 1 for converting human years to dog years, and 2 for converting dog to human years "));
    
    if (userChoice === 1) {
        let humanToDogYears = parseInt(prompt("Enter human years to convert into dog years"));
        let result = years * 7;
        alert(`${humanToDogYears} human years are equal to ${result} dog years`)
    } else if (userChoice === 2) {
        let dogYearsToHumenYears = parseInt(prompt("Enter dog years to convert into human years"));
        let result = (years / 7).toFixed(1);
        alert(`${dogYearsToHumenYears} are equal to ${result} human years`)
    }
return
}
console.log(calculateDogsAge(5))