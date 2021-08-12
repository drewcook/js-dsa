/*
  Selection sort pseudocode
  - Srot the first element as the smallest value you've seen so far.
  - Compare this item to the next item in the array until you find a smaller number.
  - Store the index from the new minimum so we can swap the index with our beginning index.
  - If a smaller rnumber is found, designate that smaller number to be the new minimum and
    continue until the end of the array.
  - If the minimum is not the value (index) you initiall began with, sawp the two values.
  - Repeat this with the next element until the array is sorted. Start from the next item after the swap.
*/

import swap from './swap'

// Not terribly efficient - O(n^2) time complexity
function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min = i
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j
			}
		}
		if (min !== i) {
			swap(arr, min, i)
		}
	}
	return arr
}

console.log(selectionSort([4, 29, 9, 94, 2, 59, 53]))
