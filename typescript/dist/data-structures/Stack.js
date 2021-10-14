"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = __importDefault(require("../utils/log"));
const LinkedList_1 = require("./LinkedList");
class Stack {
    first;
    last;
    size;
    constructor(startingNodeValue) {
        let node;
        if (startingNodeValue)
            node = new LinkedList_1.ListNode(startingNodeValue);
        this.first = node ?? null;
        this.last = node ?? null;
        this.size = node ? 1 : 0;
    }
    add(val) {
        const node = new LinkedList_1.ListNode(val);
        if (!this.first) {
            this.first = node;
            this.last = node;
        }
        else {
            const tmp = this.first;
            this.first = node;
            node.next = tmp;
        }
        return this.size++;
    }
    remove() {
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
const stack = new Stack(50);
stack.add(100);
stack.add(200);
stack.add(300);
stack.add(400);
const firstRemoved = stack.remove();
stack.add(500);
stack.add(600);
stack.remove();
log_1.default(stack, firstRemoved);
//# sourceMappingURL=Stack.js.map