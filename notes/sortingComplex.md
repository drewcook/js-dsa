# Intermediate Sorting Algorithms

- Merge sort
- Quick sort
- Radix sort

- These algorithms will be much faster than the simpler sorting algorithms.
- These are a family of sorting algorithms that can improve time complexity from `OIn^2)` to `O(logn)`
- There's a tradeoff between efficiency and simplicity
- The more efficient algorithms are much less simple, and generally take longer to understand

## Merge Sort

It's a combination of two things - merging and sorting. It uses recursion.

- Exploits the fact that arrays of 0 or 1 elements are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements (divide and conquer), then building up a newly sorted array

Example:

```js
// snippets/sortMerge.js

function mergeSort() {
 return arr
}
```

### Merge Sort Big O Notation

- Best Time Complexity - `O(n*logn)`
- Average Time Complexity - `O(n*logn)`
- Worst Time Complexity - `O(n*logn)`
- Space Complexity - `O(n)`

Significantly faster at logarithmic time. For an array of 8 items, we split it up 3 times. At 32 items, we split 5 times. `2 ^ ?? = 32`, well `2 * 2 * 2 * 2 * 2 = 32`. This is `2logn` relationship, logarithmic.

## Quick Sort

Uses a pivot index to compare items to, putting on left or right of pivot. Easiest to solve using recursion.

- Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.
- Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.
- We will know that the pivot is in the correct spot after sorting it, then repeat with either side of the pivot.

Example:

```js
// see snippets/sortQuick.js for pseudocode and implementation

function quickSort(arr) {
 return arr
}
```

### Picking a Pivot

- The runtime of quick sort depends in part on how one selects the pivot.
- Ideally, the pivot should be chosen to that it's roughly the median value (middle) in the data set you're sorting.
- Could also pick first, last, or random one.
- For simplicity, we'll always choose the pivot to be the first element _(caveat outlined below)_.

It's sometimes better to pick a pivot randomly, or the middle element. We can avoid the worst case scenario this way.

Also, if we're pivoting on the minimum or maximum amount, we'd be running in quadratic time.

### Quick Sort Big O Notation

- Best Time Complexity - `O(n*logn)`
- Average Time Complexity - `O(n*logn)`
- Worst Time Complexity - `O(n*n)`
- Space Complexity - `O(logn)`

**Taking the first element in quick sort as the pivot can result in a worst case scenario if the array is already sorted.** This would result in `O(n)` decompositions, and `O(n)` comparisons per decomposition.

## Radix Sort

Radix sort is a special-case sorting algorithm that works on lists of numbers.

- It never makes comparisons between elements, unlike merge, quick, insertion sorts.
- It exploits the fact that the information about the size of a number is encoded in the number of digits.
- More digits means a bigger number, i.e. we know that something with more digits is going to be a larger value than those with fewer digits.

### Radix Sort Helpers

In order to implement radix sort, it's helpful to build a few helper functions first:

- `getDigit(num, place)` - returns the digit in `num` at the given `place` value, starting from the end and moving left

  - `getDigit(12345, 0)` - returns `5`
  - `getDigit(12345, 1)` - returns `4`
  - `getDigit(12345, 2)` - returns `3`
  - `getDigit(12345, 3)` - returns `2`
  - `getDigit(12345, 4)` - returns `1`
  - `getDigit(12345, 5)` - returns `0`

  ```js
  function getDigit(num, i) {
   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
  }

  getDigit(7273, 2)

  7327 / 100
  73.72
  73 % 10
  // return 3
  ```

- `digitCount(num)` - returns the number of digits in `num`

  - `digitCount(1)` - returns `1`
  - `digitCount(85)` - returns `2`
  - `digitCount(412)` - returns `3`

  ```js
  function digitCount(num) {
   if (num === 0) return 1
   return Math.floor(Math.log10(Math.abs(num))) + 1
  }

  digitCount(423)
  10
  100
  // returns 2

  digitCount(21483)
  // returns 5
  ```

- `mostDigits(nums)` - Given an array of numbers, returns the number of digits in the largest numbers in the list

  - `mostDigits([1234, 56, 7])` - returns `4`
  - `mostDigits([1, 1, 11111, 1])` - returns `5`
  - `mostDigits([12, 34, 56, 78])` - returns `2`
  - Uses our `digitCount` helper and loops through each item in the array, keeping tally of the max digits and returning the highest one found

  ```js
  function mostDigits(nums) {
   let max = 0
   for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, digitCount(nums[i]))
   }
   return max
  }

  mostDigits([3, 567, 39, 20932093, 2])
  // max on each iteration: 1, 3, 3, 8, 8
  // returns 8
  ```

### Radix Sort Big O Notation

`n` is number of integers in array
`k` is longest number of digits in any given integer

- Best Time Complexity - `O(n*k)`
- Average Time Complexity - `O(n*k)`
- Worst Time Complexity - `O(n*k)`
- Space Complexity - `O(n+k)`

Long digits are definitely something to consider (`k`), as it will impact the number of times the outer loop will run. If dealing with all unique data, then `n` becomes `logn`, which is equivalent to merge/quick sort as well with `O(n*logn)`.
