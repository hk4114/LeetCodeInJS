/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let ret = [];

  const find = (row, tmp = []) => {
    if (row === n) {
      ret.push(tmp.map(c => {
        let arr = new Array(n).fill('.');
        arr[c] = 'Q';
        return arr.join('')
      }))
    }

    for (let col = 0; col < n; col++) {
      let canSet = tmp.some((ci, ri) => {
        return ci === col ||
          (ri - ci) === (row - col) ||
          (ri + ci) === (row + col)
      })
      if (canSet) {
        continue
      }
      find(row + 1, [...tmp, col])
    }
  }

  find(0);

  return ret
};