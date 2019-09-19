var name = {
    firstName: "Daniel",
    fullName(lastName) {
        console.log(this.firstName, lastName)
    }
}

name.fullName("Afonso")



function fullName(lastName) {
    console.log(this.firstName, lastName)
}

function otherFunction() {
    const myContext = {
        firstName: "Daniel"
    }
    fullName.call(myContext, "Afonso");
}

otherFunction()