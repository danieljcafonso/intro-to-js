// string concatenation - implicit coercion

var message = "There are "
var numOfStudents = 19;
var message2 = " students"
console.log(message + numOfStudents + message2)

// string concatenation

var message = "There are "
var numOfStudents = String(19);
var message2 = " students"
console.log(message + numOfStudents + message2)


// boolean - implicit
if ("6") {
    console.log("Hello")
}
var names = ["Daniel", "Afonso"]
while (names.length) console.log(names.pop())



// boolean - explicit
if (!!"6") {
    console.log("Hello")
}

var names = ["Daniel", "Afonso"]
while (names.length > 0) console.log(names.pop())

// implicit can be good

if ("1" < "2") {
    console.log("Hello")
}