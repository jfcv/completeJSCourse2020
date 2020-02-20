let list = document.querySelectorAll('li, #hide-list');

console.log(list);

Array.from(list).forEach(li => {
  console.log(li);
  li.textContent = 'Hello World!';
});
