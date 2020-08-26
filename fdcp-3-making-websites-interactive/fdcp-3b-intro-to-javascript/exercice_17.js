// var user = {
//     fname: "Eri",
//     lname: "Schön",
//     favoriteRecipe: ["Kung Pao Chicken", "Ratatouille", "Poulet rôti"],
//     numberOfRecipe: 5,
//     myFavoriteRecipe: function() {
//         return this.favoriteRecipe[0]
//     },
// }

// favorite = user.myFavoriteRecipe
// console.log( favorite )


var socialBook = {
    name: "John",
    age: 28,
    city: "New York",
    cars: ["BMW", "Mercedes", "Skoda", "Toyota"],
    introduceMyself: function() {
        return "Hi my name is " + this.name + " and I'm from " + this.city;
    },
    education: [
        {
            school: "London College",
            degree: "IT programming",
            startingYear: 2005,
            finishingYear: 2010,
            teachers: [
                {
                    name: "David",
                    age: 45,
                    specialty: "Databases"
                },
                {
                    name: "Josh",
                    age: 37,
                    specialty: "Networks"
                }
            ]
        },
        {
            school: "Harvard",
            startingYear: 2010,
            finishingYear: 2015,
            degree: "Bachelor in Computer Science",
            teachers: [
                {
                    name: "Mary",
                    age: 35,
                    specialty: "Machine Learning"
                },
                {
                    name: "Jane",
                    age: 32,
                    specialty: "English"
                }
            ]
        },
        {
            school: "MIT",
            startingYear: 2015,
            finishingYear: 2018,
            degree: "Masters in Computer Science",
            teachers: [
                {
                    name: "Terry",
                    age: 45,
                    specialty: "Game Development"
                },
                {
                    name: "Holy",
                    age: 38,
                    specialty: "Maths"
                }
            ]
        },
    ]
}