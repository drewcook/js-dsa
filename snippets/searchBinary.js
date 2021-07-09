// O(logn) time
// An explained version
function binarySearch(arr, value) {
  // multiple pointers that will move
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  // until we've found our item
  // if we haven't found anything, our pointers should
  // cross eventually, so lets guard against that too
  while (arr[middle] !== value && start <= end) {
    if (arr[middle] > value) {
      // value is greater than our middle, eliminate lower half
      // start window from start up to one below middle, since we already know middle isn't our value
      end = middle - 1;
    } else {
      // value is less than our middle, eliminate higher half
      // start window from one above middle to end, since we already know middle isn't our value
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  if (arr[middle] === value) {
    return middle;
  } else {
    // our start/end are no longer in order, and our middle
    // isn't our value, so the list doesn't include the item
    return -1;
  }
}

const array = [2, 5, 6, 27, 82, 104, 288, 499, 693];
console.log(binarySearch(array, 27)); // 3
console.log(binarySearch(array, 9)); // -1

// O(logn) time
// A shorter version
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

const array2 = [2, 5, 6, 27, 82, 104, 288, 499, 693];
console.log(binarySearch(array2, 499)); // 7
console.log(binarySearch(array2, 409)); // -1
