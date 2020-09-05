// Functions part 2

// function sum(num1, num2){
//     return num1 + num2
// }

// // Calling a function (execute a function)
// var result = sum(10, 25) // arguments
// console.log(result)

// function myFunc(data){
//     console.log(data)
// }

// myFunc(1)
// myFunc("hello")
// myFunc(true)
// myFunc([1,2 ,3, 4])
// myFunc({name: "joe"})

function loopThroughArr(array){
    
    for(var i = 0; i < array.length; i++){
        console.log(array[i])
    }
    
}

loopThroughArr([1, 2, 3, 4, 5, 6])