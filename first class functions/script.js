let scores = [55, 35, 87, 45];

function checkResult(arr, fn) {
  let newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }

  return newArr;
}

function passOrFail(score) {
  return score >= 51;
}

function calculateDifference(score) {
  return score - 51;
}

console.log(checkResult(scores, passOrFail));
console.log(checkResult(scores, calculateDifference));
