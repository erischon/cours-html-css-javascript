/////////////////////////////////////////
// Complex Data Types - Objects Part 2 //
/////////////////////////////////////////

// Objects: describe a peice of data in depth
// var larry = {
//     name: "larry",
//     age: 20,
//     friends: ["john", "lisa", "al"],
//     isPetOwner: true,
//     sayGreeting: function(){
//         console.log("Hello")
//     }
// }

// larry.sayGreeting()

// dot notation
// larry.age

// bracket notation
// larry["age"]

// Functions & Methods
    // Function: a type of data that allows us to execute specific code when/as needed
    // Method: A function that is a property of an object
    
// this keyword inside of an object refers to itself

// var larry = {
//     name: "larry",
//     age: 20,
//     friends: ["john", "lisa", "al"],
//     isPetOwner: true,
//     greeting: "Hello Friend!",
//     sayGreeting: function(){
//         console.log(this.greeting)
//     }
// }

// larry.sayGreeting()


// var object = {
//     key: "value",
    
// }


// Exercise

// Create an object that describes something of your choosing, like a car or animal.
// Give that object 5 key/value pairs that include all primitive and complex data types
// Give the object 1 method that uses the 'this' keyword to console log something from the object when called
// console.log 2 properties from the object, once with 'dot' notation and once with 'bracket' notation.

var car = {
    name: "T416",
    brand: "Toyota",
    kilometer: 100,
    find: ["paris", "London", "New-York"],
    isItNew: false,
    ask: "What do you want ?",
    asking: function() {
        console.log(this.ask)
    },
}

console.log(car.name)
car.asking()
console.log(car.isItNew)


// solution

var car = {
    model: "honda",
    wheels: 4,
    honkSound: "beerp",
    registeredDrivers: ['jane', 'john'],
    hasHadAccident: false,
    honk: function(){
        console.log(this.honkSound)
    }
}

console.log(car.model)
console.log(car["wheels"])
car.honk()