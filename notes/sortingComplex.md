# Intermediate Sorting Algorithms

- Merge sort
- Quick sort
- Radix sort

- These algorithms will be much faster than the simpler sorting algorithms.
- These are a family of sorting algorithms that can improve time complexity from `OIn^2)` to `O(logn)`
- There's a tradeoff between efficiency and simplicity
- The more efficient algorithmss are much less simple, and generally take longer to understand

## Merge Sort

It's a combination of two things - merging and sorting. It uses recursion.

- Exploits the fact that arrays of 0 or 1 elements are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements (divide and conquer), then building up a newly sorted array

Example:

```js
// snippets/sortMerge.js

function mergeSort() {
  return arr;
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
  return arr;
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
