function add(a, b) {
  console.log("this", this && this(a, b));

  return a + b;
}

function sub(a, b) {
  return a - b;
}

//call和apply的区别：1。第一个参数都是this，其余参数：call
// console.log(add.call(sub, 3, 1));
// console.log(add.apply(sub, [3, 1]));

var c;
function add2(a, b) {
  // console.log("this", this); //this 不指向任何东西时，和普通参数意义
  // console.log("c", c); //this 不指向任何东西时，和普通参数意义

  return a + b;
}
// add2.call(undefined, 1, 3);

/**
 * 面试题1.已知ES5中
 * `func.bind(context,1,2)(3,4)`
 * 等价于`func.call(context,1,2,3,4)`
 * 请用ES3实现一个`bind`的polyfill
 * ```
 * Function.prototype.bind = function(){...}
 * ```
 */

function func(a, b, c, d) {
  console.log(a, b, c, d);
}
let context = {
  f: 111
};
console.log(func.bind(context, 1, 2));

func.bind(context, 1, 2)(3, 4);

Function.prototype.myBind = function() {
  var thatFunc = this,
    thatArg = arguments[0];
  var args = slice.call(arguments, 1);
  if (typeof thagFunc !== "function") {
  }
  return function() {
    var funcArgs = args.concat(slice.call(arguments));
    return thatFunc.apply(thatArg, funcArgs);
  };
};

const fn2 = () => {
  console.log(this);
};
fn2();
