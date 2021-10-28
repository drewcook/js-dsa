// This function checks if a given string is a palindrome

function isPalindrome(str) {
	function _helper(word, start, end) {
		if (start >= end) return true
		if (word[start] !== word[end]) return false
		else return _helper(word, start+1, end-1)
	}
	return _helper(str, 0, str.length-1)
}

console.log(isPalindrome('racecar')) // true
console.log(isPalindrome('carrot')) // false

function findLongestPalindrome(str) {
	// if (isPalindrome(str)) return str
	const palindromesFound = new Map()
	for (let i = 0; i < str.length; i++) {
		for (let j = i; j <= str.length; j++) {
			word = str.slice(i, j)
			if (isPalindrome(word)) palindromesFound.set(word, word.length)
		}
	}
	let longestLength = 0
	let longestPalindrome = null
	for (let [key, value] of palindromesFound) {
		if (value > longestLength) {
			longestLength = value
			longestPalindrome = key
		}
	}
	return longestPalindrome
}

console.log(findLongestPalindrome('aibohphobia')) // aibohphobia
console.log(findLongestPalindrome('aba_-ba')) // aba
console.log(findLongestPalindrome('babadada')) // adada
console.log(findLongestPalindrome('abb')) // bb
