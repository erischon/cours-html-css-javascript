/*
 - Create a variable named "entryForm" and use the document.getElementById method
   to make its value the entryForm from our HTML document.
*/

const entryForm = document.getElementById("entryForm")
var entriesSection = document.querySelector("#entries")
const entryTextbox = document.querySelector(".entry-textbox")
const entriesNav = document.querySelector('.entries-nav')

/*
 - Add an event listener to the entryForm variable that prevents the page from
   reloading whenever the submit button is clicked.
*/

function addEntryToDom(event) {
    event.preventDefault();
    const entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox.value
    entryDiv.style.display = 'none';
    entriesSection.appendChild(entryDiv);

        /*
    clear the entry textbox whenever the submit button is clicked
    */

   entryTextbox.value = '';

   const displayEntryButton = document.createElement('button');
   displayEntryButton.className = 'display-entry-button';
   displayEntryButton.innerText = 1;
   entriesNav.appendChild(displayEntryButton);
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



