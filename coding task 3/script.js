//defining elements needed
let btn = document.getElementById('add-btn');
let input = document.getElementById('add-input');
let list = document.getElementById('list');
let form = document.getElementById('add');
let ul = document.querySelector('ul');


//adding items to the list
btn.addEventListener('click', function(e){

    //prevents the page to reload, and probably other pre-settings
    e.preventDefault();

    //printing the clicks on the console
    console.log('button "Add" clicked ');

    //appends the new item to the list only if the form is not empty
    if (input.value !== '') {
      //create a new item on the list
      let newItem = document.createElement('li');

      //p element 1
      let pElement1 = document.createElement('p');
      let text = document.createTextNode(input.value);
      pElement1.appendChild(text);

      //p element 2
      let pElement2 = document.createElement('p');

        // i element 1
        let iElement1 = document.createElement('i');
        iElement1.setAttribute('class', 'fa fa-pencil-square-o');
        pElement2.appendChild(iElement1);

        // i element 2
        let iElement2 = document.createElement('i');
        iElement2.setAttribute('class', 'fa fa-times');
        pElement2.appendChild(iElement2);

      //input element
      let inputElement = document.createElement('input');
      inputElement.setAttribute('class', 'edit-note');
      inputElement.setAttribute('type', 'text');

      //appends HTML elements to the item
      newItem.appendChild(pElement1);
      newItem.appendChild(pElement2);
      newItem.appendChild(inputElement);

      //testing ..
      console.log(newItem);

      //appends the new item to the list
      list.appendChild(newItem);
    }
});


//editing and deleting items
ul.addEventListener('click', function(e){

  if (e.target.classList[1] == 'fa-pencil-square-o') {

    //hiding the parent node
    let parentPar = e.target.parentNode;
    parentPar.style.display = 'none';

    //selecting siblings
    let note = parentPar.previousElementSibling;
    let input = parentPar.nextElementSibling;

    //displaying the input
    input.style.display = 'block';
    input.value = note.textContent;

    //pointers to the ul & li's elements
    liItem = input.parentNode;
    ulItem = input.parentNode.parentNode;

    //editing event
    input.addEventListener('keypress', function(e){
      if (e.keyCode === 13) {
        if (input.value !== '') {
          note.textContent = input.value;
          parentPar.style.display = 'block';
          input.style.display = 'none';
        } else {
          ulItem.removeChild(liItem);
        }
      }
    });

  } else if (e.target.classList[1] == 'fa-times') {

    //pointers to the ul & li items
    ulItem = e.target.parentNode.parentNode.parentNode;
    liItem = e.target.parentNode.parentNode;

    //removing the element
    ulItem.removeChild(liItem);
  }

});
