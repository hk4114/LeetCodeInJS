/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (num = 0) {
  let a = Math.pow(2, 31),
    b = ""
  b = num.toString().replace(/\d+/g, (e) => {
    return baby(e)
  })
  if (+b >= a - 1 || +b <= -a) return 0
  return +b
};

function baby(str) {
  return +(str.split('').reverse().join(''))
}