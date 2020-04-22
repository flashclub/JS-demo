const addTwo = (a, b) => a + b;

const count = (fn, arr = []) => num =>
  arr.length + 1 === fn.length ? fn(...arr, num) : count(fn, [...arr, num]);

console.log(count(addTwo)(4)(10));
