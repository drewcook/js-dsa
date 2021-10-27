"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const perf_hooks_1 = require("perf_hooks");
const log = (t1, t2) => console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
// Naive recursive way
// O(2^n) runtime (very slow), O(1) space
const fibNaive = (n) => {
    if (n <= 1)
        return n;
    return fibNaive(n - 1) + fibNaive(n - 2);
};
let t1 = perf_hooks_1.performance.now();
let result = fibNaive(40);
console.log(result);
let t2 = perf_hooks_1.performance.now();
log(t1, t2);
// Compute the nth Fibonacci number recursively
// Optimized by caching subproblem results - O(n) runtime, O(n) space from cache and callstack
const fib = (n) => {
    if (n <= 1)
        return n;
    // Initialize cache
    const cache = new Map();
    // Fill initial values in cache
    cache.set(0, 0);
    cache.set(1, 1);
    const res = _fib(n, cache);
    // console.log({ cache }) // for demonstration purposes
    return res;
};
// Private overloaded method
// Note: Ignore ?? operator, just appeasing TS gods for .get() => undefined
const _fib = (n, cache) => {
    // If value is set in cache, return it
    if (cache.has(n))
        return cache.get(n) ?? 0;
    // Compute and add to cache before returning, this way it builds the cache as we go
    cache.set(n, _fib(n - 1, cache) + _fib(n - 2, cache));
    return cache.get(n) ?? 0;
};
t1 = perf_hooks_1.performance.now();
result = fib(100);
console.log(result);
t2 = perf_hooks_1.performance.now();
log(t1, t2);
// Bottom-up solution, faster than top-down solution above
// Compute the nth Fibonacci number iteratively, use a cache
// O(n) runtime, O(n) space from cache
const fibBetter = (n) => {
    if (n === 0)
        return n;
    // Initialize cache
    const cache = new Map([[1, 1]]);
    // Fill in cache iteratively
    let last, lastLast;
    for (let i = 2; i <= n; i++) {
        last = cache.get(i - 1) ?? 0;
        lastLast = cache.get(i - 2) ?? 0;
        cache.set(i, last + lastLast);
    }
    // console.log({cache})
    return cache.get(n) ?? 0;
};
t1 = perf_hooks_1.performance.now();
result = fibBetter(100);
console.log(result);
t2 = perf_hooks_1.performance.now();
log(t1, t2);
// Best solution, bottom-up, minimizing cache size, iteratively
// Any cache lookups from i-3 are irrelevant, so only store the most recent two values
// O(n) runtime, O(1) space from improved cache
const fibBest = (n) => {
    if (n < 2)
        return n;
    let n1 = 1, n2 = 0, tmp;
    for (let i = 2; i < n; i++) {
        tmp = n1 + n2;
        n2 = n1;
        n1 = tmp;
    }
    return n1 + n2;
};
t1 = perf_hooks_1.performance.now();
result = fibBest(100);
console.log(result);
t2 = perf_hooks_1.performance.now();
log(t1, t2);
//# sourceMappingURL=fibonacci.js.map