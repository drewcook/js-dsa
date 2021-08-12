// recursion
function power(base, exponent) {
	if (exponent === 1) return base
	return base * power(base, exponent - 1)
}

console.log(power(2, 3)) // 8
console.log(power(5, 5)) // 2500
console.log(power(13, 1000)) // Infinity
