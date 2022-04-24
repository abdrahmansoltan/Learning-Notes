## INDEX

- [INDEX](#index)
- [Compiled vs Interpreted Language](#compiled-vs-interpreted-language)
  - [Compiled Language](#compiled-language)
  - [Interpreted Language](#interpreted-language)
- [JavaScript Engine](#javascript-engine)
  - [call-stack & Memory-heap](#call-stack--memory-heap)
- [Types](#types)
- [Implicit vs Explicit](#implicit-vs-explicit)
- [Scope](#scope)
  - [Lexical scope](#lexical-scope)

---

## Compiled vs Interpreted Language

![compiled](./img/Compiled%20Language.png)

### Compiled Language

- Language is written and compiled to machine code inside of an application
- Errors are detected during compiling
- The code won’t compile until it’s error-free
- it `optimizes` the code as it cashes any repeated thing
- Examples: C, C++, Erlang, Go

### Interpreted Language

- Errors found when the code is run
- The interpreter translates and runs code one statement at a time
- Interpreted code runs more slowly
- it's more fit to `javascript` as JS runs on the browser

> Node.js Is an Interpreter

---

## JavaScript Engine

- javascript uses best of (Interpreted & Compiled) languages ---> `Jit Compiler`

  ![alt](./img/js-engine.PNG)

- is `javascript` an interpreted language ?
  - yes, **initially** but it evolved to use compilers as well based on the implementation

### call-stack & Memory-heap

- Memory-heap ---> `memory leak`
- call-stack ---> `stack overflow`

---

## Types

- **permatives** & **reference** ![pvr](./img/permatives%20vs%20reference.PNG)
  - `value` at a specific `address` (**in the `call stack`**) is immutable ,,, but in the `Heap` its mutable
  - `reference-type` are stored in the `Heap` as we don't know how big its size would be so it's like if the `Heap` has unlimited storage unlike `call stack`
- **Type Coercion** : it's the automatic or implicit conversion of values from one data type to another
  ![type coercion](./img/TypeCoercion.png)

  - empty object {} /array [] => true
  - empty string "" => false

  - `+` vs `-` :

    ![type coercion](./img/TypeCoercion2.PNG)

- convert string to number using :
  - `unary` operator (it's a `+` or `-` before the string number) => `console.log(+"565")`
  - `parseint()` or `parsefloat()` => `parseint(100Ahmed)` = 100

---

## Implicit vs Explicit

![implicit Explicit](./img/Implicit-vs-Explicit.jpg)

- **type coercion** is implicit whereas **type conversion** can be either implicit or explicit

---

## Scope

### Lexical scope

(range of functionality) of a variables + Data that it may only be called (referenced) from `within the block of code in which it is defined`.

- it determines our available variables
- variable defined outside a function can be accessible inside another function defined after the variable declaration.

![lexical](./img/fig2.png)

---
## JS : The weird parts

- `null` vs `undefined`
  ![null-undefined](./img/null-undefined.png)
- `null` is you set it to empty, `undefined` it's empty because it has not been set.
- or `null` is empty on purpose, while `undefined` is still empty.
- `undefined` means a variable has been declared but has not yet been assigned a value
- `null` is an assignment value. It can be assigned to a variable as a representation of no value.
- `typeof NaN` = `Number`

### short circuiting => **nullish coalescing operator** `??`

- it's like (or `||`) but works in a different way and can actually return `false value` ![nullish coalescing operator](./img/nullish%20coalescing%20operator.webp)
- **Optional chaining** `?.` :
  ![Optional chaining](./img/Optional%20chaining.webp)
  - is a safe way to access nested object properties, even if an intermediate property doesn’t exist.
  - enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.
- without `strict mode`, `this` will point to the global object => `window`

---

## notes

- `console` is not built in js, but it's from the `webApi`
- ( \` ) is caled a backticks
- **Statements Vs Expressions** :
- expression we get a value from it like `5+4` or `Ternary Operator` or `short circuiting` and then you can use it in a `${}`
- Statements doesn't return a value
- **Strict mode** :
- It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
- The purpose of `"use strict"` is to indicate that the code should be executed in "strict mode".
- Strict mode changes (previously accepted "bad syntax") into real errors
- as an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
- `Refactoring the code` : means the process of restructuring code without changing or adding to its external behavior and functionality.
- in `DOM` => `:root` element is called `document.documentElement`
- to make anything `immutable` : `Object.freeze()`

  - it **only** freezes the first level of an object (not a `deep-freeze`)

  ```js
  Object.freeze({
    jonas: 1500,
    matilda: 100,
  });

  Object.freeze([
    { value: 250, description: "Sold old TV 📺", user: "jonas" },
    { value: -45, description: "Groceries 🥑", user: "jonas" },
  ]);

  // or anything because everything is an "object"
  ```

---