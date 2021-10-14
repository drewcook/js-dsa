# Tree Traversal

How do we ensure we visit every node only once, given that we're working with _any_ kind of tree, sorted or not?

This is a classic problem with computer programming.

There are two commonly used techniques that we will cover for traversing trees.

- Breadth-first search (BFS)
- Depth-first search (DFS)

## Breadth-First Search

This technique searches all sibling nodes at the same level _before_ moving onto the next nested level of nodes, or children. This is a horizontal approach. We can go either left-to-right or right-to-left.

### Steps for BFS

Steps - Iteratively:

- Create a queue and a variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as there is anything in the queue
  - Dequeue a node from the queue and push the value of the node into the variable that stores the visited nodes, then check the following:
    - If there is a left property on the node dequeued, add it to the queue
    - If there is a right property on the node dequeued, add it to the queue
  - Loop back to what is in queue, we essentially start working with the next level of children at this point
  - Iterate, and if there is an empty queue, we've searched everything in the tree
- Return the variable that stores all the values

## Depth-First Search

This technique searches through one direction from the root all the way through to the last node through those edges prior to switching to another edge route. This is a vertical approach. We traverse down the tree until we end up in at a leaf before we visit sibling nodes.

There are three main orders for DFS algorithms. When we change the order that we traverse, it can change the output dramatically. Sometimes, choosing the right order becomes important, depending on the structure of the tree.

### PreOrder

We will visit the node first, then we traverse the left, then we traverse the right. This occurs for each node visited. The root node will be the first node visited with this approach.

Steps - Recursively:

- Create a variable to store the values of nodes visited
- Create a variable called 'current' and store the root of the BST to start with, or optional starting node param
- Write a recursive helper function which accepts a node
  - Push the value of the node to the variable that stores the values
  - If the node has a left property, call the helper function with the left property on the node
  - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable
- Return the array of values

### PostOrder

We will visit the node _after_ we explore the left and right sides of the node. For each node we traverse, we traverse the left, then we traverse the right, _then_ we visit the node only when it is a leaf. This occurs for each node. ie. We explore an entire branch from a given node, then we visit the node. The root will be the last node visited with this approach, even if we start our traversal there.

Steps - Recursively:

- Create a variable to store the values of nodes visited
- Create a variable called 'current' and store the root of the BST to start with, or optional starting node param
- Write a recursive helper function which accepts a node
  - If the node has a left property, call the helper function with the left property on the node
  - If the node has a right property, call the helper function with the right property on the node
  - Push the value of the node to the variable that stores the values
- Invoke the helper function with the current variable
- Return the array of values

### InOrder

We will traverse the entire left side, then we visit the node, then we traverse the entire right side. Our output would look very similar to the visual order if the BST was graphed out. It is almost like reading it left to right, vertical depth excluded. The root node will end up somewhere in the middle of our result. The result will be sorted in ascending order.

Steps - Recursively:

- Create a variable to store the values of nodes visited
- Create a variable called 'current' and store the root of the BST to start with, or optional starting node param
- Write a recursive helper function which accepts a node
  - If the node has a left property, call the helper function with the left property on the node
  - Push the value of the node to the variable that stores the values
  - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable
- Return the array of values

All of these functions can be written identically, with exception for the three lines within our recursive function. Check out the implementations on `/data-structures/snippets/BinarySearchTree.js`, and notice how similarly written they each are. Notice how the outputs are much different, however. In each of these approaches, we work vertically first, rather than horizontally first, hence DFS.

### DFS Orders Compared

What are the potential scenarios to use one variant over the other?

- InOrder is used commonly with BSTs; we get all nodes in the tree in their underlying order. The result will be sorted in ascending order.
- PreOrder can be used to "export" a tree structure so that it is easily reconstructed or copied. We can iterate over the result, knowing that our first item is our root, and reconstruct it knowing that each item iterated on would become a new child node if it is less than the previous item.

## BFS vs DFS - Which to use?

Short answer: each is better depending on the scenario.

The time complexity for each type of searching is the same. In either case, each node will be visited once, so the time complexity is `O(n)`. However, the space complexity will differ depending on which approach used. This is the important factor in determining which approach to use.

BFS may be better if the tree is fully fleshed out, and there are lots of nodes to keep track of, i.e. it is a very wide tree. However, since we implement BFS with a queue, our queue variable may end up taking up a lot of space. Let's say the tree has over 100 levels of nodes, well, we would end up with a very large queue of all the previous levels' nodes, which would be quite large.

In DFS, we're not having to store in memory each node across the entire tree per level visited, we are only keeping track of the nodes in a given branch all the way down to the end. We are using recursion for this. This results in a lot less memory used.

Conversely, if we have a very weighted tree to one side, say each node only has a right node, BFS would use less memory than DFS in this scenario. That is because our queue would only ever have one item in it with each visit. This would be `O(1)` space complexity. But if we approach this tree with DFS, we end up with every level being stored in memory, which could be exacerbated if we have a very deep tree.

_Most_ of the time, trees will typically be equally weighted to some degree. Rarely, but not never, will a tree be highly weighted to one side, i.e. a deep and long tree.
