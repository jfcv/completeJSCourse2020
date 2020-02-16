let person = {
  firstname: 'John',
  lastname: 'Smith',
  age: 27,
  daugther: {
    name: 'Mary',
    age: 5
  },
  myFunc: function(par) {
    console.log(par.daughterName+ ' is the daughter of ' +par.fatherName+ ' and she is ' +par.daugtherAge+ ' years old.');
  }
};

console.log(person);
//calling the function
person.myFunc({daughterName: 'Jessy', fatherName: 'Michael', daugtherAge: 5});
