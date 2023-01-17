/*Write a JavaScript program that will find out which of 
two inserted integers is closer to 100. 
Make sure to alert the user if a negative number is inserted!

Make sure you use a function!

Ex. Input1: 20
Input2: 80
Output: 80 is closer to 100 */


let inputNum1 = parseInt(prompt("Enter first number:"));
console.log(`First number is: ${inputNum1}`)

let inputNum2 = parseInt(prompt("Enter second number:"));
console.log(`Second number is: ${inputNum2}`)

function closerToHundred(number1, number2) {

    if (inputNum1 <= 0 || inputNum2 <= 0 || !inputNum1 || !inputNum2) {
        alert("Please enter an integer.")
    } else if ((inputNum1 === 100 || inputNum2 === 100)) {
        console.log("One of your number is equal to 100")
        alert("One of your number is equal to 100")
    } else if (
        ((inputNum1 < 100 && inputNum2 < 100) && (100 - inputNum1) < (100 - inputNum2)) ||
        ((inputNum1 > 100 && inputNum2 > 100) && (inputNum1 - 100) < (inputNum2 - 100)) ||
        ((inputNum1 < 100 && inputNum2 > 100) && (100 - inputNum1) < (inputNum2 - 100)) ||
        ((inputNum1 > 100 && inputNum2 < 100) && (100 - inputNum1) > (inputNum2 - 100))
    ) {
        console.log("First number is closer to 100")
        alert(`${inputNum1} is closer to 100`)
    } else {
        console.log("Second number is closer to 100")
        alert(`${inputNum2} is closer to 100`)
    }
}

closerToHundred(inputNum1, inputNum2)







/*
function closerToHundred(number1, number2) {


    if (inputNum1 <= 0 || inputNum2 <= 0) {
        alert("Please enter an integer.")
    }
    else if (inputNum1 < 100 && inputNum2 < 100) {
        let num1 = 100 - inputNum1;
        let num2 = 100 - inputNum2;
        if (num1 < num2) {
            alert(`${inputNum1} is closer to 100 than ${inputNum2}!`)
            console.log("First number is closer to 100!")
        } else if (num1 > num2) {
            alert(` ${inputNum2} is closer to 100 than ${inputNum1}`)
            console.log("Second number is closer to 100")
        }
    }
    else if (inputNum1 > 100 && inputNum2 > 100) {
        if (inputNum1 < inputNum2) {
            alert(`${inputNum1} is closer to 100 than ${inputNum2}!`)
            console.log("First number is closer to 100!")
        } else {
            alert(` ${inputNum2} is closer to 100 than ${inputNum1}`)
            console.log("Second number is closer to 100!")

        }
    } 
}

closerToHundred(inputNum1, inputNum2)
*/