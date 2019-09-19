var names = ["Daniel", "André", "Nuno", "Rita"]

for (let name of names) {
    console.log(name)
}

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

while (names.length > 0) {
    let name = names.shift();
    console.log(name)
}