function calc(num1) {
  let num2 = 10;

  return function(num3) {
    let sum = num1 + num2 + num3;
    console.log(sum);
  }
}

calc(5)(15); //2nd number inner variable 'num3'

/*closures are about the inner functions accessing to the outer variables
like the inner function(num3) accessing to num1 & num2 to calculate the result*/
