// 1.delete相关 文字
function Person() {
  this.name = "heihei";
}
let person1 = new Person();
person1.name = "lili";
let person2 = new Person();
person2.name = "lolo";
delete person1.name;
console.log(person1.name, person2.name);
// 2.websocket、Long Polling、Server-Send区别 文字

// 3. 文字
var a = 2;
function dd() {
  cc();
  function cc() {
    a++;
    console.log(a);
    var a = 4;
    a = 3;
    console.log(a);
  }
}
dd();
// 4. 'a[3|bc]de' => abcbcbcde  编程
// 5. [3,4,5,7,1,9,6],[3,6,9,4] => [3,6,9]  编程
// 6. long-term caching webpack 文字
// 7.
