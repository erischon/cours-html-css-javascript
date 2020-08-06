// innerHTML vs textContent
var myList = document.getElementById("my-list")
// console.log(myList.textContent)
// console.log(mylist.innerHTML)

myList.innerHTML += "<li>3</li>"

// document.body.innerHTML += "<p>V School Rocks !</p>"

document.body.innerHTML += "<p id='paragraph'>V School Rocks !</p>"
document.getElementById("paragraph").style.fontSize = "32px"