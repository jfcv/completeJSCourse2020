function finalResult(score) {
  if (score >= 81) {
    return function(name) {
      console.log(name + ', you passed an exam and you are student of State University');
    }
  } else if (score >= 51) {
    return function(name) {
      console.log(name + ', you passed an exam and you are student of State College');
    }
  } else {
    return function(name) {
      console.log(name + ', you failed');
    }
  }
}

let result1 = finalResult(77);
result1('John');

let result2 = finalResult(44);
result2('Jane');

finalResult(96)('Mary')
