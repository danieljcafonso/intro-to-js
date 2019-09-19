let bestBatman = "Ben Affleck";

{
    console.log(`I'm called magically and ${bestBatman} is the best Batman`);
    let onlyExistHere = "I only exist on this scope"

    function something() {
        console.log(onlyExistHere)
    }
    something()
};

console.log(`I'm called magically and ${bestBatman} is the best Batman`);




// -----------------

function ask(question) {
    return function checkClosure() {
        console.log(question)
    }
}

var question = ask("Something")
question();