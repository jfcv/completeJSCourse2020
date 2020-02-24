let a = {};
let b = new Object();

console.log(a);
console.log(b);

/* adding a new property to the built-in global object function
it means modifying its prototype */
Object.prototype.greet = "Hello";

/*so when the objects 'a' & 'b' are created they call the object prototype and
also get access to the new property greet */
