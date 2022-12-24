let firstDiv = document.querySelector("div");
console.log(firstDiv); 

let allDivs = document.getElementsByTagName("div");
console.log(allDivs)

let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);

let lastDiv = allDivs[2]
console.log(lastDiv);

let headerThreeInLastDiv = lastDiv.lastElementChild
console.log(headerThreeInLastDiv)

let headerOneInLastDiv = lastDiv.firstElementChild
console.log(headerOneInLastDiv);

//let secondDiv = allDivs[1]    
//let textFirstParagraphSecondDiv = secondDiv.firstElementChild;
//console.log(textFirstParagraphSecondDiv)

let secondDiv = document.querySelectorAll("div")[1];
console.log(secondDiv);
let textFirstParagraphSecondDiv = secondDiv.firstElementChild;
console.log(textFirstParagraphSecondDiv);

let textSecondDiv = secondDiv.lastElementChild;
textSecondDiv.innerHTML += "text";
console.log(textSecondDiv);

let headerOneLastDiv = lastDiv.firstElementChild;
headerOneInLastDiv.textContent = "New header"
console.log(headerOneInLastDiv);

let headerTwoLastDiv = lastDiv.lastElementChild;
headerTwoLastDiv.textContent = "Second new header"
console.log(headerTwoLastDiv);