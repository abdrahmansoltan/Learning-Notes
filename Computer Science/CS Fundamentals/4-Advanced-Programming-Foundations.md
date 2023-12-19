# INDEX

- [INDEX](#index)
  - [Functional programming](#functional-programming)
  - [Advanced topics](#advanced-topics)

---

## Functional programming

**Functional programming** is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.

- So, it means:
  - avoiding mutation
  - using functions as values (passing functions as arguments to other functions)

> Functional programming can be used in any programming language, but it's more common in languages that provide **first-class functions**.
>
> So, a **Functional language** is a language that facilitates functional programming. Some examples of functional languages are Haskell, Scala, and Clojure.

- **First-class functions** are functions that can be treated like any other value. This means that they can be assigned to variables, passed as arguments to functions, and returned from functions.

  ```py
  def multiply(x, y):
    return x * y

  a = 4
  b = 7
  operation = multiply
  print(operation(a, b)) # 28
  ```

  - It's used as an **abstraction** technique to make code more concise and flexible by breaking it into smaller pieces, and to make it more readable by giving meaningful names to functions.

  - Most common use for `first-class functions` is to pass a function as an argument to another function -> **Higher-order functions**

- **Higher-order functions** are functions that can accept other functions as arguments and/or return functions as output. This is possible because functions are just a special type of object.

  ```py
  def add_five(x):
    return x + 5

  def twice(func, arg):
    return func(func(arg))

  print(twice(add_five, 10)) # 20
  ```

  - most common use for `higher-order functions` is to abstract away behaviors that are shared between other functions. like `map`, `filter`, `reduce`

    ```py
    # map -> apply a function to every element in a list and return a new list with the results
    def multiply(x):
      return x * 2

    map(multiply, [1, 2, 3, 4]) # [2, 4, 6, 8]

    # -------------------------------------------------------------------------------

    # filter -> apply a function to every element in a list and return a new list with the elements that passed the condition
    def is_even(x):
      return x % 2 == 0

    filter(is_even, [1, 2, 3, 4]) # [2, 4]

    # -------------------------------------------------------------------------------

    # reduce -> apply a function to every element in a list and return a new reduced value
    def add(x, y):
      return x + y

    reduce(add, [1, 2, 3, 4]) # 10
    # with lambda function
    reduce(lambda x, y: x + y, [1, 2, 3, 4]) # 10
    ```

- **lexical scope**

  - Function body can use variables defined in the same scope or in any **outer scope**. This is called **lexical scope**.
  - it's the scope where the function **was defined**, not where it's called.

    ```py
    def add_ten(x):
      ten = 10
      return x + ten

    add_ten(5) # 15
    ```

  - It enables us to use **Higher-order functions** and **Closures**.

  - **Function Closures** is a function that can access non-local variables that are defined outside of its body **(lexical scope)**.

    - This means that it can remember the value of a variable that was defined outside of its scope, even when the variable goes out of scope or is deleted.
    - We can use closures to avoid repeating computations or to persist data across calls.

    ```py
    def add_ten():
      ten = 10

      def add(num):
        return num + ten

      return add

    closure_result = add_ten()
    print(closure_result(5)) # 15
    ```

- **Dynamic scope** is where the function **was called**, not where it's defined.

  - It's not common in programming languages, but it's used in some languages like `Racket` and `Perl`.

- **Function composition** is the process of combining two or more functions to produce a new function.

  - It's used to break down complicated computations into a series of steps that can be reused.
  - the operations are applied from **right to left**. as the output of the first function becomes the input of the second function, and so on.

  ```py
  def compose(func1, func2):
    def composition(x):
      return func1(func2(x))
    return composition

  def add_five(x):
    return x + 5

  def multiply_by_three(x):
    return x * 3

  composed_function = compose(add_five, multiply_by_three)
  print(composed_function(3)) # 14
  ```

- **Currying & Partial application** are techniques that allow us to transform a function of multiple arguments into a sequence of functions that each take a single argument.

  - More [here](../../Frontend/JavaScript/9-JS_Advanced_concepts.md#currying--partial-application)

- The most used functional programming concepts are:

  - **Pure functions**: functions that have no side effects, meaning that they don't modify any state or variables outside of their scope. This means that they're easier to reason about and test.
  - **Immutability**: data that doesn't change its state after it's created. This makes it easier to avoid errors when different parts of a program modify the same data structure in unexpected ways.
  - **Referential transparency**: expressions that can be replaced with their corresponding values without changing the program's behavior. This means that a function call can be replaced by its return value, and the result will be the same.

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

---

[⬆ back to top](#index)
