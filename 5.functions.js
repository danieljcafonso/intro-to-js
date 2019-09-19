function logMessage(message) {
    console.log(message);
}
logMessage("Potato")

function timeRemaining(timeElapsed, endTime) {
    return endTime - timeElapsed;
}

let timeLeft = timeRemaining(300, 500);
console.log(timeLeft)


const hello = (message) => {
    console.log(message)
}
hello("Hello World")


const helloWorld = (message = "Hello World") => {
    console.log(message)
}
helloWorld()



function willCallCallback(callback) {
    callback()
}

willCallCallback(() => {
    console.log("I'm a callback function")
}
)