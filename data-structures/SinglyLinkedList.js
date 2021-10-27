// Nodes
// singly-linked list nodes will have a value and a next field
// doubly-linked list nodes will have an additional previous field
class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}
}

/*
	contrived example, but class is best way to represent a linked list
*/
// var first = new Node('hi')
// first.next = new Node('there')
// first.next.next = new Node('how')
// first.next.next.next = new Node('are')
// first.next.next.next.next = new Node('you')

class SinglyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	// adds a node to the end of the list
	// accounts for first addition
	push(value) {
		const node = new Node(value)
		if (!this.head) {
			this.head = node
			this.tail = this.head
		} else {
			this.tail.next = node
			this.tail = node
		}
		this.length++
		return this
	}

	// removes a node from the end of the list
	// reassigns a new tail after removal
	// O(n) to remove last item, because it is unidirectional and we don't have
	// a reference from the tail to the one before it so we can reassign it
	pop() {
		if (!this.head) return undefined
		let temp = this.head
		let pre = temp
		// traverse until we find end
		while (temp.next) {
			pre = temp
			temp = temp.next
		}
		// set new tail
		pre.next = null
		this.tail = pre
		this.length--
		// check if we are now an empty list
		if (this.length === 0) {
			this.head = null
			this.tail = null
		}
		// return deleted node
		return temp
	}

	// remove an item from the beginning of the list
	// reassigns the new head to the 2nd item in the list
	shift() {
		if (!this.head) return undefined
		const oldHead = this.head
		this.head = oldHead.next
		this.length--
		// check if we are now an empty list
		if (this.length === 0) {
			this.tail = null
		}
		return oldHead
	}

	// add a node to the beginning of the list
	unshift(value) {
		let node = new Node(value)
		if (!this.head) {
			this.head = node
			this.tail = this.head
		} else {
			node.next = this.head
			this.head = node
		}
		this.length++
		return this
	}

	// returns an item at the 'index' provided
	get(index) {
		// handle out of bounds index, also handles empty list
		if (index < 0 || index >= this.length) return null
		let count = 0
		let node = this.head
		while (count !== index) {
			node = node.next
			count++
		}
		return node
	}

	// changes value of a node based on its position in the list
	set(index, value) {
		let node = this.get(index)
		if (node) {
			// update value if found
			node.val = value
			return true
		}
		return false
	}

	// inserts a new node at a given index
	insert(index, value) {
		// account for out of bounds, beginning, and end
		if (index < 0 || index > this.length) return false
		if (index === 0) return !!this.unshift(value)
		if (index === this.length) return !!this.push(value)
		// insert at index
		let newNode = new Node(value)
		let prev = this.get(index - 1)
		const next = prev.next
		prev.next = newNode
		newNode.next = next
		this.length++
		return true
	}

	// removes a node at a given index
	remove(index) {
		// account for out of bounds, beginning, and end
		if (index < 0 || index > this.length) return undefined
		if (index === 0) return this.shift()
		if (index === this.length - 1) return this.pop()
		// remove at index
		const prev = this.get(index - 1)
		const removed = prev.next
		prev.next = removed.next
		this.length--
		return removed
	}

	// reverses a linked list in-place
	reverse() {
		// swap ends
		let node = this.head
		this.head = this.tail
		this.tail = node
		// iterate, keep temp variables to represent prev and next nodes around our iterator (node variable)
		// build the list in reverse
		let prev = null
		let next
		for (let i = 0; i < this.length; i++) {
			// assign temp next to the next item in the original list
			next = node.next
			// reverse node to point to the previous node
			node.next = prev
			// shift temp variable
			prev = node
			// shift iterator to next node
			node = next
		}
	}

	// reverses a section of the list from particular start and end nodes
	// start and end are positions, or indicies, within the list and are included in the reversal
	// rejoins non-reversed parts back to the reversed part at end
	reverseSection(start, end) {
		if (!this.head) return undefined
		if (start === end) return this.head
		let curr = this.head
		let prev = null
		let counter = 1
		while (curr && counter < start) {
			prev = curr
			curr = curr.next
			counter++
		}
		let nodeBeforeReverse = prev
		let lastNodeInReverse = curr
		while (curr && counter < end + 1) {
			let next = curr.next
			curr.next = prev
			prev = curr
			curr = next
			counter++
		}
		if (nodeBeforeReverse !== null) nodeBeforeReverse.next = prev
		if (lastNodeInReverse !== null) lastNodeInReverse.next = curr
		if (start === 1) this.head = prev
		return this.head
	}

	// checks if the linked list is cyclical
	hasCycle() {
		if (!this.head || !this.head.next) return false
		let slow = this.head
		let fast = this.head
		while (slow && fast && fast.next) {
			slow = slow.next
			fast = fast.next.next
			if (slow === fast) return true
		}
		return false
	}

	// checks for cycle, and if so returns the node where the cycle starts
	findCycleStart() {
		if (this.hasCycle()) {
			let slow = this.head
			let fast = this.head
			while (fast && fast.next) {
				slow = slow.next
				fast = fast.next.next
				if (slow === fast) {
					fast = this.head
					while (slow !== fast) {
						slow = slow.next
						fast = fast.next
					}
					return slow
				}
			}
		}
		return -1
	}

	// prints out the node values as an array
	print() {
		let arr = []
		let curr = this.head
		while (curr) {
			arr.push(curr.val)
			curr = curr.next
		}
		console.log(arr)
	}
}

// Experiment!
const list = new SinglyLinkedList()
list.push('hello')
list.push('there')
list.push(300)
list.push(200)
list.push(600)
list.shift()
list.unshift('first')
list.shift()
list.unshift('first!')
list.insert(1, 'jack')
list.remove(4)
list.insert(5, 'LAST')
// list.remove(1)
// list.remove(0)

console.log('has cycle', list.hasCycle())
list.print()
list.reverse()
list.print()
list.reverseSection(3, 6)
list.print()
