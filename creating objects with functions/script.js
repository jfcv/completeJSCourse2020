function createPerson(firstname, lastname) {

  let newPerson = {
    'firstname': firstname,
    'lastname': lastname
  }

  return newPerson;
}

let person1 = createPerson('Nick', 'Doe');
let person2 = createPerson('Joe', 'Dim');

console.log(person1, person2);
