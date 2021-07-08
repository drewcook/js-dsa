/*
  Write a function that collects all odd values in an array.
*/

// recursioun helper method
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    // base case
    if (helperInput.length === 0) {
      return;
    }

    // compile our result by checking if [0] is odd
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    // resursion - shorten array by one and check again
    helper(helperInput.slice(1));
  }

  // rely on our recursive helper to build our result
  helper(arr);

  return result;
}

const sample = [2, 5, 1, 1, 1, 4, 7, 3, 4, 6, 8, 0, 9, 83, 84, 85];
const odds = collectOddValues(sample);
console.log(odds);

// pure recursive way
function collectOddValues(arr) {
  let newArr = [];
  // base case
  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) newArr.push(arr[0]);
  // recursion with .concat() and a new value
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  // this next statement won't run until all recursion is done
  return newArr;
}

const oddsPure = collectOddValues(sample);
console.log(oddsPure);
