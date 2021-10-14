class Node {
	constructor(val) {
		this.val = val
		this.next = null
		this.prev = null
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	// returns the list
	push(val) {
		const node = new Node(val)
		if (!this.head) {
			this.head = node
			this.tail = node
		} else {
			this.tail.next = node
			node.prev = this.tail
			this.tail = node
		}
		this.length++
		return this
	}

	// returns the removed node
	pop() {
		if (!this.tail) return undefined
		const removed = this.tail
		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.tail = removed.prev
			this.tail.next = null
			// sever ties for removed node
			removed.prev = null
		}
		this.length--
		return removed
	}

	// returns the removed node
	shift() {
		if (!this.head) return undefined
		const removed = this.head
		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.head = removed.next
			this.head.prev = null
			removed.next = null
		}
		this.length--
		// sever ties for removed node
		return removed
	}

	// returns the list
	unshift(val) {
		const node = new Node(val)
		if (!this.length === 0) {
			this.head = node
			this.tail = node
		} else {
			node.next = this.head
			this.head.prev = node
			this.head = node
		}
		this.length++
		return this
	}

	// similar to SLL, but we can optimize in a DLL by splitting it in half and starting from either head or tail
	// returns a node
	get(index) {
		if (index < 0 || index >= this.length) return undefined
		const startAtHead = index <= this.length / 2
		let count = startAtHead ? 0 : this.length - 1
		let curr = startAtHead ? this.head : this.tail
		while (count !== index) {
			curr = startAtHead ? curr.next : curr.prev
			startAtHead ? count++ : count--
		}
		return curr
	}

	// same as SLL, return a boolean
	set(index, val) {
		const node = this.get(index)
		if (node) {
			node.val = val
			return true
		}
		return false
	}

	// make insert return boolean
	insert(index, val) {
		if (index < 0 || index >= this.length) return false
		if (index === 0) return !!this.unshift(val) // !! to return bool
		if (index === this.length) return !!this.push(val) // !! to return bool
		const node = new Node(val)
		const before = this.get(index - 1)
		const after = before.next
		// handle before connection
		node.prev = before
		before.next = node
		// handle after connection
		node.next = after
		after.prev = node
		this.length++
		return true
	}

	// make remove return boolean
	remove(index) {
		if (index < 0 || index >= this.length) return false
		if (index === 0) return !!this.shift()
		if (index === this.length - 1) return !!this.pop()
		const removed = this.get(index)
		// make connections
		removed.prev.next = removed.next
		removed.next.prev = removed.prev
		// sever node
		removed.next = null
		removed.prev = null
		this.length--
		return true
	}
}

let list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.pop()
list.push(3)
list.push(4)
list.shift()
list.unshift(5)
list.unshift(6)
list.get(1)
list.set(0, 20)
list.set(3, 20)
list.insert(2, 300)
list.remove(1)
list.insert(2, 400)
list.remove(3)
console.log(list)
