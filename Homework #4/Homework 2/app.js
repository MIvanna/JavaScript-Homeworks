function sumOfNumbers(arrayOfFiveNumbers){
    let sum = 0;
    for (let i = 0; i < arrayOfFiveNumbers.length; i++){
        sum += arrayOfFiveNumbers[i];
    }
    return sum
}
console.log(sumOfNumbers([1, 2, 3, 4, 5]));