const names = ['Karl', 'John', 'Steve'];
const people = [{ name: 'Karl', location: 'UK' }, { name: 'Steve', location: 'US' }];

// looping over names using both for & for of
for (let i = 0; i < names.length; i++) {
    // console.log(names[i]);
}

for (const name of names) {
    // console.log(name);
}

// looping through an array of objects using both for and for of
for (let i = 0; i < people.length; i++) {
    // console.log(people[i].name);
    // console.log(people[i].location);
}

for (const person of people) {
    console.log(person.name);
    console.log(person.location);
}