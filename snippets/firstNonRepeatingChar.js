/**
 * This function finds the first non repeating character within a given string.
 * @param {string} str - The string to search within
 * @returns {string | null} - Either the character or null if all repeat or none found
 */
function firstNonRepeatingChar(str) {
	// if empty str return null
	if (!str) return null
	// if 1 char return char
	if (str.length === 1) return str
	// create a hashmap of each char found in order
	let map = new Map()
	for (const char of str) {
		if (map.has(char)) {
			map.set(char, map.get(char) + 1)
		} else {
			map.set(char, 1)
		}
	}
	// loop through hashmap and find first char with 1 count
	for (const [key, value] of map) {
		if (value === 1) {
			return key
		}
	}
	return null
}

let result
result = firstNonRepeatingChar('abcabca')
console.log(result)
result = firstNonRepeatingChar('a')
console.log(result)
result = firstNonRepeatingChar('xxx')
console.log(result)
result = firstNonRepeatingChar('dlaknfleafiaeianal')
console.log(result)
result = firstNonRepeatingChar('abcdefedabca')
console.log(result)
