//Assignment - If Statement Olympics - Bronze Medal

//1 - Using the below object, write an if statement that prints <theNameOfThePersonInObject> is allowed to go to the movie if they are old enough (18 or older), and the opposite if they are not older than 18.

//2 - Using that same object, only allow them into the movie if their name starts with "B"

//3 - Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.


var person = {
    name: "Bobby",
    age: 12
  }

  // 1

  if (person.age >= 18) {
    console.log( person.name + ", you can go to the movie.")
  } else if (person.age < 18) {
    console.log( person.name + ", you can't go to the movie.")
  } else {
    console.log( person.name + " But how old are you ?!")
  }

  // 2

  if (person.name[0] == "B") {
    console.log( person.name + ", you can go to the movie." )
  } else {
      console.log( person.name + ", you can't go to the movie." )
  }

  // 3

  if (person.age >= 18 && person.name[0] == "B") {
      console.log( person.name + ", you can go to the movie." )
  } else {
      console.log( person.name + ", you can't go to the movie.")
  }