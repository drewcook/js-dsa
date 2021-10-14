# Linked Lists

## What is a linked list?

It is a data structure that stores data. Linked lists are a data structure that are lists made up of nodes, where each node has a value and has a reference to the next node in the list. If it is a doubly-linked list, then each node will _also_ have a reference to the previous node in the list as well.

### Types

There are two types of linked lists, singly and doubly.

- Singly-linked lists - Each node only contains a reference to the next node in the list. - unidirectional
  - Tail.next is null
- Doubly-linked lists - Each node contains a reference to both the next and the previous nodes in the list. - bidirectional
  - Head.previous is null
  - Tail.next is null

### Singly vs Doubly

DLL are much easier to reverse, easier to access items near the end, because of the `prev` field of each node.

#### Doubly Linked Lists

Identical to SLL but each node has a previous pointer which points to the value of the previous node in the list. They each still have a next field, except for the last node in the list. Another thing to mention is that the head will have a prev value of `null` just as the tail will have a next value of `null`. To remove an item, we can work backwards from the tail. It's much more efficient to remove items near the end of the list than it is a SLL.

Because we have to, at minimum, keep track of two fields (next and prev) for each node, we take up more memory. `more memory === more flexibility`

### Comparing to Arrays

There is no index to access things, in contrast to arrays. To find a node at a particular index, you'll have to start from the beginning (head) of the list, and iterate over each node until it is found. This means getting/searching in a linked list will take O(n) time. However, inserting and deleting are only O(1) time, and make this data structure much faster than arrays for these operations.

Linked lists are stored differently in memory than an array. An array needs a memory block the same size or larger of the length of the array. A linked list only needs one memory block for each node. Since each node will have a reference to another node, there only needs enough memory for the exact amount of nodes in the list.

Lists:

- Do not have indicies
- Connected via nodes with a __next__ pointer
- Random access is not allowed
- Used as a foundation for other data structures like Stacks and Queues

Arrays:

- Indicies in order
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index

### Big O Notation

Arrays have constant time for accessing an item. Arrays have linear time for insertion and removal. __Linked lists should be used when inserting and removing is more frequent. Arrays should be used when accessing items are more frequent.__

#### Singly-Linked Lists

Insertion - O(1)
Removal - Depends on if near head or near tail... O(1) or O(N)
Searching - O(N)
Access - O(N)

Much faster at adding a node than it is in arrays. For removing, if we are removing from the beginning, it is constant time; but, if we are removing at the very end, we have to find the item right before the tail, which requires linear time, as we need to check each item until we get to the end. For searching, worst case is linear time, as it could be the last node or second to last node; the same is true for accessing nodes.

#### Doubly-Linked Lists

Insertion - O(1)
Removal - O(1)
Searching - Technically it is O(N/2), but still resolves to O(N)
Access - O(N)

Removal differs from SLL, because in a SLL when removing from the end, it becomes O(N) since we need to iterate. Searching in a DLL is twice as fast as SLL searching since we can cut it in half and start from either the head or the tail until we find the index needed. However, having the extra pointer in a DLL will take up more memory than a SLL.
