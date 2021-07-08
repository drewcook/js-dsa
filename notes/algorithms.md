# Algorithms & Problem Solving

## What is an algorithm?

A process or set of steps to accomplish a certain task.

## Problem Solving

### How do you improve?

1. **Devise** a plan for solving problems.
2. **Master** common problem solving patterns.

#### Problem Solving Approach

1. **Understand The Problem**
   1. Can I restate the problem in my own words?
   2. What are the inputs that go into the problem?
   3. What are the outputs that should come from the solution to the problem?
   4. Can the outputs be determined from the inputs? Do I have enough information to solve the problem?
   5. How should I label the important pieces of data that are a part of the problem?
2. **Explore Concrete Examples**
   1. Coming up with examples can help you understand the problem better.
   2. Examples also provide sanity checks that your eventual solution works how it should.
   3. User stories.
   4. Unit tests.
   5. Start simply, then progress to more complex examples, then move onto edge cases.
   6. Explore empty and invalid inputs.
3. **Break It Down**
   1. Add in comments for each step of the problem. Explicitly write out the steps to take. Start with major items, then fill in the blanks.
   2. Forces you to think about the code you'll write before you write it, and helps catch any lingering conceptual issues or misunderstandings before diving in.
   3. Helps to communicate the thought process of how you're approaching the problem to the interviewers.
4. **Solve Or Simplify**
   1. Solve the problem if you can, and if you can't, solve a simpler problem.
   2. Try and ignore the part(s) that are giving you a hard time, and focus on the other parts.
   3. It's much better to end the problem with something to show at minimum. The more, the better.
   4. Find the core difficulty in what you're trying to do, temporarily ignore it, write a simplified solution, then implement it back into your solution.
5. **Look Back And Refactor**
   1. After solving the problem, it's not complete. You can often get by with something that works, but in an interview, it helps to show that you strive for improvement.
   2. Can you check the result? Does it work?
   3. Can you derive the result differently?
   4. Can you understand it at a glance?
   5. Can you use the result or method for some other problem?
   6. Can you improve the performance of your solution, i.e. time/space complexity?
   7. Can you think of other ways to refactor, i.e. aesthetics, neatness, naming conventions, etc?
   8. How have other people solved this problem? Ask this question for interviewers.

_George Polya - How To Solve It_ is a great resource for problem solving techniques.

#### Problem Solving Patterns

There are many common patterns that arise during problems, some named, some only known concepts. They act as a blueprint to looking at the problem and how to solve it. Here are a few:

- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking

##### Frequency Counters

This pattern uses objects or sets to collect values and frequencies of values. This can often avoid the need for nested loops or `O(n^2)` operations with arrays / strings.

This is commonly used when comparing equality or likeness of individual items that are part of two different things, anagrams, squared versions, etc.

Example:
Write a function called **same** which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

```js
// see snippets/same.js

same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); // false (must be same frequency)
```

##### Multiple Pointers

Creating **pointers**, or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition, is **very** efficient for solving problems with minimal space complexity as well.

This is commonly used when trying to keep track of two different variables (pointers), specific positions in an array/string, maybe to find the first pair where sum is 0.

Example:
Write a function called **sumZero** which accepts a **sorted** array of integers. The function should find the **first** pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

```js
// see snippets/sumZero.js

sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
```

##### Sliding Window

This pattern involves creating a **window** which can either be an array or number from one position to another.

Depending on a certain condition, the window either increases or closes (and a new window is created).

Very useful for keeping track of a subset of data in an array/string etc.

Example:
Find the longest sequence of unique characters in a string.

```js
longestUniqueSequence("hellothere"); // lother
```

Or, find max sum of n consecutive elements in an array.

```js
// see snippets/maxSubArraySum.js

maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10, 8+2
maxSubArraySum([4, 2, 1, 6], 1); // 6
```

##### Divide and Conquer

This pattern involves dividing a dataset into smaller chunks and then repeating a process with a subset of data. This pattern can tremendously **decrease time complexity**.

Quick sort and merge sort are two sorting algorithms that employ a divide and conquer strategy. Binary search and binary search trees also use divide and conquer.

Example:
Given a **sorted** array of integers, write a function callsed search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.

```js
// see snippets/search.js

search([1, 2, 3, 4, 5, 6], 4); // 3
search([1, 2, 3, 4, 5, 6], 6); // 5
search([1, 2, 3, 4, 5, 6], 11); // -1
```
