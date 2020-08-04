// Assignment - Loops and Arrays Practice

//#1
//Loop through the following array and count how many "computer" there are. Log the final count:

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp","stapler", "computer",  "computer"];
var computer = 0

for( var i = 0; i < officeItems.length; i++ ) {
    if( officeItems[i] === "computer" ) {
        computer += 1
    }
}

console.log( computer )