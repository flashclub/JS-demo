import EventHub from '../src/index'
function test0(message:string) {
  const eventHub = new EventHub()
  console.assert(eventHub instanceof Object)
  console.log(message);
}
test0('EventHub可以创建对象')
test1('可以通过.on订阅函数并且通过.emit触发')
test2('可以通过.on订阅函数并且通过.off取消')
function test1(params: string) {
  const eventHub = new EventHub()
  let testTarget = false
  const test = function (message:string) {
    console.log('test函数执行',message);
    testTarget = true
  }
  eventHub.on('xxx',test)
  eventHub.emit('xxx','emit执行了')
  console.assert(testTarget)
  console.log(params);
}
function test2(params:string) {
  const eventHub = new EventHub()
  let testTarget = false
  const test = function (message:string) {
    console.log('test函数执行',message);
    testTarget = true
  }
  eventHub.on('xxx',test)
  eventHub.off('xxx',test)
  eventHub.emit('xxx','emit执行了')
  console.assert(!testTarget)
  console.log(params);
}
// setTimeout(() => {
  
//   eventHub.emit('xx')
// }, 1000);