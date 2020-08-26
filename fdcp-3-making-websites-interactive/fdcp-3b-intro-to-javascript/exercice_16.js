// 1. Write a function that returns the sum of any two numbers you give it.

function sum(n1, n2) {
    return n1 + n2
}

// 2. Write a function that takes a string such has "Joe" as an argument, and returns the string "Hello Joe"

function greeting(fname) {
    return "hello " + fname
}

// 3. Write a function that takes in a number as an argument, and returns the string "Even" if the number is even, and "Odd" if the number is odd.

function evenOdd(number) {
    var result = number % 2
    if(result === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

console.log( sum(3,5) )
console.log( greeting("toto") )
console.log( evenOdd(8) )