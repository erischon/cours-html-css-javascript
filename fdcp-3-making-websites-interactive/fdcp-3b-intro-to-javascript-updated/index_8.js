/////////////////////
// Truthy & Falsey //
/////////////////////

// All data in javascript have an inherently Truthy or Falsey value.

// true false
// "dave"

// if("dave"){
//     console.log("It is true!")
// }

// Falsey Values
 // 0
 // ""
 // null
 // undefined
 // false
 // NaN

// if(""){
//     console.log("It is true!")
// } else {
//     console.log("It is false!")
// }

// if([1, 2, 3, 4]){
//     console.log("It is true!")
// } else {
//     console.log("It is false!")
// }

// if(null){
//     console.log("It is true!")
// } else {
//     console.log("It is false!")
// }

var user = {
    name: "DAVE",
    email: null,
    friends: ["rick", "sarah"],
    address: {
        street: "123 street",
        city: "gotham"
    },
    id: "0",
    nickname: undefined
}