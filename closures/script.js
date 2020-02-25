function a() {

  let arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push((function() {
      console.log(i);
    })()); //IIFE that's why it could access to the counter's value : i
  }

  return arr;
}

a();
