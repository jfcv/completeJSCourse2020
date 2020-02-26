var person = {
  firstname: 'John',
  lastname: 'Smith',
  fullname: function(age, job) {
    return this.firstname + ' ' + this.lastname;
  }
};

let definePerson = function(age, job) {
  console.log(this.fullname() + ' is ' + age + ' years old and is a ' + job);
};

definePerson.call(person, 28, 'Developer');

definePerson.apply(person, [30, 'Designer']);

let getPerson = definePerson.bind(person, 35, 'musician');
getPerson(); //invoking the function

//using call for modifying the properties inside an object
let nick = {
  firstname: 'Nick',
  lastname: 'Doe'
};

console.log(person.fullname.call(nick));
