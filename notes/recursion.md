# Recursion

## What is recursion?

Recursion is a process that calls itself. In our case, it is a function that calls itself. There are two cases within a recursive function, a **base** case and a **recursive** case. The function calls itself within the recursive case.

Recursion is used all the time in programming. It is sometimes a cleaner alternative to iteration.

```js
// Examples

JSON.parse();
JSON.stringify();
document.getElementById(); // and other DOM traversal algorithms
object.nested.property; // Object traversal
// and more complex data structures, like stacks
```

## The JS Call Stack

The JavaScript call stack is a data structure, a stack, that keeps tracks of when functions are invoked and helps with debuggins to show at what point in stack the program is currently running. It is a stack, which means it adheres to a LIFO policy.

Any time a function is invoked, it is places (**pushed**) on the top of the call stack. When JavaScript sees the **return** keyword or when the function ends, the compiler will remove (**pop**) the function from the call stack.

However, when we write recursive **functions**, we keep pushing new functions onto the call stack, the same function in fact. This happens within the recursive case, and calls itself with a different input each time. But it has to end at some point, and that is the **base case**.

A recursive function will invoke itself with a different input until it reaches the base case, or the condition at which the recursion will end. **This is the most important concept to understand.**

**Example**:
Counting down from 5 until we get to zero, then we stop.

```js
function countDown(num) {
  // base case
  if (num <= 0) {
    console.log("All done!");
    return; // <- this is important to return, or use an else block
  }
  // recursive case
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);

// Result:
// 5
// 4
// 3
// 2
// 1
// All done!
```

### Common Recursion Pitfalls

##### No base case added.

If there is no base case to catch on and end the recursion, it will result in an infinite loop of calling itself. This will result in a `maximum call stack size exceed` error. This is generally knowns as **stack overflow**.

##### Returning the wrong thing, or no return at all.

This could also result in an infinite loop and max call stack size exceeded error. The base case should use the `return` keyword.

Usually you can avoid these by having a strong base case first, and remembering to use `return` keywords in each case, or use an `if/else` block, where one block is the base case and the other is the recursive case.

## Helper Method Recursion

In some cases, we can put a helper method within another function that is recursive. Generally this would be within an outer function that is not recursive itself. Often, this can be used to populate an array, or compile a list of data.

```js
function outer(input) {
  var outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}
```

Another concrete example could be to collect all the odd values in an array. See `./snippets/collectOddValues.js`.

## Pure Recursion

The function itself is self-contained, and it is recursive. There are no helper methods, there are no external variables to populate or compile, unlike using a helper method. See `./snippets/collectOddValues.js` for a pure recursive way to collect odd values in an array.

### Pure Recursion Tips

For arrays, use methods like **slice**, the **spread operator**, and **concat** that make copies of arrays so you do not mutate them.

Remember, strings are immutable, so you will need to use methods like **slice**, **substr**, or **substring** to make copies of strings.

To make copies of objects, use **Object.assign**, or the **spread operator**.
