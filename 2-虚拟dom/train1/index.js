const domTree = {
  nodeType: "div",
  attribute: {
    className: "red",
    onClick: function() {
      alert("hello world");
    }
  },
  children: [
    "div1有点击事件 ",
    {
      nodeType: "span",
      children: ["span1"]
    },
    {
      nodeType: "p",
      children: [
        "p1",
        {
          nodeType: "button",
          attribute: {
            onClick: function() {
              alert("button被点击了");
            }
          },
          children: ["按钮1"]
        }
      ]
    }
  ]
};
function setVirtual(node) {
  if (node.nodeType) {
    const target = document.createElement(node.nodeType);
    const attribute = node.attribute;
    const child = node.children;
    setAttribute(attribute, target);
    setChildren(child, target);
    return target;
  } else {
    return document.createElement("div");
  }
}
function setChildren(child, target) {
  if (child.length > 0) {
    child.forEach(element => {
      if (typeof element === "object") {
        const childNode = setVirtual(element);
        target.append(childNode);
      } else {
        const textTarget = document.createTextNode(element);
        target.append(textTarget);
      }
    });
  }
}
function setAttribute(params, node) {
  if (params) {
    params.className ? node.setAttribute("class", params.className) : "";
    params.onClick ? clickFn(node, params.onClick) : "";
  }
}
function clickFn(node, clickFn) {
  node.addEventListener("click", function(e) {
    if (e.target === node) {
      clickFn();
    }
  });
}
function showDom() {
  const nodes = setVirtual(domTree);
  const root = document.getElementById("app");
  root.append(nodes);
}
showDom();
