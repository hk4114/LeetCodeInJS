// 交换数组
// function swipe(arr) {
//   let r = [];
//   let cur = null;
//   for(let i=0;i<=arr.length;i++) {
//     if((i+1)%2===0) {
//       r.push(arr[i],cur)
//     }else {
//       cur = arr[i]
//     }
//   }
//   return r
// }
function swipe(arr) {
  for(let i=0;i<=arr.length;i++) {
    if((i+1)%2===0) {
      [arr[i-1],arr[i]] = [arr[i], arr[i-1]]
    }
  }
  return arr
}