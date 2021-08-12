/*
  - Start looping from with a variable called i at the end of the array towards the beginning
  - Start an inner loop with a variable called j from the beginning until i - 1
  - If arr[j] is greater than arr[j+1], swap those two values
  - Return the sorted array
*/

// Bubble Sort is usually linear time - O(n)

import withPerformanceTimer from './timer'

function swap(arr, idx1, idx2) {
	let temp = arr[idx1]
	arr[idx1] = arr[idx2]
	arr[idx2] = temp
}

// unoptimized version - too many comparisons, and recomparing same values
function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1)
			}
		}
	}
	return arr
}

const short = [37, 45, 29, 8]
const long = [4, 29, 49, 2, 45, 99, 392, 3, 73, 483, 199]

withPerformanceTimer(bubbleSort, short)
withPerformanceTimer(bubbleSort, long)

// optimized version - less comparisons, but still no protection against if it's already sorted
function bubbleSort(arr) {
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1)
			}
		}
	}
	return arr
}

withPerformanceTimer(bubbleSort, short)
withPerformanceTimer(bubbleSort, long)

// further optimization - don't sort an already sorted list
// check if we made zero swaps last run, if so, list
// is already sorted, so break out of the loop
function bubbleSort(arr) {
	let noSwaps
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1)
				noSwaps = false
			}
		}
		if (noSwaps) break
	}
	return arr
}

withPerformanceTimer(bubbleSort, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
