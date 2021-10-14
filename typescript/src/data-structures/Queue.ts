import log from '../utils/log'
import { ListNode } from './LinkedList'

interface IQueue {
	enqueue(val: any): number
	dequeue(): ListNode | null
}

class Queue implements IQueue {
	public first: ListNode | null
	public last: ListNode | null
	public size: number

	constructor(startingNodeValue?: any) {
		let node: ListNode | undefined = undefined
		if (startingNodeValue) node = new ListNode(startingNodeValue)
		this.first = node ?? null
		this.last = node ?? null
		this.size = node ? 1 : 0
	}

	enqueue(val: any): number {
		const node = new ListNode(val)
		if (!this.first || !this.last) {
			this.first = node
			this.last = node
		} else {
			this.last.next = node
			this.last = node
		}
		return this.size++
	}

	dequeue(): ListNode | null {
		if (!this.first) return null
		const removed = this.first
		if (this.first === this.last) this.last = null
		this.first = this.first.next
		this.size--
		removed.next = null
		return removed
	}
}

const queue = new Queue(50)
queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(300)
queue.enqueue(400)
const firstRemoved = queue.dequeue()
queue.enqueue(500)
queue.dequeue()
log(queue, firstRemoved)
