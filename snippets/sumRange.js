// recursion
// sum every number up to a range of numbers
function sumRange(num) {
	if (num === 1) return 1
	return num + sumRange(num - 1)
}

console.log(sumRange(6)) // 21 because 6 + 5 + 4 + 3 + 2 + 1 = 21
