//module pattern used for handling this library

let quizController = (function() {
  let private = 10;
  let privateFn = function(a) {
    return a + private;
  };
  return {
    publicMethod: function() {
        return privateFn(20);
    }
  };
})();

let uiController = (function() {
  let num1 = 30;
  return {
    sum: function(num2) {
      return num1 + num2;
    }
  };
})();

//controller is the interface between
let controller = (function(quizCtrl, uiCtrl) {
  console.log(uiCtrl.sum(100) + quizCtrl.publicMethod());
})(quizController, uiController);
