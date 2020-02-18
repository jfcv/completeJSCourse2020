//object creation function
function insertStudent(name, score1, score2) {
  let student = {
    name: name,
    score1: score1,
    score2: score2
  }
  return student;
}

//calculating the score for each object function
function calculateScore(score1, score2) {
  totalScore = score1 + score2;
  return totalScore;
};

//function for evaluating the students
function passedExam(students, scores) {

  //O(n) complexity
  students.forEach(student => {
    scores.push(calculateScore(student.score1, student.score2));
  });

  //O(n) complexity
  scores.forEach(score => {
    if (score > 91) {
      degreesObtained.push('A');
    } else if (score >= 81) {
      degreesObtained.push('B');
    } else if (score >= 71) {
      degreesObtained.push('C');
    } else if (score >= 61) {
      degreesObtained.push('D');
    } else if (score >= 51) {
      degreesObtained.push('E');
    } else {
      degreesObtained.push('fail');
    }
  });

};

function printResults(students, scores, degreesObtained) {

  //O(n) complexity
  for (var i = 0; i < students.length; i++) {

    if (degreesObtained[i] == 'fail') {
      console.log(students[i].name + ' got ' + scores[i] + ' points, has failed and has to try next year'  );
    } else {
      console.log(students[i].name + ' has ' + scores[i] + ' points, and he got the diploma with degree ' + degreesObtained[i]);
    }

  }

}

//students on the class
let students = [insertStudent('John',47,46), insertStudent('Bob',23,24), insertStudent('Nick',40,35), insertStudent('Alex',44,45)];

//scores array
let scores = [];

//degrees obtained
let degreesObtained = [];

passedExam(students, scores);

printResults(students, scores, degreesObtained);

console.log(scores, degreesObtained);
