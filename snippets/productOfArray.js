// Take array and return product of all numbers in it

// recursion
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([2, 4, 4, 10])); // 320
