

let onlyExistHere = "I only exist on this scope"
function something() {
    console.log(onlyExistHere)
}
something()






// -----------------

function ask(question) {
    return function checkClosure() {
        console.log(question)
    }
}

var question = ask("Something")
question();