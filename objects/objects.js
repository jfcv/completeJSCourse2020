let person = {
  firstname: 'John',
  lastname: 'Smith',
  age: 27,
  daugther: {
    name: 'Mary',
    age: 5
  },
  myFunc: function() {
    console.log('Hello World');
  }
};

console.log(person);
//calling the function
person.myFunc();
