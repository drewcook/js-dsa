/*
  Quick Sort!

  - In order to implement merge sort, it's useful to first implement a function responsible for arranging elements in an array on either side of a pivot.
  - Given an array, this helper function should designate an element as the pivot.
  - It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all the values greater than teh pivot are moved to the right of the pivot.
  - The order of elements on either side of the pivot doesn't matter.
  - The helper should do this IN PLACE, that is, it should not create a new array
  - When complete, the helper should return the index of the pivot

  Helper pseudocode
  - It will help to accept three arguments, an array, a start index, and an end index.
  - These can default to 0 <-> array.length - 1
  - Grab the pivot from the start of the array (choice)
  - Store the current pivot index in a variable to keep track of where the pivot should end up.
  - Loop through the array from start to end
    - If pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
  - Swap the starting element (i.e. the pivot) with the pivot index
  - Return the pivot index
*/

import swap from "./swap";

// Visualization videos are helpful to show how we formulate the smaller values, and how we place the pivot after them
function pivotHelper(arr, startIdx = 0, endIdx = arr.length) {
  // We're assuming pivot is always the first element
  let pivotElement = arr[startIdx];
  let swapIdx = startIdx;

  for (let i = startIdx + 1; i < endIdx; i++) {
    const element = arr[i];
    if (pivotElement > element) {
      // keep track of every lower value
      swapIdx++;
      // swap the lower values with the higher ones
      swap(arr, swapIdx, i);
    }
  }

  // swap the pivot from the start to the swap point
  swap(arr, startIdx, swapIdx);

  return swapIdx;
}

// Call helper on full array, which will place an initial pivot using the first element
// Then, use the returned pivot index to set start/end values for recursive calls.
// Recursively call the helper on the left subarray from 0 up to the pivot index.
// Recursively call the helper on the right subarray from pivotIdx to end.
// Do not include the pivot element in the subarray because it is already sorted.
// The base case occurs when you consider a subarray of less than 2 elements
/**
 * @param  {any[]} arr  - the array of which to sort
 * @param  {any[]} left  - the subarray to the right of the pivot element
 * @param  {any[]} right - the subarray to the right of the pivot element
 */
function quickSort(arr, left = 0, right = arr.length) {
  // if left === right, we are looking at one element
  // left and right will start big, and become closer together as we iterate
  if (left < right) {
    let pivotIdx = pivotHelper(arr, left, right);

    // left side
    quickSort(arr, left, pivotIdx - 1);
    // right side
    quickSort(arr, pivotIdx + 1, right);
  }

  return arr;
}

const data = [5, 2, 1, 8, 4, 7, 6, 3];
console.log(quickSort(data)); // [1, 2, 3, 4, 5, 6, 7, 8]

// Now try sorting a large array
function createArray(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 1000));
  }

  return arr;
}

const big = createArray(100);
console.log(quickSort(big));
