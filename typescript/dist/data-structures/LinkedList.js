"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode = void 0;
const log_1 = __importDefault(require("../utils/log"));
class ListNode {
    value;
    next;
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
exports.ListNode = ListNode;
class LinkedList {
    head;
    tail;
    length;
    constructor(startingHeadValue) {
        let node;
        if (startingHeadValue)
            node = new ListNode(startingHeadValue);
        this.head = node ?? null;
        this.tail = node ?? null;
        this.length = node ? 1 : 0;
    }
    push(val) {
        const node = new ListNode(val);
        if (!this.head || !this.tail) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        return this.length++;
    }
    pop() {
        if (!this.head)
            return null;
        let prev = this.head;
        let curr = this.head;
        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = null;
        this.tail = prev;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return curr;
    }
    shift() {
        if (!this.head)
            return null;
        const removed = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0)
            this.tail = null;
        removed.next = null;
        return removed;
    }
    unshift(val) {
        const node = new ListNode(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        return this.length++;
    }
    reverse() {
        if (!this.head || !this.head.next)
            return this.head;
        let reversedList = this.head;
        let currentHead = this.head.next;
        reversedList.next = null;
        this.tail = reversedList;
        while (currentHead) {
            let tmp = currentHead;
            currentHead = currentHead.next;
            tmp.next = reversedList;
            reversedList = tmp;
        }
        this.head = reversedList;
        return this.head;
    }
}
const list = new LinkedList('first');
list.push('second');
list.push('third');
list.push('fourth');
list.push('fifth');
list.reverse();
list.pop();
const removedHead = list.shift();
list.unshift('sixth');
log_1.default(list, removedHead);
//# sourceMappingURL=LinkedList.js.map