var exist = function (board, word) {
  // 1. how 2 find
  // 2. when stop
  // 3. in func of find how 2 find next step
  if (board.length === 0) {
    return false
  }
  if (word.length === 0) {
    return true
  }
  const row = board.length;
  const col = board[0].length;
  // 1. how 2 find
  for (let i = 0; i <= row; i++) {
    for (let j = 0; j <= col; j++) {
      const ret = find(i, j, 0)
      if (ret) {
        return true
      }
    }
  }
  return false;
  function find(i, j, cur) {
    // 2. stop find
    if (i >= row || i < 0) {
      return false
    }
    if (j >= col || j < 0) {
      return false
    }
    const letter = board[i][j];
    if (letter !== word[cur]) {
      return false
    }
    if (cur == word.length - 1) {
      return true;
    }

    board[i][j] = null;
    const ret = find(i + 1, j, cur + 1) ||
      find(i - 1, j, cur + 1) ||
      find(i, j + 1, cur + 1) ||
      find(i, j - 1, cur + 1);
    board[i][j] = letter;
    return ret
  }
};