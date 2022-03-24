"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = __importDefault(require("../utils/log"));
const LinkedList_1 = require("./LinkedList");
class Queue {
    first;
    last;
    size;
    constructor(startingNodeValue) {
        let node = undefined;
        if (startingNodeValue)
            node = new LinkedList_1.ListNode(startingNodeValue);
        this.first = node ?? null;
        this.last = node ?? null;
        this.size = node ? 1 : 0;
    }
    enqueue(val) {
        const node = new LinkedList_1.ListNode(val);
        if (!this.first || !this.last) {
            this.first = node;
            this.last = node;
        }
        else {
            this.last.next = node;
            this.last = node;
        }
        return this.size++;
    }
    dequeue() {
        if (!this.first)
            return null;
        const removed = this.first;
        if (this.first === this.last)
            this.last = null;
        this.first = this.first.next;
        this.size--;
        removed.next = null;
        return removed;
    }
}
const queue = new Queue(50);
queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);
queue.enqueue(400);
const firstRemoved = queue.dequeue();
queue.enqueue(500);
queue.dequeue();
(0, log_1.default)(queue, firstRemoved);
//# sourceMappingURL=Queue.js.map