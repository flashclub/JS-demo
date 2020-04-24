let verticalDom = {
  target: "div",
  attribute: {},
  children: ["hello world"]
};
function createVertical(object) {
  if (typeof object !== "object") {
    return object;
  } else {
    let { target, attribute, children } = object;
    return deepObject(target, attribute, children);
  }
}
function deepObject(target, attribute, children) {
  let domTarget = document.createElement(target);
  children.forEach(element => {
    if (typeof element === "string") {
      domTarget.append(element);
    } else {
    }
  });
  return domTarget;
}
document.getElementById("root").append(createVertical(verticalDom));
