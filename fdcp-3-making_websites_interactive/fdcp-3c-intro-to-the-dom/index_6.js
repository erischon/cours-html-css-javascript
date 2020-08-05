// querySelector
// Select a single element from the page. (Returns the first element it finds that matches the query)

// var result = document.querySelector("#favorite-things")
// document.write(result)

// var result = document.querySelectorAll("#favorite-things")
// document.write(result)

// var result = document.querySelector("ol#favorite-things > li")
// document.write(result)


// querySelectorAll
// Select all elements from the page that match the query.

var result = document.querySelectorAll("ol#favorite-things > li")
document.write(Array.from(result))

for (var i = 0; i< result.length; i++) {
    result[i].textContent = "** REDACTED **"
}