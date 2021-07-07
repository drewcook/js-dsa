/*
  Implement a function which accepts a sorted array,
  and counts the unique values in the array.
  There can be negative numbers in the array,
  but it will always be sorted.
*/

// multiple pointers problem
// two pointers that start at beginning
// of array and move incrementally.
// O(n) time complexity
function countUniqueValues(arr) {
  let left = 0;

  if (!arr.length) return 0;

  for (let right = 1; right < arr.length; right++) {
    if (arr[right] !== arr[left]) {
      // move over, leaving value in place, and assign new spot right pointer
      left++;
      arr[left] = arr[right];
    }
  }
  // left was moved each time we found a unique value
  // add one since it is index based
  return left + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 4, 4, 7, 7, 7, 12, 12, 13])); // 5
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
