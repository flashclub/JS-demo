// 1.delete相关
function Person() {
  this.name = "heihei";
}
let person1 = new Person();
person1.name = "lili";
let person2 = new Person();
person2.name = "lolo";
delete person1.name;
console.log(person1.name, person2.name);
// 2.websocket、Long Polling、Server-Send区别

// 3.

var a = 2;
function dd() {
  function cc() {
    a = 3;
    a++;
    console.log(a);
    var a = 4;
    console.log(a);
  }
}
dd();
