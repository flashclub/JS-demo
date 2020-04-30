function AjaxPromise() {
  setTimeout(() => {
    this.then('结束')
  }, 1000);
}

AjaxPromise.prototype.then = function(data) {

};




var test = new AjaxPromise()

