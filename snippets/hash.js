// This hash function uses a string [key] and converts it into an index that would fit into an array of [arrLen]
function hashSimple(key, arrLen) {
	let total = 0
	for (let char of key) {
		// map "a" to 1, "b" to 2, "c" to 3, etc. using the utf8 char codes for each character
		// "a",charCodeAt(0) = 97
		const value = char.charCodeAt(0) - 96
		total = (total + value) % arrLen
	}
	return total
}
console.log('hashSimple')
console.log(hashSimple('red', 10))
console.log(hashSimple('orangeyellow', 10))
console.log(hashSimple('green', 10))
console.log(hashSimple('green', 10)) // deterministic, same key, same hash value

/* This hash function has limitations:
	- Only hashes strings
	- Not constant time - linear in key length
	- Could be a little more random
	- Clustering because of small array length, more likely that strings will be similar length

	Let's improve!
*/

// Creates entropy with use of prime numbers
// Prevents mapping over large strings with a use of up to 100 characters
function hashBetter(key, arrLen) {
	let total = 0
	let WEIRD_PRIME = 31
	for (let i = 0; i < Math.min(key.length, 100); i++) {
		const char = key[i]
		const value = char.charCodeAt(0) - 96
		total = (total * WEIRD_PRIME + value) % arrLen
	}
	return total
}
console.log('hashBetter')
console.log(hashBetter('red', 10))
console.log(hashBetter('orangeyellow', 10))
console.log(hashBetter('green', 10))
console.log(hashBetter('green', 10)) // deterministic, same key, same hash value
