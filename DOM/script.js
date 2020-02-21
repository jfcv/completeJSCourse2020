//javascript engine works executing first all the codes and then listening for Events

let h2 = document.querySelector('header h2');

h2.addEventListener('click', function() {
  console.log('From click event');
});

function a() {
  let delay = 3000 + new Date().getTime();
  while(new Date() < delay);
  console.log('From function a');
}

a();

console.log('Global code is executed');
