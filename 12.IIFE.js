// IIFE - Immediately Invoked Function Expression

var bestBatman = "Ben Affleck";

(function fast() {
    var bestBatman = "Christian Bale"
    console.log(`I'm called magically and ${bestBatman} is the best Batman`);
})();

console.log(`I'm called magically and ${bestBatman} is the best Batman`);

