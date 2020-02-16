function digitalClock() {

  //getting data from the data object
  let date = new Date();
  let day = date.getDay();
  let hours = date.getHours() + '';
  let minutes = date.getMinutes() + '';
  let seconds = date.getSeconds() + '';

  //data validation
  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if (seconds.length < 2) {
    seconds = '0'+ seconds;
  }

  //definning days of the week
  let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  //create the clock
  let clock = weekDays[day] + ' ' + hours + ':' + minutes + ':' + seconds;

  //printing the clock on the HTML
  document.getElementById('clock').innerHTML = clock;

};

//setting the function to be executed once every second
setInterval(digitalClock, 1000);
