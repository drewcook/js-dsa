# Stacks

Stacks are a type of data structure that is used often in programming. They are an abstract data structure of a collection of data that follows one prirmary rule. It adheres to last in, first out. (LIFO)

Similar to a stack of plates, you'll add onto the top, and also remove from the top.

The __call stack__ in the browser or any other IDE is a stack!  Any recursive function also creates a stack.

They are not a built in data structure in JavaScript. You will have to implement one, but it is fairly simple to do so, and you should use a linked list.

## Where are stacks used in programming?

- Managing function invocations
- Undo / Redo
- Routing (the history object) is treated like a stack

## Implementations

There is more than one way to implement a stack. We will implement it in both an array and a linked list. Most programming languages will come with their own built-in stack data structure.

### Arrays

- `push/pop` - add/remove to end of an array
- `unshift/shift` - add/remove to beginning of an array, but not as efficient because items will need to be reindexed each time

Arrays are quicker and easier to implement, but we really wouldn't need to access items by their index. A linked list is typically better, but may not be as easy to implement.

- see `/data-structures/snippets/Stack.js`
- we can use adding/removing to the beginning of a singly-linked list since they are O(1) time
- they will be very similar to our `shift|unshift` methods on our SLL implementation

### Linked Lists

A better implementation for a stack would be to create a singly-linked list (or doubly) and have two methods to add and remove from the stack. Check out the `Stack` class in `/data-structures/snippets/Stack.js`.

The idea is that an array is too heavy-handed for a stack. We won't need indicies or all the other prototype methods of an array, we only need to add and remove in a LIFO policy in a stack. The idea is that we would want each operation to be `O(1)` constant time, so we add and remove at the beginning of this linked list rather than the end. This way, we won't have to loop through the entire list to remove the last item added; we can start from the beginning and find what we need to remove right away.

## Big O Notation for Stacks

Below are times for implmeneting with a singly-linked list.

- Insertion: `O(1)`
- Removal: `O(1)`
- Searching: `O(n)` - not important at all for stacks, use an array instead
- Access: `O(n)` - not important at all for stacks, use an array instead
