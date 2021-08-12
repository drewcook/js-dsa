# Big O Notation

**Types of Big O Notation times:**

O(1) - constant time
O(logn) - logarithmic time
O(n) - linear time
O(n\*logn) - ??
O(n\*n) - quadratic time

_These are in order from fastest to slowest. Constant time is the fastest, and quadratic time is very slow._

## Objects

Objects are faster for access, insertion, and removal of data. It is constant time for these. Order doesn't exist.

It's generally slower to search through an object. It is linear time for searching.

Insertion - O(1)
Removal - O(1)
Searching - O(n)
Access - O(1)

```js
obj.keys() // O(n)
obj.values() // O(n)
obj.entries() // O(n)
obj.hasOwnProperty() // O(1)
obj.value // O(1)
obj.value = x // O(1)
```

## Arrays

Use arrays when order matters. And in general, add and remove from the end of the array, so items do not need to be reindexed.

In general, a lot of working with arrays are of O(n) time, or linear time complexity.

```js
arr[i] // O(1)
arr.push() // O(1)
arr.pop() // O(1)
arr.shift() // O(n)
arr.unshift() // O(n)
arr.concat() // O(n)
arr.slice() // O(n)
arr.splice() // O(n)
arr.forEach() // O(n)
arr.map() // O(n)
arr.filter() // O(n)
arr.reduce() // O(n)
arr.find() // O(n)
arr.sort() // O(n*logn)
```
