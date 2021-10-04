// Primitive version - add/remove at end of array
let stack = []
stack.push('facebook')
stack.push('amazon')
stack.push('apple')
stack.push('netflix')
stack.push('google')
// LIFO
stack.pop('google')
stack.pop('netflix')
stack.pop('apple')
stack.pop('amazon')
stack.pop('facebook')

// Another array implementation - add/remove at beginning of array
stack = []
stack.unshift('create new file')
stack.unshift('resized file')
stack.unshift('cloned out shadows')
// LIFO
stack.shift('cloned out shadows')
stack.shift('resized file')
stack.shift('create new file')
// However, adding and removing to the beginning of the array is less efficient than the former, because with each add/remove, everything needs to be reindexed

// Now, with arrays, there's really no need to access with indicies for a stack. A better implementation would be using a linked list.

// Here's a singly-linked list implementation that uses add() and remove() methods
class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

// We use first/last/size in this case, since head/tail/length is usually reserved for linked lists
class Stack {
	constructor() {
		this.first = null
		this.last = null
		this.size = 0
	}

	/**
	 * Adds a new node onto the top of the stack
	 * @param {any} val - The value to add in
	 * @returns {number} - The length of the stack
	 */
	add(val) {
		const node = new Node(val)
		if (!this.first) {
			this.first = node
			this.last = node
		} else {
			const tmp = this.first
			this.first = node
			this.first.next = tmp
		}
		return this.size++
	}

	/**
	 * Removes the node from the top of the stack, LIFO
	 * @returns {*} - The value of the node that has been removed, or null if stack is empty
	 */
	remove() {
		// Return null if stack is empty
		if (!this.first) return null
		const removed = this.first
		// Handle when only one item in stack
		if (this.first === this.last) this.last = null

		this.first = this.first.next
		this.size--
		return removed.value
	}
}

// Experiment!
stack = new Stack()
stack.add(100)
stack.add(200)
stack.add(300)
console.log(stack)
const r = stack.remove()
console.log(r)
console.log(stack)
const r2 = stack.remove()
console.log(r2)
console.log(stack)
const r3 = stack.remove()
console.log(r3)
console.log(stack)
const r4 = stack.remove()
console.log(r4)
console.log(stack)
