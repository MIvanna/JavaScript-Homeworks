function addingElements(arrayOfStrings){
    let result = "";
    i = 0;
    while(i < arrayOfStrings.length){
        result += arrayOfStrings[i] + " ";
        i++;
    }
    console.log(result)
}
addingElements(["I", "did", "it", "!"])