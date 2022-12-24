
/*Print all numbers from an array and the sum

Create an array with numbers
Print all numbers from the array in a li element in a new HTML
Print out the sum of all of the numbers below the list
Bonus: Try printing the whole mathematical equasion as well
 ( 2 + 4 + 5 = 11) 

*/

let myArray = [1, 4, 7, 10, 13];

let listElements = document.getElementsByTagName("li");

for(let item of listElements){
    for(let i = 0; i < myArray.length; i++){
        item.innerText = myArray[i];
    }
}
console.log(listElements);

let sum = 0;

function sumOfNumbers(array){
    for(let i = 0; i < myArray.length; i++){
        sum += myArray[i];
    }
    console.log(sum);
}
let result = sumOfNumbers(myArray);
console.log(result);

let paragraph = document.getElementById("resultParagraph");
console.log(paragraph);
//paragraph.innerText = result;
paragraph.innerText = `The sum of all numbers in the array is: ${result}`
