/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let a = x.toString(), b = a.length - 1;
  if (x < 0) return false
  let c = b / 2;
  for (let i = 0; i < c; i++) {
    if (a[i] != a[b - i]) return false
  }
  return true
};