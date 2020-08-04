// Create an object with one of each data type including at least 1 method.
// Call the method to make it execute.
    // The method must use the keyword "this" to reference some part of the object.
    
var person = {
    name: "Toto",
    age: "18",
    friends: ["tata", "titi", "tutu"],
    address: {
        street: "123 garden street",
        city: "Paris"
    },
    cry: "AOUHHH !",
    heSay: function(){
        console.log( this.cry )
    },
}

person.heSay()

