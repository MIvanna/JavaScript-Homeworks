/*CREATE A DYNAMIC TABLE
Write a Javascript function that will dynamiclly create a table
User should input the number of Colums and Rows
In every table cell print which row and column it is
(ex. Row-3 Column-1)
Don't forget to use google! :) */

//rabote samo so odnapred stavena Value vo html, preku input ne saka


let myForm = document.getElementById("myForm")

let rowsNumberInput = document.getElementById("rows").value;
let columnsNumberInput = document.getElementById("columns").value;

let button = document.getElementsByTagName("button")[0];


myForm.addEventListener("submit", function(e){
    e.preventDefault();

    let table = document.createElement("table")
    for(let i = 1; i < rowsNumberInput; i++){
        let tableRow = document.createElement("tr")

        for(let j = 1; j < columnsNumberInput; j++){
            let tableData = document.createElement("td")
            let text = document.createTextNode(`Row ${i}, Column ${j}`)
            tableData.appendChild(text)
            tableRow.appendChild(tableData)   
        }
        table.appendChild(tableRow)
    }
    document.body.appendChild(table)
    table.style.border = "1px solid olive";
}) 