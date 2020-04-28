function fn() {}

Function.prototype.bind = function() {
  console.log("111");
};
console.log(fn.bind);
