/*Print all numbers from an array and the sum
Create an array with numbers
Print all numbers from the array in a li element in a new HTML
Print out the sum of all of the numbers below the list
Bonus: Try printing the whole mathematical equasion as well
 ( 2 + 4 + 5 = 11) 
*/

let myArray = [1, 4, 7, 14, 13];

let parent = document.getElementsByTagName("ul")[0];

let sum = 0;

function sumOfNumbers(array) {
    for (let i = 0; i < myArray.length; i++) {
        let li = document.createElement("li");
        let liText = document.createTextNode(`${myArray[i]}`);
        li.appendChild(liText)
        parent.appendChild(li)
        console.log(li);
    }
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return (sum);
}
let result = sumOfNumbers(myArray);

let paragraph = document.getElementById("resultParagraph");
paragraph.innerText = `The sum of all numbers in the array is: ${result}`