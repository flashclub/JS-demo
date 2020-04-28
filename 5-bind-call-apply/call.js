function add(a, b) {
  console.log("this", this && this(a, b));

  return a + b;
}

function sub(a, b) {
  return a - b;
}

// console.log(add.call(sub, 3, 1));

// call的第一个参数指向函数内部的this
var c;
function add2(a, b) {
  console.log("this", this); //this 不指向任何东西时，和普通参数意义
  console.log("c", c); //this 不指向任何东西时，和普通参数意义

  return a + b;
}
add2.call(undefined, 1, 3);
