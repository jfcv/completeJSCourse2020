(function(name) {
  console.log('Hello ' + name);
})('John');

let a  = function() {
  console.log('Hi');
  return 'Hello'; //the variable a takes the value of the returning value, despite what the function does
}();

console.log(a);
