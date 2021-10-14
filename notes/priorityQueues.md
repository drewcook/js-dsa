# What is a priority queue?

A priority queue is a data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

A good example of a real-life place that operated with a priority queue would be an ER at a hospital.  A person coming in with their leg cut off will have a higher priority than someone who needs a few stitches, even if that person comes in later.  The person with the stitches needed has a lower priority than the one without the leg.

On UNIX machines, there are thousands of processes running in the background.  Each process will have a `PID`, or process ID, and a priority.  Run the following command on a Mac to view the machine's processe that are currently running; the second value `NI` is the priority.

```zsh
cd ~
ps ax -o pid,ni,command
```

## Implementation

A binary heap is the perfect data structure to use to assist with creating priority queues. However, __priority queues are completely separate from a binary heap, and it is just a concept that can be implemented in other, more naive data structures__.

You could store them in an array or list, adding them in as they come in, then looping over to find the lowest priority number (i.e. the highest priority). But this is naive and isn't as efficient, since arrays/lists take linear time on average to search through.  We could turn that into constant time by using a binary heap, since the highest priority would be the root.  Whether we decide to use a min-heap or a max-heap depends on how we want to store the values.  If we want P0, P1, P2, etc, (as in software development bugs), we probably want to use a min-heap.  We could also inverse that and use a max-heap.  We will typically go with a `MinBinaryHeap`, since we will likely stick to the paradigm of a lower priority number value correlating to a higher priority.

See `/data-structures/PriorityQueue.js` for an example; it is very similar to our `MaxBinaryHeap` class, yet we are storing specific values instead of arbitrary ones.  We are storing values that represent a different priority as well as a value.  The heap is constructed using __priority__.

```js
element = {
 val: 'Some value',
 priority: 1
};

element = {
 val: 'Some other value',
 priority: 3
};
```
