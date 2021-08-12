import swap from './swap'

// O(n^2) - quadratic time complexity
function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let val = arr[i]
		for (let j = i - 1; j >= 0 && arr[j] > val; j--) {
			// move the item over one
			arr[j + 1] = arr[j]
			// then insert val if val is greater than next j
			arr[j] = val
		}
	}
	return arr
}

const short = [2, 1, 0, -1, -1]
const long = [49, 2, 43, 99, 35, 28, 492, 84, 0]
console.log(insertionSort(short))
console.log(insertionSort(long))
