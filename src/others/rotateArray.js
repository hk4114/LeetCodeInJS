// 旋转 [1,2,3,4,5,6] 传入 3/i -> [4,5,6,1,2,3]
function rotate(arr, i) {
  let l = arr.length
  let newArr = arr.concat(arr);
  let num = i % l
  return newArr.slice(l - num, newArr.length - num)
}