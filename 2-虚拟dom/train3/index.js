let verticalDom = {
  target: "div",
  attribute: {
    className: "red",
    onClick: function(fn) {
      return fn();
    }
  },
  children: [
    "hello world",
    {
      target: "hr"
    },
    {
      target: "p",
      attribute: {
        className: "blue"
      },
      children: [
        "p content",
        {
          target: "span",
          attribute: {},
          children: [
            {
              target: "hr",
              attribute: {},
              children: []
            }
          ]
        }
      ]
    }
  ]
};

function createVerticalDom(params) {
  let { target, attribute, children } = params;
  return finalDom(target, attribute, children);
}

function finalDom(target, attribute, children) {
  const domTarget = document.createElement(target);
  if (children) {
    children.forEach(element => {
      if (typeof element === "string") {
        domTarget.append(element);
      } else {
        domTarget.append(createVerticalDom(element));
      }
    });
  }
  if (attribute && attribute.className) {
    domTarget.setAttribute("class", attribute.className);
  }
  if (attribute && attribute.onClick) {
    domTarget.addEventListener("click", function(event) {
      if (event.target === domTarget) {
        attribute.onClick(function() {
          console.log("adddd");
        });
      }
    });
  }
  return domTarget;
}

document.getElementById("root").append(createVerticalDom(verticalDom));

function finalDom2(target, attribute, children) {
  const domTarget = document.createElement(target);
  children &&
    children.forEach(element => {
      typeof element === "string"
        ? domTarget.append(element)
        : domTarget.append(createVerticalDom(element));
    });
  attribute &&
    attribute.className &&
    domTarget.setAttribute("class", attribute.className);
  attribute &&
    attribute.onClick &&
    domTarget.addEventListener("click", function(event) {
      event.target === domTarget &&
        attribute.onClick(function() {
          console.log("点击事件");
        });
    });
  return domTarget;
}
