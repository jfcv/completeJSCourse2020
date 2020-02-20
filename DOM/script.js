let h2 = document.querySelector('header h2');

h2.className = 'changeBg';

h2.classList.add('changeFt');

//h2.classList.remove('changeBg');

h2.classList.toggle('changeBg'); // adds or removes the class, depending on if it was active or not

console.log(h2.classList);
