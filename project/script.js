//module pattern used for handling this library

//          QUIZ CONTROLLER
let quizController = (function() {

  //saving and recovering data from the local storage in the browser
  localStorage.setItem('data',JSON.stringify([1, 2, 3, 4]));
  console.log(JSON.parse(localStorage.getItem('data')));

})();

//          UI CONTROLLER
let uiController = (function() {

})();


//          CONTROLLER

//controller is the interface between
let controller = (function(quizCtrl, uiCtrl) {

})(quizController, uiController);
