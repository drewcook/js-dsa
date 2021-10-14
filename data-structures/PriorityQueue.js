const util = require('util')

// Our priority queue will be a min-binary-heap with Nodes that contain a value and a priority.

class Node {
	constructor(val, priority) {
		this.val = val || null // doesn't matter for sorting/constructing our heap
		this.priority = priority || null
		// TODO: add timestamp which can be used to compare two items that have identical priorities, then prioritize the one that came in first
	}
}

class PriorityQueue {
	constructor() {
		this.values = []
	}

	getParentIdx(childIdx) {
		return Math.floor((childIdx - 1) / 2)
	}

	getChildrenIndicies(parentIdx) {
		const leftIdx = parentIdx * 2 + 1
		const rightIdx = parentIdx * 2 + 2
		return [leftIdx, rightIdx]
	}

	// Adds a node into the queue, stores it according to priority
	enqueue(val, priority) {
		const node = new Node(val, priority)
		// Add to end of array
		this.values.push(node)
		// Bubble up
		this.bubbleUp()
	}

	// Removes the highest priority node, returns it
	dequeue() {
		const min = this.values[0]
		const end = this.values.pop()
		// only sink down if we have something to sink
		if (this.values.length > 0) {
			// move last added value to head
			this.values[0] = end
			// Sink it down to proper position
			this.sinkDown()
		}
		return min
	}

	// Bubbles the last added value to the appropriate place in the heap, based off of priority
	// Places highest prioritized (lowest priority value) node to top
	bubbleUp(idx = this.values.length - 1) {
		if (idx <= 0) return
		const parentIdx = this.getParentIdx(idx)
		if (this.values[idx].priority <= this.values[parentIdx].priority) {
			;[this.values[idx], this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]]
			this.bubbleUp(parentIdx)
		}
	}

	// Sinks the head down to the proper position, used after removing min value i.e. head
	sinkDown(idx = 0, swapIdx = null) {
		const length = this.values.length
		const element = this.values[idx]
		const [leftChildIdx, rightChildIdx] = this.getChildrenIndicies(idx)
		const leftChild = this.values[leftChildIdx]
		const rightChild = this.values[rightChildIdx]

		if (leftChildIdx < length) {
			if (leftChild.priority <= element.priority) {
				swapIdx = leftChildIdx
			}
		}

		if (rightChildIdx < length) {
			if (
				(swapIdx === null && rightChild.priority <= element.priority) ||
				(swapIdx !== null && rightChild.priority <= leftChild.priority)
			) {
				swapIdx = rightChildIdx
			}
		}

		if (swapIdx !== null) {
			;[this.values[idx], this.values[swapIdx]] = [this.values[swapIdx], this.values[idx]]
			this.sinkDown(swapIdx, null)
		}
	}
}

const ER = new PriorityQueue()
ER.enqueue('common cold', 5)
ER.enqueue('high fever', 3)
ER.enqueue('large bruise', 4)
ER.enqueue('gunshot wound', 1)
ER.enqueue('broken arm', 2)
console.log('ER:', util.inspect(ER, { depth: null }))
let removed = ER.dequeue()
console.log({ removed })
removed = ER.dequeue()
console.log({ removed })
removed = ER.dequeue()
console.log({ removed })
removed = ER.dequeue()
console.log({ removed })
removed = ER.dequeue()
console.log({ removed })
removed = ER.dequeue()
console.log({ removed })
