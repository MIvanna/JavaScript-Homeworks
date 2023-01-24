/*Write a JavaScript programm called PhoneBook. 
You should have three input fields firstName,lastName and phoneNumber.

After entering the values into each of them, on clicking on a “Save” button, 
you should display the newly added contact in a table below the inputs.
Make sure the user is entering an appropriate values in the fields!

BONUS NOT DONE
Bonus: Add column with delete and edit button so that you can 
edit or delete a contact! Try to save the newly added contact 
as an object (literal or construcotr function its up to you) 
and add it to an array!*/

let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let phoneNumberInput = document.getElementById("phoneNumber");
let resultsDiv = document.getElementById("results");
let saveBtn = document.getElementById("saveBtn");

let table = document.getElementsByTagName("table")[0];

let arrayOfContacts = [];


let id = 0;
let idToEdit = null;


function idToAdd() {
    id += 1;
    return id;
}

function PhoneBook(id, firstName, lastName, phoneNumber) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}

saveBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let isEditing = false;
    if (firstNameInput.value === "" || lastNameInput.value === "" || phoneNumberInput.value === "") {
        alert("Please insert valid information!")
        return
    } else {
        for (let i = 0; i < arrayOfContacts.length; i++) {
            if (arrayOfContacts[i].id === idToEdit) {
                arrayOfContacts[i].firstName = firstName.value;
                arrayOfContacts[i].lastName = lastName.value;
                arrayOfContacts[i].phoneNumber = phoneNumber.value;
    
                isEditing = true;
            }
        }
        if (isEditing === false) {
            let contact = new PhoneBook(idToAdd(), firstNameInput.value, lastNameInput.value, phoneNumberInput.value)
            arrayOfContacts.push(contact);
        }
    }
    
    printing(arrayOfContacts, table)
    clearInputs()

    isEditing = null; ///
})

function clearInputs() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    phoneNumberInput.value = "";
}

//printing function---------
function printing(contacts, elementToPrintIn) {
    elementToPrintIn.innerHTML = "";

    for (let i = 0; i < contacts.length; i++) {
        elementToPrintIn.innerHTML +=
            `
    <tr>
        <td> ${contacts[i].firstName}</td> <br/>
        <td> ${contacts[i].lastName} </td> <br/>
        <td> ${contacts[i].phoneNumber}</td> <br/>
        <td><button value="${contacts[i].id}" class="btn btn-outline-secondary btn-sm" onclick="editing(this, arrayOfContacts)">Edit</button></td> 
        <td><button value="${contacts[i].id}" class="btn btn-outline-secondary btn-sm" onclick="deleting(this, arrayOfContacts)">Delete</button></td> <br/>
    </tr>
    `

    }
}

//deleting function-------
function deleting(target, contacts) {
    console.log("Deleting")
    console.log(target)


    let newContactsArray = [];

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].id !== Number(target.value)) {
            newContactsArray.push(contacts[i])
        }
    }
    console.log("Remaining: ", newContactsArray)
    arrayOfContacts = newContactsArray;
    printing(arrayOfContacts, table)
}
//editing function--------
function editing(target, contacts) {

    let contactToBeEdited = {};

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].id === Number(target.value)) {
            contactToBeEdited = contacts[i]
        }
    }

    firstName.value = contactToBeEdited.firstName;
    lastName.value = contactToBeEdited.lastName;
    phoneNumber.value = contactToBeEdited.phoneNumber;
    idToEdit = contactToBeEdited.id;

}








































/*
let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let phoneNumberInput = document.getElementById("phoneNumber");
let form = document.getElementById("form");
let results = document.getElementById("results");
let table = document.getElementsByTagName("table")[0];

let arrayOfContacts = [];

let id = 0;

function idToAdd(){
    id += 1;
    return
}

function PhoneBook(id, firstName, lastName, phoneNumber) {
    this.id = id;
    this.firstName = firstName
    this.lastName = lastName
    this.phoneNumber = phoneNumber
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let contact = new PhoneBook(idToAdd(), firstNameInput.value, lastNameInput.value, phoneNumberInput.value)
    arrayOfContacts.push(contact)
    console.log(contact)
    printingContacts(arrayOfContacts, table);
})


function createTable() {
    let table = document.createElement("table");

    let tr = document.createElement("tr")
    let trText = document.createTextNode(`First Name: ${firstNameInput.value}`)
    firstNameInput.value = "";
    tr.appendChild(trText)
    table.appendChild(tr)

    function printingContacts(contact, elementToPrintIn) {
        elementToPrintIn.innerHTML = "";

        for (let i = 0; i < contact; i++) {
            elementToPrintIn.innerHTML +=
            `
            <tr>
                <td>First Name: ${ firstNameInput.value } </td>
                <td>Last Name: ${ lastNameInput.value } </td>
                <td>Phone Number: ${ phoneNumberInput.value } </td>
                <td><button id="edit")>Edit</button></td>
                <td><button value="${contact[i].id}" id="delete" onclick="deleting(this, arrayOfContacts">Delete</button></td>
            </tr>
            `
        }


        table.style.borderBottom = "1px solid grey"
    }*/
// }
/*
    let tr1 = document.createElement("tr")
    let trText1 = document.createTextNode(`Last Name: ${lastNameInput.value}`)
    lastNameInput.value = "";
    tr1.appendChild(trText1)
    table.appendChild(tr1)

    let tr2 = document.createElement("tr")
    let trText2 = document.createTextNode(`Phone Number: ${phoneNumberInput.value}`)
    phoneNumberInput.value = ""
    tr2.appendChild(trText2)
    table.appendChild(tr2)

    let tr3 = document.createElement("tr")
    let btnEdit = document.createElement("button")
    let trTextEdit = document.createTextNode("Edit")
    btnEdit.setAttribute("id", "edit")
    let btnDelete = document.createElement("button")
    let trTextDelete = document.createTextNode("Delete")
    btnDelete.setAttribute("id", "delete")

    tr3.appendChild(btnDelete)
    btnDelete.appendChild(trTextDelete)
    tr3.appendChild(btnEdit)
    btnEdit.appendChild(trTextEdit)
    table.appendChild(tr3)

    btnDelete.addEventListener("click", function(e){
        e.stopPropagation()
        deleting(this, arrayOfContacts)
    })
    

    table.style.borderBottom = "1px solid grey"
    results.appendChild(table)
}  */
/*
function deleting(target, contacts){
    console.log("Deleting")
    console.log(target)

    let newContactsArray = [];

    for(let i = 0; i < contacts; i++){
        if(contacts[i].id !== target.value){
            newContactsArray.push(contacts[i])
        }
    }
    arrayOfContacts = newContactsArray;
}

function clearInputs() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    phoneNumberInput.value = "";
} 
*/
















/*
function createContacts() {
let trFirstName = document.createElement("tr");
let tdFirstName = document.createElement("td")
let tdTextFirstName = document.createTextNode(`${firstNameInput.value}`)
tdFirstName.appendChild(tdTextFirstName);
trFirstName.appendChild(tdFirstName)
table.appendChild(trFirstName)

let tdLastName = document.createElement("td")
let tdTextLastName = document.createTextNode(`${lastNameInput.value}`)
tdLastName.appendChild(tdTextLastName)
}
*/

/*
function printingContacts(contact, elementToPrintIn) {
    elementToPrintIn.innerHTML = "";

    for (let i = 0; i < contact; i++) {
        elementToPrintIn.innerHTML +=
        `
        <tr>
            <td>First Name: ${ firstNameInput.value } </td>
            <td>Last Name: ${ lastNameInput.value } </td>
            <td>Phone Number: ${ phoneNumberInput.value } </td>
            <td><button id="edit">Edit</button></td>
            <td><button id="delete">Delete</button></td>
        </tr>
        `
    }


    table.style.borderBottom = "1px solid grey"
}

*/