// Javascript Objects Part 2

var car = {
    type: "Honda",
    make: "Civic",
    wheels: 4,
    honkSound: "BLLEERRP",
    honk: function(){
        console.log( this.honkSound )
    }
}

// car.hasHadAccident = true
// console.log(car)

// Objects can hold functions - METHOD

car.honk()

// "this"