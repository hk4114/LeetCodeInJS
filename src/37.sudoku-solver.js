var solveSudoku = function(board) {
    for(let i=0;i<9;i++) {
        for(let j=0;j<9;j++) {
            if(board[i][j] !== '.') continue;
            for(let k=1;k<=9;k++) {
                if(isValid(board,i,j,k.toString())) {
                    board[i][j] = k.toString();
                    if(solveSudoku(board)) return true;
                    board[i][j] = '.';
                }
            }
            return false
        }
    }
    return true
};

function isValid(board,x,y,k) {
    const s = (x/3|0)*3;
    const d = (y/3|0)*3;
    for(let i=0;i<9;i++) {
        if(board[x][i]===k || board[i][y]===k) {
            return false
        }
    }
    for(let i=0;i<3;i++) {
        for(let j=0;j<3;j++) {
            if(board[s+i][d+j] === k) {
                return false
            }
        }
    }
    return true
}