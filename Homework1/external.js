// Write a JavaScript program to convert a length given in feet to meters. //
let lengthInFeet = 10;
let meterInFeet = 0.3048;

let feetToMeters = lengthInFeet * meterInFeet;
console.log(feetToMeters);

//Write a JavaScript program that will read the two sides of a rectangle and calculate its area//
let sideA = 5;
let sideB = 10;
let area = sideA * sideB;
console.log(area)

//Write a JavaScript program that will calculate area of Circle//
let circleRadius = 6;
let circlePi = Math.PI;
let circleArea = circlePi * (circleRadius ** 2);
console.log(circleArea)

/* Write a JavaScript program that will calculate the price of 30 Phones, 
where the price of one phone is $119.95 and the tax rate is 5% */

let price = 119.95;
let tax = (price / 100) * 5;
let fullPrice = price + tax;

let numberOfPhones = 30;
let endResult = numberOfPhones * fullPrice;
console.log(endResult);

