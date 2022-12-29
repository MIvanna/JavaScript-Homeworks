/*EXERCISE 3
Write a JavaScript program to get the difference between a given number and 13, 
if the number is greater than 13 double the difference as a result.
Make sure you use a function!
Ex. Input: 20 ==> Output: 14*/

let inputNumber = parseInt(prompt("Enter a number"));

function differenceOfNumbers(number) {
 if (number > 13){
let difference = number - 13;
console.log(`The result is: ${difference * 2}`)
 } else {
console.log("Your number is less than 13.")
 }
}
let result = differenceOfNumbers(inputNumber);
