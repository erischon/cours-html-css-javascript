// Object.keys(window).forEach(key => {
//     if (/^on/.test(key)) {
//         window.addEventListener(key.slice(2), event => {
//             console.log(event.type);
//         });
//     }
// });

// var button = document.getElementById("button")
// button.addEventListener("click", function() {
//     console.log("The button was clicked!")
// })

var button = document.getElementById("button")

function handleButtonClick() {
    document.write("The button was clicked!")
}

button.addEventListener("click", handleButtonClick)
button.removeEventListener("click", handleButtonClick)

/**
 * Challenge:
 * 
 * Look up some common HTML/JS events and set up your page to listen for that event.
 */

document.getElementById("header").addEventListener("dblclick", function() {
    // console.log("The header was double clicked!")
    document.body.style.backgroundColor = "firebrick"
})