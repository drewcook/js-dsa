const util = require('util')

// Nodes will have a value, left and right properties
class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

// Only important value is the root to start with
class BinarySearchTree {
	constructor(rootNode) {
		this.root = rootNode || null
	}

	/**
	 * Inserts a value in the tree, traverses it to find the appropriate place
	 * and inserts a new node with the value.
	 * @param {*} val - The value to insert into the BST
	 * @returns {BinarySearchTree | undefined} this - The tree after insert, or undefined for duplicates
	 */
	insert(val) {
		const node = new Node(val)
		if (!this.root) {
			this.root = node
			return this
		} else {
			// traverse with an iterator over tree until we insert,
			// and return when we insert the new node to break out
			let curr = this.root // the iterator
			while (true) {
				if (val === curr.value) return undefined // don't support duplicates
				if (val > curr.value) {
					if (!curr.right) {
						curr.right = node
						return this
					} // otherwise, interate
					curr = curr.right
				} else if (val < curr.value) {
					if (!curr.left) {
						curr.left = node
						return this
					} // otherwise, interate
					curr = curr.left
				}
			}
		}
	}

	/**
	 * Finds a value within the BST
	 * @param {val} val - The value to search for
	 * @returns {Node | undefined} - Returns the node if it is found, otherwise undefined
	 */
	find(val) {
		if (!this.root || val === null) return undefined
		let curr = this.root
		while (true) {
			if (val < curr.value) {
				if (!curr.left) return undefined
				curr = curr.left
			} else if (val > curr.value) {
				if (!curr.right) return undefined
				curr = curr.right
			} else return curr // equal to curr.value, found it
		}
	}
}

// Naive approach
let tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.left = new Node(5)
tree.root.right = new Node(15)
tree.root.left.right = new Node(8)
console.log({ naive: tree })

// With methods
tree = new BinarySearchTree(new Node(10))
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
tree.insert(3)
tree.insert(13)
console.log(util.inspect(tree, { depth: null }))
let found = tree.find(7)
console.log({ found })
found = tree.find(110)
console.log({ found })
found = tree.find(null)
console.log({ found })
found = tree.find(5)
console.log({ found })
