var a = 1
function cc(){
  var a = 2
  function dd(){
    a++
    console.log(a);
    var a = 3
    console.log(a);
    
  }
  dd()
}
cc()

const arr1 = [7,1,5,2,3,6]
const arr2 = [3,8,6,20,7]
function fn1() {
  let arr = []
  for (let i = 0; i < arr1.length; i++) {
    const ele1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const ele2 = arr2[j];
      if (ele1 === ele2) {
        arr.push(ele1)
      }
    }
  }
  arr.sort()
  return arr
}
console.log(fn1());
fn2()
function fn2(){
  let str = 'a[3|bc]de'
  let arr = str.split('[')
  let arr2 = arr[1].split(']')
  let arr3 = arr2[0].split('|')
  let finalStr = arr[0]+ moreString(Number(arr3[0]),arr3[1])+arr2[1]
  function moreString(nums,str){
    let initstr = ''
    for (let i = 0; i < nums; i++) {
      initstr += str
    }
    return initstr
  }
  return finalStr
}
console.log(fn2());

