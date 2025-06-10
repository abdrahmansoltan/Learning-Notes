# INDEX

- [INDEX](#index)
  - [Intro](#intro)
  - [Coding challenges](#coding-challenges)
    - [Clamp](#clamp)
    - [Function Length](#function-length)
    - [Make Counter](#make-counter)
    - [Mean](#mean)
    - [Number of Arguments](#number-of-arguments)

---

## Intro

This file contains coding-questions, system-design questions, and other challenges related to Frontend Development

---

## Coding challenges

### Clamp

Implement a function `clamp(number, lower, upper)` to restrict a number within the inclusive lower and upper bounds.

- Arguments:
  - `number`: The number to be clamped.
  - `lower`: The lower bound.
  - `upper`: The upper bound.
- Returns:
  - The clamped value, which is the number if it is within the bounds, or the nearest bound if it is outside.
- Example:

  - `clamp(3, 0, 5)` returns `3` -> Within bounds, retur as-is.
  - `clamp(-10, -3, 5)` returns `-3` -> Below lower bound, return lower bound.
  - `clamp(10, -5, 5)` returns `5` -> Above upper bound, return upper bound.

- Explanation:
  - The function checks if the number is less than the lower bound, greater than the upper bound, or within the bounds, and returns the appropriate value.
  - This is a common utility function used in various applications to ensure values stay within a specified range.
  - It can be useful in scenarios like UI sliders, animations, or any situation where you want to limit a value to a specific range.
  - The idea here is to ensure that the number does not exceed the defined limits, providing a simple way to enforce constraints on numerical values.
  - We can use `if / else` statements to check the conditions and return the appropriate value based on the checks.

```js
function clamp(number, lower, upper) {
  if (number < lower) {
    return lower;
  } else if (number > upper) {
    return upper;
  } else {
    return number;
  }
}
```

---

### Function Length

Implement a function `functionLength`, to return the number of parameters a function expects. Note that this is a static value defined by the function, not the number of arguments the function is called with (which is determined by arguments.length)

- Example:

  ```js
  function foo() {}
  function bar(a) {}
  function baz(a, b) {}

  functionLength(foo); // 0
  functionLength(bar); // 1
  functionLength(baz); // 2
  ```

- Solution:

  - The function can use the `length` property of the function object to determine how many parameters it expects.

    - This property is a built-in feature of JavaScript functions that returns the number of parameters defined in the function signature.

    ```js
    function functionLength(fn) {
      return fn.length;
    }
    ```

---

### Make Counter

Implement a function makeCounter that accepts an optional integer value and returns a function. When the returned function is called initially, it returns the initial value if provided, otherwise 0. The returned function can be called repeatedly to return 1 more than the return value of the previous invocation.

- Example:

  ```js
  const counter = makeCounter(5);
  console.log(counter()); // 5
  console.log(counter()); // 6
  console.log(counter()); // 7

  const anotherCounter = makeCounter();
  console.log(anotherCounter()); // 0
  console.log(anotherCounter()); // 1
  ```

- Explanation:

  - The `makeCounter` function creates a **closure** that maintains the current count.
  - It initializes the count with the provided value or defaults to `0`.
  - Each time the returned function is called, it increments the count and returns the new value.
  - This is a common pattern in JavaScript for creating stateful functions that can maintain their own internal state across invocations.

- Solution:

  ```js
  function makeCounter(initialValue = 0) {
    let count = initialValue;

    return function () {
      return count++;
    };
  }
  ```

---

### Mean

Implement a function `mean` that calculates the arithmetic mean of an array of numbers. The mean is the sum of all numbers divided by the count of numbers.

The function should return `NaN` if array is empty.

- Example:

  ```js
  mean([1, 2, 3, 4, 5]); // 3
  mean([10, 20, 30]); // 20
  mean([]); // NaN (or handle as needed)
  ```

- Explanation:

  - We can use the `reduce` method to sum the elements of the array and then divide by the length of the array to get the mean.
  - If the array is empty, we return `NaN` to indicate that the mean cannot be calculated.

- Solution:

  ```js
  function mean(arr) {
    if (arr.length === 0) return NaN; // Handle empty array case

    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
  }
  ```

---

### Number of Arguments

Implement a function `numberOfArguments` that returns the number of arguments passed to it. This function should be able to handle any number of arguments, including zero.

- Example:

  ```js
  numberOfArguments(); // 0
  numberOfArguments(1); // 1
  numberOfArguments(1, 2, 3); // 3
  numberOfArguments('a', 'b', 'c', 'd'); // 4
  ```

- Explanation:

  - In JavaScript, we can use the `arguments` object, which is an array-like object that contains all the arguments passed to a function.
  - The `length` property of the `arguments` object gives us the number of arguments passed.

- Solution:

  ```js
  function numberOfArguments() {
    return arguments.length; // Return the number of arguments passed
  }
  ```

  - Another approach is to use the rest parameter syntax, which allows us to capture all arguments into an array.

    ```js
    function numberOfArguments(...args) {
      return args.length; // Return the number of arguments passed
    }
    ```
