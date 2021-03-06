// Kadane's Algorithm - gets largest subarray sum in a list
// https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
function findMaxSubarraySum(nums) {
	let max_current = -Infinity
	let max_global = -Infinity
	for (let i = 0; i < nums.length; i++) {
		max_current = Math,max(max_current + nums[i], nums[i])
		max_global = Math.max(max_global, max_current)
	}
	return max_global
}
