var num = "1";
var num2 = 1

console.log(num == num2)
console.log(num === num2)

console.log(String([]) == "0")

var day = { holiday: null }
var day2 = {}

if (
    (day.holiday === null || day.holiday === undefined) &&
    (day2.holiday === null || day2.holiday === undefined)
) {
    console.log("Hello")
}

if (day.name == null && day2.name == null) {
    console.log("null and undefined are coerced to false so false == false is true")
}