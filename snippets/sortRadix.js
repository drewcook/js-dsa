/*
	Radix Sort
	- Define a function that accepts a list of numbers.
	- Figure out how many digits the largest number has.
	- Loop from k = 0 to this largest number of digits.
	- For each iteration of the loop:
	  - Create buckets for each digit (0-9) (array of ten sub-arrays)
		- Place each number in the corresponding bucket based on its kth digit
	- Replace our existing array with values in our buckets, starting with 0 and going up to 9.
	- Return the list at the end.
*/

// HELPERS
function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitCount(num) {
	if (num === 0) return 1
	return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums) {
	let max = 0
	for (let i = 0; i < nums.length; i++) {
		max = Math.max(max, digitCount(nums[i]))
	}
	return max
}

// RADIX SORT
function radixSort(nums) {
	let maxDigitCount = mostDigits(nums)

	for (let k = 0; k < maxDigitCount; k++) {
		let digitBuckets = Array.from({ length: 10 }, () => [])

		for (let i = 0; i < nums.length; i++) {
			const digit = getDigit(nums[i], k)
			digitBuckets[digit].push(nums[i])
		}

		console.log(digitBuckets)
	}
}

radixSort([2, 49, 30429, 4902, 92, 39, 93, 9])
