/* 
Write a function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

create a function studentsFullName
2 arrays of firstNames and lastNames
create an empty array
for loop
return new array with students full names
with numeric value before it
  */

function studentsFullName(arrayFirstNames, arrayLastNames){
    let fullNames = [];
    for (let i = 0; i < arrayFirstNames.length; i++){
        }
    for(i = 0; i < arrayLastNames.length; i++){
        fullNames.push = `${[i + 1]}${"."} ${arrayFirstNames[i]} ${" "} ${arrayLastNames[i]}`;
        console.log(fullNames);
    }
    return fullNames
}
studentsFullName(["Jim", "Johnny", "Jackie"], ["Carrey", "Deep", "Chan" ]);
