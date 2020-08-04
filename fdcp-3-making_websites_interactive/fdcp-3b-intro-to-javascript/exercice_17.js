var user = {
    fname: "Eri",
    lname: "Schön",
    favoriteRecipe: ["Kung Pao Chicken", "Ratatouille", "Poulet rôti"],
    numberOfRecipe: 5,
    myFavoriteRecipe: function() {
        return this.favoriteRecipe[1]
    },
}

favorite = user.myFavoriteRecipe
console.log( favorite )
