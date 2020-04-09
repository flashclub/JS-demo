import EventHub from '../src/index'
const eventHub = new EventHub()
eventHub.on('xxx',function () {
  console.log('执行了1');
})
eventHub.on('xxx',function () {
  console.log('执行了2');
})
eventHub.on('xx',function () {
  console.log('执行了3');
})
eventHub.emit('xxx')

// setTimeout(() => {
  
//   eventHub.emit('xx')
// }, 1000);