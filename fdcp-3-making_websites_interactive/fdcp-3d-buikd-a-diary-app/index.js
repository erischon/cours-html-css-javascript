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
    const entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox[0].value
    entriesSection.appendChild(entryDiv);

        /*
    clear the entry textbox whenever the submit button is clicked
    */

   entryTextbox[0].value = '';
}

entryForm.addEventListener('submit', addEntryToDom)

/*
    create a new variable named "entriesSection" and assign it
    a value of the HTML section we just created
*/

/*
  - Inside the addEntryToDom function, create a new variable named entryDiv.
  - Use the document.createElement method to create an html Div and make it the
      new variable's value.
  - On a new line, give the new div a class of 'single-entry'.
  - Change the div's innerText property to the user's input from the textbox
  - Use the appendChild method to add the new div to the entriesSection
      variable created on line 2
*/



