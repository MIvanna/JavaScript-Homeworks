/* HOMEWORK PART 1
CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
name
kind
speak (method)
this method will take one parameter and will print in the console 
a message: e.g. dog.speak(“hey bro!!!”) 
will log in the console “Dog says: ‘Hey bro!!!’”
Bonus: enter the values from prompt or from HTML inputs
*/


let animal = {
    name: prompt("Enter a name for an animal:"),
    kind: prompt("What kind is this animal?"),

    speak: function(animalSays){
        animalSays = prompt("How should the animal greet you? ")
        console.log(`${this.name} the ${this.kind} says: ${animalSays}`)
    }
} 
console.log(animal)
console.log(animal.speak("Heyy"))