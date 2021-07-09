// O(n) time
function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

const array = [5, 8, 1, 100, 12, 3, 12];
console.log(linearSearch(array, 100)); // 3
console.log(linearSearch(array, 3)); // 5
console.log(linearSearch(array, 54)); // -1
