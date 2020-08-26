// innerHTML - security risk
// innerText - "expensive"
// textContent

// var person = {name: "Joe"}
// person.name = "Jim"
// console.log(person)

/*
 * 1. Select the h1 element
 * 2. Save the h1 element's text to a variable
 * 3. Change the paragraph element's text to be the same as the text inside the h1
 */

// var documentH1 = document.querySelector("h1").textContent
// document.querySelector("p").textContent = documentH1

var text = document.querySelector("#header").textContent
document.querySelector("#paragraph").textContent = text
