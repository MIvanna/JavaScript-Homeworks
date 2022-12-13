/* А function which accepts a parameter and returns its type and prints 
it in the console. Try to call the functions 5 times for 5 different types: */


function returnType(parametar){

let myParametar = typeof(parametar);

console.log(`The type of ${parametar} is: ${myParametar} `)
return myParametar;
}
returnType([1, 2, false])
returnType(true)
returnType(6)
returnType("Hoi")
returnType(undefined)   
