/*
  Write a function that takes in an array of integers, and a number called n.
  The function should calculate the maximum sum of n consecutive elements in the array.
  The array does not need to be sorted.
*/

// sliding window problem
// window would be length of n
// new window compares to prev window, takes the highest sum

// naive solution
// O(n^2) tiem complexity
function maxSubArraySum(arr, n) {
	if (n > arr.length) {
		return null
	}
	var max = -Infinity
	// run up to the last window, increment window by one
	for (let i = 0; i < arr.length - n + 1; i++) {
		let temp = 0
		// loop over window items and sum
		for (let j = 0; j < n; j++) {
			temp += arr[i + j]
		}
		if (temp > max) {
			max = temp
		}
	}
	return max
}

// refactored - O(n) time
// move window, but just move it one index, subtract first index, add next index in
// we don't have to recalculate all the numbers in the window each time, since only item will be different
function maxSubArraySum(arr, n) {
	let maxSum = 0
	let tmpSum = 0

	if (arr.length < n) return null

	// create first sum only looping one window
	for (let i = 0; i < n; i++) {
		maxSum += arr[i]
	}
	tmpSum = maxSum

	for (let i = n; i < arr.length; i++) {
		// magic line - subtracts one value, adds another value in
		tmpSum = tmpSum - arr[i - n] + arr[i]
		maxSum = Math.max(maxSum, tmpSum)
	}

	return maxSum
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2))
console.log(maxSubArraySum([4, 2, 1, 6], 1))
