/*
	Sets test for uniqueness. Here we add a few halpers in addition to using native methods to be used when working with sets.
	- if one set is a superset of another
	- if one set is a subset of another
	- union between two sets
	- find similar values of two test, intersection
	- differences between two sets
	- check for array duplicates
	- unique values in two arrays
*/


/**
 * This function checks if one set is a superset of another.
 * @param {Set} superset - The set to check
 * @param {Set} subset - The set to check against
 * @returns {Boolean} - True if it is a superset, false otherwise
 */
function isSuperset(superset, subset) {
	for (let item of subset) {
		if (!superset.has(item)) return false
	}
	return true
}


/**
 * This function checks if one set is a subset of another.
 * @param {Set} subset - The set to check
 * @param {Set} superset - The set to check against
 * @returns {Boolean} - True if it is a subset, false otherwise
 */
function isSubset(subset, superset) {
	for (let item of subset) {
		if (!superset.has(item)) return false
	}
	return true
}


/**
 * This function combines two sets into one.
 * @param {Set} set1 - The first set to work with
 * @param {Set} set2 - The second set to work with
 * @returns {Set} - A set containing all values from both sets.
 */
function unionSet(set1, set2) {
	// guards
	if (set1 === set2 || !set2.size || !set2) return set1
	if (!set1.size || !set1) return set2
	// logic
	const union = new Set(set1)
	for (let item of set2) union.add(item)
	return union
}


/**
 * This function finds similarities between two sets.
 * @param {Set} set1 - The first set to work with
 * @param {Set} set2 - The second set to work with
 * @returns {Set} - A set containing the similar values
 */
function intersectSets(set1, set2) {
	const intersection = new Set()
	for (let item of set1) {
		if (set2.has(item)) intersection.add(item)
	}
	return intersection
}


/**
 * This function finds the difference between two sets.
 * @param {Set} set1 - The first set to work with
 * @param {Set} set2 - The second set to work with
 * @returns {Set} - A set containing the differing values
 */
function differenceSet(set1, set2) {
	// find items in set1 that set2 doesn't contain
	const uniqueSet1 = new Set(set1)
	for (let item of set2) {
		if (uniqueSet1.has(item)) uniqueSet1.delete(item)
	}
	const uniqueSet2 = new Set(set2)
	for (let item of set1) {
		if (uniqueSet2.has(item)) uniqueSet2.delete(item)
	}
	const difference = unionSet(uniqueSet1, uniqueSet2)
	return difference
}


/**
 * This function checks if an array contains duplicate values.
 * @param {Arr} arr - The array to check duplicates in
 * @returns {Boolean} - True if the array contains duplicates, false otherwise
 */
function hasDuplicates(arr) {
	const set = new Set(arr)
	return set.size < arr.length
}


/**
 * This function finds unique values between two given arrays.
 * @param {Array} arr1 - The first array to work with
 * @param {Array} arr2 - The second array to work with
 * @returns {Array} - An array containing unique values of both original arrays
 */
function findUniqueValues(arr1, arr2) {
	const set = new Set(arr1.concat(arr2))
	return Array.from(set)
}


/*
	TESTING
*/
const set1 = new Set([1, 2, 4, 6, 7, 8, 9, 10])
const set2 = new Set([2, 4, 5, 8])
const set3 = new Set([1, 5, 9, 10, 500])
const set4 = new Set([1, 2])
console.log('intersection', intersectSets(set1, set3))
console.log('superset', isSuperset(set1, set4)) // true
console.log('subset', isSubset(set4, set1)) // true
console.log('union', unionSet(set4, set3))
console.log('difference', differenceSet(set1, set2))
const arr1 = [1, 48, 28, 50, 9, 28]
const arr2 = [1, 10, 50, 50, 100]
console.log('hasDuplicates', hasDuplicates(arr1))
console.log('hasDuplicates', hasDuplicates(arr2))
console.log('findUniqueValues', findUniqueValues(arr1, arr2))
