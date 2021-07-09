# Sorting Algorithms

Sorting is the process of rearranging the items in a collection (i.e. an array) so that the items are in some kind of order.

Examples:

- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year
- Sorting movies based on revenue

Items don't matter, the sorting algorithms do.

Individual characters in a sentence for example, linked listed, trees, etc can also be sorted.

```js
function sort(arr) {
  return arr;
}

sort([23, 45, 6, 12, 13]); // [6, 12, 13, 23, 45]
```

There are at least over 15 named sorting algorithms.

## Why do we need to learn sorting?

- It is an incredibly common task, so it's good to know how it works.
- There are many different ways to sort things, and different techniques have their own advantages and disadvantages.
- You may want to implement a faster sorting algorithm than a built-in method.
  - For example, insertion sort is slow when mostly random items, but very very quick when only a few, or little, are unsorted.
  - Selection sort is slow

### Elementary Algorithms

These are simple, but important to know before using more complex algorithms.

- Bubble sort
- Selection sort
- Insertion sort

### Built-In `.sort()` Method

The built in `Array.sort()` method in JavaScript doesn't always behave the way we want it to.

```js
["Banana", "Coke", "Apple"].sort(); // ["Apple", "Banana", "Coke"]

[6, 4, 15, 10].sort(); // [10, 15, 4, 6]
```

But we can tell JS how to sort. We can use the optional compare function argument to do this.

The _comparator_ looks at pairs of elements (_a_ and _b_) and determines their sort order based on the return value.

- If it returns _a_ negative number, _a_ should come before _b_.
- If it returns _a_ positive number, _a_ should come after _b_.
- If it returns 0, JS treats them as the same number.

```js
function numberCompare(num1, num2) {
  return num1 - num2;
}

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

[6, 4, 15, 10].sort(numberCompare); // [4, 6, 10, 15]

["dd", "d", "ddd"].sort(compareByLen); // ['d', 'dd', 'ddd']
```

## Bubble Sort

Not that efficient, not commonly used. There is one use case where it does excel though. It is useful to know, and has some optimizations we can make.

It is a sorting algorithm where the largest values bubble up to the top. Typically if we're sorting by ascending value.

We iterate over each item, and we compare it with the next item, and if it is larger, we swap. Then we compare with the next item, is it larger, if not, we don't swap. We continue to iterate over each item. The first pass will take the largest value, and it will bubble all the way to the end.

As each pass happens, the largest item gets pushed to the end. This results in looping over `n - 1` items each iteration until all passes have been sorted. This is why it is not very efficient, as it has to take multiple `n` passes and is at `O(n)` time complexity.

### Swapping

Many sorting algorithms involve some type of swapping functionality. It's helpful to define it as a separate funciton to make the bubble sort code cleaner.

```js
// ES5
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES6
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[id2]];
};
```
