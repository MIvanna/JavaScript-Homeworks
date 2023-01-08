/* Write a function named weightInChickens that:
Takes an input weigh in kilograms
Calculates weight in chickens ( 1 chicken = 0.5kg )
The input should be entered through prompt
The result should be shown in the HTML of the page
Note:The html page needs to have title and result paragraph */
let weightToBeConverted = parseFloat(prompt("Enter weight in kilograms:"))

function weightInChickens(weightInKilograms) {
    let oneChicken = 0.5;
    let calculation = weightToBeConverted / oneChicken;

    let finalMessage = `You weight as much as ${calculation} chickens.`;
    return finalMessage
}
let result = weightInChickens(weightToBeConverted);
console.log(result);

let storedResult = document.getElementById("result");
let storedResultHtml = storedResult.innerText = `${result}`;