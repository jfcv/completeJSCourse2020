let icons = document.getElementsByClassName('fa');

for (var i = 0; i < icons.length; i++) {
  console.log(icons[i]);
}

let iconsArray = Array.from(icons);

console.log(iconsArray);

console.log(icons);

iconsArray.push('Hello');

console.log(iconsArray);
