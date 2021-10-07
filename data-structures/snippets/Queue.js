// Array implementation (adding to end and removing at beginning)
let queue = []
// enqueuing items
queue.push('FIRST')
queue.push('SECOND')
queue.push('THIRD')
// removing
queue.shift() // 'FIRST'
queue.shift() // 'SECOND'
queue.shift() // 'THIRD'
// Array (adding to beginning and removing at end)
queue = []
// enqueing items
queue.unshift('FIRST')
queue.unshift('SECOND')
queue.unshift('THIRD')
// removing
queue.pop() // 'FIRST'
queue.pop() // 'SECOND'
queue.pop() // 'THIRD'

// Arrays have to reindex each time adding or removing from beginning, because things will need to be shifted over (FIFO)
// This differs from array stacks, because push() and pop() don't reindex since they are at the end (LIFO)
// A better performant implementation would be a linked list

// Adding to beginning (head) and remove from end (tail) - much slower, because removing from end takes O(n)
// Adding to end (tail) and remove from beginning (head) - best option, because adding is O(1) and removing is also O(1) since it'll be the first item

// Linked List
class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Queue {
	constructor() {
		this.first = null
		this.last = null
		this.size = 0
	}

	/**
	 * This adds an item to the end of the queue
	 * @param {*} val - The value to be added into the queue
	 * @returns {number} - The length of the queue
	 */
	enqueue(val) {
		const node = new Node(val)
		if (!this.first) {
			this.first = node
			this.last = node
		} else {
			this.last.next = node
			this.last = node
		}
		this.size++
		return this.size
	}

	/**
	 * This removes an item from the beginning of the queue
	 * @returns {Nod*e} - The value of the removed item from the queue
	 */
	dequeue() {
		if (!this.first) return null
		const removed = this.first
		if (this.first === this.last) {
			// if only one, clear last
			this.last = null
		}
		this.first = this.first.next // set first to next item (if only one, will be null)
		removed.next = null // slash connection for removed item
		this.size--
		return removed.value
	}
}

const q = new Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)
// console.log(q)
// const r1 = q.dequeue()
// console.log({ r1, q })
// const r2 = q.dequeue()
// console.log({ r2, q })
// const r3 = q.dequeue()
// console.log({ r3, q })
// const r4 = q.dequeue()
// console.log({ r4, q })
// const r5 = q.dequeue()
// console.log({ r5, q })
// const r6 = q.dequeue()
// console.log({ r6, q })

// FIFO, no indexing, can grow as large as it needs, but always will be constant time O(1) to enqueue and dequeue items

module.exports = {
	Node,
	Queue,
}
