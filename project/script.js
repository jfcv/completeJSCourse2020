//module pattern used for handling this library

//          QUIZ CONTROLLER
let quizController = (function() {

  //QUESTION CONSTRUCTOR
  function Question(id, questionText, options, correctAnswer) {
    this.id = id;
    this.questionText = questionText;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }

  let questionLocalStorage = {
    setQuestionCollection: function(newCollection) {
      localStorage.setItem('questionCollection', JSON.stringify(newCollection));
    },
    getQuestionCollection: function() {
      return JSON.parse(localStorage.getItem('questionCollection'));
    },
    removeQuestionCollection: function() {
      localStorage.remove('questionCollection');
    }
  };

  return {
    addQuestionOnLocalStorage: function(newQuestText, opts) {

      //variable declarations
      let optionsArr, corrAns, questionId, newQuestion;

      optionsArr = [];

      questionId = 0;

      for (var i = 0; i < opts.length; i++) {

        if (opts[i].value !== "") {
          optionsArr.push(opts[i].value);
        }

        if (opts[i].previousElementSibling.checked && opts[i].value !== "") {
          corrAns = opts[i].value;
        }
      }

      //creating the new question object
      newQuestion = new Question(questionId, newQuestText.value, optionsArr, corrAns);
      console.log(newQuestion);
    }
  };
})();



//          UI CONTROLLER
let uiController = (function() {

  let domItems = {
    //ADMIN PANEL ELEMENTS
    questInsertBtn: document.getElementById('question-insert-btn'),
    newQuestionText: document.getElementById('new-question-text'),
    adminOptions: document.querySelectorAll('.admin-option')
  };

  //it must be return to make public and accesible from other methods
  return {
    getDomItems: domItems
  };

})();



//          CONTROLLER
//controller is the interface between
let controller = (function(quizCtrl, uiCtrl) {

  let selectedDomItems = uiCtrl.getDomItems;

  selectedDomItems.questInsertBtn.addEventListener('click', function() {
    quizCtrl.addQuestionOnLocalStorage(selectedDomItems.newQuestionText, selectedDomItems.adminOptions);

  });

})(quizController, uiController);
