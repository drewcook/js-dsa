# Searching Algorithms

- Iteratively, or linear search
- Binary search on sorted array
- Naive string searching algorithm
- KMP string searching algorithm

JavaScript has some built in methods that implement searching algorithms. These are the simplest searching algorithms, linear search.

```js
// Linear searching methods

Array.includes();
Array.indexOf();
Array.find();
Array.findIndex();
```

## Linear Search

It just checks every element, at a set interval, one at a time against whatever we pass in. These will always be `O(n)` time. This is the best we can do when searching on an **unsorted** array.\*\*\*\*

Example:
Write a function that accepts an array and a value. Loop through entire array and check if current array element is equal to value. If it is, return the index at which the element is found. If it is not found, return -1.

```js
// This is basically an .indexOf() implementation, see snippets/searchLinear.js

const array = [5, 8, 1, 100, 12, 3, 12];

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

linearSearch(array, 100); // 3
linearSearch(array, 3); // 5
linearSearch(array, 54); // -1
```

## Binary Search

Binary search is much faster than linear search as the items to search for grow larger. Binary search works by jumping to the middle of a **sorted** list, checking if the item is higher or lower than the value, then eliminating half the list based on that, then repeating. It takes `O(logn)` time. It uses a divide and conquer strategy because it works with a smaller subset of the data each iteration.

_The data set must be sorted prior to implementing a binary search._

```js
// see snippets/searchBinary.js

function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== value && start <= end) {
    if (arr[middle] > value) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === value ? middle : -1;
}

binarySearch([1, 2, 3, 4, 99], 99); // 4
binarySearch([1, 2, 3, 4, 99], 50); // -1
```

## Naive String Search

There isn't really a name for this, but how would we search for a substring within a larger string. The simplest approach would be linear searching, checking each character at a time and checking against our search term.

JavaScript has some built in methods for searching for single characters as well as substrings.

```js
String.charAt();
String.substr();
```

Example:
Write a function that takes a larger string and a substring to search for within it.

```js
// see snippiets/searchStringNaive.js

function stringSearch(string, pattern) {
  // loop over longer string
  // loop over shorter string
  // if characters don't match, break out of inner loop
  // if they do match, keep going
  // if you complete the inner loop and find a match, increment the count of matches
  // return the count
}
```
