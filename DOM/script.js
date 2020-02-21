let newElement = document.createElement('button');

console.log(newElement);

let text = document.createTextNode('Click');

console.log(text);

newElement.appendChild(text);
newElement.setAttribute('style', 'display: block; margin: 10px auto; padding; 5px 10px; background: coral; color: #fff;')

console.log(newElement);

let form = document.getElementById('add');

//form.appendChild(newElement);

//insert an Element before something
form.insertBefore(newElement, form.children[0]);
