var myButton = document.getElementById("btn")
var myTitle = document.getElementById("title")
var counter = 0

myButton.addEventListener("click", function () {
    // console.log("Button was clicked!")
    myTitle.textContent = "I'm learning javascript"
    myButton.textContent = counter
})