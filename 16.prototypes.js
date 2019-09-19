function Name(firstName) {
    this.firstName = firstName;
}

Name.prototype.fullName = function (lastName) {
    console.log(this.firstName, lastName)
}

var me = new Name("Daniel");
me.fullName("Afonso")

var batman = new Name("Bruce");
batman.fullName("Wayne")