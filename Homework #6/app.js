/*CREATE A DYNAMIC TABLE
Write a Javascript function that will dynamiclly create a table
User should input the number of Colums and Rows
In every table cell print which row and column it is
(ex. Row-3 Column-1)
Don't forget to use google! :) */

let myForm = document.getElementById("myForm");
let tableDiv = document.getElementById("tableDiv");

let rowsNumberInput = document.getElementById("rows");
let columnsNumberInput = document.getElementById("columns");

let button = document.getElementsByTagName("button")[0];


button.addEventListener("click", function(e){
    e.preventDefault();
    tableDiv.innerHTML = "";
    let table = document.createElement("table")
    for(let i = 0; i < rowsNumberInput.value; i++){
        let tableRow = document.createElement("tr")

        for(let j = 0; j < columnsNumberInput.value; j++){
            let tableData = document.createElement("td")
            let text = document.createTextNode(`Row ${i+1}, Column ${j+1}`)
            tableData.appendChild(text)
            tableRow.appendChild(tableData)   
        }
        table.appendChild(tableRow)
    }
    tableDiv.appendChild(table)
    table.style.border = "1px solid olive";
}) 