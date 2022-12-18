//Write a loop that will print in the console evry number from 1 - 20
//Add \n after evry even number
//oherwise add " "

str = "";

for (i = 1; i <=20; i++){
    if(i % 2 === 0) {
        str += `${i}\n`
    } else {
        str += `${i} ${" "}`
    }
}
console.log(str);