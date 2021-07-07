// frequency counter problem - check if arr2 is a squared version of arr1

/*
  Usually use an object to count frequencies, breaking down an array or string of linear objects,
  and quickly compare that breakdown to another object, that was constructed in the same way.
  Loop over separately, construct ojbects, compare those objects.
*/

// naive solution - O(n^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// refactored - O(n)
// multiple loops, but not nested, simplifies to linear time, ignoreing constants
// O(3n) simplifies to O(n)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // add a loop for each array, count unique items
  for (const val of arr1) {
    // add 1 if exists, or init it with 1
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (const val of arr2) {
    // add 1 if exists, or init it with 1
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // then loop over one counter obj, compare against squared version
  // check if exists and if frequency value is equal to square root frequency
  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
}
