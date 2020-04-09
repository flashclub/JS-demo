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
      fn(data)
    });
  }
  off(params:string,fn){
    this.cache[params].forEach((ele,index) => {
      if (ele === fn) {
        this.cache[params].splice(index,1)
      }
    });
    
  }
}

export default EventHub