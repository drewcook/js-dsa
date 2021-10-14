/*=================
         41
       /    \
    39      33
   /  \    /
 18   27  12
==================*/

class MaxBinaryHeap {
	constructor() {
		// We only need to use a simple array for this class, no Node classes
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

	insert(val) {
		// Add to end of array
		this.values.push(val)
		// Bubble up
		this.bubbleUp()
	}

	// Removes the largest value, returns it
	extractMax() {
		const max = this.values[0]
		const end = this.values.pop()
		// only sink down if we have something to sink
		if (this.values.length > 0) {
			// move last added value to head
			this.values[0] = end
			// Sink it down to proper position
			this.sinkDown()
		}
		return max
	}

	// Bubbles the last added value to the appropriate place in the heap
	bubbleUp() {
		let idx = this.values.length - 1
		const element = this.values[idx]
		// idx will be 0 if we reach head
		while (idx > 0) {
			let parentIdx = this.getParentIdx(idx)
			let parent = this.values[parentIdx]
			// loop until we find a parent greater than our bubbling node
			if (parent >= element) break
			// swap
			this.values[parentIdx] = element
			this.values[idx] = parent
			// set iterator to parent idx
			idx = parentIdx
		}
	}

	// Sinks the head down to the proper position, used after removing max value i.e. head
	sinkDown() {
		let idx = 0
		const length = this.values.length
		const element = this.values[idx]
		while (true) {
			const [leftChildIdx, rightChildIdx] = this.getChildrenIndicies(idx)
			// get child values, guard for out of bounds errors
			const leftChild = leftChildIdx < length ? this.values[leftChildIdx] : null
			const rightChild = rightChildIdx < length ? this.values[rightChildIdx] : null
			// loop until both children are smaller
			// or until it becomes a leaf
			const isLeaf = !leftChild || !rightChild
			const hasSmallerChildren = element >= leftChild && element >= rightChild
			if (isLeaf || hasSmallerChildren) break
			// swap with largest child and set iterator to child idx
			if (leftChild > rightChild) {
				this.values[idx] = leftChild
				this.values[leftChildIdx] = element
				idx = leftChildIdx
			} else {
				this.values[idx] = rightChild
				this.values[rightChildIdx] = element
				idx = rightChildIdx
			}
		}
	}
}

const heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(27)
heap.insert(39)
heap.insert(33)
heap.insert(12)
heap.insert(18)
heap.insert(55)
heap.insert(199)
console.log({ heap })
let max = heap.extractMax()
console.log({ heap, max })
max = heap.extractMax()
console.log({ heap, max })
heap.insert(68)
heap.insert(100)
heap.insert(300)
console.log({ heap })
max = heap.extractMax()
console.log({ heap, max })
max = heap.extractMax()
console.log({ heap, max })
max = heap.extractMax()
console.log({ heap, max })
