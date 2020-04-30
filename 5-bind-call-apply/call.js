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

/**
 * 面试题：箭头函数被call，bind调用时
 * 无法改变this指向
 * @param {} params
 */
const fn2 = params => {
  console.log(57, this);
  console.log(58, params);
};
// fn2();
fn2.call({ a: 1 }, 88);
fn2.bind({ b: 1 }, 99);
/**
 * generator
 * 一个generator看上去像一个函数，但可以返回多次
 * generator和函数很像，书写形式上只有一个*的区别，
 * generator：
 * function* fn1(){}
 * Function:
 * function fn1(){}
 */

function* fn3(x) {
  var n = 0;
  while (n < x) {
    yield n;
    n++;
  }
}
const fn4 = fn3(5);
// console.log(fn4.next());
// console.log(fn4.next());
// console.log(fn4.next());
// console.log(fn4.next());
// console.log(fn4.next());
// console.log(fn4.next());

function* fn5() {
  var n = 0;
  while (n < 4) {
    yield n;
    n++;
  }
  return "ok";
}

const fn6 = fn5();

console.log(fn6.next());
console.log(fn6.next());
console.log(fn6.next());
console.log(fn6.next());
console.log(fn6.next());
