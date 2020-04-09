class EventHub {
  cache = {}
  on(params:string,fn) {
    if (this.cache[params] === undefined) {
      this.cache[params] = []
    }
    this.cache[params].push(fn)
  }
  emit(params:string,data?) {
    if (this.cache[params] === undefined) {
      this.cache[params] = []
    }
    this.cache[params].forEach(fn => {
      fn()
    });
  }
}

export default EventHub