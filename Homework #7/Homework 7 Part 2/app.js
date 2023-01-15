/*HOMEWORK PART 2
Write a JavaScript program to display the reading status of some book. 
The object should have the next properties: title, author, readingStatus 
and a method that will return info depending on the readingStatus e.g.

Already read 'The Robots of dawn' by Isaac Asimov. (if true)
You still need to read 'Mockingjay: The Final Book of The Hunger Games' 
by Suzanne Collins. (if false).

BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML */

let nameInput = document.getElementById("name");
let authorInput = document.getElementById("author");
let bookRead = document.getElementById("read");
let button = document.getElementsByTagName("button")[0]

function Book(name, author, readingStatus){
    this.name = name,
    this.author = author,
    this.readingStatus = readingStatus

    this.read = function(readingStatus){
        if(bookRead.checked === true){
            console.log(`Already read ${this.name} by ${this.author}`)
        } else {
         console.log(`You still need to read ${this.name} by ${this.author}`)   
        }
    }
    return this.read()

}


button.addEventListener('click', function(e){
    e.preventDefault();

    let newBook = new Book(nameInput.value, authorInput.value, bookRead.value )
    console.log(newBook);
})
