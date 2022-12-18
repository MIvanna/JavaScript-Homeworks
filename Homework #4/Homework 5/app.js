/*Write a function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14
Bonus: Try making the function work if there are other types of items in it

function minMaxSum(array)
create sum, min and max variable
with for loop find the min number
with for loop find the max number
sum = min + max
return sum

 */



function minMaxSum(array){
let min = array[0];
let max = array[0];
for(let i = 1; i < array.length; i++){
    if(array[i] < min){
        min = array[i];
    }
    for(let j = 1; j < array.length; j++){
    if(array[j] > max){
        max = array[j];
    }
    }
} 
let sum = min + max;
console.log(`Max: ${max}, Min: ${min}, Sum: ${sum}`)
return sum

}
console.log(minMaxSum([7, 19, 5, 1, 16, 4, 3]));

