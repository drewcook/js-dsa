// This is a swapping function to quickly swap two items in an array from left to right and right to left
// This is used a lot in sorting algorithms

const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

export default swap;
