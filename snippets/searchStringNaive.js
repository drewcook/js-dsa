// Naive search takes in two strings, a longer one and a pattern to search for within it
// This function implements two loops, and is in O(n^2) ti
function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(naiveSearch("lorie loled", "lol")); // 1
console.log(naiveSearch("lorie looped", "lol")); // 0
console.log(naiveSearch("lorie loled loled rollllollll", "lol")); // 3
