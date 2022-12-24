//Change the text of all paragraphs and headers with javascript
//Note:The html must not be changed

let title = document.getElementById("myTitle");
console.log(title);
title.innerHTML = "This is the new title";

let firstParagraph = document.querySelector("p");
console.log(firstParagraph);
firstParagraph.innerHTML += "...";

let secondParagraph = document.getElementsByClassName("paragraph")[1];
console.log(secondParagraph);
secondParagraph.innerText += " You should try!";

let secondParagraphChanged = document.getElementsByClassName("anotherDiv");
let secondParagraphChangedText = secondParagraphChanged.lastElementChild;
console.log(secondParagraphChangedText);

let changedText = document.querySelector("text");
changedText.innerText += " changing their text.";
console.log(changedText);

let headingOne = document.getElementsByTagName("h1")[1];
console.log(headingOne);
headingOne.innerText = "It is about DOM!"

let headingLast = document.querySelector("h3");
headingLast.innerText = "Practise the exercises!";
console.log(headingLast);