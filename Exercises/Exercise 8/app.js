/*Write a JavaScript function called storyTeller(),   \/
that will take as an input parameters the input fields values from the html!
ex: storyTeller(who, what, when);
In the function, retrieve the current values of the form input elements, 
make a story from them, and output that in the story div 
(like "Example: Lancelot was a really strong knight in the middle age!") */

let nameInput = document.getElementById("name");
let professionInput = document.getElementById("profession");
let countryInput = document.getElementById("country");
let storyDiv = document.getElementById("story")
let form = document.getElementById("form")


form.addEventListener('submit', function (e) {
    e.preventDefault();
    let storyP = document.createElement("p");
    let storyText = document.createTextNode(`${nameInput.value} is ${professionInput.value} by profession, and comes from ${countryInput.value}.`)
    nameInput.value = "";
    professionInput.value = "";
    countryInput.value = "";
    storyP.appendChild(storyText);
    storyDiv.appendChild(storyP);
})