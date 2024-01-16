# INDEX

- [INDEX](#index)
  - [Algorithm](#algorithm)
  - [Algorithm Analysis (Big-O)](#algorithm-analysis-big-o)
    - [Asymptotic Analysis](#asymptotic-analysis)
    - [Runtime Analysis](#runtime-analysis)
      - [Time complexity](#time-complexity)
      - [Space complexity](#space-complexity)
    - [Big O Rules](#big-o-rules)
    - [Big O Types](#big-o-types)
      - [O(n)](#on)
      - [O(1)](#o1)
      - [O(n^2)](#on2)
      - [O(log(n))](#ologn)
      - [O(n log(n))](#on-logn)
      - [O(!n)](#on-1)
    - [Rules to improve Big o](#rules-to-improve-big-o)
    - [Notes](#notes)
  - [Recursion](#recursion)
    - [Recursion Types](#recursion-types)
    - [How recursion works with the call stack](#how-recursion-works-with-the-call-stack)
    - [Recursion Steps](#recursion-steps)
    - [Big-O Runtime for Recursive Functions](#big-o-runtime-for-recursive-functions)
    - [Maximum Recursive Depth](#maximum-recursive-depth)
      - [When recursion goes wrong](#when-recursion-goes-wrong)
    - [Tail Recursion](#tail-recursion)
  - [Dynamic Programming](#dynamic-programming)
    - [Memoization](#memoization)
    - [Dynamic programming types](#dynamic-programming-types)
      - [Top-down approach (Recursion + Memoization)](#top-down-approach-recursion--memoization)
      - [Bottom-up approach (Iteration + Tabulation)](#bottom-up-approach-iteration--tabulation)
    - [Dynamic Programming vs Divide and Conquer (Brute Force)](#dynamic-programming-vs-divide-and-conquer-brute-force)
  - [Sorting](#sorting)
    - [Stable vs Unstable Sorting](#stable-vs-unstable-sorting)
    - [Insertion Sort](#insertion-sort)
    - [Bubble Sort](#bubble-sort)
    - [Selection Sort](#selection-sort)
    - [Heap Sort](#heap-sort)
    - [Divide \& Conquer](#divide--conquer)
    - [Merge Sort](#merge-sort)
      - [Merge sort implementation](#merge-sort-implementation)
    - [Quick Sort](#quick-sort)
      - [Quick sort implementation](#quick-sort-implementation)
      - [Hoare's Partitioning Scheme (Quick Select) (NOT IMPORTANT ⚠️)](#hoares-partitioning-scheme-quick-select-not-important-️)
        - [Implementing Quick sort using Hoare's Partitioning Scheme (Quick Select)](#implementing-quick-sort-using-hoares-partitioning-scheme-quick-select)
    - [Bucket Sort](#bucket-sort)
    - [Radix Sort](#radix-sort)
    - [Sorting Notes](#sorting-notes)
  - [Searching](#searching)
    - [Linear(sequential) Search](#linearsequential-search)
    - [Binary Search](#binary-search)
      - [How it works](#how-it-works)
    - [Binary search on Monotonic Functions](#binary-search-on-monotonic-functions)
  - [Graph Traversals](#graph-traversals)
    - [Breadth First Search/Traversal BFS](#breadth-first-searchtraversal-bfs)
      - [BFS Implementation](#bfs-implementation)
    - [Depth First Search/Traversal DFS](#depth-first-searchtraversal-dfs)
      - [PreOrder DFS traversal](#preorder-dfs-traversal)
      - [PostOrder DFS traversal](#postorder-dfs-traversal)
      - [InOrder DFS traversal](#inorder-dfs-traversal)
      - [Tree Traversal Notes](#tree-traversal-notes)
  - [Shortest Path](#shortest-path)
    - [Dijkstra's Algorithm](#dijkstras-algorithm)
      - [How Dijkstra's Algorithm works](#how-dijkstras-algorithm-works)
      - [Implementing Dijkstra's algorithm](#implementing-dijkstras-algorithm)
    - [Bellman-Ford Algorithm](#bellman-ford-algorithm)
      - [How Bellman-Ford Algorithm works](#how-bellman-ford-algorithm-works)
  - [Topological Sort](#topological-sort)
    - [Implementing Topological Sort](#implementing-topological-sort)
      - [Using Khan's algorithm (iterative)](#using-khans-algorithm-iterative)
      - [Using DFS (recursive)](#using-dfs-recursive)
  - [Union Find](#union-find)
  - [Two Heaps Technique](#two-heaps-technique)
  - [Backtracking](#backtracking)
    - [Subsets](#subsets)
    - [Combinations](#combinations)
    - [Permutations](#permutations)
  - [Matrix graph](#matrix-graph)
    - [Matrix DFS](#matrix-dfs)
    - [Matrix BFS](#matrix-bfs)
  - [Least recently used (LRU)](#least-recently-used-lru)

---

## Algorithm

It's a set of instructions to solve a problem/perform a task

> **Data structures are saving memory, and Algorithms are actions taken on that memory**

- We use Big O to analyze the performance of an algorithm (how fast it is, how much memory it takes up, etc.)
- It's not enough to know how long an algorithm takes to run—you need to know how the running time increases as the input size increases. That’s where Big O notation comes in.
- Algorithm speed isn’t measured in seconds, but in **growth of the number of operations**.

---

## Algorithm Analysis (Big-O)

**Big O:** It tells us how time scales with respect to some input size. (How well/fast a problem is solved)

- **Big O** doesn't tell you the speed in **seconds**. Big O notation tells you how fast the algorithm **grows** as the input grows.

  - we don't use `seconds` because:
    - different machines will record different times for the same algorithm
    - the same machine will record different times for the same algorithm if it runs at different times of the day
  - We don't use `steps / num of operations` because:
    - different operations take different amounts of time
    - same operation can be implemented to take different amounts of time, e.g. `for loop` vs `while loop`
    - Experiments can be done only on a limited set of test inputs; hence, they leave out the running times of inputs not included in the experiment (and these inputs may be important)

- Many `Big O` notations don't use `n` as it's just a variable and any letter will do, but it's still the number of operations an algorithm will make
  ![big o](./img/big-o-1.png)

- Why we use it?

  - to have a benchmark on how our code performs, and to discuss trade-offs between different approaches
  - when code slows down or crashes, identifying parts of the code that are inefficient can help us find pain-points in our apps

- You might think that we don't need to care about Big O because computers are fast, but that's not true. because of 2 reasons:
  1. Computers are fast, but they're not infinitely fast.
  2. Data is getting bigger and bigger, so we need to care about Big O. And as the amount of data we're working with continues to grow, it's important to write code that can handle larger and larger inputs.

---

### Asymptotic Analysis

- Algorithm analysis focuses on the growth rate of the running time based on input size. It estimates the number of primitive operations, avoiding language or hardware-specific details.

- To calculating the running time of an algorithm more carefully. We can follow these steps:

  1. we think about the running time of the algorithm as a **function of the size of its input**.
  2. we think about how fast a function grows with the input size. We call this the **"rate of growth"** of the running time.
     - For example, suppose that an algorithm, running on an input of size `n`, takes `6n^2 + 100n + 300` machine instructions. The `6n^2` becomes larger than the remaining terms, `100n + 300`, once `n` becomes large enough, `20` in this case. Here's a chart showing values of `6n^2` and `100n + 300` for values of `n` from `0` to `100`:
       ![asymptotic-notation](./img/asymptotic-notation-1.png)
     - We would say that the running time of this algorithm grows as `n^2` dropping the coefficient `6` and the remaining terms `100n + 300`. It doesn't really matter what coefficients we use; as long as the running time is `an^2 + bn + c`, where `a`, `b`, and `c` are constants: `a > 0`
       - > There will always be a Value of `n` for which `an^2` is greater than `bn + c`, and this difference increases as `n` increases. We say that `an^2` **dominates** `bn + c` as `n` increases.

- By dropping the less significant terms and the constant coefficients, we can focus on the important part of an algorithm's running time: **its rate of growth**.

- We use **Asymptotic Notation** in 3 forms:

  - `big-Theta` notation (Average case)
    - usually requires that we calculate expected running times based on a given input distribution, which usually involves sophisticated probability theory.
      ![average-case](./img/average-case.png)
  - `big-Omega` notation (Best case)
    - is usually too optimistic to be useful, as it does not reflect what happens on average.
      ![best-case](./img/best-case.png)
  - `big-O` notation (Worst case) ✅
    - is much easier than average-case analysis, as it requires only the ability to identify the worst-case input, which is often simple.
      ![worst-case](./img/worst-case.png)

---

### Runtime Analysis

- This is done by measuring the performance (**number of steps / operations**) which varies between devices so we need something standard
  - The running time of an algorithm depends on how long it takes a computer to run the lines of code of the algorithm—and that depends on multiple factors like:
    - the speed of the computer
    - the programming language
    - the compiler that translates the program from the programming language into code that runs directly on the computer
- When we talk about `big O`, we talk about the **"worst case scenario"** -> It's a reassurance that no matter what happens, the algorithm will never be slower than the `big O` we've calculated

![big-o](./img/big-o.png)

> Here we see when elements (input) increases, how much the algorithm slow down (how many operation we need to do)

#### Time complexity

![Determining Complexity](./img/determine-complexity.png)
![Determining Complexity](./img/determining-complexity-1.png)

- Examples

  ```py
  # Time complexity -> O(1)
  def test1(n):
    for i in range(1000):
      print(i * n) # O(1) because the number of operations is constant (doesn't change with the input size)

  # Time complexity -> O(n)
  def sqrt(n):
    i = 1
    while i * i <= n:
      i += 1 # because we're reducing the size of the problem by 1 in each iteration
    return i - 1

  # Time complexity -> O(log n)
  def sumDigits(n):
    sum = 0
    while n > 0:
      sum += n % 10
      n //= 10 # O(log n) because we're dividing n by 10 in each iteration (reduce the size of the problem by 10 in each iteration)
    return sum
  ```

- **Notes:**

  - when you encounter a pattern `1 + 2 + 3 + ... + n` in a **nested `for` loop** (usually by reducing the inner loop by 1 in each iteration), it's usually `O(n^2)`
    - to remember it. remember the **`Gauss formula` story (the kid who solved the problem in seconds)**, and that the formula is `n(n+1)/2` which is `O(n^2)`
    - The story says that he wanted to sum numbers from `1` to `100`, so he wrote `1 + 2 + 3 + ... + 100` on the board, and then he realized that he can just write `100 + 1` and `99 + 2` and `98 + 3` and so on, and then he realized that he can just write `101` 100 times, and then he realized that he can just write `100 * 101` and then divide it by `2` to get the result, and that's how he solved the problem in seconds.
    - So the formula is `(n+1) * n / 2` which is `O(n^2)` (because we have `n^2` in the formula)

---

#### Space complexity

- It's the same as time complexity, but instead of measuring the time to run program, **we measure memory usage of a specific program**
- What makes space complexity increase?
  - Assigning variables
  - Creating new data structures
  - function calls and allocations
    - When we call a function, we push a new frame onto the **call stack**, which takes up some amount of memory. When we return from a function, we pop the frame off the stack, which also takes up some amount of memory.

```py
# memory complexity -> O(1)
def test1():
  for i in range(1000):
    # O(1) because we're not creating new data structure or assigning variables other than i
    print(i)

# memory complexity -> O(n)
def test2():
  arr = []
  for i in range(1000):
    # O(n) because we're creating new data structure (arr) and assigning variables (i) in each iteration to the memory
    arr.append(i)

# memory complexity -> O(log n), Time complexity -> O(log n)
def sqrt(n):
  return sqrt_helper(n, 1, n)

def sqrt_helper(n, min, max):
  if max < min:
    return -1
  guess = (min + max) // 2 # O(log n) because we're calling the function recursively and reducing the size of the problem by 2 in each recursive call
  if guess * guess == n:
    return guess
  elif guess * guess < n:
    return sqrt_helper(n, guess + 1, max)
  else:
    return sqrt_helper(n, min, guess - 1)
```

- **Notes**:
  - when needing to create a bigger fixed array to insert new elements to a full fixed array, we use `O(n)` space complexity of the new array and not the sum of the two arrays
    - This is because we're not creating a new array in each iteration, we're just creating a new array once and then adding elements to it and then **deleting the old array**.

---

### Big O Rules

1. Different steps get added

   ```py
   # O(a + b)
   def something():
    step1() # O(a)
    step2() # O(b)
   ```

2. Nested steps get multiplied

   ```py
   # O(a * b)
   def something():
    for i in arr1: # O(a)
      for j in arr2: # O(b)
        print(i, j)
   ```

3. Drop constants

   ![counting operations](./img/counting-operations2.png)

   - because we're looking for how things scale roughly. is it `linear`, `quadratic`, etc.

4. Different inputs -> Different variables to represent them

   - 2 different arrays with different lengths (`a`, `b`) can't have same `n`

   ```py
   # O(a + b) not O(n + n) or O(2n)
   def something(arr1, arr2):
     for i in arr1:
       print(i)
     for i in arr2:
       print(i)

   # or, here it's O(a * b) not O(n^2)
   def something(arr1, arr2):
     for i in arr1:
       for j in arr2:
         print(i, j)
   ```

5. Drop non-dominant terms

   - `O(n + n^2) -> O(n^2)`
   - `O(2^n + 3^n) -> O(3^n)` -> `O(n)` -> because `3^n` is bigger than `2^n`
   - `O(n + n/2) -> O(n)` -> because `n/2` is smaller than `n`

---

### Big O Types

#### O(n)

This is called **linear Time** Algorithm.

- Ex: looping on array using `for-loop`
  ![counting operations](./img/counting-operations.png)

- we will count how many **primitive operations** are executed, and use this number as a measure of the running time of the algorithm.
  - Examples of **primitive operations**: (They correspond to low-level instructions that take constant time to perform.)
    - assignment
    - comparison
    - arithmetic
    - calling a function
    - entering and returning from a function
- depending on what we count, the number of operations can be as slow as `2n` or as high as `5n+2`. But regardless of the exact number, the number of operations grows roughly proportionally with `n`

#### O(1)

These are called **"Constant-Time Operations"**, we say that this function runs in `O(1)` time, meaning that running time of this function is independent of the length, `n` of the list.

> `O(1)` is called constant time. It doesn’t mean **"instant / single operation"**. It means the time taken will stay the same, regardless of how big the input is **(constant number of operations)**.

- Computer hardware supports constant-time access to an element based on its memory address. Therefore, we say that the expression `data[j]` is evaluated in `O(1)` time for a `list` data structure.
- The constant function characterizes the number of steps needed to do a **basic primitive operation** on a computer, like adding two numbers, assigning a value to some variable, or comparing two numbers.

```py
# O(1)
def printFirst(arr):
  print(arr[0])

# O(2) -> also called O(1) as it's constant time
def printFirst(arr):
  print(arr[0])
  print(arr[1])
```

---

#### O(n^2)

This is called **Quadratic Time**

- Explaining `O(n^2)` for loops

  - Usually when we have nested loops, we always think of `O(n^2)`, but that's not always the case.

  - we don't always loop through the whole array in the inner loop, sometimes we loop through half of it or a quarter of it, etc.
  - so when we say that It's `O(n^2)`, we're talking about the worst case scenario, which is looping through the whole array in the inner loop.
  - Plus that the final number of operations will be **bounded by `n^2`** (the number of operations will never be more than `n^2`)
    - `O(c * n^2) -> O(n^2)`
      ![o(n^2)](./img/o-n2.png)

#### O(log(n))

**`O(log N)`** means that the choice of the next element on which to perform some action is one of several possibilities and only one needs to be chosen --> **Divide and conquer**

- **Logarithms**
  ![log](./img/log.png)

  - `log10(100)` is like asking:
    - how many `10s` do we need to multiply together to get `100`? - `10 * 10 = 100` --> `2`
    - or how many times we need to divide `100` by `10` to get `1`? - `100 / 10 / 10 = 1` --> `2`

- The value `b` is known as the base of the logarithm. The most common base for the logarithm function in computer science is `2`

  - as computers store integers in **binary**, and because a common operation in many algorithms is to repeatedly **divide an input in half**.
  - In fact, this base is so common that we will typically omit it from the notation when it is `2`. That is, for us:

    ```sh
    log(n) = log2(n)
    ```

> In (Big O) notation, we use the base `2` for the logarithm function, and we drop the base when it is `2`.

#### O(n log(n))

This function grows a little more rapidly than the `linear function O(n)` and a lot less rapidly than the `quadratic function O(n^2)`; therefore,

- we would greatly prefer an algorithm with a running time that is proportional to `n log(n)`, than one with `quadratic` running time.

#### O(!n)

This is called **Factorial Time** or **oh no!**

- It's considered **Exponential** Time even though it's not a polynomial
- you won't encounter it most likely
- means that we're adding nested loop for every input that we have
- Ex:
  - usually nested loops
  - The traveling salesperson problem
    ![traveling salesperson](./img/traveling-salesperson.png)

---

### Rules to improve Big o

1. worst case
   - always measure the worst case
   - Worst-case analysis is much easier than average-case analysis, as it requires only the ability to identify the worst-case input, which is often simple
2. remove constants
   - `O(n/2 + 124)` will be `O(n)`
3. different terms for inputs

   ```py
    # O(n + m)
    def compressBoxesTwice(boxes1, boxes2):
      for box in boxes1:
        print(box)
      for box in boxes2:
        print(box)

   # result is O(n+m) and not O(n) as we have 2 different input lengths
   ```

4. drop non-dominant terms

   - `O(n^2 + n)` will be `O(n^2)`

---

### Notes

- interview question: what is the time complexity of getting the length here?

  ```js
  'sdfsdgdfsgdfgsfdg'.length;
  ```

  - answer is: it depends on how the method (`.length) works here in this language
    - for example, here we use javascript which has `length` property (not method) to each string, so it's a simple lookup --> `O(1)`
    - Other languages like `python` has a method called `len()` which loops through the string and counts the characters --> `O(n)`

- slicing `arr[0:j+1]`, also uses `O(j + 1)` time, as it constructs a new list instance for storage.
- Something that is (iterative or recursive) and reduces the size of the problem set by `1` each time is linear `O(n)`, and something that is (iterative or recursive) and reduces the size of the problem set by `2 or 3 or 4` each time is logarithmic `O(log n)`

  - Example of summing the digits of a number:

    ```py
    # O(log n)
    def sumDigits(n):
      sum = 0
      while n > 0:
        sum += n % 10
        n //= 10 # O(log n) because we're dividing n by 10 in each iteration (reduce the size of the problem by 10 in each iteration)
      return sum
    ```

  - Example of computing the factorial of a number:

    ```py
    # O(n)
    def factorial(n):
      if n == 1:
        return 1
      else:
        return n * factorial(n-1) # O(n) because we're reducing the size of the problem by 1 in each iteration
    ```

- Elements of good code
  - **readable**
  - **scalable**
  - **speed** --> CPU --> **Time complexity**
  - **memory** --> **space complexity**
    - heap --> store variable
      - most primitives(`booleans`, `numbers`, `undefined`, `null`) are constant space
        ![space-complexity](./img/space-complexity.png)
      - strings require `O(n)` space (`n` is the string length)
      - reference-types are generally `O(n)`, where `n` is the length(for arrays) or the number of keys(for objects)
        ![space-complexity](./img/space-complexity2.png)
    - stack --> operations (function calls, etc.)
      - **call stack** is where your code is read and executed
      - **stack overflow** happens when the call stack is too large
      - **tail call optimization** is when the last line of a function is a function call, and the result of that function call is returned directly to the caller of the current function -> [Tail recursion](#tail-recursion)

---

## Recursion

**Recursion** is a technique by which a function makes one or more calls to itself during execution, or by which a data structure relies upon **smaller** instances of the very same type of structure in its representation.

It's not actually an Algorithm, it's more of a concept that we use in our Algorithms to solve problems by **taking a problem and reducing it to smaller versions of itself**.

> When you want to solve a problem using recursion, Always think this way: _"How can I solve this problem if I had a smaller version of the same problem?"_

- it's used Everywhere; mostly in:

  - traversing -> `DOM-traversing` and (`document.getElementById`)
  - nested operations -> Object-traversal like ->`JSON.parse()` and `JSON.stringify()`
  - file systems

- Ex: looking for a key in boxes:
  - **Iterative approach**:
    ![recursion-vs-loops](./img/recursion-vs-loops-1.png)
  - **Recursive approach**: (it's more readable)
    ![recursion-vs-loops](./img/recursion-vs-loops-2.png)
  - **Note:** There's no performance gain in using recursion over looping. In fact recursion is slower than looping in most cases.
    - This is because **recursion uses more memory than looping**, as each recursive call adds a new stack frame to the call stack, which can lead to stack overflow if the recursion is too deep.

> Quote: "Loops may achieve a performance gain for your program. Recursion may achieve a performance gain for your programmer."

- **Notes**:

  - Every time you're using a `tree` or converting something into a `tree`, consider **recursion**

- **Divide and conquer using recursion:**
  1. divided into a number of sub-problems that are smaller instances of the same problem
  2. each instance of the sub-problem is identical in nature
  3. the solutions of each sub-problem can be combined to solve the problem at hand

---

### Recursion Types

- Functional Recursion:
  - function returns result, then computer uses the result for recursive call(s)
- Procedural Recursion:
  - no return value, and the task is accomplished during recursive calls
- Linear Recursion:
  - each invocation of the body makes at most one new recursive call
- Binary Recursion:

  - When a function makes two recursive calls

    ```py
    return binary sum(S, start, mid) + binary sum(S, mid, stop)
    ```

- Multiple Recursion
  - function may make more than two recursive calls

---

### How recursion works with the call stack

When the execution of a function leads to a nested function call, the execution of the former call is **suspended** and its activation record stores the place in the source code at which the flow of control should continue upon return of the nested call.

- This process is used both in the standard case of one function calling a different function, or in the recursive case in which a function invokes itself. The key point is that there is a different activation record for each active call.
- The handling of the suspending and resuming of the execution of functions is done by the **call stack**.
- When a function is called, the function is pushed to the top of the call stack.

  - When the function returns, the function is popped off the call stack.

- Ex: `factorial` function

  ```py
  def factorial(n):
      if n == 1:
          return 1
      else:
          return n * factorial(n-1)
  ```

  ![factorial call stack](./img/factorial-call-stack-1.png)
  ![factorial call stack](./img/factorial-call-stack-2.png)
  ![factorial call stack](./img/factorial-call-stack-3.png)
  ![factorial call stack](./img/factorial-call-stack-4.png)

---

### Recursion Steps

- Steps:
  1. identify and test for the **Base case** (the condition when the recursion ends | when the function doesn't call itself anymore)
     - We begin by testing for a set of base cases (there should be at least one). These base cases should be defined so that every possible chain of recursive calls will eventually reach a base case (should ensure that each recursive call is in some way progressing toward a base case), and the handling of each base case should not use recursion.
     - > **Note:** When writing a recursive function involving an array, the base case is often an empty array or an array with one element.
  2. identify the **recursive case** (when the function calls itself)
     - If not a base case, we perform one or more recursive calls. This recursive step may involve a test that decides which of several possible recursive calls to make. We should define each possible recursive call so that it makes progress towards a base case.
  3. get closer and closer and return when needed. usually have 2 returns

---

### Big-O Runtime for Recursive Functions

The Big-O runtime for a recursive function is equivalent to the number of recursive calls. This **varies** depending on the complexity of the algorithm of the recursive function. For example:

- A recursive function of input `N` that calls itself twice per function may have a runtime of `O(2^N)`.
  - `2` -> because it calls itself twice (2 branches)
  - `N` -> because it's a linear recursion (height of the decision tree)

> **Note**: a bad use of recursion can lead to `O(2^n)` which is extremely inefficient

---

### Maximum Recursive Depth

Another danger in the misuse of recursion is known as infinite recursion. If each recursive call makes another recursive call, without ever reaching a base case, then we have an infinite series of such calls. This is a fatal error. An infinite recursion can quickly swamp computing resources, not only due to rapid use of the CPU, but because each successive call creates an activation record requiring additional memory

```py
def fib(n):
  return fib(n)
```

#### When recursion goes wrong

- some cases where recursion can go wrong:

  - no base case
  - forgetting to return or returning the wrong thing
  - stack overflow!

- biggest problem with recursion is **stack overflow (large stack)** in memory, so if used, we need to allocate memory for it

- for this you always need to return the recursive calls to bubble-up the returned value from the last call
- A programmer should ensure that each recursive call is in some way progressing toward a base case (for example, by having a parameter value that **decreases** with each call).

- **Note**: Fortunately, the Python interpreter can be dynamically reconfigured to change the default recursive limit. This is done through use of a module named sys, which supports a `getrecursionlimit` function and a `setrecursionlimit`. Sample usage of those functions is demonstrated as follows:

  ```py
  import sys
  old = sys.getrecursionlimit() # perhaps 1000 is typical
  sys.setrecursionlimit(1000000) # change to allow 1 million nested calls
  ```

---

### Tail Recursion

**Tail recursion** is a version of recursion impacts the final phase of a recursive function. In tail recursion, the recursive call is the last thing that happens in the function. This means that **the return value of the recursive call is returned as the return value of the function**, without any additional processing.

> When a program runs, the call stack stores the function calls (that have started but not completed yet) in a stack data structure. Each function call is stored in a stack frame. When a function returns, its stack frame is removed from the call stack.
>
> The call stack is used to store local variables and parameters of each function call, and **what is left to do in the function**. When a function calls itself recursively, a new stack frame is created and pushed onto the call stack. When the function returns, the stack frame is popped off the call stack.

- This is important because it means that the function does not have to wait for the recursive call to be resolved. It can return immediately with the recursive call, and the recursive call can be resolved later.

  - This results a much better space complexity, because we don't need to store the recursive calls in the call stack, we can just return the result of the recursive call and then return the final result of the function.

  ```py
  # Normal recursion | Space complexity -> O(n)
  def sum(n):
    if n == 0:
      return 0
    else:
      return n + sum(n-1) # we will have to wait for the recursive call to be resolved before returning the final result

  # Tail recursion | Space complexity -> O(1)
  def sum(n, running_total=0):
    if n == 0:
      return running_total
    else:
      return sum(n-1, running_total + n) # we don't have to wait for the recursive call to be resolved before returning the final result because we're returning the result of the recursive call directly
  ```

  ![tail recursion](./img/tail-recursion.png)

- a tail recursion must be a linear recursion (since there is no way to make a second recursive call if you must immediately return the result of the first).
- Example:

  - This is not a tail recursion because an additional multiplication is performed after the recursive call is completed.

    ```py
    return n * factorial(n−1)
    ```

  - To make this a tail recursion, we can pass the result of the recursive call to the function as a parameter (`accumulating parameter`) and multiply it by `n` before returning it.

    ```py
    return factorial(n−1, n * result)
    ```

So, a **tail-recursive function** is a function whose its calls are **tail-calls**, meaning that when we do recursion, there's no need to wait for the recursive call to be resolved before returning the final result **(nothing to do afterwards)**, because we're returning the result of the recursive call directly.

- **Note**: Tail recursion shouldn't be used always, There're some cases where recursive functions can't be evaluated in a constant amount of space (like `Tree traversals`), so we need to use the normal recursion in these cases.

---

## Dynamic Programming

It's a technique to solve the problems by breaking it down into a collection of sub-problems, solving each of those sub-problems just once, and storing their solutions using a memory-based data structure (`array`, `map`, etc).

> It's an optimization technique using **"caching"**

![dynamic programming](./img/dynamic-programming.png)

### Memoization

**Memoization**: is a specific kind of caching used to involves caching the **return value** of functions based on their parameters

- Example of using memoization

  ```py
  cache = {}

  def fib(n):
      if n in cache:
          return cache[n]
      elif n < 2:
          return n
      else:
          result = fib(n-1) + fib(n-2)
          cache[n] = result
          return result
  ```

- it's better when using `Memoization` to save the cache in the local variable of the function instead of the global scope

  - you can do that in Javascript, using `closures`

    ```js
    function fib() {
      const cache = {};
      return function (n) {
        if (n in cache) {
          return cache[n];
        } else if (n < 2) {
          return n;
        } else {
          const result = fib(n - 1) + fib(n - 2);
          cache[n] = result;
          return result;
        }
      };
    }

    const fibMemo = fib();
    console.log(fibMemo(50)); // 12586269025
    ```

  - or using `classes` in Python

    ```py
    class Fib:
      def __init__(self):
        self.cache = {}

      def fib(self, n):
        if n in self.cache:
          return self.cache[n]
        elif n < 2:
          return n
        else:
          result = self.fib(n - 1) + self.fib(n - 2)
          self.cache[n] = result
          return result

    fib = Fib()
    print(fib.fib(50)) # 12586269025
    ```

- What if I told you that you can reduce the time complexity of any complex operation to **`O(n)`** with using `Memoization` to reach the optimal solution, it's because we're saving the results of the sub-problems in the cache, so we don't need to solve them again, we just return the result from the cache. So it becomes linear time complexity.
  ![what if I told you](./img/what-if-i-told-you.png)
  ![memoization](./img/memoization.png)

---

### Dynamic programming types

#### Top-down approach (Recursion + Memoization)

We start with the **big picture** and then break it down into smaller pieces
![dynamic-programming](./img/dynamic-programming-1.png)

- It uses **memoization** (storing the result of each sub-problem in an array or map) and **recursion** (calling the function itself) to solve the problem.
- **Memoization** is a top-down approach

#### Bottom-up approach (Iteration + Tabulation)

We start with the **smaller pieces** and then build it up into the big picture -> Real Dynamic Programming

- It's the opposite of `Memoization` and `recursion`, because we start from the bottom **(base case)** and build it up to the top until we reach the final result.
  - the `bottom` (base case) is the smallest sub-problem that we already know the answer for it
- It uses **tabulation** (storing the result of each sub-problem in an array or map) and **iteration** (looping) on the array to calculate the result of the next sub-problem using the previous sub-problems.

> `Bottom-up` solution usually has less code than the `top-down` solution (recursion), but it's harder to think of

- Solving `Fibonacci` problem using `Bottom-up` approach
  ![dynamic-programming](./img/dynamic-programming-2.png)
  ![dynamic-programming](./img/dynamic-programming-3.png)

  - Notice that we don't even need array of `5` elements, we just need the last 2 elements, so we can use array of `2` elements instead of `5` elements. so we can reduce the space complexity to `O(1)` instead of `O(n)`
    ![dynamic-programming](./img/dynamic-programming-4.png)

  ```py
  # Bottom-up Dynamic Programming
  def dp(n):
    if n < 2:
      return n

    arr = [0, 1]
    for i in range(2, n + 1):
      temp = arr[1]
      arr[1] = arr[0] + arr[1]
      arr[0] = temp

    return arr[1]
  ```

---

### Dynamic Programming vs Divide and Conquer (Brute Force)

We can use DP to improve problems that are solved using Divide and Conquer usually `graph` and `tree` problems, Ex:

**Q:** count the number of unique paths from `top-left` to `bottom-left`. You're only allowed to move `down` or `right` at any point in time.

- Brute Force Solution - Time and space: `O(2^(n+m))`

  ```py
  def bruteForce(r, c, rows, cols):
    if r == rows or c == cols:
      return 0
    if r == rows - 1 and c == cols - 1:
      return 1
    return bruteForce(r + 1, c, rows, cols) + bruteForce(r, c + 1, rows, cols)

  print(bruteForce(0, 0, 4, 4))
  ```

- Tob-down (Memoization) Solution - Time and space: `O(n*m)`
  ![dynamic-programming](./img/dynamic-programming-5.png)

  ```py
  # Top-down Dynamic Programming
  def memoization(r, c, rows, cols, cache):
    if r == rows or c == cols:
      return 0
    if cache[r][c] > 0:
      return cache[r][c]
    if r == rows - 1 and c == cols - 1:
      return 1

    cache[r][c] = memoization(r + 1, c, rows, cols, cache) + memoization(r, c + 1, rows, cols, cache)
    return cache[r][c]

  print(memoization(0, 0, 4, 4, [[0] * 4 for _ in range(4)]))
  ```

- Bottom-up (Tabulation) Solution - Time: `O(n*m)` and space: `O(m)`, where `m` is the number of columns and `n` is the number of rows
  ![dynamic-programming](./img/dynamic-programming-6.png)

  ```py
  # Bottom-up Dynamic Programming
  def tabulation(rows, cols):
    prevRow = [0] * cols

    for r in range(rows -1, -1, -1):
      currRow = [0] * cols
      currRow[cols - 1] = 1 # last column is always 1
      for c in range(cols - 2, -1, -1):
        currRow[c] = currRow[c + 1] + prevRow[c] # add the right and bottom cells
      prevRow = currRow # set the current row as the previous row

    return prevRow[0] # return the first element of the previous row

  print(tabulation(4, 4))
  ```

---

## Sorting

**Sorting**: is the process of rearranging the items in a collection (e.g. `array`) so that the items are in some kind of order

> As more and more data is handled by our computers, **sorting** and **searching** are two of the biggest computer science problems in the software world

- usually the built-in sorting methods are different from language to another; for example, in `javascript`, it convert inputs to `strings` then sort them based on their **"character unicode"**

- Sorting algorithms use the fact that a collection of a single element is always sorted, and then they build up the collection from there and making sure that the collection is sorted at each step
- Sorting Algorithms
  ![elementary-sorting-algorithms](./img/sorting-algorithms.png)

---

### Stable vs Unstable Sorting

A sorting algorithm is said to be **stable** if two objects with equal keys appear in the same order in sorted output as they appear in the input data set

![stable-vs-unstable-sorting](./img/stable-vs-unstable-sorting.webp)

- **Stable Sorting Algorithms**: maintains the relative order of records with equal keys (if the keys are equal, the order of the records remains unchanged)
  ![stable-vs-unstable-sorting](./img/stable-vs-unstable-sorting-1.png)

  - Ex: `Merge Sort`, `Insertion Sort`, `Bubble Sort`

- **Unstable Sorting Algorithms**: does not maintain the relative order of records with equal keys (if the keys are equal, the order of the records may change)
  - Ex: `Quick Sort`, `Selection Sort`

> Stability is not an issue if all keys are different.

- Any comparison-based sorting algorithm which is not stable by nature can be modified to be stable by changing the key comparison operation. so that the comparison of two keys considers position as a factor for objects with equal keys.

- When are stable sorting algorithms useful?

  - When we want to sort objects by multiple attributes
  - Consider the following dataset of Student Names and their respective class sections:

    ```py
    [(Alice, 2), (Bob, 1), (John, 2), (Mary, 1), (Mike, 2), (Sarah, 1), (Tom, 1)]
    ```

    - If we sort this dataset by name, we get the following:

      ```py
      [(Alice, 2), (Bob, 1), (John, 2), (Mary, 1), (Mike, 2), (Sarah, 1), (Tom, 1)]
      ```

    - But if we sort this dataset by class section, we get the following:

      ```py
      [(Bob, 1), (Mary, 1), (Sarah, 1), (Tom, 1), (Alice, 2), (John, 2), (Mike, 2)]
      ```

      - Notice that the relative order of students with class section `1` and students with class section `2` is maintained in the sorted output
      - if we used unstable sorting algorithm, the relative order of students with class section `1` and students with class section `2` may change in the sorted output

---

### Insertion Sort

It's a sorting algorithm where we **insert** each element in the correct place in the sorted part of the array (the left side of the array)

> It's called **"Insertion Sort"** because we take an element and **insert it in the correct place in the sorted array**

- it's used when you know or think that the list is **"almost/already sorted"**

  - ex: `online-algorithm` -> algorithm that can work when the data is coming-in, it doesn't have to have the entire array(data) at once, as we "keep one side of the array sorted and insert the others in their correct order"

- It works by examining each item and compare it to items on its left, and insert the item in the correct position in the array

- **steps:**
  ![insertion-sort](./img/insertion-sort-3.png)

  1. start by picking the `second` element in the array because we assume that the `first` element is already sorted.
     ![insertion-sort](./img/insertion-sort-0.png)
  2. now compare the second element with (the one before it (its left element)) and **swap** if necessary, then repeat until the element is in the correct order
     ![insertion-sort](./img/insertion-sort-1.png)
  3. continue to the next element and if it is in the (incorrect order), iterate through the sorted portion (the left side) to place the element in the correct place
     ![insertion-sort](./img/insertion-sort-2.png)
     ![insertion-sort](./img/insertion-sort-4.png)
  4. repeat until the array is sorted

- Time complexity:
  - **Best case**: `O(n)` -> when the array is already sorted (because we don't even go inside the `while` loop and just iterate through the array once)
  - **Worst case**: `O(n^2)` -> when the array is sorted in reverse order
  - **Average case**: `O(n^2)`

```py
def insertion_sort(arr):
  for i in range(1, len(arr)):
    j = i # current element
    # keep swapping the element with the one before it until it's in the correct place
    while j > 0 and arr[j] < arr[j - 1]:
      arr[j], arr[j - 1] = arr[j - 1], arr[j] # swap
      j -= 1

  return arr
```

---

### Bubble Sort

It's a sorting algorithm where the largest values **bubble up to the top**

> it's also called **sinking sort** as the largest values **sink down to the end**

- it works on the concept of moving the largest number to the end (bubbling the largest number up)
- It's like `element-1` tells `element-2` "Hey, if you're larger than me, you go ahead and swap with me", and so on.
  ![bubble-sort](./img/bubble-sort.png)
  - it loops on each numbers and compare the 2 values-pairs at hand
    - if the number in the left is larger than the left one, we swap them, else we continue to the next pair until we have the largest number at the end.
    - by that we would go to the next iteration and repeat
- it's one of the simplest sorting algorithms, but the has least performance
  - Time complexity: `O(n^2)`
    - this is because we have 2 nested loops and at each iteration, we're looping through the whole array
  - one of its performance drawbacks, is that if the array is **almost-sorted**, it will continue to do all looping and checking steps even if we reached sorted-result after the first few steps

```py
def bubble_sort(arr):
  for i in range(len(arr)):
    for j in range(len(arr) - 1):
      # if the number in the left is larger than the left one, we swap them
      if arr[j] > arr[j + 1]:
        arr[j], arr[j + 1] = arr[j + 1], arr[j]
  return arr
```

---

### Selection Sort

It's a sorting algorithm where we **select** the smallest element and put it in the first position, then select the next smallest element and put it in the second position, and so on.

- it works by scanning a list of items for the smallest element and then swapping that element for the one in the first position
  - We take each element and compare it with all the other elements in the array, and the other element is smaller, we swap them.
- also one of the simplest but not efficient either
  - the first operation takes `n` steps, the second takes `n-1` steps, and so on, until the last operation takes `1` step -> `n + (n-1) + (n-2) + ... + 1` -> `O(n^2)`
- **steps:**
  ![selection-sort](./img/selection-sort-1.png)

  1. store the first element as the smallest value you've seen so far
  2. compare this item to the next item in the array until you find a smaller number **(in each iteration, we select the smallest item that hasn't yet been sorted)**
     - if smaller number is found, designate that smaller number to be the new **minimum** and continue to the end of the array
     - if the **minimum** is not the value(index) you initially began with, we swap the two values
  3. repeat this with the next element until the array is sorted

```py
def selection_sort(arr):
  for i in range(len(arr)):
    min_index = i
    # loop from the next element to the end of the array and find the smallest element
    for j in range(i + 1, len(arr)):
      if arr[j] < arr[min_index]:
        min_index = j
    # if the minimum is not the value(index) you initially began with, we swap the two values
    if min_index != i:
      arr[i], arr[min_index] = arr[min_index], arr[i]
  return arr

# ------------------------------- or -------------------------------

def selection_sort(arr):
  suffix_start = 0
  while suffix_start != len(arr):
    for i in range(suffix_start, len(arr)):
      if arr[i] < arr[suffix_start]:
        arr[suffix_start], arr[i] = arr[i], arr[suffix_start]
    suffix_start += 1

  return arr
```

> it's better than **Bubble sort** only in one condition:
>
> - if you want to minimize the number of **swaps** on each loop

- **Notes**
  - You will notice that this algorithm is doing a lot of unnecessary work, because after the first iteration, the smallest number is already in the first position
  - In the sorting algorithm, the number of elements to check decreases as you go through the operations until you only have to check one element. However, the runtime is still `O(n^2)` because of constants in Big O notation. On average, you check a list that has `1/2 * n` elements, but constants like `1/2` are ignored in Big O notation, so the runtime is written as `O(n^2)`.

---

### Heap Sort

It's a sorting algorithm where we use a **heap** data structure to sort the array

- It usually implements sorting **in-place** (no extra memory needed)
- It's not a stable sorting algorithm (it doesn't maintain the relative order of records with equal keys)
- It's not an online algorithm (it can't sort a list as it receives it) as it needs the entire array to start sorting

```py
import heapq

def heapSort(arr):
  heap = []
  for element in arr:
    heapq.heappush(heap, element)

  for i in range(len(arr)):
    arr[i] = heapq.heappop(heap)
```

- Time complexity: `O(n log n)`
  - `O(n)` to create the heap
  - `O(log n)` to insert each element to the heap **(Bottom-up approach)**

---

### Divide & Conquer

Both merge sort and quicksort employ a common algorithmic paradigm based on **recursion**. This paradigm, **divide-and-conquer**, breaks a problem into sub-problems that are similar to the original problem, recursively solves the sub-problems, and finally combines the solutions to the sub-problems to solve the original problem.

![divide-and-conquer](./img/divide-and-conquer-1.png)
![divide-and-conquer](./img/divide-and-conquer-2.png)

- `Merge Sort` vs `Quick Sort`
  | Sorting Algorithm | Worst Case | Average Case | Constant Factor |
  |-------------------|------------|--------------|-----------------|
  | Quick Sort | O(n^2) | O(n log n) | Smaller |
  | Merge Sort | O(n log n) ✅ | O(n log n) | Larger |
  - Quick sort is risky, In worst case, it can be `O(n^2)`, but in average case, it's `O(n log(n))`
  - unlike `merge sort` which is always `O(n log n)`

---

### Merge Sort

It's all about continually **splitting** the array into halves until you have arrays that are empty or have one element (can't split anymore), then you **merge** those arrays, while sorting them at the same time

> So it's about breaking down the problem of sorting into sub-problems, and then building up a solution from the sub-problems

![merge-sort](./img/Merge-Sort.png)

- It's a combination of 2 things: `dividing` & `merging`
- it exploits the fact that arrays of `0` or `1` elements are always sorted, as it works by decomposing an array into smaller arrays of `0` or `1` elements, then building up a newly sorted array
- it uses `recursion` and combining the solutions which gives us `O(n log n)` time complexity which is better than `O(n^2)`

  - the number of times we **divide** (split-up/decompose) is equal to `log(n)` and the number of **merging**(comparisons) is `n`

- The "divide" part is done by **recursion**
- The "conquer" part is done by **Two pointers** (one for each array) or **slicing** and a `while` loop

- **it's one of the most efficient ways to sort lists**
  > We can notice that the number of comparisons is smaller than the number of swaps in `bubble sort` and `selection sort`, so it's more efficient
- one downside is that it has a bigger space-complexity: **space-complexity of `O(n)`** unlike most sorting algorithms which has `O(1)`
  - this is due to storing the divided lists in memory
  - so we use it if we have enough memory

#### Merge sort implementation

Consists of 2 functions: `merge` & `merge_sort`
![merge-sort](./img/merge-sort-5.png)

1. `merge` function

   - is used to merge 2 sorted arrays into one sorted array
   - while there are still elements in both arrays (`arr1`, `arr2`) we haven't looked at:
     - Compare the first values of both arrays. Push the smaller value to the `result` array and move to the next value in that array.
   - once we exhaust one array, push in all remaining values from the other array
   - Implementation is below for the `merge` function ⬇️

   > **Note:** To make the `merge` function **stable**, we can change the comparison operator to `<=` instead of `<`

2. `merge_sort` function

   - is used to split the array into halves until we have arrays that are empty or have one element
   - then we merge those arrays, while sorting them at the same time
   - it uses the technique: "Divide & Conquer" by implementing `recursion` and combining the solutions

```py
def merge(arr1, arr2):
  res = []
  i = 0 # pointer for arr1
  j = 0 # pointer for arr2

  while i < len(arr1) and j < len(arr2):
    if arr1[i] <= arr2[j]: # to make it stable, change the comparison operator to <=
      res.append(arr1[i])
      i += 1 # move on to the next value in the first array
    else:
      res.append(arr2[j])
      j += 1 # move on to the next value in the second array

  # once we exhaust one array, push in all remaining values from the other arrays
  if i < len(arr1):
    res.extend(arr1[i:])
    # or res += arr1[i:]

  if j < len(arr2):
    res.extend(arr2[j:])
    # or res += arr2[j:]

  return res


def merge_sort(arr):
  # base case (Single element array is already sorted)
  if len(arr) <= 1:
    return arr

  # divide
  mid = len(arr) // 2
  left = merge_sort(arr[:mid])
  right = merge_sort(arr[mid:])

  # conquer
  return merge(left, right)
```

- Time complexity: **`O(n log n)`**
  ![merge-sort](./img/merge-sort3.png)
  - `log(n)` -> the number of times we **divide by 2** (split-up/decompose) is equal to`log(n)`
  - `n` -> the number of **merging** (comparisons)

---

### Quick Sort

It's all about continually **picking** an element as a **"pivot point"** and **partitioning** the given array around the picked pivot

- it also uses the technique: "Divide & Conquer" like `merge sort` by implementing `recursion` and combining the solutions
- it has better **space-complexity of `O(log(n))`**, so it can be sorted in memory if the database is not massive

- **How it works:**

  - it picks an element as a **"pivot point"** and partitions the given array around the picked pivot
  - it uses the technique: "Divide & Conquer" by implementing `recursion` and combining the solutions
  - it's a combination of 2 things: `partitioning` & `sorting`
    - `partitioning` is done by splitting the array into 2 sub-arrays: `left` & `right` sub-arrays relative to the **"pivot point"**, where the `left` sub-array has all the elements smaller than the **"pivot point"** and the `right` sub-array has all the elements larger than the **"pivot point"**
      ![quick sort](./img/quick-sort-2.png)
    - we perform the partitioning **in-place** (less memory), and we do this by using `2 pointers`:
      ![quick sort](./img/quick-sort-3.png)
      ![quick sort](./img/quick-sort-4.png)
      - `i` -> keeps track of the index of the last element in the `left` sub-array which is the middle-point between the `left` sub-array and the `right` sub-array
      - `j` -> keeps track of the index of the first element in the `right` sub-array so that we can swap it with any element smaller than the **"pivot point"** in the `left` sub-array
    - After the partitioning is done, we **recursively** apply the above steps to the `left` sub-array and the `right` sub-array until the entire array is sorted
      ![quick sort](./img/quick-sort-5.png)
      ![quick sort](./img/quick-sort-6.png)

- Quick sort is unique, because its speed depends on the `pivot point` you choose

- **Time complexity:**
  - **best case** for time-complexity is `O(n log n)`
    ![quick-sort-best-case](./img/quick-sort-best-case.png)
    - In this example, there are `O(log n)` levels (the technical way to say that is, “he height of the call stack is `O(log n)`”). And each level takes `O(n)` time. he entire algorithm will take `O(n) * O(log n) = O(n log n)` time. This is the best-case scenario.
  - it may have a **worst-case** for time-complexity of `O(n^2)` if the **"pivot point"** is the smallest point and is the first element. because we're not splitting by half, we're splitting by `1` element at a time
    - `n * n-1 * n-2 * ... * 1` -> `O(n^2)`
      ![quick-sort-worst-case](./img/quick-sort-worst-case.png)
    - In this example, there're `O(n)` levels, so the entire algorithm will take `O(n) * O(n) = O(n^2)` time
    - This is worst than `selection sort` and `insertion sort`, but it usually doesn't happen because we usually choose the **"pivot point"** randomly
  - average case for time-complexity is `O(n log n)`
    ![quick-sort-average-case](./img/quick-sort-average-case.png)
    - > **Note:** The best case is also the average case. If you always choose a random element in the array as the pivot, quicksort will complete in O(n log n) time on average. **Quicksort is one of the fastest sorting algorithms out there**, and it’s a very good example of D&C.

> **Note:** To avoid the worst-case scenario, we can choose the **"pivot point"** randomly but not the last element/first element, and there're optimizations that can be done to avoid the worst-case scenario

#### Quick sort implementation

- **Quick sort Steps:**
  ![quick sort](./img/quick-sort-0.png)

  1. pick a `pivot` point
  2. partition the array into `2` sub-arrays: one with all the elements less than the pivot point, and one with all the elements greater than the pivot point
  3. call `quicksort` recursively on both `sub-arrays`

- **Implementation 1:** using `2` sub-arrays
  ![quick sort](./img/quick-sort-7.png)

  - it's not an `in-place` implementation, because we're creating `2` new arrays
  - it's a `stable` sort, because it preserves the order of the elements with the same value

  ```py
  def quicksort(array):
    # base case -> if the array has 0 or 1 element, it's already sorted
    if len(array) < 2:
      return array

    # recursive case
    # choose a pivot point
    pivot = array[0]
    # sub-array of all the elements less than the pivot
    less = [i for i in array[1:] if i <= pivot]
    # sub-array of all the elements greater than the pivot
    greater = [i for i in array[1:] if i > pivot]

    return quicksort(less) + [pivot] + quicksort(greater)
  ```

- **Implementation 2:** using `2` pointers + swapping **(in-place)**
  ![quick sort](./img/quick-sort-8.png)
  ![quick sort](./img/quick-sort-9.png)

  - it's an `in-place` implementation, because we're not creating `2` new arrays
  - it's not a `stable` sort, because it doesn't preserve the order of the elements with the same value

  ```py
  def quicksort(array, low, high):
    # base case
    if low < high:
      # partition the array into 2 sub-arrays
      pivot = partition(array, low, high)
      # call quicksort recursively on both sub-arrays without the pivot
      quicksort(array, low, pivot - 1)
      quicksort(array, pivot + 1, high)

    return array

  # helper function to partition the array into 2 sub-arrays
  def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1

    # walk from low to high and swap the elements that are smaller than the pivot with the elements that are larger than the pivot
    for j in range(low, high):
      if arr[j] <= pivot:
        i += 1
        arr[i], arr[j] = arr[j], arr[i] # swap

    # Now, all the elements that are smaller than the pivot are on the left side of the arr[i], and all the elements that are larger than the pivot are on the right side of the arr[i]

    # swap the pivot with the element at index i + 1
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1 # return the index of the pivot
  ```

---

#### Hoare's Partitioning Scheme (Quick Select) (NOT IMPORTANT ⚠️)

It's a partitioning scheme that is used in `quick sort` to choose the `pivot point` and partition the array into 2 sub-arrays

- Explanation:

  - It uses 2 pointers: `i` & `j`
    - `i` -> keeps track of the index of the last element in the `left` sub-array which is the middle-point between the `left` sub-array and the `right` sub-array
    - `j` -> keeps track of the index of the first element in the `right` sub-array so that we can swap it with any element smaller than the **"pivot point"** in the `left` sub-array
  - It starts from the ends of the array and works its way **inwards**
  - `i` starts from the left side of the array and moves to the right until it finds an element that is greater than the **"pivot point"**
  - `j` starts from the right side of the array and moves to the left until it finds an element that is smaller than the **"pivot point"**
  - then we swap the 2 elements
  - we repeat this process until `i` and `j` cross each other
  - then we swap the **"pivot point"** with the element at index `j`
  - then we return the index of the **"pivot point"**

  ```py
  def partition(arr, low, high):
    pivot = arr[low]
    i = low - 1
    j = high + 1

    while True:
      i += 1
      while arr[i] < pivot:
        i += 1

      j -= 1
      while arr[j] > pivot:
        j -= 1

      if i >= j:
        return j

      arr[i], arr[j] = arr[j], arr[i]
  ```

##### Implementing Quick sort using Hoare's Partitioning Scheme (Quick Select)

```py
def partition(arr, low, high):
  pivot = arr[low]
  i = low - 1
  j = high + 1

  while True:
    i += 1
    while arr[i] < pivot:
      i += 1

    j -= 1
    while arr[j] > pivot:
      j -= 1

    if i >= j:
      return j

    arr[i], arr[j] = arr[j], arr[i]

def quicksort(array, low, high):
  # base case
  if low < high:
    # partition the array into 2 sub-arrays
    pivot = partition(array, low, high)
    # call quicksort recursively on both sub-arrays
    quicksort(array, low, pivot)
    quicksort(array, pivot + 1, high)

  return array

# Using it
arr = [10, 7, 8, 9, 1, 5]
print(quicksort(arr, 0, len(arr) - 1))
```

---

### Bucket Sort

It's a sorting algorithm that works by distributing the elements of an array into a number of buckets and then each bucket is sorted individually using a different sorting algorithm or by recursively applying the bucket sorting algorithm

- It's a rare sorting algorithm, because it requires specific conditions to work:
  - the elements of the array must be uniformly distributed -> the elements must be evenly distributed across the range of the array
  - all the unique elements must fit within a **finite** range
- For every single element in the array, we need to create a bucket for it
  - The bucket is just a container that holds the elements with the index of the element as the key
    ![bucket sort](./img/bucket-sort-1.png)
    - here:
      - bucket `0` holds the number of times `0` appears in the array
      - bucket `1` holds the number of times `1` appears in the array
      - bucket `2` holds the number of times `2` appears in the array
- Then we sort the buckets
  - we will go through each bucket and add the `index` of of the bucket to the sorted array as many times as the value of the `bucket[index]`
    ![bucket sort](./img/bucket-sort-2.png)
- it's a **non-comparison** sorting algorithm, as it doesn't compare the elements of the array, it just distributes the elements into buckets

```py
def bucket_sort(array, max_val):
  # fill the buckets
  buckets = [0] * (max_val + 1)
  for i in array:
    buckets[i] += 1

  # sort the elements

  # Option 1: using extra space
  sorted_array = []
  for j in range(len(buckets)):
    for _ in range(buckets[j]):
      sorted_array.append(j)

  return sorted_array

  # ----------------------------------------------

  # Option 2: in-place
  i = 0
  for j in range(len(buckets)):
    for _ in range(buckets[j]):
      array[i] = j
      i += 1

  return array
```

- Time complexity:
  - `O(n + k)`, where `n` is the number of elements in the array and `k` is the number of buckets
  - notice that its's not `O(n^2)`, even though it has 2 nested loops, because the inner loop doesn't depend on the outer loop
- **Notes:**
  - the bucket sort is **not a stable sort**, because it doesn't preserve the order of the elements with the same value
    - one way to make it stable is to use a **linked list** instead of an array to store the buckets
  - Normally, you won't be able to use the bucket sort, because the elements of the array won't be uniformly distributed
    - but if you know that the elements are uniformly distributed, then you should use it because it has the best time complexity `O(n)`

---

### Radix Sort

- The previous sorting-algorithms were called: "Comparison Sorts", but the question is: "can we do better for the time-complexity?"

  - the answer is "sort of", as we yes can; but not by making direct-comparisons

![radix-sort](./img/radix-sort1.png)

- number of times we need to do the "mapping-bucket-operations" depends on how many digits the largest number has

![radix-sort](./img/radix-sort2.png)
![radix-sort](./img/radix-sort3.png)

---

### Sorting Notes

![sorting-comparison](./img/sorting-comparison.png)

- the best sorting time complexity will always be `O(n log(n))` as the `"n"` says that we do a comparison between the elements of the list

---

## Searching

- When the sequence is **unsorted**, the standard approach to search for a target value is to use a loop to examine every element, until either finding the target or exhausting the data set. This is known as the **"sequential search algorithm"**. This algorithm runs in `O(n)` time (i.e., linear time) since every element is inspected in the worst case.
- When the sequence is **sorted** and indexable, there is a much more efficient algorithm, like [Binary Search](#binary-search).

### Linear(sequential) Search

It's a method of finding a target value within the list.

- It sequentially iterate on each element of the list and checks for the target value until a match is found or until all the elements have been searched
- It's usually the default searching algorithm in built-in sorting-methods in programming languages like in Javascript: `.indexOf()`, `.find()`

---

### Binary Search

Binary search is a search algorithm that finds the position of a target value within a **sorted** array.

- if we know tha list is **sorted**:
  - Rather than eliminating one element at a time, you can eliminate **half** of the remaining elements at a time
  - we can pick a number in the list and discard it's left/right side based on the number we're searching for
- we are essentially creating a **"binary search tree** from the list
- so it's a `divide&conquer` approach, so it gives us `O(log(n))`

#### How it works

![binary-search](./img/binary-search.png)

- We call an element of the sequence a **"candidate"**
- we get the middle element: the item `data[mid]` with index:

  ```py
  mid = (low + high) // 2;
  # or
  mid = low + (high - low) // 2 # to avoid integer overflow
  ```

- We consider three cases:

  1. If the target equals `data[mid]`, then we have found the item we are looking for, and the search terminates successfully
  2. If `target < data[mid]`, then we recur on the first half of the sequence, that is, on the interval of indices from low to `mid−1`.
  3. If `target > data[mid]`, then we recur on the second half of the sequence, that is, on the interval of indices from `mid+1` to high.

- Here worst case is `O(log(n))` with log-base of `2` as we divide each group by `2` each time
  - It's how many times we can divide `n` by `2` until we get the wanted number

```py
# 1. Recursive Binary Search
def binary_search(data, target, low, high):
  if low > high:
    return False  # interval is empty; no match

  mid = (low + high) // 2
  if target == data[mid]:  # found a match
    return True
  elif target < data[mid]:
    # recur on the portion left of the middle
    return binary_search(data, target, low, mid - 1)
  else:
    # recur on the portion right of the middle
    return binary_search(data, target, mid + 1, high)

# ---------------------------------------------------------------------

# 2. Iterative Binary Search ✅
def binary_search_iterative(nums, target):
  l, r = 0, len(nums) - 1

  while l <= r:
    midIdx = (l + r) // 2
    if nums[midIdx] > target:
      r = midIdx - 1
    elif nums[midIdx] < target:
      l = midIdx + 1
    else:
      return midIdx

  return -1
```

- Time complexity: `O(log(n))`

  - Because we divide the search space **in half** at each step, the total number of steps required to find the target is `log(n)`, where `n` is the number of elements in the list

    ```py
    # n is the number of elements in the list (r-l+1)
    # k is the number of steps required to find the target
    n / 2^k = 1
    n = 2^k
    log(n) = log(2^k)
    log(n) = k log(2)
    log(n) = k
    ```

- **Notes**:

  - An unsuccessful search occurs if we reached the end of array where: `start = middle = end`, so we won't be able to continue as the next step would result this: `low high`, as the interval `[low,high]` is empty
    - so we need to create an edge case to prevent infinite loop
  - making a copy of half the list would already take `O(n)` time, negating the whole benefit of the binary search algorithm.
  - when we get the middle element, we use: `mid = (low + high) // 2`, Actually this can lead to an **integer overflow**. Imagine that `low` and `high` are very large numbers. Adding them up will cause an integer overflow.

    - A better way is to compute `mid` as `mid = low + (high - low) // 2`. Dividing `high - low` before adding `low` avoids the integer overflow.

    ```py
    # might cause integer overflow
    mid = (low + high) // 2

    # to avoid integer overflow ✅
    mid = low + (high - low) // 2
    ```

  - If the problem says that "we don’t know if it’s sorted in ascending or descending order", then we should handle the 2 cases:

    ```py
    def binary_search(nums, target):
      l, r = 0, len(nums) - 1
      isAscending = nums[l] < nums[r]
      while l <= r:
        midIdx = (l + r) // 2
        if nums[midIdx] == target:
          return midIdx

        # Case 1: ascending order
        if isAscending:
          if nums[midIdx] > target:
            r = midIdx - 1
          else:
            l = midIdx + 1
        # Case 2: descending order
        else:
          if nums[midIdx] < target:
            r = midIdx - 1
          else:
            l = midIdx + 1
    ```

---

### Binary search on Monotonic Functions

- A monotonic function is a function that is either entirely non-increasing or non-decreasing.
  - `f(x) = x * 2` is a monotonic function
  - `f(x) = x^2` is not a monotonic function
    - ex: `f(0.5) = 0.25` and `f(1) = 1` so it's not monotonic
- It can be used with binary search to find the minimum or maximum value of a function in a given interval.

  ```py
  def binary_search(f, low, high, target):
    while low <= high:
      mid = (low + high) // 2
      if f(mid) == target:
        return mid
      elif f(mid) < target:
        low = mid + 1
      else:
        high = mid - 1
    return -1
  ```

- A common pattern is to be given a monotonic boolean function `f(x)` and you're given range of values `(l <= x <= r)`

  ```py
  x = 0 # f(x) = false
  x = 1 # f(x) = false
  x = 2 # f(x) = false
  x = 3 # f(x) = true
  x = 4 # f(x) = true
  ```

- When given a `monotonic increasing` boolean function, a common task is to find the greatest value of `x` that returns `false` or the lowest value of `x` that returns `true`.

  - The easiest way to explain how this works is through pre. Below is pseud o-code that tries to find the lowest value of x that returns true in a **monotonic increasing boolean function**:

    ```py
    def binarySearchMin(lo, hi, target, f):
      l = lo
      r = hi
      res = -1

      while l <= r:
        mid = (l + r) // 2
        val = f(mid)

        if val:
          res = mid
          r = mid - 1 # check if there's a lower value that returns true
        else:
          l = mid + 1

      return res
    ```

---

## Graph Traversals

it means going through each item in the list, like checking for something on each item in a `tree` --> **(visiting every node O(n))**

- Graph traversal use cases:
  - peer-to-peer networking
  - web crawlers
  - finding `closest` / `matches` / `recommendations`
  - shortest path problems
    - GPS navigation
    - solving mazes
    - AI

![traversal](./img/traversal.png)
![traversal](./img/traversal1.png)
![traversal](./img/traversal3.png)

- The time-complexity of **BFS** vs **DFS** is the same as we visit each node one time, but the difference here is in the space-complexity as it depends on the structure of the tree:
  - if we're talking about a breadth-first on a wide tree vs on depth-first, we will not be storing all the nodes across the tree in **BFS** as we only need to keep-track of the nodes in a given branch all the way down to the end
    ![traversal](./img/traversal2.png)

> **Note:** when you want to preserve the structural shape of the tree, you need to use **DFS** as it goes all the way down to the end of the tree, then it goes back up to the next branch

---

### Breadth First Search/Traversal BFS

It's an algorithm for traversing or searching tree or graph data structures. It starts at the tree root, and explores all of the `neighbor` nodes at the present depth before moving on to the nodes at the next depth level.

It's also called **"Level Order Traversal"**

- **It's all about finding a Path**
- It can answer questions like:
  - Is there a path from node `A` to node `B`?
  - What is the shortest path from node `A` to node `B`?

![BFS](./img/bfs1.png)
![BFS](./img/bfs3.webp)

- start with the root-node, then go to the left then the right of the second level of the tree, the the same for the next level
  ![BFS](./img/bfs2.png)
- it uses additional memory as it tracks the child nodes for a given node on each level (track every node and its children in order)
  - this is done using a **Queue** data structure
    ![BFS](./img/bfs4.png)
    - we use a `queue` because we need to remember the things that need to come next to be visited
    - we need to search data in the order that they're added. So we need to use a `queue` as it's a `FIFO` data structure
      - Similar to tree's level-order traversal, the nodes closer to the root node will be traversed earlier.
  - if we have a very wide-tree, the `Queue` can get really big, which requires more memory
- used to find the **shortest path** (the fewest segments) between two nodes
  - > **Note:** It's not necessarily the shortest path in terms of distance (fastest path), but the shortest path in terms of number of segments, To get the fastest path, we need to use [Dijkstra's algorithm](#dijkstras-algorithm)
- also used with `Graphs`
- BFS takes `O(number of people + number of edges)`, and it's more commonly written as `O(V+E)` (`V` for number of vertices, `E` for number of edges).
- Notes:
  - To calculate the shortest path in an unweighted graph, use `breadth-first search`. To calculate the shortest path in a weighted graph, use `Dijkstra’s algorithm`

#### BFS Implementation

- **BFS implementation**

  ```py
  from collections import deque

  def bfs(root):
    # create a queue
    queue = deque()
    if root: queue.append(root)

    level = 0
    while len(queue) > 0:
      # loop through the queue
      for i in range(len(queue)):
        curr = queue.popleft()
        print(curr.val)

        # add the children to the queue
        if curr.left: queue.append(curr.left)
        if curr.right: queue.append(curr.right)

        # or if a graph
        # for neighbor in curr.neighbors:
        #   queue.append(neighbor)

      # increment the level
      level += 1
  ```

- Example: BFS Implementation for a "mango seller" problem
  ![bfs example](./img/bfs-implementation.png)
  ![bfs example](./img/bfs-implementation-1.png)

  ```py
  from collections import deque

  # create a graph
  graph = {}
  graph["you"] = ["alice", "bob", "claire"]
  graph["bob"] = ["anuj", "peggy"]
  graph["alice"] = ["peggy"]
  graph["claire"] = ["thom", "jonny"]
  graph["anuj"] = []
  graph["peggy"] = []
  graph["thom"] = []
  graph["jonny"] = []

  # helper: check if a person is a mango seller
  def person_is_seller(name):
    # mango sellers' names end with 'm' letter (e.g. thom)
    return name[-1] == "m"


  def search(name):
    # Create a new queue
    search_queue = deque()
    # Add all of your neighbors to the search queue
    search_queue += graph[name]

    # This array is how you keep track of which people you've searched before.
    searched = []

    while search_queue:
      # pop the first person off the queue
      person = search_queue.popleft()
      # Only search this person if you haven't already searched them to avoid infinite loops (the search queue will keep going back and forth between neighbors nodes)
      if not person in searched:
        if person_is_seller(person):
          print(person + " is a mango seller!")
          return True
        else:
          # add this person's friends to the search queue
          search_queue += graph[person]
          # Marks this person as searched
          searched.append(person)
    return False


  search("you") # thom is a mango seller!
  ```

---

### Depth First Search/Traversal DFS

It's an algorithm for traversing or searching tree or graph data structures. It starts at the tree root, and explores as far as possible along each branch before backtracking.

- **It's all about "Exploring" and Backtracking**

  - **"Backtracking"** means that when you reach a dead-end, you go back to the last intersection (last valid point) and try another path from there

    - it consists of 3 steps:

      ```py
      # Ex of backtracking with the 3 steps
      def dfs(node):
        # 1. "Adding a node" to the list of visited nodes or do operations on it
        visited.append(node)
        # 2. "Validating" if the node is a valid node to visit
        if node is None:
          return
        # 3. Removing the node from the list of visited nodes or undoing the operations on it
        visited.pop()
      ```

      1. **"Adding a node"** to the list of visited nodes or do operations on it
      2. **"Validating / Making decision"** if the node is a valid node to visit
      3. **Removing** the node from the list of visited nodes or undoing the operations on it

  - Think of it as a **maze**, where you're trying to find a way out and you're exploring all the possible paths until you find the exit and when you reach a dead-end, you go back to the last intersection and try another path
  - Usually time-complexity is `O(n)` as we visit each node once

> It's called `Depth First Search` because we go deep into the tree before we go wide (asking other children)

- the search follows one branch of the tree down as many levels as possible until the target notice is found or the end is reached, then it continues at the next ancestor with an unexplored children
  - the idea is to go as deep as possible from the left side and then start going to the right until the traversal of the tree is done
  - it's like "solving a maze"
- it might take long time
- it has lower memory requirements, as it doesn't need to store all the child pointers at each level
- usually it's implemented using **recursion**
- used to determine whether a path exists between two nodes or if a node exists
- also used with graphs

![DFS](./img/dfs.png)

---

#### PreOrder DFS traversal

Here, we visit the `root` node first, then the sub-trees at its children nodes, if the tree is ordered from `left` to `right`, then the `left` node, then the `right` node and so on.

![preorder](./img/preorder.png)

```py
# Recursive
def preOrderDFS(root):
  if root is None:
    return

  print(root.value)
  preOrderDFS(root.left)
  preOrderDFS(root.right)

# ----------------------------------------------

# Iterative
def preOrderDFS(root):
  if not root:
    return

  stack = [root]
  while stack:
    curr = stack.pop()
    print(curr.value)

    if curr.right:
      stack.append(curr.right)
    if curr.left:
      stack.append(curr.left)
```

---

#### PostOrder DFS traversal

it recursively traverses the subtrees tooted at the children of the root first, then visits the root node itself.

Here, we visit the `left` node first, then the `right` node, then the `root` node and so on.

![postorder](./img/postorder.png)

```py
# Recursive
def postOrderDFS(root):
  if root is None:
    return

  postOrderDFS(root.left)
  postOrderDFS(root.right)
  print(root.value)

# ----------------------------------------------

# Iterative
def postOrderDFS(root):
  if root is None:
    return

  stack = [root]
  visited = [False]

  while stack:
    curr, is_visited = stack.pop(), visited.pop()

    if curr:
      if is_visited:
        print(curr.value)
      else:
        stack.append(curr)
        visited.append(True)

        stack.append(curr.right)
        visited.append(False)

        stack.append(curr.left)
        visited.append(False)
```

#### InOrder DFS traversal

Inorder means traversing the tree in a sorted order (smaller to larger) and to do so, we need to visit the `left` node first, then the `root` node, then the `right` node and so on
![inorder](./img/inorder.png)

- we do this by :

  1. recursively calling the function on the **left** node to reach the smallest node
  2. then we print the value of the node
  3. then we recursively call the function on the **right** node to reach the largest node

  ```py
  def inOrderDFS(root):
    if root is None:
      return

    inOrderDFS(root.left)
    print(root.value)
    inOrderDFS(root.right)
  ```

- Only works with **Binary Trees** (not graphs)
- Application for `InOrder DFS`:
  - if we have a **Binary Search Tree**, we can use `InOrder DFS` to get the elements in a sorted order, as left node is always smaller than the root node and the right node is always larger than the root node
    - So we traverse the tree in `InOrder DFS` and we get the elements in a sorted order

---

#### Tree Traversal Notes

- Why do we have 3 different types of tree traversals?
  - Sometimes, it depends on how the current language handles memory and recursion
  - Because we can use them to do different things
    - `PreOrder DFS`: can be used to **"export"** a tree structure so that it can be copied or reconstructed later
    - `PostOrder DFS`: can be used to **"delete"** a tree
    - `InOrder DFS`: can be used to get the elements in a **"sorted"** order
- For all the 3 types of DFS, the time-complexity is `O(n)` as we visit each node once
- For all of them, if we want to do it in a **reverse order**, we just need to change the order of the recursive calls
  - replace `left` with `right` and vice versa to visit the nodes in a reverse order (biggest to smallest) -> (right to left)

---

## Shortest Path

- Dijkstra algorithm (positive-weighted edges)
- Bellman-Ford algorithm (negative-weighted edges)

---

### Dijkstra's Algorithm

It's one of the most famous and widely used algorithms around. It finds (the **shortest path** between 2 vertices on a **weighted-graph**)

> Shortest path doesn't have to be about the physical distance, it can be about minimizing something.

- It's a **greedy algorithm** (it always chooses the cheapest next step)

#### How Dijkstra's Algorithm works

- Each segment has a travel time in minutes **(weight)**. You’ll use Dijkstra’s algorithm to go from start to finish in the shortest possible time.
  ![Dijkstra-algorithm](./img/dijkstra-1.png)
- Cost of a node is how long it takes to get to that node from the start.

- EX: Trading for a piano

  - In this graph, the nodes are all the items Rama can trade for. he weights on the edges are the amount of money he would have to pay to make the trade
    ![piano example](./img/piano-example-1.png)
  - First, we need to track 2 things: (`cost` for each node, and the `parent` node for each node)
    ![piano example](./img/piano-example-2.png)
    ![piano example](./img/piano-example-3.png)
  - **Steps:**

    1. Find the **cheapest** node: pick the node with the smallest known distance to visit first
    2. Update the costs of the neighbors of this node (Figure out how long it takes to get to its neighbors).
       ![piano example](./img/piano-example-4.png)
       ![piano example](./img/piano-example-5.png)

       - if the new total distance to a node is less than the previous total, we store the new shorter distance for that node
         ![piano example](./img/piano-example-6.png)

       - for each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
       - Mark the node as processed to avoid calculating the same node more than once

    3. Repeat until you've done this for every node in the graph.
       ![piano example](./img/piano-example-7.png)
    4. Calculate the final path.
       ![piano example](./img/piano-example-8.png)

- **Notes:**
  - We only use Dijkstra’s algorithm when we have **weighted edges**. and if it's not weighted, we can use `BFS`
  - Dijkstra’s algorithm only works with **directed acyclic graphs**, called `DAGs` for short.
    - because undirected graphs can have cycles, which can lead to infinite loops or double-counting
  - We can't use Dijkstra’s algorithm if we have **negative-weighted edges**.
  - To find if we can't reach a node, we check if the distance to the node is `infinity` after we're done with the algorithm

---

#### Implementing Dijkstra's algorithm

- It depends on 2 columns: `cost`(shortest path) and `parent/previous vertex`
  ![Dijkstra-algorithm](./img/dijkstra-3.png)
- We also use 2 lists: `visited` and `unvisited`

  - `visited` list: keeps track of all the nodes we've already processed
  - `unvisited` list: keeps track of all the nodes we haven't processed yet

- **Steps:**
  ![Dijkstra-algorithm](./img/dijkstra-7.png)

  1. We start by adding the starting node to the `unvisited` list and setting the cost to `0` and others to `infinity` and the parent to `None`
     ![Dijkstra-algorithm](./img/dijkstra-4.png)
  2. We find the node with the lowest cost (cheapest node) and we add it to the `visited` list and examine all its neighbors
  3. We will use `Min Heap` to get the node with the lowest cost
  4. We then calculate the cost to reach each of those neighbors.
     ![Dijkstra-algorithm](./img/dijkstra-5.png)

```py
def shortestPath(edges, n, src):
  adj = {}
  for i in range(1, n + 1):
    adj[i] = [] # initialize the adjacency list

  # s = src, d = dst, w = weight
  for s, d, w in edges:
    adj[s].append((d, w)) # add the destination and weight to the adjacency list

  shortest = {} # to store the shortest path to each node
  min_heap = [(0, src)] # to get the node with the lowest cost

  while minHeap:
    w1, n1 = heapq.heappop(min_heap) # get the node with the lowest cost
    if n1 in shortest: # if we already processed this node, continue
      continue
    shortest[n1] = w1 # add the node to the shortest path

    # loop through the neighbors of the node
    for n2, w2 in adj[n1]:
      if n2 not in shortest:
        heapq.heappush(min_heap, (w1 + w2, n2)) # add the node to the min heap with the new cost

  return shortest
```

![Dijkstra-algorithm](./img/dijkstra-8.png)

- Space complexity: `O(E)` -> `O(V^2)`, where `E` is the number of edges in the graph and `V` is the number of vertices in the graph
  - because we're storing the cost and parent for each node in the `min heap`
- Time complexity: `O(E.log(E))` -> `O(E.log(V^2))`, as we pop from the `min heap` `E` times and each time we're doing `log(E)` operations
  - `O(E.log(V^2))` -> `O(E.2log(V))` -> `O(E.log(V))`

---

### Bellman-Ford Algorithm

It's an algorithm that computes shortest paths from a **single source** vertex to all of the other vertices in a weighted digraph.

- It's slower than Dijkstra's algorithm, but it can handle **negative edge weights**.
- It uses `Dynamic Programming` to solve the problem
- It uses decision trees to solve the problem by breaking it down into sub-problems and then solving those sub-problems and then combining the solutions to solve the original problem
  - `DP` is used here to **Memoize** the results of the sub-problems to avoid solving them again
    ![bellman-ford](./img/bellman-ford-1.png)

#### How Bellman-Ford Algorithm works

- It's used to find the shortest path between 2 nodes in a graph, So it's a **path-finding algorithm**
- We start by setting the distance to the starting node to `0` and the distance to all other nodes to `infinity`
- Then we go through each of the edges and update the `distance` to each of the neighboring nodes by adding the cost of the edge to the distance to the current node
- We repeat this process `V-1` times, where `V` is the number of vertices in the graph
- This is because the longest possible path without a cycle is `V-1` edges

```py
def bellman_ford(graph, start):
  # initialize the distance to all nodes to infinity
  distances = {node: float("inf") for node in graph}
  # set the distance to the starting node to 0
  distances[start] = 0

  # repeat this process V-1 times, where V is the number of vertices in the graph
  for _ in range(len(graph) - 1):
    # go through each edge in the graph
    for node in graph:
      for neighbor in graph[node]:
        # if the distance to the neighbor is shorter than the current distance, update the distance to the shorter distance
        if distances[neighbor] > distances[node] + graph[node][neighbor]:
          distances[neighbor] = distances[node] + graph[node][neighbor]

  return distances
```

---

## Topological Sort

A **topological sort** of a directed graph is a way of ordering the list of nodes such that if `(a, b)` is an edge in the graph then `a` will appear before `b` in the list. (Ordering the vertices of a directed acyclic graph such that each vertex is visited before its children)

It returns a specific ordering of the nodes in a directed graph as long as the graph is **acyclic**.

- Every `vertex` has `indgree` and `outdegree`:

  - `indegree`: the number of edges that **point to** the vertex
    ![top sort](./img/top-sort-7.png)
  - `outdegree`: the number of edges that **point from** the vertex

- Mainly in `Topological Sort`, we're trying to find the `indegee` value of each node, then we start with the node with `indegree = 0` and we add it to the `sorted_list`, then we remove all the edges that point from it, then we repeat the process until we have no more nodes left.

  ![top sort](./img/top-sort-8.png)
  ![top sort](./img/top-sort-9.png)
  ![top sort](./img/top-sort-10.png)
  ![top sort](./img/top-sort-11.png)
  ![top sort](./img/top-sort-12.png)
  ![top sort](./img/top-sort-13.png)

- It only works on **directed acyclic graphs** (DAGs).

  - This is because the `top sort` only add the `vertices` with `indegree = 0` to the `sorted_list`, so if we have a cycle, then we will never be able to reach a `vertex` with `indegree = 0` as we will always have a `vertex` with `indegree > 0` that points to it.
    ![top sort](./img/top-sort-14.png)

- Another way of thinking about topological sort is that it's a way of arranging the nodes of a graph in a line such that all the edges point in the same direction to the right.
  ![top sort](./img/top-sort-5.png)
  - a "Topological ordering" is an ordering of the nodes in a directed graph where for each directed edge from node `A` to node `B`, node `A` appears before node `B` in the ordering.
  - the Topological Sort algorithm can find the topological ordering of a graph in `O(V + E)` time, where `V` is the number of vertices and `E` is the number of edges in the graph.

> Many real world situations can be modelled as a `graph` with directed edges where some events must occur before others.

- **Examples:**

  - "Applying in class `X`", but we won't be able to take the class, until we take class `A`, `B`, `C` first as prerequisites.
    ![top sort](./img/top-sort-1.png)
    - The topological sort algorithm tells us the ordering on which we should enroll in classes such that we never enroll in a course that we don't have the prerequisites for.
  - program/package build dependencies
  - How to get dressed in the morning
    ![top sort](./img/top-sort-4.png)

  - The topological sort algorithm tells us the order in which we should install the packages such that we never install a package that depends on another package that we haven't installed yet.

- Only certain types of graphs can be topologically sorted. These are **directed acyclic graphs** (DAGs).
  - "DACs" are directed graphs with no directed cycles.
    ![top sort](./img/top-sort-6.png)
  - If a graph has **cycles** or is **not directed**, then there is no topological sort.

---

### Implementing Topological Sort

There are two common implementations of topological sort:

1. **Khan's algorithm (iterative)**
   - It's the most common implementation of topological sort
   - It's a `BFS` and `queue` based algorithm
   - Here, we fill the ordering from the beginning of the list to the end
2. **Depth-first search (recursive)**
   - It's a `DFS` and `stack` based algorithm
   - Here, we fill the ordering from the end of the list to the beginning
   - the recursive implementation is a **PostOrder DFS** traversal, meaning that we assign the order of the nodes after we've visited all of their children/neighbors (as they don't need to be visited in a specific order)

---

#### Using Khan's algorithm (iterative)

- We can construct a topological sort using **Khan's algorithm**:
  ![khan-algorithm](./img/khan-algorithm.png)

  1. Find a node with no incoming edges (i.e., no edges directed towards it) and add it to the sorted list.

     - We know that such a node must exist if there's no cycle. After all, if we picked an arbitrary node we could just walk edges backwards arbitrarily.
     - We'll either stop at some point (in which case we've found a node with no incoming edges) or we'll return to a prior node (in which case there is a cycle).

  2. Remove that node from the graph, along with its outgoing edges.
     - Those nodes have already been added to the topological sort, so they're basically irrelevant. We can't violate those edges anymore.
  3. Repeat steps 1 and 2 until the graph is empty.
     ![top sort](./img/top-sort-3.png)
     - Repeat the above, adding nodes with no incoming edges and removing their outbound edges.
     - When all the nodes have been added to the topological sort, then we are done.
  4. If the graph is not empty, then we have detected a cycle, which means no valid topological sort exists.
  5. Return the sorted list.

- Topological sort is not unique, there can be multiple valid topological sorts for a graph and all of them are correct.
- Topological sort algorithm is not the most efficient algorithm,
- it runs in `O(V + E)` time, where:

  - `V` is the number of vertices
  - `E` is the number of edges in the graph.

- Steps:
  ![top sort](./img/top-sort-2.png)
  1. create queues: `processing_queue` and a list `sorted_list`, which are empty at the beginning.
  2. find all the nodes with **no incoming edges** and add them to the `processing_queue` so that we can process them first.
  3. while the `processing_queue` is not empty:
     - remove a node from the `processing_queue` and add it to the `sorted_list`.
     - remove all of its outgoing edges.
     - if any of the nodes that were connected to the removed node now have no incoming edges, add them to the `processing_queue`.
  4. if order contains all nodes, then it has succeeded. Otherwise, the topological sort has failed due to a cycle.

```py
def topological_sort(graph):
    processing_queue = Queue()
    sorted_list = []

    # find all the nodes with no incoming edges and add them to the processing_queue so that we can process them first.
    for node in graph.nodes:
        if len(node.incoming_edges) == 0:
            processing_queue.enqueue(node)

    # while the processing_queue is not empty:
    while processing_queue.size() > 0:
        # remove a node from the processing_queue and add it to the sorted_list.
        node = processing_queue.dequeue()
        sorted_list.append(node)

        # remove all of its outgoing edges.
        edges = list(node.outgoing_edges)
        for edge in edges:
            edge.destroy()

        # if any of the nodes that were connected to the removed node now have no incoming edges, add them to the processing_queue.
        for node in nodes:
            if len(node.incoming_edges) == 0:
                processing_queue.enqueue(node)

    # if order contains all nodes, then it has succeeded. Otherwise, the topological sort has failed due to a cycle.
    if len(sorted_list) == len(graph.nodes):
        return sorted_list
    else:
        return None
```

---

#### Using DFS (recursive)

- Here, we use **PostOrder DFS** traversal, meaning that we assign the order of the nodes after we've visited all of their children/neighbors (as they don't need to be visited in a specific order)
- when reaching the base-case (leaf node), we add the node to the result
  - **Base-case:** when the node has no children or all of its children have been visited
- after finishing, we will have the nodes in a reverse order, so we reverse the result to get the correct order
  ![top sort](./img/top-sort-15.png)

- Time complexity: `O(V + E)`, where `V` is the number of vertices and `E` is the number of edges

```py
def topological_sort(graph):
    result = []
    visited = set()


    def dfs(node):
        if node in visited:
            return

        visited.add(node)

        for neighbor in node.neighbors:
            dfs(neighbor)

        result.append(node)

    for node in graph.nodes:
        dfs(node)

    return result[::-1]

# OR

def topological_sort(edges, n):
    result = []
    visited = set()
    adj = {}

    # Build the adjacency list
    for i in range(1, n + 1):
        adj[i] = []
    for src, dst in edges:
        adj[src].append(dst)

    for i in range(1, n + 1):
        dfs(i, adj, visited, result)
    return result[::-1]

def dfs(node, adj, visited, result):
    if node in visited:
        return
    visited.add(node)
    for neighbor in adj[node]:
        dfs(neighbor, adj, visited, result)
    result.append(node)
```

---

## Union Find

It's a data structure that keeps track of elements which are split into one or more disjoint sets.

The Union Find data structure allows us to **detect a cycle in an undirected graph** by iterating over just its edges. (Instead of doing the full `O(V+E)` search. This way we get an `O(E)` complexity).

- It's used in trees, and graphs
- It can deal with **disjoint sets** (sets that have no elements in common) -> Disconnect components in a graph
  ![union-find](./img/union-find-1.png)
- It works as a **Forest of Trees**
  ![union-find](./img/union-find-2.png)
  - Each node is a tree, and each tree is a set
  - Each node has a parent node, except the root node (we can say that it's its own parent node)
  - Each node has a `rank`, which is the number of edges from the node to the furthest leaf node
- Each node starts off as its own separate set, as we iterate over the edges, we will **union** the nodes together if they are not already in the same set.
  - We `union` them by making the parent of one node the parent of the other node.
    ![union-find](./img/union-find-3.png)
  - We usually `union` by `rank`(which is the `height` of the tree), we make the shorter tree a child of the taller tree.
    ![union-find](./img/union-find-4.png)
- Used to detect cycles in undirected graphs, instead of using `DFS` or `BFS` which takes `O(V+E)` time, we can use `Union Find` which takes `O(E)` time.
  - It's done by iterating over the edges, and `union` the nodes together if they are not already in the same set.
  - If we find an edge where both nodes are in the same set, then we have found a cycle.
    - This is because we will be trying to connect 2 `nodes` that are already connected, which means that there is a cycle.

```py
class UnionFind:
    def __init__(self, n):
        self.parent = {}
        self.rank = {}

        # start from 1, because we will be using 0 as a special value
        for i in range(1, n + 1):
            self.parent[i] = i # each node is its own parent
            self.rank[i] = 0 # rank is the number of edges from the node to the furthest leaf node

    def find(self, n):
        # if the node is its own parent, then it's the root node
        if self.parent[n] == n:
            return n
        else:
            # recursively find the parent of the parent of the parent of the node
            return self.find(self.parent[n])

    def union(self, n1, n2):
        # find the parent of each node
        p1 = self.find(n1)
        p2 = self.find(n2)

        # if the parents are the same, then they are already connected
        if p1 == p2:
            return False

        # if the rank of the first node is greater than the rank of the second node, then make the second node the child of the first node
        if self.rank[p1] > self.rank[p2]:
            self.parent[p2] = p1
        # if the rank of the second node is greater than the rank of the first node, then make the first node the child of the second node
        elif self.rank[p1] < self.rank[p2]:
            self.parent[p1] = p2
        # if the ranks are equal, then make one node the child of the other node, and increment the rank of the new parent node
        else:
            self.parent[p2] = p1
            self.rank[p1] += 1

        return True
```

---

## Two Heaps Technique

It's a technique that uses 2 heaps to solve problems. It's used to find the **median** of a list of numbers.

- It's used in problems where data is not given upfront, but instead, it's given incrementally in a **stream of data**.
  - The naive approach is to sort the list of numbers and then find the median, but it takes `O(n.log(n))` time.
  - Instead, we can use `Two Heaps` to find the median in `O(log(n))` time.
- It's based on the fact that we can divide a list of numbers into 2 halves, the `left` half and the `right` half, and the `median` is the middle number of the list.
- We can use 2 `heaps` to keep track of the `left` half and the `right` half of the list.
  ![two heaps](./img/two-heaps-1.png)
  - `left` heap will be a `max heap` that contains the `left` half of the list (smaller numbers)
  - `right` heap will be a `min heap` that contains the `right` half of the list (larger numbers)
- Now, Each time we insert an element, we need to maintain the balance between the 2 heaps, so that the `median` is always the root of the `left` heap.

  ```py
  len(leftHeap) <= len(rightHeap) + 1
  ```

  - If the `left` heap has more elements than the `right` heap, then the `median` is the root of the `left` heap.
  - If the `right` heap has more elements than the `left` heap, then the `median` is the root of the `right` heap.
  - If the `left` heap and the `right` heap have the same number of elements, then the `median` is the average of the roots of the 2 heaps.

- To select which heap to insert the next number into, we compare the number with the `median`:

  ```py
  if num <= median:
    # insert into left heap
  else:
    # insert into right heap
  ```

  - If the number is smaller than the `median`, then we insert it into the `left` heap
  - If the number is larger than the `median`, then we insert it into the `right` heap
  - If the number is equal to the `median`, then we insert it into the `left` heap
    ![two heaps](./img/two-heaps-2.png)
    ![two heaps](./img/two-heaps-3.png)
    ![two heaps](./img/two-heaps-4.png)

- Now, to get the `median` value:
  - if the total number of elements is `odd`, then the `median` is the `root` of the `left` heap
    ![two heaps](./img/two-heaps-5.png)
  - if the total number of elements is `even`, then the `median` is the average of the `roots` of the 2 heaps
    ![two heaps](./img/two-heaps-6.png)

```py
class Median:
    def __init__(self):
        self.leftHeap = [] # max heap
        self.rightHeap = [] # min heap

    def insert(self, num):
        # if the left heap is empty or the number is smaller than the root of the left heap, then insert it into the left heap
        if len(self.leftHeap) == 0 or num <= -self.leftHeap[0]:
            heappush(self.leftHeap, -num)
        # otherwise, insert it into the right heap
        else:
            heappush(self.rightHeap, num)

        # balance the heaps
        if len(self.leftHeap) > len(self.rightHeap) + 1:
            heappush(self.rightHeap, -heappop(self.leftHeap))
        elif len(self.rightHeap) > len(self.leftHeap) + 1:
            heappush(self.leftHeap, -heappop(self.rightHeap))

    def getMedian(self):
        # odd number of elements
        if len(self.leftHeap) > len(self.rightHeap):
            return -self.leftHeap[0]
        elif len(self.rightHeap) > len(self.leftHeap):
            return self.rightHeap[0]
        # even number of elements
        else:
            return (-self.leftHeap[0] + self.rightHeap[0]) / 2
```

---

## Backtracking

It's a technique that uses recursion to try all possible solutions to a problem until we find a solution that works.

- It's used to solve problems that have multiple solutions, and we need to find all of them. EX:

  - Subsets
  - Combinations
  - Permutations

- **How Backtracking works**
  ![backtracking](./img/backtracking-1.png)
  - It works by creating a **decision tree** of all the possible solutions, and then we traverse the tree to find the solutions that work.
  - We start by making a decision, then we make another decision, and so on until we reach a solution.
    - we do so using `recursion` algorithm like `DFS`
  - If we reach a point where we can't make any more decisions, then we **backtrack** to the previous decision and try another decision.
    - we do so by `backtracking` to the previous decision and trying another decision

---

### Subsets

**Subset** is a set that contains all the elements of another set, and it can also contain none of the elements of that set.

- Subsets are unique, meaning that we can't have 2 subsets that are the same like `[1, 2]` and `[2, 1]`
  - This would be called **Permutations**
- To create the decision tree, we will iterate over the elements of the set and make a decision whether to include the element in the subset or not. Then we will make another decision, and so on until we reach a solution.
  ![backtracking](./img/backtracking-2.png)
- The result will be the leaf nodes of the decision tree.
  ![backtracking](./img/backtracking-3.png)

  - The number of subsets is `2^n`, where `n` is the number of elements in the set. This is because each element has `2` choices, either to include it in the subset or not.
  - So, the time complexity is `O(n * 2^n)`
  - Space complexity is `O(n)`

- Recursive Code:

  ```py
  def subsets(nums):
      subsets = []
      curSet = []
      helper(0, nums, curSet, subsets)
      return subsets

  def helper(i, nums, curSet, subsets):
      # base case
      if i == len(nums):
          subsets.append(curSet[:])
          return

      # include the current element
      helper(i + 1, nums, curSet + [nums[i]], subsets)
      # exclude the current element
      helper(i + 1, nums, curSet, subsets)
  ```

- Iterative Code:

  ```py
  def subsets(nums):
      subsets = [[]]
      for num in nums:
          for i in range(len(subsets)):
              subsets.append(subsets[i] + [num])
      return subsets
  ```

- If the problem says that the `nums` has no duplicates **(not distinct)**, then we should do some steps before we start the recursion:

  - sort the `nums` array
  - skip the duplicates when we're iterating over the `nums` array

  ```py
  def subsets(nums):
      subsets = []
      curSet = []
      nums.sort()
      helper(0, nums, curSet, subsets)
      return subsets

  def helper(i, nums, curSet, subsets):
      # base case
      if i == len(nums):
          subsets.append(curSet[:])
          return

      # include the current element
      helper(i + 1, nums, curSet + [nums[i]], subsets)

      # skip the duplicates
      while i + 1 < len(nums) and nums[i] == nums[i + 1]:
          i += 1

      # exclude the current element
      helper(i + 1, nums, curSet, subsets)
  ```

---

### Combinations

**Combination** is a set of elements where the order doesn't matter.

- Usually when we want combinations, we want them to be of a specific size `k` and not all the possible combinations.
- There're 2 implementations:

1. Get all the subsets, then stop when we reach the subsets of size `k`
   ![backtracking](./img/backtracking-4.png)

   - Time complexity: `O(k * 2^n)` -> `O(2^n)`
   - Space complexity: `O(n)`
   - The issue here is that we're creating all the subsets, which is not necessary (like the empty subsets for not including any element)

   ```py
    def combinations(n, k):
      combs = []
      helper(1, [], combs, n, k)
      return combs

    def helper(i, curComb, combs, n, k):
      # base cases
      if len(curComb) == k:
        combs.append(curComb[:])
        return

      if i > n:
        return

      # include the current element
      helper(i + 1, curComb + [i], combs, n, k)
      # exclude the current element
      helper(i + 1, curComb, combs, n, k)

   ```

2. More efficient implementation:
   - using `looping` to create the decision tree by iterating over the elements of the set and make a decision whether to include the element in the subset or not. Then we will make another decision, and so on until we reach a solution.
     ![backtracking](./img/backtracking-5.png)
   - Time complexity: `O(k * c(n, k))` -> `O(c(n, k))`
   - Space complexity: `O(n)`

```py
def combinations(n, k):
    combs = []
    helper(1, [], combs, n, k)
    return combs

def helper(i, curComb, combs, n, k):
    # base cases
    if len(curComb) == k:
        combs.append(curComb[:])
        return

    if i > n:
        return

    for j in range(i, n + 1):
        # include the current element in the current combination
        curComb.append(j)
        helper(j + 1, curComb, combs, n, k)
        # exclude the current element for future iterations
        curComb.pop()

        # or
        # helper(j + 1, curComb + [j], combs, n, k)
```

---

### Permutations

**Permutation** is a set of elements where the order does matter. (It's a combination with a specific order)

- `Permutation` is defined as the re-arranging of the elements of the set. For example, `{1, 2, 3}` has the following six permutations:

  - `{1, 2, 3}`
  - `{1, 3, 2}`
  - `{2, 1, 3}`
  - `{2, 3, 1}`
  - `{3, 1, 2}`
  - `{3, 2, 1}`

- As the order matters, so we can't have 2 permutations that are the same like `[1, 2]` and `[2, 1]`, this will limit the number of permutations to `n!`
  ![backtracking](./img/backtracking-6.png)
- If a set has ‘n’ distinct elements it will have `n!` permutations.

- Recursive implementation:

  - Time complexity: `O(n^2 * n!)` -> `O(n!)`
    - `n^2` is the time complexity of `curPerm[:j] + [nums[i]] + curPerm[j:]` (inserting at a specific index in a list)
    - `n!` is the number of permutations
  - Space complexity: `O(n)`

  ```py
  def permutations(nums):
      return helper(0, nums)

  def helper(i, nums):
      # base case
      if i == len(nums):
          return [[]] # return an empty permutation

      resPerm = []
      for perm in helper(i + 1, nums):
          # insert the current element in all the possible positions of the permutations
          for j in range(len(perm) + 1):
              resPerm.append(perm[:j] + [nums[i]] + perm[j:])

      return resPerm
  ```

- Iterative implementation:

  - Same time and space complexity as the recursive implementation
  - simpler implementation

  ```py
  def permutations(nums):
      perms = [[]]
      for num in nums:
          nextPerms = []
          for perm in perms:
              # insert the current element in all the possible positions of the permutations
              for j in range(len(perm) + 1):
                  nextPerms.append(perm[:j] + [num] + perm[j:])

          perms = nextPerms

      return perms
  ```

  ![backtracking](./img/backtracking-7.png)

---

## Matrix graph

### Matrix DFS

When dealing with matrix, we can use `DFS` to traverse the matrix for many types of problems

- Ex: count num of unique paths from topLeft to bottomRight

  ```py
  def uniquePaths(grid, m: int, n: int) -> int:
    ROWS, COLS = m, n
    visited = set()

    def dfs(r, c):
      # base case
      if (
        min(r, c) < 0 or
        r >= ROWS or
        c >= COLS or
        (r, c) in visited or
        grid[r][c] == 1
      ):
        return 0 # invalid path

      # if we reached the bottomRight cell, we found a valid path
      if r == ROWS - 1 and c == COLS - 1:
        return 1 # valid path

      # mark the current cell as visited
      visited.add((r, c))

      # explore all the neighbors
      paths = (
        dfs(r + 1, c) +
        dfs(r - 1, c) +
        dfs(r, c + 1) +
        dfs(r, c - 1)
      )

      # backtrack: remove the current cell from visited
      visited.remove((r, c))

      return paths

    return dfs(0, 0)
  ```

---

### Matrix BFS

When dealing with matrix, we can use `BFS` to traverse the matrix for many types of problems especially when we need to **find the shortest path**

- Here, we use a `queue` to keep track of the cells we need to visit next instead of recursion like in `DFS`

- Ex: find the length of the shortest path from topLeft to bottomRight

  ```py
  def shortestPath(grid, m: int, n: int) -> int:
    ROWS, COLS = m, n
    visited = set()

    def bfs(r, c):
      queue = deque([(r, c, 0)]) # (row, col, distance)
      visited.add((r, c))

      while queue:
        row, col, distance = queue.popleft()

        # if we reached the bottomRight cell, we found a valid path
        if row == ROWS - 1 and col == COLS - 1:
          return distance

        # explore all the neighbors
        for (nr, nc) in [
          (row + 1, col),
          (row - 1, col),
          (row, col + 1),
          (row, col - 1)
        ]:
          if (
            min(nr, nc) < 0 or
            nr >= ROWS or
            nc >= COLS or
            (nr, nc) in visited or
            grid[nr][nc] == 1
          ):
            continue # invalid path

          # mark the current cell as visited
          visited.add((nr, nc))

          # add the neighbor to the queue
          queue.append((nr, nc, distance + 1))

      return -1 # no valid path

    return bfs(0, 0)
  ```

---

## Least recently used (LRU)

It's a **caching** algorithm that evicts the least recently used item (the item that was accessed the least recently) first.

The idea is simple: The main memory can't hold all the references to all the pages, so we need to keep track of the most recently used pages and evict the least recently used pages when we need to free up some space.

The goal of caching is to store the most frequently used items in the fastest memory possible.
