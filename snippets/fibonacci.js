// Write a function that creates a fibinacci sequence of up to n items in sequence

// recusrion
function fibonacci(n) {
	if (n <= 2) return 1
	return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(8)) // 21
console.log(fibonacci(10)) // 55
console.log(fibonacci(30)) // 832,040

/*
  NOTE: DO NOT USE THIS WITH ANYTHING OVER 40, TOO LONG RESPONSE TIME
*/
