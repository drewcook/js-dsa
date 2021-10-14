import log from '../utils/log';
import { ListNode } from './LinkedList';

interface IStack {
	add(val: any): number
	remove(): ListNode | null
}

class Stack implements IStack {
	public first: ListNode | null
	public last: ListNode | null
	public size: number;

	constructor(startingNodeValue?: any) {
		let node: ListNode | undefined
		if (startingNodeValue) node = new ListNode(startingNodeValue)
		this.first = node ?? null
		this.last = node ?? null
		this.size = node ? 1 : 0
	}

	add(val: any): number {
		const node = new ListNode(val)
		if (!this.first) {
			this.first = node
			this.last = node
		} else {
			const tmp = this.first
			this.first = node
			node.next = tmp
		}
		return this.size++
	}

	remove(): ListNode | null {
		if (!this.first) return null
		const removed = this.first
		if (this.first === this.last) this.last = null
		this.first = this.first.next
		this.size--
		removed.next = null
		return removed
	}
}

const stack = new Stack(50)
stack.add(100)
stack.add(200)
stack.add(300)
stack.add(400)
const firstRemoved = stack.remove()
stack.add(500)
stack.add(600)
stack.remove()
log(stack, firstRemoved)
