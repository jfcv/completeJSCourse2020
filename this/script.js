//when dealing with Local(function) Execution Context
// the keyword this refers to the local context -> this === person in this case

var person = {
  firstname: 'John',
  lastname: 'Smith',
  getFullname: function() {
    //prints the name
    console.log(this.firstname + ' ' + this.lastname);

    let that = this; //passing the keyword 'this' which is a pointer to the object 'person' to another pointer 'that'
    function greet() {
      console.log('Hi ' + that.firstname);
    }

    greet();

  }
}

var person1 = {
  firstname: 'Nick',
  lastname: 'Doe'
}

person1.getFullname = person.getFullname; //awesome !!

person.getFullname();

person1.getFullname(); //borrowing the method from the first object 'person'
