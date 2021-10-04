# Queues

Queues are a type of data strucure that is often used in programming as well.  They are an abstract data structure of a collection of data that follows one primary rule.  It adheres to first in, first out. (FIFO)

Think of a queue as a line of people in a checkout aisle, or anywhere else.  The first person in the line will be the first one checked out.

## Where are queues used in programming?

These are used fairly often, and there are a lot of use-cases. They come in handy for when order of things matter.  They are also the foundation for more complext data structures.

- Background tasks - enrolling players into a video game, whoever has waited the longest gets the first treatment to join the game
- Uploading resources - the first files uploaded will be the first processed
- Printing / Task processing - whoever hits "ctrl+p" in a library first will get their docs printed first

## Implementation

Just like stacks, they can be implemented with both arrays as well as linked lists. See the `/data-structures/snippets/Queue.js` file for code.

## Big O of Queues

The below shows times for implementing with a singly-linked list.

- Insertion: `O(1)` - add to end of SLL
- Removal: `O(1)` - remove from beginning of SLL
- Searching: `O(n)` - not important at all for queues, use an array instead
- Access: `O(n)` - not important at all for queues, use an array instead
