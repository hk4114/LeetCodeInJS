var minimumTotal = function(triangle) {
    const len = triangle.length-1;
    const tmp = triangle.slice(-1)[0]; // 初始值
    console.log(tmp)
    for(let i=len-1;i>=0;i--) {
        for(let j=0; j<triangle[i].length;j++) {
            tmp[j] = triangle[i][j] + Math.min(tmp[j],tmp[j+1])
        }
    }
    return tmp[0]
};