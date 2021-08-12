// Factorial is a math thing
// 4! is four factorial and is equal to 4 * 3 * 2 * 1

// we can use recursion to write a factorial function to find the value of n factorial

// iteravely
function factorial(num) {
	let total = 0
	for (let i = num; i > 0; i--) {
		total += i
	}
	return total
}

// recusrively
function factorial(num) {
	if (num === 1) return num
	return num * factorial(num - 1)
}

console.log(factorial(1)) // 1
console.log(factorial(3)) // 6
console.log(factorial(5)) // 120
console.log(factorial(10)) // 3,628,800
