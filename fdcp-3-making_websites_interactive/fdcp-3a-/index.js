var myButton = document.getElementById("btn")
var myTitle = document.getElementById("title")
var counter = 0

myButton.addEventListener("click", function(){
    console.log('counter at line 6: ', counter)
    // add one line
    counter = 2
    console.log('counter at line 9: ', counter)
    // don't change this 
    myButton.textContent = counter
})