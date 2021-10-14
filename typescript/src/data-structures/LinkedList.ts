import log from '../utils/log';

export class ListNode {
	public value: any;
	public next: ListNode | null;

	constructor(value: any) {
		this.value = value
		this.next = null
	}
}

interface ILinkedList {
	push(val: any): number
	pop(): ListNode | null
	shift(): ListNode | null
	unshift(val: any): number
	reverse(): ListNode | null
	// get(index: number): ListNode | null
	// set(index: number, val: any): boolean
	// insert(index: number, val: any): boolean
}

class LinkedList implements ILinkedList {
	public head: ListNode | null
	public tail: ListNode | null
	public length: number

	constructor(startingHeadValue?: any) {
		let node: ListNode | undefined
		if (startingHeadValue) node = new ListNode(startingHeadValue)
		this.head = node ?? null
		this.tail = node ?? null
		this.length = node ? 1 : 0
	}

	push(val: any): number {
		const node = new ListNode(val)
		if (!this.head || !this.tail) {
			this.head = node
			this.tail = node
		} else {
			this.tail.next = node
			this.tail = node
		}
		return this.length++
	}

	pop(): ListNode | null {
		if (!this.head) return null
		let prev: ListNode = this.head
		let curr: ListNode = this.head
		while (curr.next) {
			prev = curr
			curr = curr.next
		}
		prev.next = null
		this.tail = prev
		this.length--
		if (this.length === 0) {
			this.head = null
			this.tail = null
		}
		return curr
	}

	shift(): ListNode | null {
		if (!this.head) return null
		const removed = this.head
		this.head = this.head.next
		this.length--
		if (this.length === 0) this.tail = null
		removed.next = null
		return removed
	}

	unshift(val: any): number {
		const node = new ListNode(val)
		if (!this.head) {
			this.head = node
			this.tail = node
		} else {
			node.next = this.head
			this.head = node
		}
		return this.length++
	}

	reverse(): ListNode | null {
		if (!this.head || !this.head.next) return this.head
		let reversedList: ListNode = this.head
		let currentHead: ListNode | null = this.head.next
		reversedList.next = null
		this.tail = reversedList
		while (currentHead) {
			let tmp: ListNode = currentHead
			currentHead = currentHead.next
			tmp.next = reversedList
			reversedList = tmp
		}
		this.head = reversedList
		return this.head
	}
}

const list = new LinkedList('first')
list.push('second')
list.push('third')
list.push('fourth')
list.push('fifth')
list.reverse()
list.pop()
const removedHead = list.shift()
list.unshift('sixth')
log(list, removedHead)

