# INDEX

- [INDEX](#index)
  - [JavaScript Engine](#javascript-engine)
    - [Compiler vs Interpreter vs JIT](#compiler-vs-interpreter-vs-jit)
    - [Inside of V8 Engine](#inside-of-v8-engine)
      - [How the engine works ?](#how-the-engine-works-)
      - [Call-stack \& Memory-heap](#call-stack--memory-heap)
  - [Types](#types)
    - [Primitive Types vs Reference Types](#primitive-types-vs-reference-types)
    - [Pass by Value vs Pass by Reference (Memory Alocation)](#pass-by-value-vs-pass-by-reference-memory-alocation)
    - [`null` vs `undefined`](#null-vs-undefined)
    - [Strict vs Loose Equality (`===` \& `==`)](#strict-vs-loose-equality---)
    - [Type Conversion](#type-conversion)
    - [Type Coercion](#type-coercion)
  - [Execution context](#execution-context)
    - [Scope](#scope)
      - [Lexical Scope (Environment)](#lexical-scope-environment)
    - [Hoisting](#hoisting)
    - [`this` keyword in functions (execution context)](#this-keyword-in-functions-execution-context)
  - [Functional Programming](#functional-programming)
    - [currying \& partial Application](#currying--partial-application)
      - [Currying](#currying)
      - [Partial Application](#partial-application)
    - [Closure](#closure)
      - [Function returning Functions](#function-returning-functions)
      - [Closure Benefits](#closure-benefits)
    - [Pure Functions](#pure-functions)
    - [Decorators](#decorators)
      - [Using “func.call” for the context](#using-funccall-for-the-context)
    - [Iteration vs. Recursion](#iteration-vs-recursion)
    - [Recursion \& performance](#recursion--performance)
    - [First class functions and Higher order functions](#first-class-functions-and-higher-order-functions)
      - [Examples of higher order functions (`call`, `apply`, `bind`)](#examples-of-higher-order-functions-call-apply-bind)
    - [Referential Transparency](#referential-transparency)
    - [Composition](#composition)
    - [Functional Decoration](#functional-decoration)
  - [Generators](#generators)
    - [Generator Methods](#generator-methods)
    - [Generators are Iterable](#generators-are-iterable)
    - [Generators in Async Code](#generators-in-async-code)
    - [Generators in Real Life (use cases)](#generators-in-real-life-use-cases)
  - [JS : The weird parts](#js--the-weird-parts)
    - [Numbers](#numbers)
  - [Miscellaneous](#miscellaneous)
    - [Mutation observer](#mutation-observer)
    - [Selection and Range](#selection-and-range)
  - [Notes](#notes)

---

## JavaScript Engine

The JavaScript engine is a program or an interpreter that reads and executes the JavaScript code. The most popular JavaScript engines is **V8** which is used in **Google Chrome** and **Node.js**.

> **V8** is not the only javascript engine, there are a lot of other engines like **SpiderMonkey** (used in **Firefox**), **Chakra** (used in **Microsoft Edge**), **JavaScriptCore** (used in **Safari**), and **Nashorn** (used in **Java**), ... etc.
>
> These are called **"ECMAScript engines"** because they implement the ECMAScript standard, which JavaScript is based on.
>
> Google created **V8** to power its Chrome browser, and open-sourced it in 2008. before it, most engines were weak and slow, but **V8 was a game-changer**.

### Compiler vs Interpreter vs JIT

![compiled](./img/Compiled%20Language.png)

- **Compiled Language**

  - The compiler works ahead of time to convert instructions into a machine-code or lower-level form so that they can be read and executed by a computer. It runs all of the code and tries to figure out what the code does and then compiles it down into another language that is easier for the computer to read.
  - Language is written and compiled to machine code inside of an application (before it's run).
  - Errors are detected during compiling
  - The code won’t compile until it’s error-free
  - it `optimizes` the code as it **cashes** any repeated function.
    - if it say `add(2,3)` function it caches its result (`5`) and uses it if it found the same function-call again --> **improves performance**
  - Examples: C, C++, Erlang, Go
  - Examples used with javascript: **Babel** (transpiles `ES6` to `ES5`), **TypeScript** (transpiles `TS` to `JS`)
    - Both of these do exactly what compilers do. Take one language and convert into a different one!

- **Interpreted Language**

  - An interpreter directly executes each line of code line by line, without requiring them to be compiled into a machine language program.
  - The interpreter translates and runs code **one statement at a time (line-by-line)**.
    - each line of code is translated to machine-code one-by-one as the script is run.
    - the interpreter always looks for **variables** and **function declarations** before going through each section of a script, line-by-line.
  - Interpreters can use different strategies to increase performance. They can parse the source code and execute it immediately, translate it into more efficient machine code, execute precompiled code made by a compiler, or some combination of these.
    - In the V8 engine, the interpreter outputs bytecode.
  - Errors found when the code is run
  - Interpreter starts running the code quickly
  - Interpreted code runs more slowly
  - it's more fit to `javascript` as JS runs on the browser

  > Node.js Is an Interpreter

- **Just-In-Time (JIT) Compilation**

  - It's a combination of both compilers and interpreters.
  - It compiles the code into machine code at runtime, and then executes it immediately.
  - It's a hybrid approach that combines the best of both worlds.
  - In modern engines:
    - the interpreter starts reading the code line by line while the profiler watches for frequently used code and flags then passes is to the compiler to be optimized.
    - In the end, the JavaScript engine takes the bytecode the interpreter outputs and mixes in the optimized code the compiler outputs and then gives that to the computer. This is called "Just in Time" or JIT Compiler.
  - For example this code:

    ```js
    function add(a, b) {
      return a + b;
    }

    for (let i = 0; i < 1000; i++) {
      add(2, 3);
    }
    ```

    - Here, the `add(2, 3)` function is called 1000 times, so the JIT compiler will optimize this function and cache its result to be used in the next calls.
      - This is not possible in a pure interpreter because it doesn't know what the code does until it runs it.
      - But it's possible in a JIT compiler because it can see the code running and optimize it as it goes (compiling it to machine code).

---

### Inside of V8 Engine

- javascript uses best of (**Interpreted** & **Compiled**) languages ---> **Jit Compiler**

  ![alt](./img/js-engine-1.png)
  ![alt](./img/js-engine-2.png)

- **is `javascript` an interpreted language ?**
  - yes **initially**, but it evolved to use "compilers" as well based on the implementation, as the code is compiled to machine-code first then it's executed by the engine with optimizations to the initial compiled code

#### How the engine works ?

![alt](./img/js-engine-3.png)

1. The engine (embedded if it’s a browser) reads (**“parses”**) the script.
2. Then it converts (**“compiles”**) the script to machine code.
3. And then the machine code runs, pretty fast.

> the browser's **Console** is a live interpreter of the javascript engine

- What is that `AST` step?

  - it's the **Abstract Syntax Tree** which is a tree representation of the abstract syntactic structure of source code written in a programming language.
  - It's a tree graph of the source code that does not show every detail of the original syntax, but contains structural or content-related details. Certain things are implicit in the tree and do not need to be shown, hence the title abstract.
  - Each node of the tree denotes a construct occurring in the source code.
    ![ast](./img/ast-1.png)
    ![ast](./img/ast-2.png)

- What is the `Profiler` step?

  - It's a tool that helps to analyze the performance of the code and to identify the parts of the code that are slow and need to be optimized, and **pass them to the `compiler` to be optimized**.
    - It's used to monitor the code execution and to identify the parts of the code that are executed frequently.
  - For example, if a function is called many times, the profiler will flag it and pass it to the compiler to be optimized.

- **Summary:** The `Interpreter` allows us to run the code quickly, but it's not optimized. The `Profiler` watches the code execution and flags the parts that are executed frequently and sends them to the `Compiler` to be optimized. The `Compiler` optimizes the code and passes it to the `JIT Compiler
  - All this happens as the code is running, and it's called **Just-In-Time Compilation**.

#### Call-stack & Memory-heap

**Heap**: a much larger part of the memory that stores everything allocated dynamically, that allows a faster code execution, and protects it from corruption and makes the execution faster.

- Memory-heap:

  ```js
  // tell the memory heap to allocate memory for a number
  const number = 11;
  // allocate memory for a string
  const string = 'some text';
  // allocate memory for an object and it's values
  const person = {
    first: 'Brittney',
    last: 'Postma'
  };
  ```

  - It's a space in memory where the memory allocation (storage) happens (variables, objects, functions, ... etc)
  - usually when you have values that has place in memory but not used
  - also common in **event listeners** which are always listening(waiting) for an event
  - error-> `memory leak`

- **call-stack**

  - It's a data structure that indicates where the program is in its execution.
  - It keeps track of where the program is in its execution, and what functions are currently
  - The call stack keeps track of where we are in the code, so we can run the program in order.
  - always the first thing in it is the **global execution context** (Top-level Code / variable declared outside a function)
    ![global-execution-context](./img/global-execution-context.PNG)
  - error-> `stack overflow`: usually from **recursion** (function calling itself) and it's not stopping
  - Example:

    ```js
    function subtractTwo(num) {
      return num - 2;
    }

    function calculate() {
      const sumTotal = 4 + 5;
      return subtractTwo(sumTotal);
    }
    debugger;
    calculate();
    ```

    - Things are placed into the call stack on top and removed as they are finished. It runs in a first in last out mode. Each call stack can point to a location inside the memory heap. In the above snippet the call stack looks like this:

      ```js
      anonymous; // file is being ran
      // CALL STACK

      // hits debugger and stops the file
      // step through each line

      calculate(
        // steps through calculate() sumTotal = 9
        anonymous
      );
      // CALL STACK

      // steps into subtractTwo(sumTotal) num = 9

      subtractTwo; // returns 9 - 2
      calculate(anonymous);
      // CALL STACK

      // subtractTwo() has finished and has been removed

      calculate(
        // returns 7
        anonymous
      )(
        // CALL STACK

        // calculate() has finished and has been removed

        anonymous
      );
      // CALL STACK

      // and finally the file is finished and is removed

      // CALL STACK
      ```

> **global execution context** consists of 2 things:
>
> - storing variables / function in **memory** (global state)
> - performing functions execution in the **thread of execution (call stack)** where each function gets its own **mini execution context**

- JavaScript is a **single threaded language**, meaning only one thing can be executed at a time. It only has one call stack and therefore it is a synchronous language.

---

## Types

### Primitive Types vs Reference Types

- Javascript has 2 main types of values
  ![types](./img/types-1.png)

- **Types:**

  1. **primitive values** : they are the most basic data types in the language. They are **immutable** (cannot be changed) and **copied by value** (when assigning or passing).
     - There are 7 primitive types
       ![types](./img/types-2.png)
  2. **reference values** : they are more complex data types. They are **mutable** (can be changed), **copied by reference** (when assigning or passing).

     - `reference-type` are stored in the `Heap` as we don't know how big its size would be so it's like if the `Heap` has unlimited storage unlike `call stack` which has a limited size (`4-8MB`)
       ![types](./img/types-3.png)
     - There are 3 types of objects: `object`, `function`, `array`.

     ```js
     typeof []; // object
     typeof {}; // object
     typeof function () {}; // function 🤯
     ```

     - If you don't beleive me, try this:

       ```js
       function fn() {
         console.log('hello');
       }

       fn.hi = 'hi';
       console.log(fn.hi); // hi
       ```

- `typeof` operator:

  - It's used to get the type of a variable or an expression.
  - It returns a string indicating the type of the unevaluated operand.
  - It's useful when you want to check the type of a variable before performing an operation on it.

    ```js
    typeof 5; // number
    typeof 'hello'; // string
    typeof true; // boolean
    typeof undefined; // undefined
    typeof null; // object
    typeof {}; // object
    typeof []; // object
    typeof function () {}; // function
    ```

  - Sometimes it's not enough when figuring out the type of something specially when it's reference type, so you can these:

    ```js
    // Array.isArray() -> to check if it's an array
    Array.isArray([]); // true

    // instanceof -> to check if it's an instance of a specific object
    [] instanceof Array; // true

    // Object.prototype.toString.call() -> to get the type of the object
    Object.prototype.toString.call([]); // [object Array]
    ```

---

### Pass by Value vs Pass by Reference (Memory Alocation)

![types](./img/types-5.gif)

- There's a difference in how memory is allocated for `primitive` and `reference` types. In the case of `primitive` types, the value is stored directly in the memory location, while in the case of `reference` types, the memory location stores a reference to the actual value in the `heap`.
  ![types](./img/types-4.png)
- "Pass by value"

  ```js
  const a = 5;
  let b = a;
  a = a + 1;

  console.log(a); // 6
  console.log(b); // 5 -> Didn't change
  ```

  - means that a copy of the value and store it in a **new memory location**.
  - So when we change the value of the variable, it doesn't affect the original value.

- "Pass by reference"

  ```js
  const obj1 = { name: 'Ahmed' };
  const obj2 = obj1;
  obj1.name = 'John';

  console.log(obj1.name); // John
  console.log(obj2.name); // John -> Changed
  ```

  - means that a **reference to the value** is stored in the memory location and shared between the variables.
  - So when we change the value of the variable, it affects the original value.
    - **Why this might be good:** it saves memory space, as it doesn't need to store the same value in multiple locations.
    - **Why this might be bad:** it can lead to unexpected behavior if you're not careful. like if you want to copy the value of the object to another object, you need to do a `deep copy` not a `shallow copy`.

---

### `null` vs `undefined`

To remember the difference, use the song "I want it that way"
![null-undefined](./img/null-undefined-1.png)

- **`null` vs `undefined`**
  ![null-undefined](./img/null-undefined.png)
  - `null`: is you set it to **empty** intentionally, (a variable with no value - it may have had one at some point, but no longer has a value)
    - developer sets the value
  - `undefined`: is you set it to **empty** unintentionally, (a variable that should have a value assigned to it, but doesn't yet, , or hasn't been created yet)
    - javascript can't find value for it
    - it's empty because it:
      - variable without value:
        - **has not been set**
        - **Doesn't currently have a value**.
      - missing function arguments
      - missing object properties
- or `null` is empty on purpose, while `undefined` is still empty.
- `undefined` means a variable has been declared but **has not yet been assigned a value**
- `null` is an assignment value. It can be assigned to a variable as a representation of **no value**.

- Notes:

  ```js
  typeof null; // object (a bug in JS)
  ```

  - Super weird right? It's a long-standing bug in JS, but it's too late to fix it now. It's a quirk in the language that we have to live with.

---

### Strict vs Loose Equality (`===` & `==`)

The difference is that `==` will do **type coercion** before comparing, whereas `===` will not do any type coercion (it will only return `true` if both values and types are the same).

- Because of [Type coercion](#type-coercion), the strict equality operators `===` and `!==` result in fewer unexpected values than `==` and `!=` do.
- if `===` would always be equivalent to `==` in your code, using it everywhere sends a wrong semantic signal : **protecting myself since I don't know'trust the types**

- How "Double equal" works:

  - If the types differ, try to convert them to the same type by using coercion to:

    - convert to previous type (if possible) then compare -> `[] -> "" -> 0 -> false`
    - that's why it's not recommended to use `==` with `true / false` as it will convert it to `1 / 0` and compare it with the other value

    ```js
    [] == true;
    // to
    '' == 1;
    // to
    0 == 1;
    // to
    false;
    ```

> **Note:** It's a myth that `===` is slower than `==` in modern browsers.
>
> - Some argue that using `===` everywhere implies a lack of understanding or trust in your code's types.
>
> - Clear and obvious types lead to better code. Use `==` when types are known, otherwise use `===`.

---

### Type Conversion

**Explicit Type Conversion (Type Casting)**: is when data type is converted by the programmer using type casting.

- Here are some examples of explicit type conversion:

  - `Number()`, `String()`, `Boolean()`
  - `parseInt()`, `parseFloat()`
  - `toString()`, `toFixed()`
  - `JSON.stringify()`, `JSON.parse()`

- When the conversion fails, the result is `NaN` (Not a Number).

  ```js
  Number('123'); // 123
  Number('hello'); // NaN
  ```

- **Truthy & Falsy values:**

  - **Falsy values**: `false`, `0`, `""`, `null`, `undefined`, `NaN`
  - **Truthy values**: `true`, `1`, `"hello"`, `[]`, `{}`, `function(){}`

  ```js
  Boolean(0); // false
  Boolean(''); // false
  Boolean('0'); // true -> because it's a string (any string that is not empty is true)
  Boolean(1); // true
  Boolean({}); // true
  ```

---

### Type Coercion

**Type coercion** is the process of implicitly converting value from one type to another by the JavaScript engine.

> **Implicit vs Explicit**
>
> ![implicit Explicit](./img/Implicit-vs-Explicit.jpg)
>
> - **type coercion** is implicit whereas **type conversion** can be either implicit or explicit

![type coercion](./img/TypeCoercion.png)

- **Truthy & Falsy values:**

  ```js
  if (0) {
    // this code will not run
  }
  ```

- **Operator overloading:** `+` vs `-` :

  ![type coercion](./img/TypeCoercion2.PNG)

  - `-` : if one of the operands is not a number, it tries to convert it to a number and subtracts it
  - `+` : if one of the operands is a string, it converts the other operand to a string and concatenates them

- convert string to number using :

  - `unary` operator
    - it's a `+` or `-` before the string number => `console.log(+"565")`
    - it's a `!` before something => `console.log(! (x > 4) )`
  - `parseint()` or `parsefloat()` => `parseint(100Ahmed)` = 100

- `string to boolean`: ![coercion](./img/coercion2.png)

  - `Boolean("0");` --> **true**

- **Coercion Corner Cases**

  ```js
  1 < 2; // true
  2 < 3; // true
  1 < 2 < 3; // true (1 < 2 = true => true < 3 => 1 < 3 = true)

  3 > 2; // true
  2 > 1; // true
  3 > 2 > 1; // false (3 > 2 = true => true > 1 => 1 > 1 = false)

  { x: 1 } == { x: 1 }; // false
  { x: 1 } === { x: 1 }; // false
  ```

---

## Execution context

It's the environment in which javascript code is executed, it stores all the necessary info for some code to be executed.
![execution context](./img/execution-context-2.png)

- Each function has its own Execution context, and it's created when the function is called/invoked. and all execution contexts together make the **call stack**.
  ![execution context](./img/execution-context-4.png)

- There're 2 types of execution contexts:
  ![execution context](./img/execution-context-5.jpeg)

  - **Global Execution Context**:

    - It's the default execution context, and it's created when the script is loaded.
    - It has 2 phases:

      1. **Creation phase**:
         - Creation of the `global object` ( `window` object in the browser)
         - Creation of the `this` keyword (points to the `global object`) -> `this` keyword will be automatically defined with value `window` in the global execution context.
         - Memory allocation for `variables` and `functions` **(hoisting)**
           - This is super important when understanding hoisting in JavaScript.
      2. **Execution phase**:
         - where the code is executed line by line.

    - It consists of these parts:
      ![execution context](./img/execution-context-3.png)

      - Local **Thread of execution** -> code that is being executed
      - Local **Memory** -> `local variables`, `arguments passed to the function`
      - **Scope chain** -> where the function was written -> **Lexical / Variable Environment**
        - This is slightly different from `closure`, the scope chain is where the function was written, while the closure is what allows a function to access variables from an outer function, even after the outer function has finished executing. it's stored in the `_proto_` property of the function.
      - **`this`** keyword -> how the function was called (not in `arrow functions`)

  - **Functional Execution Context**:

    - Created when a function is called.
    - It consists of these parts:
      ![execution context](./img/execution-context-3.png)

      - Local **Thread of execution** -> code that is being executed
      - Local **Memory** -> `local variables`, `arguments passed to the function`
      - **Scope chain** -> where the function was written -> **Lexical / Variable Environment**
        ![execution context](./img/execution-context-6.png)

        - This is slightly different from `closure`, the scope chain is where the function was written, while the closure is what allows a function to access variables from an outer function, even after the outer function has finished executing. it's stored in the `_proto_` property of the function.

      - **`this`** keyword -> how the function was called (not in `arrow functions`)
      - **`arguments` object** -> contains all the arguments passed to the function
        - It's an array-like object that contains all the arguments passed to the function. the default value of `arguments` is an empty array `[]` if no arguments are passed to the function.

- Example
  ![execution context](./img/execution%20context.png)

---

### Scope

It's the environment in which a variable is declared and accessible.

Javascript doesn't have **dynamic scope** (where the scope is determined by the calling context), it has **lexical (static) scope** (where the scope is determined by the location of the variable declaration).

- Types of scopes:

  1. **Global scope**: Variables declared outside functions, accessible anywhere.
  2. **Function scope**: Variables declared inside a function, accessible only within.
  3. **Block scope (ES6)**: Variables declared inside a block, accessible only within.
     - `let` or `const` inside a block, accessible only within. But `var` is accessible outside the block.
     - `functions` are also `block-scoped` in `strict mode`, otherwise they are `function-scoped`.

- Types of variables based on scope:

  - **Local variables**: Created and removed within a function, no naming conflicts between functions.
  - **Global variables**: Persist in memory while the page is loaded, higher memory usage, risk of naming conflicts.

- **Scope chain**: The order the interpreter searches for variables, from innermost to global scope.
  ![scope](./img/scope-1.png)

  - Scope chain has nothing to do with the order of function calls in the code.
    ![scope](./img/scope-2.png)
    - Here, even though the `third()` function is called in the `second()` function's body, it won't have access to the `first()` function's variables, because it's not in the `scope chain` of the `third()` function.

- **Scope Variables** are properties of a special internal object.

  - Accessing a variable means accessing a property of this object.

- Variables defined outside a function are accessible inside functions defined after them even if they are called before the function definition.
  ![scope](./img/fig2.png)

  - This is called a **Backpack** or **Persistent Lexical Scope Referenced Data (PLSRD)**.
  - Each function execution gets its own Backpack.

> **Note**: (if not in strict mode) -> if variable is assign a value but never declared in a scope or block -> it automatically gets declared in the global scope

- if function is declared in a local scope, it can't be accessed outside:

  ```js
  let phrase = 'Hello';

  if (true) {
    let user = 'John';

    function sayHi() {
      alert(`${phrase}, ${user}`);
    }
  }

  sayHi(); // The result is an error.
  // The function sayHi is declared inside the if, so it only lives inside it. There is no sayHi outside.
  ```

- The global object has a universal name -> `globalThis`.
  - ( `window` object ) -> In the browser
  - ( `global` object ) -> In Node.js

---

#### Lexical Scope (Environment)

It's a scope that is defined at the time of writing the code, and it doesn't change at runtime.

- It refers to the scope where a variable is declared, which remains constant regardless of where the variable is called.
- Functions are linked to the object they were defined within.
- Lexical Environment consists of two parts:
  1. **Environment Record**: Stores local variables.
  2. **Outer Reference**: Points to the outer lexical environment.

---

### Hoisting

It's the javascript engine alocating memory for variables and functions before the code is executed **(during the creation phase of the execution context)**.

It is the process of putting all variable and function declarations into memory during the "compile phase".

- It's a JavaScript mechanism where (variables and function) **declarations** are moved to the top of their containing scope before code execution by saving them in memory before the code is executed.
- It makes some types of variables accessible/usable in the code before they are actually declared by initializing them with `undefined`.

- It's to make space in memory for a variable to be able to:

  - Call functions before they have been declared
  - Assign a value to a variable that has not yet been declared

- In JavaScript, `functions` are fully hoisted, `var` variables are hoisted and initialized to `undefined`, and `let` and `const` variables are hoisted but not initialized a value.

  - Note that the declaration is hoisted, but the initialization/value is not.

  ```js
  console.log(name); // undefined
  var name = 'John';
  ```

- **variables and functions** within each execution context are created before they are executed.
  ![hoisting](./img/hoisting-1.png)

  > Variable are **partially hoisted** (only the declaration is hoisted, not the initialization), while functions are **fully hoisted** (both declaration and initialization).

  - `var` hoisting: usually bad, as **with `var`, you can access declaration, but not the value**

    ```js
    console.log(name); // undefined
    var name = 'John';
    ```

    - `Var` variables are given a memory allocation and initialized a value of `undefined` until they are set to a value in line. So if a var variable is used in the code before it is initialized, then it will return `undefined`.

  - `function` hoisting: actually pretty useful --> **must be a function declaration**

    ```js
    display(); // "hello world" ✅
    function display() {
      console.log('hello world');
    }

    display2(); // ReferenceError: Cannot access 'display2' before initialization ❌
    let display2 = function () {
      console.log('hello world');
    };
    ```

    - if you use `function expression` ( `let display2 = function () {}` ) it will throw an error because it's not a function declaration, **it's a variable declaration that holds a function**.
    - a function can be called from anywhere in the code base because it is fully hoisted. If `let` and `const` are used before they are declared, then they will throw a `reference error` because they have not yet been initialized

      ```js
      // function expression gets hoisted as undefined
      var sing = function () {
        console.log('uhhhh la la la');
      };
      // function declaration gets fully hoisted
      function sing2() {
        console.log('ohhhh la la la');
      }
      ```

  - `let / const` hoisting:
    ![let-hoisting](./img/let-hoisting.png)

    - it gets **hoisted but not initialized** (it's not assigned a value) -> so you can't access it before the initialization -> `TDZ (Temporal Dead Zone) Error`
    - Javascript knows that the variable is declared but not initialized, so it throws an error, if the variable wasn't declared, it would have thrown a `ReferenceError (not defined)`

- **How hoisting works ?**

  - Before the code is executed, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object and added to the memory
    ![hoisting](./img/hoisting.png)

  - It doen't actually move the code to the top, it alocate memory for them before the code is executed during the "creation phase" of the execution context.
  - It happens in every execution context, not just the global one.

- Why Hoisting is useful ?

  - Using functions before actual declaration
  - `var` hoisting can be useful in some cases, but it's usually better to use `let` or `const` instead.

- **Temporal Dead Zone (TDZ)**

  - It's the time between the variable creation and initialization, where you can't access the variable.
  - It only happens with `let` and `const` variables, not with `var` variables. because `var` is initialized with `undefined` by default.
    ![hoisting](./img/hoisting-2.png)

  - Why TDZ is useful ?

    - It helps to catch errors in the code, as it throws an error if you try to access a variable before it's initialized.

- **Notes**

  - What will be the result of this code?

    ```js
    // variable declaration gets hoisted as undefined
    var favoriteFood = 'grapes';

    // function expression gets hoisted as undefined
    var foodThoughts = function () {
      // new execution context created favoriteFood = undefined
      console.log(`Original favorite food: ${favoriteFood}`);

      // variable declaration gets hoisted as undefined
      var favoriteFood = 'sushi';

      console.log(`New favorite food: ${favoriteFood}`);
    };

    foodThoughts();
    ```

    - The result will be `undefined` and `sushi`, I bet that you thought it would be `grapes` and `sushi` but here's why:
      - As told before: **hoisting happens in every execution context**, so when the `foodThoughts` function is called, a new execution context is created, and the `favoriteFood` variable is hoisted to the top of the function and initialized as `undefined`.
      - So `favoriteFood` inside the function gets overwritten by the `undefined` value, and that's why the result is `undefined` and `sushi`.

  - **Avoid hoisting** when possible. It can cause **memory leaks** and hard to catch bugs in your code. Use `let` and `const` as your go to variables.

---

### `this` keyword in functions (execution context)

> **It's the object that the function is a property of.**

It's a special variable that is created for every execution context (every function), which takes the value of (points to) the “owner” of the function in which the `this` keyword is used.

- It's not static. It depends on **how the function is called**, and its value is only assigned when the function is called.
  ![this keyword](./img/this-1.png)

> The reason `this` is so confusing because javascript doesn't really have a concept of `individual functions` like other languages, it has `objects` and `methods` that are called on objects. So any function can be called on any object, and `this` is what allows that to happen (even if the function is not a method of that object which is called using the global object (`window`))
>
> Remember the rule: **`this` is determined by the left of the dot at the call time**, if there's no dot, it points to the global object (`window`) as `someFunction()` is the same as `window.someFunction()`

- `this` is handled differently based on the type of function:

  - **Arrow functions**:

    - Lexical `this`: Defined by where it was written, not called.
    - No `this`: Taken from the outer scope (global scope, `window` object).
    - Object methods: Still point to the global object.
    - **Avoid using arrow functions as methods inside objects**: `this` will refer to the upper scope, usually the global object.

  - **Normal functions**:

    - `this` refers to the caller (dynamic scope).
    - `this` is `undefined` if called globally if in strict mode, otherwise it points to the global `window` object.

- Benefits of `this` in functions:

  - gives methods access to their object
  - reusability: execute same code for multiple objects (use `this` to refer to the object that the function is a property of) allowing us to save memory.

    ```js
    function sayName() {
      console.log(`My name is ${this.name}`);
    }

    const person1 = {
      name: 'John',
      sayName: sayName
    };

    const person2 = {
      name: 'Jane',
      sayName: sayName
    };

    // call the function with different objects
    person1.sayName = sayName;
    person2.sayName = sayName;
    ```

- **Notes**

  - When chaining multiple methods (functions) that uses `this` keyword, you can return `this` at the end to make it chainable.

    ```js
    let ladder = {
      step: 0,
      up() {
        this.step++;
        return this; // return the object itself to be able to chain the methods
      },
      down() {
        this.step--;
        return this;
      },
      showStep() {
        alert(this.step);
        return this;
      }
    };

    ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
    ```

  - When you want to write a function inside object method, (use `arrow function` or use `self` reference variable ) to avoid `this` confusion.

    ```js
    let user = {
      name: 'John',
      sayHi_1() {
        let func = () => alert(this.name); ✅
        // this -> user object
        func();
      },

      sayHi_2() {
        function func() {
          alert(this.name); // Error ❌: Cannot read property 'name' of undefined
          // this -> window object
        }
        func();
      },

      sayHi_3() {
        const self = this; // use self reference variable
        function normal2() {
          alert(self.name); ✅
          // this -> window object
          // self -> user object
        }
        normal2();
      },
    };

    user.sayHi_1(); // John
    user.sayHi_2(); // Error, because `this` is undefined
    user.sayHi_3(); // John
    ```

  - without `strict mode`, `this` will point to the global object => `window`
  - If we used `use strict`, `this` would be `undefined` in a function that is in the global scope. or that is not in a function (in the global scope directly).

- What will be the result of `this` in the following code?

  ```js
  const a = {
    name: 'a',
    say() {
      console.log(this);
    }
  };

  const b = {
    name: 'b',
    say() {
      return function () {
        console.log(this);
      };
    }
  };

  const c = {
    name: 'c',
    say() {
      return () => {
        console.log(this);
      };
    }
  };

  a.say(); // a object
  b.say()(); // window object
  c.say()(); // c object
  ```

  - Always remember to ask the interviewer if the function is an arrow function or a normal function, as it will affect the value of `this`.
  - In the above code, `b.say()()` will return the `window` object because it's a normal function, while `c.say()()` will return the `c` object because it's an **arrow function and it's lexically scoped**.
    - **Ask youself: who is calling the function? (the object or the global object)**
    - The nested function is called by the global object, so `this` will point to the global object.

---

## Functional Programming

It's the process of building software by composing **pure functions**, avoiding **shared state**, **mutable data**, and **side-effects**.

- It's a **declarative** programming paradigm, which means that the program structure is based on the functions and what they return, not on the order of execution.

  - Imperative vs Declarative programming:
    ![imperative vs declarative](./img/imperative-vs-declarative.png)

- Functional programming principles
  ![functional programming](./img/functional-programming.png)

- Functional programming is about **Verbs** (actions)

  - it's like a black box that takes something in and returns something out
  - it depends on **Tiny functions**: Save every single line (or few lines) as its own function
  - **Recombine/compose** Build up our application by using these small blocks of self-contained code combining them up line-by-line by referring to their human-readable name

    ```js
    // Todo list
    pipe(
      getPlayerName,
      getFirstName,
      properCase,
      addUserLabel,
      createUserTemplate
    )([{ name: 'Abdelrahman', score: 3 }]);
    ```

  - the result that we will get a code that is:
    - Easier to add features
    - More readable
    - Easier to debug

- object oriented programming is about **pronouns** (objects and things) -> "keep state to yourself and send/receive messages"

- Reduce the potential impact of any given line to maybe 10 other lines (inside the function)
- structure our code into individual pieces where almost every single line is **self-contained**
- **No consequences** except on that line Each function’s only ‘consequence’ is to have its result given to specifically the next line of code (‘function call’) and not to any other lines
- Famous functional programming libraries:
  - [lodash](https://lodash.com/)
  - [ramda](https://ramdajs.com/)

---

### currying & partial Application

![currying-vs-partialapplication](./img/currying-vs-partialapplication.jpeg)

> These 2 concepts use **Closures**

#### Currying

It's the process of converting a function that takes multiple arguments into a function that takes them one at a time.

- A **curried function** can be called with any number of arguments, and it will return a new function that expects the rest of the arguments. as if you call it with fewer arguments, it returns a **smaller partial function** that expects the rest of the arguments.

  ```js
  // instead of this:
  fn(a, b, c);
  // you can do this:
  fn(a)(b)(c);
  ```

- Currying allows us to easily get `partials`, which are functions that already have some of the parameters of the original function using `closures`.

- Example:

  ```js
  function curry(fn) {
    return function (a) {
      return function (b) {
        return fn(a, b);
      };
    };
  }
  // or const curry = (fn) => (a) => (b) => fn(a, b);

  // usage
  function sum(a, b) {
    return a + b;
  }
  let curriedSum = curry(sum);

  alert(curriedSum(1)(2)); // 3
  // curriedSum(1); // returns a function (b) => fn(a, b)
  ```

- Usually for complex and generic curry functions, we can use libraries like `lodash` or `ramda`, but here's a native generic example:

  ```js
  // create a function that converts this function into a curried function
  function add3(a, b, c) {
    return a + b + c;
  }
  // convert to curried function like this: add3(1)(2)(3)

  // ----------------------- Solution ----------------------- //
  function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        return function (...args2) {
          return curried.apply(this, args.concat(args2));
        };
      }
    };
  }
  ```

- **Notes:**
  - The currying requires the function to have a fixed number of arguments.
  - A function that uses rest parameters, such as `f(...args)`, can’t be curried this way.

#### Partial Application

It's the process of applying a function to **some/part of** its arguments. The partially applied function gets returned for later use

It's just a name for binding some of the function’s arguments to a specific value and returning a new function that takes the rest of the arguments. **(Binding arguments to a function)**

> see it's use in [`bind` section](#examples-of-higher-order-functions-call-apply-bind)

- it's creating a new outer-function that calls our multi-argument function with the argument, and the multi-argument function stored conveniently in the **Backpack**

  ```js
  const multiply = (a, b) => a * b;

  function prefillFunction(fn, prefilledValue) {
    const inner = liveInput => {
      const output = fn(liveInput, prefilledValue);
      return output;
    };
    return inner;
  }
  const multiplyBy2 = prefillFunction(multiply, 2);
  const result = multiplyBy2(5);
  ```

- **we can also use `bind()` for "`this`"**:

  ```js
  // Syntax
  let bound = func.bind(context, [arg1], [arg2], ...);

  // EX:
  function mul(a, b) {
    return a * b;
  }

  let double = mul.bind(null, 2);

  alert( double(3) ); // = mul(2, 3) = 6
  alert( double(4) ); // = mul(2, 4) = 8
  ```

  - Please note that we actually don’t use `"this"` here. But `bind` requires it, so we must put in something like `null`.
  - The call to `mul.bind(null, 2)` **creates a new function** `double` that passes calls to `mul`, fixing `mull` as the context and `2` as the first argument. Further arguments are passed “as is”.

- **Going partial without context ("`this`")**

  - What if we’d like to fix some arguments, but not the context `this`? For example, for an object method.
    - The native `bind()` does not allow that. We can’t just omit the context and jump to arguments.
  - Fortunately, a function `partial()` for binding only arguments can be easily implemented:

  ```js
  function partial(func, ...argsBound) {
    return function (...args) {
      return func.call(this, ...argsBound, ...args);
    };
  }

  // Usage:
  let user = {
    firstName: 'John',
    say(time, phrase) {
      alert(`[${time}] ${this.firstName}: ${phrase}!`);
    }
  };

  // add a partial method with fixed time
  user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

  user.sayNow('Hello'); // [10:00] John: Hello!
  ```

  - Also there’s a ready [`_.partial`](https://lodash.com/docs#partial) implementation from **lodash** library.

- **Why do we usually make a partial function?**

  - The benefit is that we can create an independent function with a readable name (`double`, `triple`). We can use it and not provide the first argument every time as it’s fixed with `bind`.
  - In other cases, **partial application** is useful when we have a very generic function and want a less universal variant of it for convenience.
    - For instance, we have a function `send(from, to, text)`. Then, inside a user object we may want to use a partial variant of it: `sendTo(to, text)` that sends from the current user.

---

### Closure

A closure allows a function to remember variables from its creation context, even after the outer function has returned.

![closure](./img/closure.PNG)
![closure](./img/closure1.png)

- It's a closed-over **(variable environment)** of the execution context in which the function was created, even after that execution context is gone.

  - **Function's `[[Environment]]` property**:

    - References the Lexical Environment (in the scope chain) where the function was created.
    - functions created with `new Function()` always references the global Lexical Environment, not the outer one, preventing access to outer variables.
    - **Benefit**: Access outer function's scope from an inner function, even after the outer function has returned.

- How does it work ?

  - When a function is created, it keeps a reference to its outer lexical environment (where it was created), even if the outer function has finished executing.
    - The function keeps a reference to its outer lexical environment in a hidden property `[[Environment]]`.
  - Then, the function is returned and assigned to a variable. The variable becomes a function reference that keeps the reference to the outer lexical environment.
    - It's done by **returning a function from another function**
  - When the function is called, it uses the outer lexical environment to access the variables. (even if the outer function has finished executing)
  - Steps:
    ![closure](./img/closure-1.png)
    ![closure](./img/closure-2.png)
    ![closure](./img/closure-3.png)

  - EX:

    ```js
    function makeCounter() {
      let count = 0;
      return function () {
        return count++;
      };
    }

    // using it
    let counter = makeCounter();
    // now, counter() gives the next number each time it is called
    // `count` variable is in the "backpack" of the counter function (in [[Environment]] property)
    counter(); // 0
    counter(); // 1
    ```

- **Notes:**

  - One of the biggest examples of closures are:

    - **timers**

      ```js
      function sayHi() {
        let phrase = 'Hello';
        setTimeout(function () {
          alert(phrase);
        }, 1000);
      }

      sayHi(); // Hello after 1 second
      // it remembers the phrase variable even after the function has finished and was popped off the call stack
      ```

    - **event listeners**

      ```js
      (function () {
        let count = 0;
        document.getElementById('button').addEventListener('click', function () {
          alert(count++); // we can access count variable even after the IIFE function has finished executing
        });
      })();
      ```

    - **Private variables / Modules**

      ```js
      function counterModule() {
        let count = 0; // private variable that will be unaccessible directly from outside the function

        // returning an object with methods that can access the count variable
        return {
          increment() {
            return count++;
          },
          decrement() {
            return count--;
          },
          getCount() {
            return count;
          }
        };
      }

      let counter = counterModule();
      counter.increment(); // 0
      counter.increment(); // 1
      counter.getCount(); // 2
      counter.count; // undefined (can't access count directly) ❌ (private variable)
      ```

  - When on an interview, a frontend developer gets a question about “what’s a closure?”, a valid answer would be a definition of the closure and an explanation that all functions in JavaScript are closures, and maybe a few more words about technical details: the **`[[Environment]]`** property and how Lexical Environments work (Where the function was created, not where it was called).
  - We can't manually create closures, they are a natural part of the language that happens automatically when a function is created.
    - Because we can't access the `[[Environment]]` property directly, but it's there in the engine internals.
  - To manually read the variables in the closure of a function:

    ```js
    function g() {
      let b = 777;
      return function () {
        alert(value);
      };
    }

    let f = g(); // while g() is called, the value is remembered
    console.dir(f); // look at the [[Scopes]] property
    ```

    ![closure](./img/closure-4.png)

---

#### Function returning Functions

this is a form of **Closure**, as in this example:![func calls func](./img/closure4.png)

> We can do this because javascript functions are **first-class citizens** (can be passed around like any other value), and **closures / backpacks** allow us to keep the variables in the function's scope even after the function has finished executing.

- most importantly -> `generatedFunc` **doesn't have any connection to** `createFunction`, as:
  - here `generatedFunc` is not equal to `createFunction` function
  - but it's equal to "what `createFunction` function has returned **when it was created(ran)**"
- Please note that if `f()` is called many times, and resulting functions are saved, then all corresponding Lexical Environment objects will also be retained in memory. In the code below, all 3 of them:.

  ```js
  function f() {
    let value = Math.random(); // 0.838
    return function () {
      return value;
    };
  }

  // 3 functions in array, every one of them links to Lexical Environment (same random value)
  let arr = [f(), f(), f()]; // [0.838, 0.838, 0.838]
  ```

#### Closure Benefits

- It's usually memory-efficient as it caches the values inside its block-scoped (where it was called) **(its local memory (like Backpack) + the returned value from the function)** in case that it was called again, this will be in the hidden property called `__scope__`.
  - > all functions have the hidden property named `[[Environment]]` > ![closure](./img/function-closure.png)
  - actually the **Backpack** doesn't contain "all" the local memory of the function, but it contains only the values/variables that will be used in the function body and will get rid of other unused things in the local memory using **garbage collection**
    ![closure](./img/closure5.png)
    - A Lexical Environment object dies (garbage collected) when it becomes **unreachable** (just like any other object). In other words, it exists only while there’s at least one nested function referencing it.
      - But in practice, JavaScript engines try to optimize that. They analyze variable usage and if it’s obvious from the code that an outer variable is not used – it is removed.
    - this is the main concept behind **iterator function**, where it persists a function called **returnNextElement**, which has:
      1. Our underlying array itself
      2. The position we are currently at in our ‘stream’ of elements
      3. The ability to return the next element
  - > So **iterators** turn our data into ‘streams’ of actual values we can access one after another.
  - > JavaScript’s built in iterators are actually objects with a **next()** method that when called returns the next element from the ‘stream’/ flow
- Encapsulation: prevent unwanted access to inner variables/functions

---

### Pure Functions

![pure function](./img/pure-functions.png)

- It's a function that has the following properties:

  - **Deterministic / Predictable**: Always returns the same result for the same input.
  - **No side-effects**: Doesn't change anything outside of the function.
  - **No shared state**: Doesn't depend on the state of the program.
  - **Immutable**: Doesn't change its arguments.

- pure function **must** return something
- **side-effects**: are about MODIFICATION and doesn't count if we created new item
  - usually it's anything that the function does other that returning a value
- **Benefits of pure functions**:

  - **Self-documenting**: Easier to understand and debug.
  - **Testable**: Easier to test, as they don't depend on external state.
  - **Concurrency**: Easier to run in parallel, as they don't depend on shared state.
  - **Memoization**: the return value can be cached or memoized for performance optimization.

---

### Decorators

**Decorator** is a wrapper around a function that alters its behavior. The main job is still carried out by the function.

- Ex: create a wrapper-function around another function (Pure function) to cache its (behavior or the return-value) for multiple use

  - here: The result of `cachingDecorator(func)` is a "wrapp"r”: function(x) that “wraps” the call of func(x) into caching logic:

    ```js
    function slow(x) {
      // there can be a heavy CPU-intensive job here
      alert(`Called with ${x}`);
      return x;
    }

    function cachingDecorator(func) {
      let cache = new Map();

      return function (x) {
        if (cache.has(x)) {
          // if there's such key in cache
          return cache.get(x); // read the result from it
        }

        let result = func(x); // otherwise call func

        cache.set(x, result); // and cache (remember) the result
        return result;
      };
    }

    slow = cachingDecorator(slow);

    alert(slow(1)); // slow(1) is cached and the result returned
    alert('Again: ' + slow(1)); // slow(1) result returned from cache
    ```

  - there are several benefits of using a separate `cachingDecorator()` instead of altering the code of `slow()` itself:
    1. The `cachingDecorator()` is reusable. We can apply it to another function.
    2. The caching logic is separate, it did not increase the complexity of `slow()` itself (if there was any).
    3. We can combine multiple decorators if needed.

#### Using “func.call” for the context

The caching decorator mentioned above is not suited to work with **object methods**. The reason is that the **wrapper** calls the original function as `func(x)`. And, when called like that, the function gets `this = undefined`.

- To solve this, we need to do one of the followings

  - using the built-in function method **func.call(context, …args)** that allows to call a function explicitly setting **this** keyword.
    - It runs func providing the first argument as `this`, and the next as the arguments.

---

### Iteration vs. Recursion

In **functional programming**, we avoid `mutable state`, and therefore avoid `iterative loops` using for or while. As an alternative to iteration, we use **recursion** to break down the problem into smaller ones.

> **Recursion**: is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can be simplified into an easy action plus a simpler variant of the same task.
>
> - When a function solves a task, in the process it can call many other functions. A partial case of this is when a function calls itself. That’s called **recursion**.

A recursive function has two parts:

- `Base case`: condition(s) under which the function returns an output without making a recursive call
- `Recursive case`: condition(s) under which the function calls itself to return the output

Difference between iteration and recursion:

- A recursive solution is usually shorter than an iterative one.
- **Recursion**: has one problem, in typical JavaScript implementations, it’s about three times slower than the looping version. Running through a simple loop is generally cheaper than calling a function multiple times.
- Any recursion can be rewritten as a loop. The loop variant usually can be made more effective.
  - But sometimes the rewrite is non-trivial, especially when a function uses different recursive subcalls depending on conditions and merges their results or when the branching is more intricate. And the optimization may be unneeded and totally not worth the efforts.
- A recursive solution is usually shorter than an iterative one.

---

### Recursion & performance

recursion sometimes take long time as it calls multiple functions at the same time which occupies the **call stack**

- one solution is to use **memoization (caching)**

  - A loop-based algorithm is more memory-saving.
  - The iterative solution uses a single context (place in memory which is the iteration index) changing `i` and result in the process. Its memory requirements are small, fixed and do not depend on `n`.

- another solution is to use **tail call optimization**
  - **Note**: not all JavaScript engines implements **tail calls**
- The maximal recursion depth is limited by JavaScript engine. We can rely on it being `10000`, some engines allow more, but `100000` is probably out of limit for the majority of them.
- **Recursive structures**: A recursive (recursively-defined) data structure is a structure that replicates itself in parts.
  - For examples: `HTML` and `XML documents`.
    - `HTML-tag` may contain a list of: [`Text pieces`, `HTML comments`, `other HTML tags`]

---

### First class functions and Higher order functions

![first class functions](./img/first-class-functions.png)

- **First-class objects**: Functions are values that can:

  - Be assigned to variables
  - Be passed as arguments to other functions
  - Be returned from functions (enables **closures**)

- **Higher Order Functions**: Functions that accept or return other functions (e.g., `map`, `filter`, `reduce`, `sort`, `forEach`).
  - Benefits: More readable, easier to debug, and makes code DRY.
  - Allows chaining functions by passing the output of one as the input to another.
- Core of **functional** and **asynchronous programming**: Passing functions as arguments is key, even with `promises` or `async/await`.

---

#### Examples of higher order functions (`call`, `apply`, `bind`)

`call`, `apply`, `bind` are higher order functions **used to set the `this` keyword and arguments of a (function / method) manually**.

![call-apply-bind](./img/call-apply-bind.webp)

> More [Here](https://javascript.plainenglish.io/quick-guide-to-call-apply-and-bind-methods-in-javascript-5c00cd856cfa)

- `call`

  - Invokes a function with a specified `this` context.

  ```js
  let human = { name: 'Ahmed' };
  function sayName(greeting) {
    console.log(greeting + ' ' + this.name);
  }
  sayName.call(human, 'Hi!'); // Outputs Hi! Ahmed
  ```

- `apply`

  - Similar to `call`, but different on how the arguments are passed.
  - it takes arguments as an **array** which is useful when the method has multiple arguments.

    ```js
    let human = { name: ‘Ahmed’ }
    function sayName(greeting, city) {
      console.log(greeting + ' ' + this.name + ' from ' + city)
    }
    sayName.apply(human, ['Hi', 'Cairo']) // Outputs Hi! Ahmed from Cairo

    ```

  - it's not used in modern javascript because we can instead use `spread operator (...)` with `call()`

    ```js
    sayName.call(human, ...['Hi', 'Cairo']);
    // instead of
    sayName.apply(human, ['Hi', 'Cairo']);

    // ------------------------------------------------

    Math.max.apply(null, [1, 2, 3]); // Outputs 3
    // instead of
    Math.max(1, 2, 3);
    ```

- `bind`

  - **Returns a new function** with `this` bounded to a specified context.

    ```js
    let human = { name: 'Ahmed' };
    function sayName(greeting, city) {
      console.log(greeting + ' ' + this.name + ' from ' + city);
    }

    let greet = sayName.bind(human);
    greet('Hi!', 'Cairo'); // Outputs Hi! Ahmed from Cairo
    ```

  - Used for later use, not immediate invocation.
  - Takes arguments like `call`.
  - **Common use cases**:

    - callbacks (event listeners or timers)

      ```js
      let button = document.getElementById('button');
      function sayName(greeting, city) {
        console.log(greeting + ' ' + this.name + ' from ' + city);
      }

      button.addEventListener('click', sayName); // Outputs undefined undefined
      button.addEventListener('click', sayName.bind(human, 'Hi!', 'Cairo')); // Outputs Hi! Ahmed from Cairo
      ```

      - Note that we don't use `call` or `apply` here because we don't want to call the function immediately, we just want to bind the `this` keyword and the arguments to the function. as when we pass a function to an event listener, we pass it for future use, not for immediate invocation.

    - partial application

      - Allows setting arguments for reuse

        ```js
        const human = { name: 'Ahmed' };

        function sayName(greeting, city) {
          console.log(greeting + ' ' + this.name + ' from ' + city);
        }
        let greet = sayName.bind(human, 'Hi!');
        greet('Cairo'); // Outputs Hi! Ahmed from Cairo
        greet('London'); // Outputs Hi! Ahmed from London

        // or
        function multiply(a, b) {
          return a * b;
        }
        const multiplyByTwo = multiply.bind(null, 2);
        multiplyByTwo(4); // Outputs 8

        // ------------------------------------------------

        // just arguments
        function greet(greeting, name) {
          return `${greeting} ${name}`;
        }

        const sayHello = greet.bind(null, 'Hello'); // use null as we don't have a context
        sayHello('Ahmed'); // Outputs Hello Ahmed
        ```

- **Notes:**

  - These functions are accessible from `Function.prototype`.

  - There're other higher order functions like (`map`, `filter`, `reduce`, `sort`, `forEach`).
  - You can use these methods with functions that don't have a `this` keyword used inside them. by passing `null` or `undefined` as the first argument.

    ```js
    function sayHello(name) {
      console.log('Hello' + name);
    }

    sayHello.call(null, 'Ahmed'); // Hello Ahmed
    ```

  - We can call these methods with **arrow functions** but they will not work as expected because arrow functions don't have their own `this` keyword.
  - We can call these methods with part of the arguments, this is called **partial application**.

    ```js
    function multiply(a, b) {
      return a * b;
    }

    let multiplyByTwo = multiply.bind(this, 2);
    // now we don't need to write the first argument each time as it's now "pre-set"

    multiplyByTwo(4); // Outputs 8
    multiplyByTwo(5); // Outputs 10
    ```

---

### Referential Transparency

- **Referential Transparency**: emphasizes that an expression (or function) in a JavaScript program may be replaced by its **value / returned value** or any other variable having the same value without changing the result of the program. As a result, methods should always return the same value for the given argument without any side effects
- it's like **(I can replace the function-call with its returned-output and it’s the same)**

![referential transparency](./img/referential%20transparency.PNG)

---

### Composition

It's the combination of multiple functions to create a more complicated one. It's a way to combine functions where the output of one function is the input of another.

- It is the **combination of two functions into one**, that when applied, returns the result of the chained functions **(using reduction of the result value)**.

> In functional Programming, Composition **takes the place of inheritance in OOP**.
>
> Note that **"composition"** in OOP is different from **"composition"** in functional programming. More here [composition in OOP](../../Computer%20Science/OOP/1-OOP.md#i---inheritance)

- Chaining with dots relies on JavaScript prototype feature - functions return arrays which have access to all the high-order-function (map, filter, reduce), but if I want to chain functions that just return a regular output:

  ```js
  const multiplyBy2 = x => x * 2;
  const add3 = x => x + 3;
  const divideBy5 = x => x / 5;
  const initialResult = multiplyBy2(11);
  const nextStep = add3(initialResult);
  const finalStep = divideBy5(nextStep);
  console.log('finalStep', finalStep);
  ```

  - **But that’s risky, people can overwrite**, So we can use **composition** to make it more readable and less risky.

- Composition is a fancy term which means "combining pure functions to build more complicated ones" (make complex programs out of simple functions).

  ![composition](./img/composition.png)

  ```js
  let compose = (fn1, fn2) => {
    return function (value) {
      return fn1(fn2(value));
    };
  };

  // or
  const compose = (fn1, fn2) => fn1(fn2());
  ```

- **Example of generic compose function:**

  ```js
  function compose(...functions) {
    return function (value) {
      return functions.reduceRight((acc, fn) => fn(acc), value); // reduceRight to start from the right
    };
  }

  // ---------------------------- Usage ---------------------------- //
  const lowerCaseString = str => str.toLowerCase();
  const splitWords = str => str.split(' ');
  const joinWithDashes = arr => arr.join('-');

  const transformString = compose(joinWithDashes, splitWords, lowerCaseString);
  console.log(transformString('I Love JavaScript')); // i-love-javascript
  ```

- Why use composition?

  - **Easier to add features**: We can list our units of code by name and have them run one by one as independent, self-contained pieces.
  - **More readable**: `reduce` is often wrapped in compose to say ‘combine up’ the functions to run our data through them one by one. The style is ‘point free’.
  - **Easier to debug**: I know exactly the line of code my bug is in - it’s got a label!

---

### Functional Decoration

we can convert functions more easily to make them suit our task Without writing a new function from scratch, it will appear as we edit the function's body, but in reality **we're creating new wrapper outer function and using its Backpack that contains our function we saved** --> **it's using closure to supercharge our functions**

- here we want to edit the function `multiplyBy2()` to only run once

  ```js
  const oncify = convertMe => {
    let counter = 0;
    const inner = input => {
      if (counter === 0) {
        const output = convertMe(input);
        counter++;
        return output;
      }
      return 'Sorry';
    };
    return inner;
  };
  const multiplyBy2 = num => num * 2;
  const oncifiedMultiplyBy2 = oncify(multiplyBy2);
  oncifiedMultiplyBy2(10); // 20
  oncifiedMultiplyBy2(7); // Sorry
  ```

---

## Generators

They differ from Regular functions which return only single value (or nothing). **Generators** can return (`“yield”`) multiple values, one after another, on-demand. They work great with iterables, allowing to create data streams with ease.

> **Generators Summary:**
>
> - When we define a generator, when we call `.next()` method on it => it will execute the code until it reaches the first **`yield` statement**, then it will return the value of the `yield` statement and stop the execution of the function. When we call `.next()` again, it will continue the execution of the function until it reaches the next `yield` statement, then it will return the value of the `yield` statement and stop the execution of the function. And so on.
> - If in the next time we call `.next()` and passing on a value as a parameter to the `.next()` method, this value will be the result of the `yield` statement. So, the value of the `yield` statement will be replaced by the value that we passed to the `.next()` method.
> - if we kept calling `.next()` method, it will keep executing the code until it reaches the end of the function, then it will return an object with the value of `done` property set to `true` and the value of the `value` property will be the value that we passed to the `.next()` method in the last time. -> **`{ done: true, value: 10 }`**

- Once we start thinking of our data as flows (where we can pick of an element one-by-one) we can rethink how we produce those flows - JavaScript now lets us produce the flows using a function
- the Generator function allows us to exit and renter the execution-context of function manually, unlike iterators which this happens dynamically
- To create a generator, we need a special syntax construct: `function*`, so-called **“generator function”**.

- Generator functions behave differently from regular ones. When such function is called, it doesn’t run its code. Instead it returns a special object, called **“generator object”**, to manage the execution.

  ```js
  function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }

  // "generator function" creates "generator object"
  let generator = generateSequence(); // The function code execution hasn’t started yet
  alert(generator); // [object Generator]
  ```

> **Note:** `function* f(…)` or `function *f(…)`?
>
> - Both syntaxes are correct. But usually the first syntax is preferred
> - we usually use the second syntax in object/class ES6 methods

### Generator Methods

- The main method of a generator is `next()`. When called, it runs the execution until the nearest `yield <value>` statement (value can be omitted, then it’s `undefined`). Then the function execution pauses, and the yielded value is returned to the outer code.

  - The result of `next()` is always an object with two properties:
    ![generator](./img/iterators-1.png)

    - `value`: the yielded value.
    - `done`: `true` if the function code has finished, otherwise `false`.
      - When the generator is done. We should see it from `done: true` and `value: undefined`, and New calls to `generator.next()` don’t make sense any more. If we do them, they return the same object: `{done: true}`.

    ```js
    function* generateSequence() {
      yield 1;
      yield 2;
      return 3;
    }

    let generator = generateSequence();

    let one = generator.next();

    alert(JSON.stringify(one)); // {value: 1, done: false}
    ```

  - **"yield" is a two-way street**: That’s because `yield` is a two-way street: it not only returns the result to the outside, but also can pass the value inside the generator.

    - when we pass a value to the `next()` method, it will be evaluated as the yielded value and we will continue the function until we find another yield

    ```js
    function* createFlow() {
      const num = 10;
      const newNum = yield num;
      yield 5 + newNum;
      yield 6;
    }
    const returnNextElement = createFlow(); // The function code execution hasn’t started yet
    const element1 = returnNextElement.next(); // 10
    const element2 = returnNextElement.next(2); // 7
    ```

- `generator.return(value)`

  - it finishes the generator execution and return the given value.

    ```js
    function* gen() {
      yield 1;
      yield 2;
      yield 3;
    }

    const g = gen();

    g.next(); // { value: 1, done: false }
    g.return('foo'); // { value: "foo", done: true }
    g.next(); // { value: undefined, done: true }
    ```

  - Often we don’t use it, as most of time we want to get all returning values, but it can be useful when we want to stop generator in a specific condition.

### Generators are Iterable

- Iterables are objects that implement the `Symbol.iterator` method, and we can use `ES6` features on them like **`for..of` loop and spread operator `...`**

  ```js
  function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }

  let generator = generateSequence();

  for (let value of generator) {
    alert(value); // 1, then 2
  }
  ```

  - `object` is not iterable by default, that's why we can't use `for..of` loop on it, but we can make it iterable by adding the `Symbol.iterator` method to it

  - **Note**: the example above shows `1`, then `2`, and that’s all. It doesn’t show `3`!
    - It’s because `for..of` iteration ignores the last value, when `done: true`. So, if we want all results to be shown by `for..of`, we must return them with `yield`

- As generators are iterable, we can call all related functionality, e.g. the **spread syntax `...`**:

  ```js
  function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
  }

  let sequence = [0, ...generateSequence()];
  alert(sequence); // 0, 1, 2, 3
  ```

### Generators in Async Code

- `returnNextElement` is a special object (a **generator object**) that when its `next` method is run starts (or continues) running createFlow **execution-context** until it hits `yield` and returns out the value being yielded **without continuing the function**

  - We end up with a ‘stream’/flow of values that we can get one-by-one by running `returnNextElement.next()`
  - And most importantly, for the first time we get to pause (‘suspend’) a function being run and then return to it by calling `returnNextElement.next()`

- This is actually what happens behind the scene in **Asynchronous javascript**, as we want to:

  1. Initiate a task that takes a long time (e.g. requesting data from the server)
  2. Move on to more synchronous regular code in the meantime
  3. Run some functionality once the requested data has come back

  ```js
  function doWhenDataReceived(value) {
    returnNextElement.next(value);
  }
  function* createFlow() {
    const data = yield fetch('http://twitter.com/will/tweets/1');
    console.log(data);
  }
  const returnNextElement = createFlow();
  const futureData = returnNextElement.next();
  futureData.value.then(doWhenDataReceived);
  ```

  - Explanation of the code above:
    ![generator](./img/generator-example.png)

- **Async/await** simplifies all this and finally fixes the inversion of control problem of callbacks

  - as it automatically triggers the function on the promise-resolution **(this functionality is still added to the micro-task queue though)**

  ```js
  async function createFlow() {
    console.log('Me first');
    const data = await fetch('https://twitter.com/will/tweets/1');
    console.log(data);
  }
  createFlow();
  console.log('Me second');
  ```

---

### Generators in Real Life (use cases)

- **Infinite Scrolling**: Generators are perfect for infinite scrolling. We can create a generator that fetches data from the server and yields it one by one. Then we can use the generator in a `for..of` loop to display the data.

  ```js
  // Get 10 images batch by each request
  const allImages = Array.from({ length: 1000 }, (_, i) => `https://picsum.photos/id/${i}/200/200`);

  function* getBatchOfImages(images, batchSize = 10) {
    let index = 0;
    while (index < images.length) {
      yield images.slice(index, index + batchSize);
      index += batchSize;
    }
  }

  const imageGenerator = getBatchOfImages(allImages);

  imageGenerator.next().value; // [1st 10 images]
  imageGenerator.next().value; // [2nd 10 images]
  ```

---

## JS : The weird parts

### Numbers

- **NaN**:

  - `typeof NaN` = `Number` --> as it's **invalid number**
  - example of `NaN` -> **division on strings** -> `"apple" / 3`
  - `Nan === NaN` --> **false**
    - because `NaN` is a special value that’s not equal to any value, including itself. and due to "Type coercion", `NaN` is not equal to `NaN` because it's not a number.
  - `alert(isNaN("str"))` --> **true**
    - behind the scenes, `isNaN()` converts its argument to a number, so `isNaN("str")` converts `"str"` to a number and then checks the result for being `NaN`, which is `true`.

- **BigInt**:

  - `BigInt` is a special numeric type that provides support for integers of arbitrary length.
  - BigInt can mostly be used like a regular number,

    - All operations on `bigints` return `bigints`.
    - it ends with `n` -> `1234567890123456789012345678901234567890n;`
    - for example:

      ```js
      alert(1n + 2n); // 3
      alert(5n + 2n); // 2 (not 2.5)
      ```

    - We can’t mix `bigints` and regular numbers:

      ```js
      alert(1n + 2); // Error: Cannot mix BigInt and other types
      ```

      - to do so, we can explicitly convert them if needed: using either `BigInt()` or `Number()` constructors

    - The unary plus is not supported on bigints

      ```js
      alert(+25n); // error
      ```

  - **Polyfills**
    - Polyfilling bigints is tricky. The reason is that many JavaScript operators, such as `+`, `-` and so on behave differently with bigints compared to regular numbers.
    - we can use the polyfill proposed by the developers of [JSBI library](https://github.com/GoogleChromeLabs/jsbi).

---

## Miscellaneous

### Mutation observer

**MutationObserver** is a built-in object that observes a DOM element and fires a callback when it detects a change.

```js
// First, we create an observer with a callback-function:
let observer = new MutationObserver(callback);
// And then attach it to a DOM node:
observer.observe(node, config);
```

- `config` is an object with boolean options “what kind of changes to react on”:
  - `childList` – changes in the direct children of node
  - `subtree` – in all descendants of node
  - `attributes` – attributes of node
  - `attributeOldValue` – if `true`, pass both the old and the new value of attribute to callback (see below), otherwise only the new one (needs attributes option),
  - `attributeFilter` – an array of attribute names, to observe only selected ones.
  - `characterData` – whether to observe node.data (text content),
  - `characterDataOldValue` – if true, pass both the old and the new value of node.data to callback (see below), otherwise only the new one (needs characterData option).

```html
<div contenteditable id="elem">
  Click and
  <b>edit</b>
  , please
</div>

<script>
  let observer = new MutationObserver(mutationRecords => {
    console.log(mutationRecords); // console.log(the changes)
  });

  // observe everything except attributes
  observer.observe(elem, {
    childList: true, // observe direct children
    subtree: true, // and lower descendants too
    characterDataOldValue: true // pass old data to callback
  });
</script>
```

- UseCases"
  - Using `MutationObserver`, we can detect when the unwanted element appears in our DOM and remove it. ex: third-party script that contains useful functionality, but also does something unwanted, e.g. shows ads `<div class="ads">Unwanted ads</div>`.
  - There are other situations when a third-party script adds something into our document, and we’d like to detect, when it happens, to adapt our page, dynamically resize something etc.

---

### Selection and Range

It's an advance topic and you can find it here [Selection and Range](https://javascript.info/selection-range) if needed

---

## Notes

- `console` is not built in js, but it's from the `webApi`
- The saying that: "Everything in JavaScript is an object" is not true. **There are 8 basic data types in JavaScript**:
  - `Boolean`
  - `Null`
  - `Undefined`
  - `Number`
  - `Object`.
  - `String`
  - `BigInt`
  - `Symbol` -> (new in ES6)
  - some of them may have object-like features, but they are not objects. An object is a collection of key-value pairs. And the value can be accessed by using the key of the object.
- **Statements Vs Expressions** :
  - `Expression`: it's a piece of code that produces a value and expected to be used in places where values are expected
    - Ex: `5+4` or `Ternary Operator` or `short circuiting` and then you can use it in a `${}`
  - `Statements`: it's a piece of code that does something and doesn't produce a value
    - Ex: `if` statement or `for` loop
- **Strict mode**:
  - `"use strict"` enables secure coding by enforcing stricter parsing and error handling.
  - Place `"use strict"` at the top of your scripts to enable it.
  - Benefits:
    1. Forbids certain operations, ex:
       - Using a variable without declaring it first.
       - Having a default value for `this` in functions and global scope -> `this` is `undefined` in strict mode.
       - Deleting a variable or function using the `delete` operator.
       - Duplicating a parameter name in a function.
       - Duplicating a property name in an object.
       - Using `eval` or `arguments` as variable names.
       - Using `with`.
    2. Throws errors for bad syntax instead of failing silently.
    - Example: Mistyping a variable name throws an error instead of creating a global variable.
  - **Usage**:
    - Modern JavaScript classes and modules enable strict mode automatically, so explicit `"use strict"` is often unnecessary.
- `Refactoring the code` : means the process of restructuring code without changing or adding to its external behavior and functionality.
- in `DOM` => `:root` element is called `document.documentElement`
- to make anything `immutable` : `Object.freeze(obj)`

  - it **only** freezes the first level of an object (not a `deep-freeze`)

  ```js
  Object.freeze({
    jonas: 1500,
    matilda: 100
  });

  Object.freeze([
    { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
    { value: -45, description: 'Groceries 🥑', user: 'jonas' }
  ]);

  // or anything because everything is an "object"
  ```

- if you used **const** in a `for loop` -> `for ( i = 0; i < 3; i++) {}` you will get error, as you won't be able to re-assign `i`

- There is a widespread practice to use constants (named using capital letters and underscores) as aliases for difficult-to-remember values that are known prior to execution.

  ```js
  const COLOR_ORANGE = '#FF7F00';
  ```

- short-circuiting ->

  ```js
  alert(alert(1) && alert(2)); // undefined
  // as alert doesn't return anything (returns undefined)
  ```

- **How is every thing is an Object ?** --> If one would want to do something with a primitive, like a `string` or a `number`. It would be great to access them using **methods**.

  - The language allows access to **methods** and **properties** of `strings`, `numbers`, `booleans` and `symbols`.
  - In order for that to work, a special “**object wrapper**” that provides the extra functionality is created, and then is destroyed.
  - you can also create this wrapper-object using constructor like `new`, but it's highly unrecommended. Things will go crazy in several places.

    ```js
    alert(typeof 0); // "number"
    alert(typeof new Number(0)); // "object"!

    let zero = new Number(0);
    if (zero) {
      // zero is true, because it's an object
      alert('zero is truthy!?!');
    }
    ```

  - On the other hand, using the same functions `String`/`Number`/`Boolean` without `new` is totally fine and useful thing. They convert a value to the corresponding type: to a string, a number, or a boolean (primitive).

    ```js
    let num = Number('123'); // convert a string to number
    ```

  - The special primitives `null` and `undefined` are exceptions. They have no corresponding “wrapper objects” and provide no methods. In a sense, they are “the most primitive”.

- **NO JAVASCRIPT**

  - If you have an `accordion menu`, `tabbed panels`, and `responsive slider` all hide some of their content by default. This content would be inaccessible to **visitors that do not have JavaScript enabled** if we didn't provide alternative styling.
  - One way to solve this is by adding a class attribute whose value is **"no-js"** to the opening `<html>` tag. This class is then removed by JavaScript (using the `replace()` method of the String object)
  - if JavaScript is enabled. The **"no-js"** class can then be used to provide styles targeted to visitors who do not have JavaScript enabled.

  ```html
  <!DOCTYPE html>
  <html class="no-js"></html>
  ```

  ```js
  var elDocument = document.documentElement;
  elDocument.className = elDocument.className.replace(/(^|\s)no-js(\s|$)/, '$1');
  ```

- **polyfills**

  - We use the **global object** to test for support of modern language features.

    - If there’s none (say, we’re in an old browser), we can create “polyfills”: add functions that are not supported by the environment, but exist in the modern standard.

  ```js
  // For instance, test if a built-in Promise object exists (it doesn’t in really old browsers):
  if (!window.Promise) {
    alert('Your browser is really old!');
    window.Promise = ... // custom implementation of the modern language feature
  }
  ```

- In JavaScript, **functions are objects**.

  - Function objects contain some useable properties; For instance, a function’s name is accessible as the `“name”` property:

    ```js
    function sayHi() {
      alert('Hi');
    }

    alert(sayHi.name); // sayHi
    ```

  - the name-assigning logic is smart. It also assigns the correct name to a function even if it’s created without one, and then immediately assigned:

    ```js
    let sayHi = function () {
      alert('Hi');
    };

    alert(sayHi.name); // sayHi (there's a name!)
    ```

  - **The “length” property**

    - built-in property `“length”` that returns the number of function parameters, for instance:

    ```js
    function f1(a) {}
    function f2(a, b) {}
    function many(a, b, ...more) {}

    alert(f1.length); // 1
    alert(f2.length); // 2
    alert(many.length); // 2
    ```

    > - The length property is sometimes used for introspection in functions that operate on other functions.
    > - For instance, in the code below the ask function accepts a question to ask and an arbitrary number of handler functions to call. Once a user provides their answer, the function calls the handlers. We can pass two kinds of handlers:
    > - A zero-argument function, which is only called when the user gives a positive answer.
    > - A function with arguments, which is called in either case and returns an answer.

- **eval()** built-in function

  - it allows to execute a string of code.

  ```js
  let code = 'alert("Hello")';
  eval(code); // Hello
  ```

- pre-increment `++i` vs post-increment `i++`

  - `++i` => first increment then return
  - `i++` => first return then increment
