/*Make an array of ten elements. 
Make sure four of them to be: Null, undefined, NaN, “” and false
(JavaScript falsy values). 
Create a function that will work for every array in the world 
 and it will remove all the falsy values from the array.

 */

let myArray = ["first", 45, null, undefined, 7, NaN, "second", "", 99, false]
let truthyValues = [];


function removingFalsyValues(array) {
    for (let i = 0; i < myArray.length; i++) {
        if (!!array[i]) {
            truthyValues.push(array[i])
        }
    }
}
removingFalsyValues(myArray);

console.log(truthyValues)
document.write(`Truthy values from the array are: ${truthyValues} `)

