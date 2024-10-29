# INDEX

- [INDEX](#index)
  - [`this` keyword](#this-keyword)
  - [Functions](#functions)
  - [Interview Questions](#interview-questions)
    - [What are `call()` and `apply()`?](#what-are-call-and-apply)
    - [How can you tell if an image element is loaded on a page?](#how-can-you-tell-if-an-image-element-is-loaded-on-a-page)
    - [What is event delegation?](#what-is-event-delegation)
    - [How can we optimize the performance when adding styles to an element using JavaScript?](#how-can-we-optimize-the-performance-when-adding-styles-to-an-element-using-javascript)
    - [What is a worker? and when would you use one?](#what-is-a-worker-and-when-would-you-use-one)
    - [Can you implement a `bind()` function? (How to change scope)](#can-you-implement-a-bind-function-how-to-change-scope)
    - [What is **Debounce** and **Throttle**?](#what-is-debounce-and-throttle)
    - [We have 2 identical `DOM` trees, `A` and `B`. For `DOM` tree `A` we have the `location` of an element. Create a function to find that element in `DOM` tree `B`](#we-have-2-identical-dom-trees-a-and-b-for-dom-tree-a-we-have-the-location-of-an-element-create-a-function-to-find-that-element-in-dom-tree-b)
    - [Create a function that moves an element **(Rendering Performance)**](#create-a-function-that-moves-an-element-rendering-performance)
    - [Given this function, how can you convert it into a `Promise` ?](#given-this-function-how-can-you-convert-it-into-a-promise-)
    - [what does double brackets mean in properties, ex: `[[prototype]]`?](#what-does-double-brackets-mean-in-properties-ex-prototype)
    - [How to get the last element in the array in multiple ways?](#how-to-get-the-last-element-in-the-array-in-multiple-ways)
    - [What will happen if you used `forEach` on a `Set`?](#what-will-happen-if-you-used-foreach-on-a-set)
    - [Why do we get these results?](#why-do-we-get-these-results)
    - [Why we don't use asthmatic comparison with strings?](#why-we-dont-use-asthmatic-comparison-with-strings)
    - [How do you return multiple things from a function?](#how-do-you-return-multiple-things-from-a-function)
    - [How to deep copy an object?](#how-to-deep-copy-an-object)
    - [How to check if a value is a number?](#how-to-check-if-a-value-is-a-number)
    - [What is a closure?](#what-is-a-closure)
    - [What is the difference between classical and prototypal inheritance?](#what-is-the-difference-between-classical-and-prototypal-inheritance)
    - [How is it possible to call methods on functions?](#how-is-it-possible-to-call-methods-on-functions)
    - [Exercise: Refactor a function for improved readability](#exercise-refactor-a-function-for-improved-readability)
    - [Implement a timeout handler for requests (so that the request doesn't hang forever)](#implement-a-timeout-handler-for-requests-so-that-the-request-doesnt-hang-forever)
    - [Implement TODO list using vanilla JavaScript](#implement-todo-list-using-vanilla-javascript)

---

## `this` keyword

- A dynamically evaluated method call can lose `this`.

  ```js
  let user = {
    name: 'John',
    hi() {
      alert(this.name);
    },
    bye() {
      alert('Bye');
    }
  };

  user.hi(); // works

  // now let's call user.hi or user.bye depending on the name
  (user.name == 'John' ? user.hi : user.bye)(); // Error!
  ```

  - Explanation:
    - Looking closely, we may notice two operations in `obj.method()` statement:
      1. First, the dot `'.'` retrieves the property `obj.method`.
         - the dot `'.'` returns not a function, but **a value of the special `Reference Type`**.
      2. Then parentheses `()` execute it.
         - When parentheses `()` are called on the `Reference Type`, they receive the full information about the object and its method, and can set the right **`this`**.
         - Any other operation like assignment `user.hi` discards the reference type as a whole, takes the value of `user.hi` (a `function`) and passes it on. So any further operation “loses” **`this`**.
  - Solution:
    - we can use `func.bind()`

---

## Functions

- JavaScript does not auto-insert a semicolon before a bracket `()`

  ```js
  let user = {
    name: 'John',
    go: function () {
      alert(this.name);
    }
  }(user.go)(); // error!
  ```

  - Explanation:

    - The error appears because a **semicolon** is missing after `user = {...}`.
    - JavaScript does not auto-insert a semicolon before a bracket `(user.go)()`, so it reads the code like:

      ```js
      let user = { go:... }(user.go)()
      ```

  - Solution:

    - If we insert the semicolon, all is fine:

      ```js
      let user = {
        name: 'John',
        go: function () {
          alert(this.name);
        }
      };

      user.go(); // John
      ```

- How to skip parameters when calling functions:

  ```js
  function myfunc(x, y = 2, z = 6) {}
  // use (undefined) when calling it
  myfunc(5, undefined, 17);
  ```

- only one `rest parameter` is allowed in one function and it must be the last parameter.

---

## Interview Questions

**Reference** -> [Front End Interview Handbook
](https://www.frontendinterviewhandbook.com/)

### What are `call()` and `apply()`?

- **short answer:** They're ways of changing scope of `this` inside a function.

- **detailed answer:**
  - `call()` and `apply()` are predefined JavaScript methods.
  - Both methods can be used to invoke a function, and both methods must have the owner object as first parameter.
  - `call()` takes series of function arguments separately.
  - `apply()` takes the function arguments in an array.

### How can you tell if an image element is loaded on a page?

- Use the `complete` property of the image element.

  ```js
  if (document.getElementById('myImg').complete) {
    // do something
  }
  ```

### What is event delegation?

- It is a technique involving adding event listeners to a parent element instead of adding them multiple times to the descendant elements.

### How can we optimize the performance when adding styles to an element using JavaScript?

- First, here's the wrong approach: ❌

  ```js
  const element = document.getElementById('myElement');
  element.style.color = 'red';
  element.style.fontSize = '16px';
  element.style.backgroundColor = 'yellow';
  ```

  - This will trigger a reflow for each style change, which can be inefficient.

- Correct approaches: ✅

  - Use the `classList` property to add, remove, or toggle CSS classes on an element. instead of directly manipulating the `style` property. This is because changing the `classList` property triggers a reflow only once, while changing the `style` property triggers a reflow every time it's changed.

    ```js
    const element = document.getElementById('myElement');
    element.classList.add('myClass');
    element.classList.remove('myClass');
    element.classList.toggle('myClass');
    ```

  - Use the `style` property to change multiple styles at once by setting the `cssText` property. This is more efficient than changing each style individually.

    ```js
    element.style.cssText = 'color: red; font-size: 16px; background-color: yellow;';
    ```

  - Use the `requestAnimationFrame()` method to batch style changes and avoid layout thrashing. This method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint.

    ```js
    requestAnimationFrame(() => {
      element.style.color = 'red';
      element.style.fontSize = '16px';
      element.style.backgroundColor = 'yellow';
    });
    ```

### What is a worker? and when would you use one?

- A worker is a JavaScript process that runs in the background independently of other scripts and without affecting the performance of the page.
- You can use workers to perform tasks such as:
  - Simulating user interaction by generating events and performing DOM manipulation.
  - Calculating data without blocking the UI.
  - Parsing large JSON files.
  - Generating images.
  - Implementing an infinite scroll.
- When to use a worker:
  - When you need to perform a complex task that doesn't need to be executed immediately.
  - When you need to perform a CPU-intensive task without blocking the UI.
  - When you need to perform a series of tasks that can be executed in parallel.

### Can you implement a `bind()` function? (How to change scope)

```js
Function.prototype.bind = function (scope) {
  const fn = this; // "this" is the function that will be bound
  return function () {
    return fn.call(scope); // "scope" is the object to bind to
  };
};

// Using it
const myBoundFunction = myFunction.bind(myObject);
```

- Follow up: How can you handle argument in your solution?

  ```js
  Function.prototype.bind = function (scope) {
    const fn = this;
    return function () {
      return fn.apply(scope, [...arguments]);
    };
  };
  ```

### What is **Debounce** and **Throttle**?

- **Debounce** and **Throttle** are two similar (but different!) techniques to control how many times we allow a function to be executed over time.
- **Debounce** will fire only once every **n** milliseconds, while **Throttle** will fire every **n** milliseconds.

  - **Debounce** will wait **n** milliseconds after the last function call to actually call the function.
  - **Throttle** will execute the function every **n** milliseconds, ignoring calls that happen in-between.

  ```js
  // Debounce
  function debounce(fn, time) {
    let timeoutId;
    return function () {
      clearTimeout(timeoutId); // clear the previous timeoutId to avoid calling the function multiple times
      timeoutId = setTimeout(() => fn.apply(this, arguments), time); // "this" is the context of the function
    };
  }

  // Throttle
  function throttle(fn, time) {
    let called = false;
    return function () {
      if (!called) {
        called = true;
        setTimeout(() => {
          fn.apply(this, arguments);
          called = false;
        }, time);
      }
    };
  }
  ```

- Follow-up: where these techniques are used in real FE applications?
  - **Debounce** is used in `search` bars, so that the search function is not called every time the user types a letter, but only after the user stops typing for a certain amount of time.
  - **Throttle** is used in `scroll` events, so that the function is not called every time the user scrolls, but only after a certain amount of time has passed.

### We have 2 identical `DOM` trees, `A` and `B`. For `DOM` tree `A` we have the `location` of an element. Create a function to find that element in `DOM` tree `B`

![domTree](./img/domTree-1.png)

- This is a **Reverse-Back** algorithm, meaning that we start from the element we want to find, and we traverse the DOM tree **upwards** to the root. Then, we traverse the DOM tree **downwards** to the element we want to find in the other DOM tree.

  ```js
  function reversePath(element, root) {
    const path = []; // path to the element from the root
    let pointer = element;

    // 1. Traverse the DOM tree Upwards to the root
    while (pointer.parentNode) {
      // get the index of the current node in the parent
      const index = [...pointer.parentNode.children].indexOf(pointer);
      path.push(index);
      pointer = pointer.parentNode;
    }

    // 2. Traverse the DOM tree Downwards to the element we want to find
    pointer = root;
    // now, path has the indexes from the target node to the root
    while (path.length) {
      pointer = pointer.children[path.pop()];
    }
    return pointer;
  }
  ```

### Create a function that moves an element **(Rendering Performance)**

- Hint: usually here, the interviewer wants to see if you know about `requestAnimationFrame()`, which is a method that tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next **repaint**.

  ```js
  function moveElement(element, duration, distance) {
    const start = performance.now(); // get the start time

    function move(currentTime) {
      const elapsed = currentTime - start; // get the time since the animation started
      const progress = elapsed / duration; // calculate how far along the animation is (ratio of the elapsed time to the total duration)
      const amountToMove = progress * distance; // calculate how far we should move the element

      // move the element
      element.style.transform = `translateX(${amountToMove}px)`;

      // stop the animation after the specified duration
      if (amountToMove < distance) {
        requestAnimationFrame(move); // call the function again to repeat the animation loop
      }
    }
    requestAnimationFrame(move);
  }
  ```

  - trick: usually how the `easing` in animation happens is from changing of the `amountToMove` in the `move()` function.

### Given this function, how can you convert it into a `Promise` ?

```js
// input
function getData(callback) {
  setTimeout(() => callback('data'), 1000);
}

// Solution
function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve('data'), 1000);
  });
}
```

- Can you trigger a `Sleep` in Javascript?

  - No, you can't. JavaScript is a single-threaded language, meaning that only one task can be executed at a time. If you block the thread, the browser UI will be blocked as well, and the user won't be able to interact with the page.
  - one trick is to make a function sleeps and not the main thread

    - To do so use `await` in `async` function with a `timeout` function

      ```js
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
        // we use a promise to make the function asynchronous and wait for the specified amount of time before resolving it
      }

      async function demo() {
        console.log('Taking a break...');
        await sleep(2000);
        console.log('Two seconds later, showing sleep in a loop...');
      }
      ```

    - funny fact: this is similar to `promisify()` function in `node.js`

### what does double brackets mean in properties, ex: `[[prototype]]`?

- These are **internal properties** that are not accessible directly from the code, but only indirectly through other internal mechanisms.

### How to get the last element in the array in multiple ways?

```js
const arr = [1, 2, 3, 4, 5];

// 1. using length
const lastElement = arr[arr.length - 1];

// 2. using slice
const lastElement = arr.slice(-1)[0];

// 3. using at
const lastElement = arr.at(-1);

// 4. using pop
const lastElement = arr.pop();
```

- Difference between `at` and indexing:

  - `at` method can be used for method-chaining, while indexing cannot.
  - `at` method can be used to access elements from the end of the array by using negative indices.

    ```js
    const arr = [1, 2, 3, 4, 5];

    arr[arr.length - 1]; // 5
    // or
    arr.at(-1); // 5 ✅
    ```

### What will happen if you used `forEach` on a `Set`?

- `forEach` will iterate over the values of the `Set`. where the `index`/`key` will be the same as the `value`.

  ```js
  const set = new Set(['a', 'b', 'c']);
  set.forEach((value, key) => console.log(value, key));
  // a a
  // b b
  // c c
  ```

### Why do we get these results?

```js
let arr = [1, 2, 3, 4];

0 in arr; // true
4 in arr; // false
```

- it's because `in` operator checks if the `index` / `key` is in the array or not, not the value.
- So, `0` is a valid index, but `4` is not.

### Why we don't use asthmatic comparison with strings?

```js
'x' > 'a'; // true
'X' > 'a'; // false -> capital letters are always less than lowercase letters
```

- because the comparison is done by comparing the `Unicode` values of the characters using the `charCodeAt()` method.

  ```js
  'x'.charCodeAt(0); // 120
  'X'.charCodeAt(0); // 88
  'a'.charCodeAt(0); // 97
  // 97 < 88 < 120
  ```

### How do you return multiple things from a function?

- You can return (one `array` or one `object`) with multiple values inside it.

  ```js
  function foo() {
    return [1, 2, 3];
  }

  function bar() {
    return { a: 1, b: 2, c: 3 };
  }
  ```

- Some languages like `Go` allow you to return multiple values from a function, but JavaScript doesn't support that.

### How to deep copy an object?

1. You can use `JSON.parse()` and `JSON.stringify()` to deep copy an object.

   ```js
   const obj = { a: 1, b: { c: 2 } };
   const deepCopy = JSON.parse(JSON.stringify(obj));
   ```

   - But, this method has some limitations:
     - ⚠️ It won't store the `prototype` of the object. **(which is important for objects created with `new` keyword or with objects instantiated from a class)**
     - It will not work with functions, `undefined`, or `symbol` properties.
     - It will not work with circular references (an object that references itself).

2. You can use a `for...in` loop to iterate over the properties of the object and copy them to a new object using recursion to make sure nested objects are also deep copied.

   ```js
   function deepCopy(obj) {
     const result = {};
     for (const key in obj) {
       if (typeof obj[key] === 'object') {
         result[key] = deepCopy(obj[key]);
       } else {
         result[key] = obj[key];
       }
     }
     return result;
   }
   ```

3. You can use `Object.assign()` to copy the properties of the object to a new object. **(but it will be shallow copy, not deep copy)**

   ```js
   const obj = { a: 1, b: { c: 2 } };
   const deepCopy = Object.assign({}, obj);
   ```

4. You can use the `spread` operator to copy the properties of the object to a new object.

   ```js
   const obj = { a: 1, b: { c: 2 } };
   const deepCopy = { ...obj };
   ```

   - But it will be shallow copy, not deep copy.

5. You can use `lodash` library to deep copy an object -> `cloneDeep()` method.

   ```js
   const _ = require('lodash');
   const obj = { a: 1, b: { c: 2 } };
   const deepCopy = _.cloneDeep(obj);
   ```

### How to check if a value is a number?

- You can use the `typeof` operator to check if a value is a number.

  ```js
  typeof 42; // 'number'
  typeof NaN; // 'number'
  typeof Infinity; // 'number'
  ```

- Or, you can use the `Number.isNaN()` method with `parseInt()` to check if a value is a number.

  ```js
  Number.isNaN(42); // false
  Number.isNaN(NaN); // true
  Number.isNaN(Infinity); // false

  // usually with input from the user we use parseInt()
  Number.isNaN(parseInt('42')); // false
  ```

### What is a closure?

- A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.

  ```js
  function outer() {
    const name = 'John';
    function inner() {
      console.log(name);
    }
    return inner;
  }

  const innerFunction = outer();
  innerFunction(); // 'John'
  ```

  - In this example, the `inner` function has access to the `name` variable from the `outer` function, even after the `outer` function has finished executing. This is because the `inner` function forms a closure over the `name` variable.
  - Closures are commonly used to give objects data privacy, to create factory functions, and to create callback functions.
  - Closures can also be used to create partial functions and currying in functional programming.

### What is the difference between classical and prototypal inheritance?

The difference between classical and prototypal inheritance is how objects inherit properties and methods from other objects.

- in **classical inheritance**, objects inherit from classes, and classes inherit from other classes. This is the inheritance model used in class-based languages like Java, C++, and Python.

  ```js
  class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a noise`);
    }
  }

  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks`);
    }
  }

  const dog = new Dog('Rex');
  dog.speak(); // 'Rex barks'
  ```

- in **prototypal inheritance**, objects inherit directly from other objects. This is the inheritance model used in prototype-based languages like JavaScript.

  ```js
  const animal = {
    speak() {
      console.log(`${this.name} makes a noise`);
    }
  };

  const dog = Object.create(animal);
  dog.name = 'Rex';
  dog.speak(); // 'Rex makes a noise'
  ```

  - In JavaScript, objects inherit from other objects through the prototype chain. Each object has a prototype object, which acts as a template for the object. When a property or method is accessed on an object, JavaScript looks for it on the object itself, and if it's not found, it looks for it on the object's prototype, and so on up the prototype chain.
  - Prototypal inheritance is more flexible than classical inheritance because objects can inherit from multiple prototypes, and objects can be created dynamically at runtime.

### How is it possible to call methods on functions?

- because functions are objects in JavaScript, they can have properties and methods in the `prototype` object.

### Exercise: Refactor a function for improved readability

- Let’s imagine you found this function below in a very large production codebase. It’s in use in many places. The codebase is well-tested and all of the tests are passing. However, many folks have complained that they don’t understand what this function is doing and they’d like you to refactor it for improved readability. Could you please explain your thought process behind your refactor and share both the process and outcome? We will evaluate your response for clarity, accuracy, and thoroughness. Please limit the time you spend on this to 30 minutes and be sure to select "reply all" when responding.

  ```js
  function sort(a, ...rest) {
    const check = Array.isArray;
    if (typeof a === 'string') {
      var arr = a.split(',');
      arr.sort(...rest);
      return arr;
    } else if (a === undefined) {
      return [];
    } else if (a === null) {
      return [];
    } else if (check(a)) {
      // Original array is not modified.
      let cpy = a.slice();
      cpy.sort(...rest);
      return cpy;
    }
  }
  ```

- Solution:

  - **Step 1:** Identify the purpose of the function and its input/output.
    - The function `sort` takes an array `a` and optional arguments `rest` and sorts the array based on the optional arguments.
    - The function first checks if the input `a` is a string, and if so, it splits the string into an array and sorts it.
    - The function returns the sorted array or an empty array if the input is `undefined`, `null`, or not an array.
  - **Step 2:** Refactor the function for improved readability.

    - Rename the function to `sortArrayOrString` to better reflect its purpose.
    - Use more descriptive variable names and remove unnecessary checks.
    - Simplify the logic and remove redundant code by using early returns and logical operators.
    - Add comments to explain the purpose of each section of the code.
    - Handle the case where the input is not a sortable (string or an array) by throwing an error.

    ```js
    function sortArrayOrString(data, ...rest) {
      // Early return if data is undefined or null
      if (data === undefined || data === null) {
        return [];
      }

      // Check if data is a string or an array
      const isString = typeof data === 'string';
      const isArray = Array.isArray(data);

      // Throw an error if data is not a string or an array
      if (!isString && !isArray) {
        throw new Error('data must be a string or an array');
      }

      // prepare the array to be sorted based on the data type
      const arr = isString ? data.split(',') : data.slice();

      // Sort the array based on the optional arguments
      arr.sort(...rest);

      return arr;
    }

    // or with changing the argument name from input to a discriptive name like value or sortable
    ```

  - **Step 3:** Test the refactored function with different inputs to ensure it works as expected.

    ```js
    console.log(sortArrayOrString([3, 1, 2])); // [1, 2, 3]
    console.log(sortArrayOrString('3,1,2')); // ['1', '2', '3']
    console.log(sortArrayOrString([100, 2, 36, 7])); // [100, 2, 36, 7]
    console.log(sortArrayOrString([100, 2, 36, 7], (a, b) => a - b)); // [2, 7, 36, 100]

    console.log(sortArrayOrString(undefined)); // []
    console.log(sortArrayOrString(null)); // []
    console.log(sortArrayOrString({})); // Error: Input must be a string or an array
    console.log(sortArrayOrString(123)); // Error: Input must be a string or an array
    ```

---

### Implement a timeout handler for requests (so that the request doesn't hang forever)

We can use a promise that will be rejected after a certain amount of time if the request doesn't complete., and then use `Promise.race()` to wrap this timeout and the original request promise.

```js
function timeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Request timed out'));
    }, ms);
  });
}

const getJson = async url => {
  try {
    const res = await Promise.race([fetch(url), timeout(5000)]);
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    console.error(error);
  }
};
```

---

### Implement TODO list using vanilla JavaScript

```html
<body>
  <input type="text" id="todoInput" placeholder="Enter a new todo" />
  <button onclick="addTodo()">Add</button>
  <br />
  <h2>
    Number of todos:
    <span id="todoCount">0</span>
  </h2>
  <ul id="todoList"></ul>

  <script>
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    const todoCount = document.getElementById('todoCount');

    function addTodo() {
      const todoText = todoInput.value.trim();
      if (todoText) {
        const todoItem = document.createElement('li');
        todoItem.textContent = todoText;
        todoList.appendChild(todoItem);
        todoInput.value = '';
        updateTodoCount();
      }
    }

    function updateTodoCount() {
      todoCount.textContent = todoList.children.length;
    }

    // Handling deleting elements
    todoList.addEventListener('click', e => {
      e.stopPropagation(); // prevent event bubbling
      if (e.target.tagName === 'LI') {
        e.target.remove();
        updateTodoCount();
      }
    });
  </script>
</body>
```
