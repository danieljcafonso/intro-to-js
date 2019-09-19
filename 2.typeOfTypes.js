
typeof 42 // number

typeof "Daniel" // string

typeof true // boolean

typeof undefined // undefined

typeof { user: "Daniel" } // object

typeof null // object

typeof [1, 2, 3] // object


// ----------------------------------------- //
var v;
typeof v; // undefined

v = "1";
typeof v; // string

v = 2;
typeof v; // number

v = true
typeof v; // boolean

v = {}
typeof v; // object

v = Symbol();
typeof v; // symbol

// ----------------------------------------- //

typeof doesntExist; // undefined

v = null;
typeof v; // object

v = function () { };
typeof v; // function

v = [1, 2, 3];
typeof v; // object
