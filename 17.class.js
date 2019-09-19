class Name {
    constructor(firstName) {
        this.firstName = firstName;
    }
    fullName(lastName) {
        console.log(this.firstName, lastName);
    }
}

var me = new Name("Daniel");
me.fullName("Afonso")

var batman = new Name("Bruce");
batman.fullName("Wayne")