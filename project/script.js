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

  //if there's nothing in the local storage.. then it will create an empty array
  if(questionLocalStorage.getQuestionCollection() === null) {
    questionLocalStorage.setQuestionCollection([]);
  }

  return {

    getQuestionLocalStorage: questionLocalStorage,

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

        return true;

      } else {
        alert('Please check if there is a question, possible answers (it means more than one) and the correct answer. Otherwise it will be an imcomplete Quiz.');
        return false;

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
    adminOptions: document.querySelectorAll('.admin-option'),
    adminOptionsContainer: document.querySelector('.admin-options-container'),
    insertedQuestsWrapper: document.querySelector('.inserted-questions-wrapper'),
    questionUpdateBtn: document.getElementById('question-update-btn'),
    questionDeleteBtn: document.getElementById('question-delete-btn')
  };

  //it must be return to make public and accesible from other methods
  return {
    getDomItems: domItems,

    addInputsDynamically: function() {

      let addInput = function() {

        let inputHTML, counter;

        //options counter
        counter = document.querySelectorAll('.admin-option').length;

        inputHTML = '<div class="admin-option-wrapper"><input type="radio" class="admin-option-' + counter + '" name="answer" value="' + counter + '"><input type="text" class="admin-option admin-option-' + counter + '" value=""></div>';

        domItems.adminOptionsContainer.insertAdjacentHTML('beforeend', inputHTML);

        //removing the event from the previous element
        domItems.adminOptionsContainer.lastElementChild.previousElementSibling.lastElementChild.removeEventListener('focus', addInput);

        //attaching the event to the new 'last' element
        domItems.adminOptionsContainer.lastElementChild.lastElementChild.addEventListener('focus', addInput);
      };

      domItems.adminOptionsContainer.lastElementChild.lastElementChild.addEventListener('focus', addInput);
    },

    createQuestionList: function(getQuestions) {

      let questionHTML;

      //clearing the question lists
      domItems.insertedQuestsWrapper.innerHTML = "";

      //populating the wrapper with the updated questions
      for(var i = 0; i < getQuestions.getQuestionCollection().length; i++){
        //creating the question in the ith iteration
        questionHTML = '<p><span>' + (parseInt(getQuestions.getQuestionCollection()[i].id) + 1) + '. ' + getQuestions.getQuestionCollection()[i].questionText + '</span><button id="question-' + getQuestions.getQuestionCollection()[i].id + '">Edit</button></p>';
        //updating the list
        domItems.insertedQuestsWrapper.insertAdjacentHTML('beforeend', questionHTML);
      }

    },

    //edit question list
    editQuestsList: function(event, storageQuestList, addInputsDynFn) {
      let getId, getStorageQuestList, foundItem, placeInArr, optionsHTML;

      if ('question-'.indexOf(event.target.id)) {
        //splitting the id from the string value
        getId = event.target.id.split('-')[1];

        //recovering the question list from the local storage
        getStorageQuestList = storageQuestList.getQuestionCollection();

        //looking for the question value
        for (var i = 0; i < getStorageQuestList.length; i++) {
          if (getStorageQuestList[i].id == getId) {
            foundItem = getStorageQuestList[i];
            placeInArr = i;
          }
        }

        //printing out the question value and its id
        //console.log(foundItem, placeInArr);
      }

      //gathering the question value for editing from the localstorage
      domItems.newQuestionText.value = foundItem.questionText;

      //selecting the options container
      domItems.adminOptionsContainer.innerHTML = '';

      optionsHTML = '';

      //populating the options
      for (var x = 0; x < foundItem.options.length; x++) {
      optionsHTML += '<div class="admin-option-wrapper"><input type="radio" class="admin-option-' + x + '" name="answer" value="' + x + '"><input type="text" class="admin-option admin-option-' + x + '" value="' + foundItem.options[x] + '"></div>';
      }

      //showing the options on the UI
      domItems.adminOptionsContainer.innerHTML = optionsHTML;

      //adding inputs dynamically method
      addInputsDynFn();

      //showind update & delete buttons
      domItems.questionUpdateBtn.style.visibility = 'visible';
      domItems.questionDeleteBtn.style.visibility = 'visible';

      //hiding insert button
      domItems.questInsertBtn.style.visibility = 'hidden';
    }

  };

})();



//          CONTROLLER
//controller is the interface between
let controller = (function(quizCtrl, uiCtrl) {

  //getting the variables from the UI
  let selectedDomItems = uiCtrl.getDomItems;

  //invoking addInputsDynamically method from UI controller
  uiCtrl.addInputsDynamically();

  //invoking questionList method from UI controller
  uiCtrl.createQuestionList(quizCtrl.getQuestionLocalStorage);

  //method called when the insert button is pressed on the UI
  selectedDomItems.questInsertBtn.addEventListener('click', function() {

    //selecting admin options again
    let adminOptions = document.querySelectorAll('.admin-option');

    let checkedAns = quizCtrl.addQuestionOnLocalStorage(selectedDomItems.newQuestionText, adminOptions);

    if (checkedAns) {
      uiCtrl.createQuestionList(quizCtrl.getQuestionLocalStorage);
    }

  });

  //method called when editing button is pressed
  selectedDomItems.insertedQuestsWrapper.addEventListener('click', function(e) {

    uiCtrl.editQuestsList(e, quizCtrl.getQuestionLocalStorage, uiCtrl.addInputsDynamically);

  });

})(quizController, uiController);
