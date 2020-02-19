var person = {
  firstname: 'John',
  lastname: 'Smith',
  getFullname: function() {
    return person.firstname + ' ' + person.lastname;
  }
}

console.log(person.getFullname());
