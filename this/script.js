//when dealing with Local(function) Execution Context
// the keyword this refers to the local context -> this === person in this case

var person = {
  firstname: 'John',
  lastname: 'Smith',
  getFullname: function() {
    return this.firstname + ' ' + this.lastname;
  }
}

console.log(person.getFullname());
