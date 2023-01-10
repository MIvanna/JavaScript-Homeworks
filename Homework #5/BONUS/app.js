//   1   Ask for the name of the recipe ====DONE
//   2   Ask for the number of ingredients for the recipe ===DONE
//   3   Ask the user for the name of every ingredient
// number of li elements = numberOfIngredients;  i < numberOfIngredients
//for every inredient ask the name and save it in array
//   4   Print the name of the recipe in the HTML as a heading ===DONE

let heading = document.getElementById("heading");
let ul = document.getElementById("list")
//let table = document.getElementById("table")
let nameOfTheRecipe = prompt("What is the name of your recipe?");
let numberOfIngredients = parseInt(prompt("How many ingredients do we need for the recipe?"));

//creating elements in unordered list
/*
    for (i = 0; i < numberOfIngredients; i++) {
        let allIngredients = prompt("What is the name of every ingridient?");
        let li = document.createElement("li");
        let liText = document.createTextNode(allIngredients)
        li.appendChild(liText)
        ul.appendChild(li)
    }
*/
heading.innerText = nameOfTheRecipe;

//creating elements in table 
for (i = 0; i < numberOfIngredients; i++) {
    let allIngredients = prompt("What is the name of every ingridient?");

    let table = document.createElement("table");
    let tr = document.createElement("tr");
    let trText = document.createTextNode(allIngredients)
    tr.appendChild(trText)
    table.appendChild(tr)
    document.body.appendChild(table)
}  