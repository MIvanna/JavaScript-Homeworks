/*Bob's salary is 1000 eur per month. 
He has expenses that has to cover during the month. 
He has to pay rent for his apartment 375 eur. 
He should pay 250 eur for his bills in total. 
Print on screen what is the amount left that 
Bob has for the rest of the month, and what 
is the total amount of his expenses. */

let salary = 1000; 

let appartmentExpences = 375;
let bills = 250;
let expences = appartmentExpences + bills;
let leftAmount = salary - expences

console.log(`Bob's salary is 1000 eur per month. 
The total amount of his expences is ${expences}. 
He has left ${leftAmount}`)