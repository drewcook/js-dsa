/*
  Write a function which accepts a sorted array of integers.
  The function should find the **first** pair where the sum is 0.
  Return an array that includes both values that sum to zero
  or undefined if a pair does not exist.
*/
// multiple pointers problem

// naive solution
// O(n^2) time complexity
// O(1) space complexity
function sumZero(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === 0) {
				return [arr[i], arr[j]]
			}
		}
	}
}

// refactored
// have two pointers at start and end of arr
// work towards middle, move a pointer by seeing
// if pair is greater or less than zero.
// O(n) time complexity
function sumZero(arr) {
	let left = 0
	let right = arr.length - 1
	while (left < right) {
		let sum = arr[left] + arr[right]
		if (sum === 0) {
			return [arr[left], arr[right]]
		} else if (sum > 0) {
			right--
		} else {
			left++
		}
	}
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))
console.log(sumZero([-2, 0, 1, 3]))
console.log(sumZero([1, 2, 3]))
