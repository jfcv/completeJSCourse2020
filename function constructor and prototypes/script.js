function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.getFullName = function() {
  return this.firstname  + ' ' + this.lastname;
}

Person.prototype.greet = 'Hello from prototype object';

let person1 = new Person('John', 'Smith');
let person2 = new Person('Vick', 'Doe');

console.log(person1.getFullName());
console.log(person2.getFullName());
