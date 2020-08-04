// Assignment - Arrays and Loops Part 2

// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.

// Optional bonus challenges for this problem
// #1 - Log to the console a personalized message like:
// Mike is not old enough to see the movie

// #2 - Check to see if the movie goer is a male or female for an even more personalized message.
// Mike is not old enough to see the movie, don't let HIM in.
// or
// Madeline is old enough. SHE'S good to see the movie.

var movieGoers = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ];

  for(var i = 0; i < movieGoers.length; i++) {
    if( movieGoers[i].age >= 18 ) {
        if( movieGoers[i].gender == "male") {
            console.log( movieGoers[i].name + " is old enough to see the movie. HE's good to see the movie." )
        } else {
            console.log( movieGoers[i].name + " is old enough to see the movie. SHE'S good to see the movie." )
        }
    } else {
        if( movieGoers[i].gender == "male") {
            console.log( movieGoers[i].name + " is not old enough to see the movie, don't let HIM in." )
        } else {
            console.log( movieGoers[i].name + " is not old enough to see the movie, don't let HER in." )
        }
    }
  }