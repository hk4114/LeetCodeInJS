function fib(n) {
    if (n < 2) return n;
    let cache = [0, 1];
    for (let i = 2; i <= n; i++) {
        cache[i] = cache[i - 1] + cache[i - 2]
    }
    return cache[n]
}

function fib(n) {
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2)
}