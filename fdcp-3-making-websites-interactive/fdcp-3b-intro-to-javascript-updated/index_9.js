/////////////////////
// Logic Operators //
/////////////////////

// Another category in the operator family

// 3 main logic operators

var username = "joe"
var password = "joe123"

// And
// &&

if(username === "joe" && password === "joe123"){
    console.log("Access granted")
} else {
    console.log("Username or password are incorrect")
}

// Or
// ||

if(username === "" || password === ""){
    console.log("Please provide username and password")
} else {
    console.log("Both were provided")
}

// Negation
// !

if(!username || !password){
    console.log("Please provide username and password")
} else {
    console.log("Both were provided")
}


// Challenge

if(!username || !password){
    console.log("Please provide username and password")
} else {
    if(username === "jo" && password === "joe123"){
        console.log("Access granted")
    } else {
        console.log("Username or password are incorrect")
    }
}

