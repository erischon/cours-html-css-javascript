/*
 - Create a variable named "entryForm" and use the document.getElementById method
   to make its value the entryForm from our HTML document.
*/

const entryForm = document.getElementById("entryForm")
var entriesSection = document.getElementById("entries")
const entryTextbox = document.getElementsByClassName("entry-textbox")

/*
 - Add an event listener to the entryForm variable that prevents the page from
   reloading whenever the submit button is clicked.
*/

function addEntryToDom(event) {
    event.preventDefault();
}

entryForm.addEventListener('submit', addEntryToDom)

/*
    create a new variable named "entriesSection" and assign it
    a value of the HTML section we just created
*/

