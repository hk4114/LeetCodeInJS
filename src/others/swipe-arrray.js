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
  for (let i = 0; i <= arr.length; i++) {
    if ((i + 1) % 2 === 0) {
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
    }
  }
  return arr
}

function swap(arr) {
  const l = arr.length;
  for (let i = 0, j = 1; i < l, j < l; i += 2, j += 2) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}