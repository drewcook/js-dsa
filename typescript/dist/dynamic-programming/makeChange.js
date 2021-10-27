"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const perf_hooks_1 = require("perf_hooks");
const log = (t1, t2) => console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
// Write a function that takes in an amount of change and returns the lowest number of coins needed to make that change
// We assume we work with coins with values of 1, 5, 10, and 25
const coins = [25, 10, 5, 1];
// Naive approach - brute force, recursion
// Go through every combination of coins that sum up to c to find the minimum number
const makeChangeNaive = (c) => {
    if (c === 0)
        return c;
    let minCoins = Infinity;
    // Try removing each coin from the total and see how many more coins are required
    for (let coin of coins) {
        // Skip a coin if its value is greater than the amount remaining
        if (c - coin >= 0) {
            const currMinCoins = makeChangeNaive(c - coin);
            minCoins = Math.min(minCoins, currMinCoins);
        }
    }
    // Add back the coin removed recursively
    return minCoins + 1;
};
let t1 = perf_hooks_1.performance.now();
let result = makeChangeNaive(60);
console.log(result);
let t2 = perf_hooks_1.performance.now();
log(t1, t2);
// Use a cache to cache the subproblems for other smaller amounts of change so we don't have to re-calculate known values
const makeChangeCache = (c) => {
    const cache = new Map();
    const res = _makeChange(c, cache);
    // console.log({cache})
    return res;
};
// Helper method for recursion with cache
// Ignore nullish coalescent - appease TS gods
// O(c*n) time, O(c) space
const _makeChange = (c, cache) => {
    if (c === 0)
        return c;
    // Return value if in cache
    if (cache.has(c))
        return cache.get(c) ?? 0;
    let minCoins = Infinity;
    // Find best coin
    for (let coin of coins) {
        if (c - coin >= 0) {
            const currMinCoins = _makeChange(c - coin, cache);
            minCoins = Math.min(minCoins, currMinCoins);
        }
    }
    // Store value into the cache
    cache.set(c, minCoins + 1);
    return cache.get(c) ?? 0;
};
t1 = perf_hooks_1.performance.now();
result = makeChangeCache(60);
console.log(result);
t2 = perf_hooks_1.performance.now();
log(t1, t2);
// Bottom up dynamic programming solution.
// Iteratively compute number of coins for larger and larger amounts of change
// O(c*n) time, O(c) space
const makeChangeBest = (c) => {
    const cache = new Map();
    for (let i = 1; i <= c; i++) {
        let minCoins = Infinity;
        // Try removing each coin from the total and see which requires the fewest extra coins
        for (let coin of coins) {
            if (i - coin >= 0) {
                let currCoins = (cache.get(i - coin) ?? 0) + 1;
                minCoins = Math.min(minCoins, currCoins);
            }
        }
        cache.set(i, minCoins);
    }
    return cache.get(c) ?? 0;
};
t1 = perf_hooks_1.performance.now();
result = makeChangeBest(60);
console.log(result);
t2 = perf_hooks_1.performance.now();
log(t1, t2);
//# sourceMappingURL=makeChange.js.map