let person = {
  firstname: 'John',
  lastname: 'Smith',
  age: 27,
  daugther: {
    name: 'Mary',
    age: 5
  },
  myFunc: function(daughterName, fatherName, daughterAge) {
    console.log(daughterName+ ' is the daughter of ' +fatherName+ ' and she is ' +daughterAge+ ' years old.');
  }
};

console.log(person);
//calling the function
person.myFunc(person.daugther.name, person.firstname, person.daugther.age);
