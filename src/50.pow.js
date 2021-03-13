var myPow = function (x, n) {
    if (n === 0) return 1
    if (n < 0) {
        return 1 / myPow(x, -n)
    }
    if (n % 2) {
        return x * myPow(x, n - 1)
    }
    return myPow(x * x, n / 2)
};

var myPow = function (x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -n
    }
    if (n === 0) {
        return 1
    }
    let r = 1;
    let y = x;
    for (let i = n; i > 0; i = parseInt(i / 2)) {
        if (i % 2 === 1) {
            r *= y
        }
        y *= y
    }
    return r
};