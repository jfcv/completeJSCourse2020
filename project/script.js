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
      let optionsArr, corrAns, questionId, newQuestion, getStoredQuests;

      //initializing variables n arrays
      corrAns = "";
      optionsArr = [];
      getStoredQuests = [];

      if(questionLocalStorage.getQuestionCollection() === null) {
        questionLocalStorage.setQuestionCollection([]);
      }

      //obtainning the 'options array' and the 'correct answer'
      for (var i = 0; i < opts.length; i++) {

        if (opts[i].value !== "") {
          optionsArr.push(opts[i].value);
        }

        if (opts[i].previousElementSibling.checked && opts[i].value !== "") {
          corrAns = opts[i].value;
        }
      }

      // defining the id's for each question
      if (questionLocalStorage.getQuestionCollection().length > 0) {
        questionId = questionLocalStorage.getQuestionCollection()[questionLocalStorage.getQuestionCollection().length - 1].id + 1;
      } else {
        questionId = 0;
      }

      //bulletproofing the form non sense values
      if(newQuestText.value !== "" && optionsArr.length > 1  && corrAns !== "") {
        //creating the new question object
        newQuestion = new Question(questionId, newQuestText.value, optionsArr, corrAns);

        getStoredQuests = questionLocalStorage.getQuestionCollection();
        getStoredQuests.push(newQuestion);
        questionLocalStorage.setQuestionCollection(getStoredQuests);

        newQuestText.value = "";

        for (var k = 0; k < opts.length; k++) {
          opts[k].value = "";
          opts[k].previousElementSibling.checked = false;
        }

        console.log(questionLocalStorage.getQuestionCollection());
      } else {
        alert('Please check if there is a question, possible answers (it means more than one) and the correct answer. Otherwise it will be an imcomplete Quiz.');
      }
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
