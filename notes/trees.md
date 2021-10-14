# Trees

A tree in programming is a data structure that consists of nodes in a parent / child relationship. They are a little similar to linked lists, but are a bit more complex in nature.

We will end up with branches that connect nodes to other nodes, splitting from the original node. Similar to a real tree, but think of top down (in visual representations). Each node can point to more than one reference to another node, as compared to a linked list.

A node can contain anything, strings, numbers, but can store whatever they need to.

```md
     o  <-root
    /  \
  o      o <- parent, child of root
 / \   / | \
o   o o  o  o <- siblings, leaves, children
```

## Trees vs Linked Lists

_Lists are linear_, they only go in one direction. There is only one path that you can traverse through. They are flat.

_Trees are non-linear_, and there can be many paths that can be taken, depending on which child node you traverse through.

Trees are similar to linked lists in that they consist of nodes that have a pointer to another node in the data structure. However, they differ in that nodes within a tree can point to multiple children nodes, whereas nodes in a linked list can only point to one other node. In the case of a doubly-linked list, a node can point to two nodes, but only one per direction.

Trees are unidirectional, but branch out. The graph above illustrates this. A node can point to multiple other children nodes, and those child nodes can also point to their own children nodes. However, a child node cannot point back to its own parent node. __Parent -> Child__

__A tree will only have one root node.__

## Tree Terminology

- __Root__ - The top node in a tree
- __Child__ - A node directly connected to another node when moving away from the root
- __Parent__ - The converse notion of a child
- __Siblings__ - A group of nodes with the same parent
- __Leaf__ - A node with no children
- __Edge__ - The connection between one node and another

## Different Use Cases

Trees are used all the time in programming.

- HTML DOM - Document object model, elements within other elements, nested. They are parent/child relationships.
- Network Routing - Delivery schemes for messages travelling through a network
- Abstract Syntax Trees (ASTs) - A model to describe the syntax of a programming language without going into code.
- Artificial Intelligence - minimax tree, decision tree, etc. Breaks down logic into a tree so that AI can parse through all options and choose the best outcome (tic-tac-toe for example), each node describing a possible option.
- Folders in an OS
- Computer File Systems
- JSON

## Kinds of Trees

Types include:

[Wikipedia Types of Trees](https://en.wikipedia.org/wiki/List_of_data_structures#Trees)

We'll focus on:

- Trees (General) - Can have many children in general, no rules
- Binary Trees - Each node can have _at most_ 2 children, can have 0, 1, or 2
- Binary Search Trees (BST) - Special case of binary tree that is kept in order, sorted, nodes can be compared
  - Child node values that are less than the parent node value are located to the left
  - Child node values that are greater than the parent node value are located to the right

Others:

- Heaps
- B-Trees

Searching in a BST, by nature of the sorted nodes, is efficient and makes for easy traversal. Every comparison we do should roughly chop the number of items to sort through in half, very similar to binary search.

Searching in an unsorted tree would cause us to check up to _all_ nodes in the tree. There are many ways to search through non-BSTs.

## Implementations

Check out `/data-structures/snippets/BinarySearchTree.js` for a BST class implementation.

### Big O of BST

- Insertion - O(log n)
- Searching - O(log n)

Inserting and searching a BST is logarithmic time, because with each iteration over each node, we cut the number of items to traverse through in half. Hence the name, binary!

_However, these times are not guaranteed.__

Some BSTs are not the best, although valid. Maybe don't use a BST for data like the following:

```bash
 3
  \
   17
    \
    19
     \
     32
      \
      34
       \
       64
```
