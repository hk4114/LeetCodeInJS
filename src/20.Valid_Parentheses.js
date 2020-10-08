function valid(s) {
    const ss = s.split("");
    if(ss.length%2 !== 0) return false;
    const diction = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    let cache = [];
    for(let i=0;i<ss.length;i++) {
        if(i>=1 && diction[ss[i]] === cache[cache.length-1]) {
            cache.pop()
        }else {
            cache.push(ss[i])
        }
    }
    return !cache.length
}