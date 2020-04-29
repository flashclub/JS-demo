var arr = [1, 3, 4, 5, 6, 6];

arr.forEach(element => {
  console.log(element);
});

Array.prototype.myForEach = myForEach;

function myForEach() {}
