let person = new Object();

let job = 'profession';

person.firstname = 'John';
person['lastname'] = 'Smith';
person[job] = 'Instructor';

console.log(person);
console.log(person.firstname);
console.log(person['lastname']);
console.log(person[job]);
