/*EXERCISE 5
Create a student registry form. The form should have:

First Name
Last Name
Age

The form should have a save button which will create a student 
object and add it to an array (students). 
        Log the array after every save to see the results in the console.
Bonus: Make the students appear in an unordered list in the page. */

let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let age = document.getElementById("age")
let studentForm = document.getElementById("form")
let btn = document.getElementById("btn");
let printStudents = document.getElementById("printStudents");

let students = []


function Student(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

btn.addEventListener("click", function(e){
    e.preventDefault()
    let newStudent = new Student(firstName.value, lastName.value, age.value)
    students.push(newStudent)
    console.log(newStudent)
    console.log(students)

    firstName.value = "";
    lastName.value = "";
    age.value = "";

    printStudents.innerHTML = "";
    for(let i = 0; i < students.length; i++){
        printStudents.innerHTML += 
        `<ul>
        <li>${students[i].firstName} ${students[i].lastName}, ${students[i].age} </li>
        </ul>
        `
    }
 
})

