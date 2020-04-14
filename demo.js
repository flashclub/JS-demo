function light(timer, fn) {
  return new Promise((res, rej) => {
    if (timer) {
      setTimeout(() => {
        fn();
        res();
      }, timer * 1000);
    } else {
      rej();
    }
  });
}

function red() {
  console.log(new Date());
  console.log("red");
}
function green() {
  console.log(new Date());
  console.log("green");
}
function yellow() {
  console.log(new Date());
  console.log("yellow");
}

light(1, red)
  .then(function() {
    return light(2, green);
  })
  .then(function() {
    return light(3, yellow);
  });
