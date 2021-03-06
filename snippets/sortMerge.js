/*
  Merge sort
  - Create an empty array, take a look at the smallest values in each input array
  - While there are still values we haven't looked at...
    - If the value in the first array is smaller than the value in the second array, push the value in the first array into ur results andmove onto the next value in the first array
    - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move onto the next value in the second array
    - Once we exhaust one array, push in all the remaining values from the other array

*/

function merge(arr1, arr2) {
	let results = []
	let i = 0
	let j = 0

	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i])
			i++
		} else {
			// if greater than or equal to arr2[j]
			results.push(arr2[j])
			j++
		}
	}

	// catch for all leftover arr1 items if arr2 was shorter
	while (i < arr1.length) {
		results.push(arr1[i])
		i++
	}
	// catch for all leftover arr2 items if arr1 was shorter
	while (j < arr2.length) {
		results.push(arr2[j])
		j++
	}

	return results
}

const arg1 = [3, 5, 9, 20]
const arg2 = [1, 2, 8, 93, 109]
merge(arg1, arg2)
merge([100], [1, 2, 3, 4, 5])

/*
- Break up array into halves until you have arrays that are empty or have one element
- Keep recursively calling this break up until base case is arr.length <= 1
- We use array.slice() recursively
- Once we have the small arrays, we merge them back together using our merge helper function
- Once all are merged, we return the merged array
*/
function mergeSort(arr) {
	if (arr.length <= 1) return arr
	let mid = Math.floor(arr.length / 2)
	let left = mergeSort(arr.slice(0, mid))
	let right = mergeSort(arr.slice(mid))
	return merge(left, right)
}

const array = [492, 10, 49, 92, 2, 0, 48, 0, 593, 42]
console.log(mergeSort(array))
