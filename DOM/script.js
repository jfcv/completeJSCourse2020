let div = document.querySelector('div.wrapper');
let header = document.querySelector('header');
let h2 = document.querySelector('header h2');

div.addEventListener('click', function() {
  console.log('From div');
});

header.addEventListener('click', function() {
  console.log('From header');
});

h2.addEventListener('click', function() {
  console.log('From h2');
});

//this code probes the sequences in which the different events executes
