# INDEX

- [INDEX](#index)
  - [what is programming?](#what-is-programming)
  - [programming language](#programming-language)
  - [convert source code to machine code](#convert-source-code-to-machine-code)
  - [IDE](#ide)
  - [operators](#operators)
  - [Data types](#data-types)
  - [Variables](#variables)
  - [conditionals](#conditionals)
  - [function](#function)
  - [collections](#collections)
  - [using external code](#using-external-code)
  - [strings](#strings)
  - [planning a program](#planning-a-program)
  - [Errors](#errors)
    - [Errors Categories](#errors-categories)
  - [debugging](#debugging)
    - [runtime error](#runtime-error)
    - [symantic error is also known as **Logic error**](#symantic-error-is-also-known-as-logic-error)
  - [Debugging code in an IDE](#debugging-code-in-an-ide)
  - [Advanced topics](#advanced-topics)

---

## what is programming?

Programming is the process of converting ideas into instructions that a computer can understand and execute. These instructions are specific and sequential.

- **Bug** is when something unexpected happens
- **crash** is when your program stops early or freezes

> order matters sequential

---

## programming language

- syntax of c++

  ```c++
  #include int main() {
    std:cout <« "Hello, world!";
    return 0; }
  ```

- syntax of javascript

  ```js
  document.write('Hello, world!');
  ```

- syntax of python

  ```py
  print('Hello, world!');
  ```

`note`
each language comes with strength and weaknesses

- the goal of theses languages to transfer this to Machine Language

- Python is an interpretive language. This means we have to interpret it into machine code

---

## convert source code to machine code

what compilers do. They take your high level programming language and turn it into an executable that contains low level machine code. This way, users can run your code on their machine without every needing your original source code.

what computer interpreters do: they process your source code each times its run, line by line, and it's up to the other user to have the needed interpreter available on their machine.

- languages like `C`, `C++`, and `Objective-C` are known as compiled languages,

- whereas `PHP` and `JavaScript` are known as interpretive languages.

- `Java`, `C#` and `Python` use the combination approach.

---

## IDE

integrated development environments

- It's a software application that provides a set of tools to help developers write and test their code.
- It's not responsible for converting your code into machine code. That's the job of the `compiler` or `interpreter`.
  - `IDE` is just a tool that helps you write your code and test it out.

---

## operators

- Arithmetic operators: (`+`, `-`, `*`, `/`, `%`, `**`, `//`)

---

## Data types

data types: allows us to put our variable in a particular category so that the computer knows how much space to give us in its memory.

- Programs manipulate `data objects`

  - Objects have a `type` that defines the kinds of things programs can do to them
  - Objects are:
    - **Scalar** - indivisible (can't be divided) -> `int`, `float`, `bool`, `None`
    - **Non-scalar** - have internal structure that can be accessed -> `str`, `list`, `dict`, `set`
  - We can convert object of one type to another:

    - This is called **type casting**

    ```py
    int(3.14) # 3
    float(3) # 3.0
    str(3.14) # '3.14'
    ```

---

## Variables

The main purpose of variables is to store data in memory **for later use**.

- **variable** is a name that refers to a value in memory.
- variable names should contain only letters, numbers, and underscores. And even though numbers are allowed, the name shouldn't start with a number.

---

## conditionals

statements that are grouped together this way in programming. It's called a **block**.

---

## function

A function is a block of code packaged together with a name.

- It's used to **abstract** away a piece of code that we want to use repeatedly, and to **decompose** a complex problem into smaller problems that are easier to solve.

  > **Abstraction** is the process of hiding complexity from users
  >
  > **Decomposition** is the process of breaking a complex problem into smaller problems (mini programs/modules)

- `void` function : don't return a value after the function executes

---

## collections

- a collection in programming lets me group similar items together using a single name, which is known as a variable.

---

## using external code

The most basic type of shared code in Python is called a **module**.

- A Python module is a Python file that contains code, like variables or functions.
- multiple modules together are called a **package** or **library**
- **Framework** is when a set of code is not just used together but used in a specific way **as it set the basic structure and flow of your program**

---

## strings

- **regular expression** lets you create a description of a pattern that you want to match
- it's also known as **Regex**:
  - can be made up of letters, numbers and special characters. But within a regular expression each character has a specific meaning and you can put them together to describe exactly what you need.

---

## planning a program

- **style guides**: Documentation on approaches to code
- **Pseudocode**: writing a description of what you're trying to do using plain language

---

## Errors

### Errors Categories

- Syntax - language rules broken
- Runtime - unable to execute, ex: (division by zero)
- Semantic - unexpected output

**syntax** : refers to the rules of a programming language.

- Syntax errors happen when you write code that breaks the expected rules.

---

## debugging

The process of identifying and fixing bugs

- **Defensive programming**: It's a programming practice that anticipates and protects against potential errors that could cause a program to crash. This is done by:

  - **Testing & Validation**: comparing the `output` of your program to the `expected output`.
  - **Debugging**: finding and fixing bugs in your code by inspecting events leading up to the bug.

- One way to write defensive code is to use `modules` (functions) that are designed to help you write code that's less likely to have bugs. These modules are known as **assertions**.

  - **assertions** are statements that assert, or state, that something is true. They're used to check that the state of your code is what you expect it to be, and if not, they'll throw an error telling you that something's wrong.

> More on testing here [Testing](../../Testing/1-Testing.md)

---

### runtime error

- ex: include a call to a function that isn't ever defined. A function call is a valid statement. But when the interpreter tries to run your code, it won't be able to find and execute the function specified in your function call. This type of bug is known as a run-time error **because it often isn't obvious until the code is actually run**.

### symantic error is also known as **Logic error**

## Debugging code in an IDE

- **Linting**: IDE can check code for bugs before you even execute it
- goal of creating test cases: to test all the possible cases that my code could encounter when it's used

---

## Advanced topics

1. **Memory management** it's important when a program is running that anything that's no longer needed gets removed from memory and thrown out, to free up that space for future manipulation.
2. **Memory leak** it's where the amount of memory used by a program continues to grow unnecessarily.
3. **garbage collection** This is an automated process in which the compiler keeps track of which items in memory are no longer needed and deletes them.
4. structure your code to start separate tasks that are executed simultaneously. Each task is known as a **thread**. And the overall approach to writing code that executes threads concurrently is known as **multithreading**.
5. Each thread in a multithreaded program requires additional processing power and memory from the computer where the code is being executed.
6. Async in javascript is similar to multithreading
7. What's an advantage of using multithreading? >> It can make your computer programs faster and more responsive.
8. **Algorithms** set of instructions that describes how to get the exact result you want.
