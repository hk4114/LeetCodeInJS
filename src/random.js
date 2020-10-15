function exportRandom() {
    return parseInt(Math.random()*10) > 2 ? 'a' : 'b'
}

function balanceRandom() {
    const text = exportRandom() + exportRandom() 
    if(text === 'ab' || text === 'ba') {
        return text
    }
    return balanceRandom()
}

function count(fn, n) {
    let r = {};
    for(let i=0;i<n;i++) {
        const rd = fn();
        if(r[rd]) {
            r[rd] += 1
        }else {
            r[rd] = 1
        }
    }
    return r
}

console.log(count(balanceRandom,100)) // { ab: 59, ba: 41 }