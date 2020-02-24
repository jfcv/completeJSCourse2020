function a() {}

let b = {};

console.log(a.prototype);
console.log(b);

/*when using the live console on the browser [a.prototype]
it loads the function prototype and within the function prototype
it has an internal property called the object property
that is the global object prototype
*/
