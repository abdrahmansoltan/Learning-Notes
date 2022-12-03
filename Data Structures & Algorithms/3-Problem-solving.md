# INDEX

- [INDEX](#index)
  - [Problem Solving](#problem-solving)
    - [Problem Solving Patterns](#problem-solving-patterns)
      - [Frequency Counter](#frequency-counter)
      - [Multiple Pointers](#multiple-pointers)
      - [Sliding Window](#sliding-window)
      - [Divide and Conquer](#divide-and-conquer)
      - [Dynamic Programming](#dynamic-programming)
      - [Greedy Algorithms](#greedy-algorithms)
      - [Backtracking](#backtracking)
  - [Testing and Debugging](#testing-and-debugging)
    - [Testing](#testing)
      - [Test fail situations](#test-fail-situations)
      - [Testing order](#testing-order)
    - [Debugging](#debugging)

---

## Problem Solving

![problem solving steps](./img/problem-solving.png)

### Problem Solving Patterns

#### Frequency Counter

- uses objects or sets to collect Values/frequencies of Values
- this can often avoid the need for nested loops or `O(n^2)` operations with arrays / strings
- this is done by: instead of looping over the first array and then checking for each value in a sub-loop over the second array, we can loop over each array one time individually.
  - this will give us `O(2n) ~= O(n)` instead of `O(n^2)`

---

#### Multiple Pointers

Creating pointers or values that correspond to an `index` or `position` and move towards the beginning, and/or middle based on certain condition

- very efficient for solving problems with minimal **space-complexity**.
- `EX`: function that accepts **sorted** array of integers and find the first pair where the sum is `0`.

  - instead of creating nested-loop to check for every element and the elements after it, we can use the `multiple pointers` pattern
  - here we select 2 pairs(first and last elements of the array) as the array is sorted(they will be smallest and biggest number)
  - then we check these pair for the desired condition, and if not we change one of the numbers in pair and check again and so on...

  ```py
  # time-complexity: O(n), space-complexity: O(1)
  def sum_zero(arr):
    left = 0
    right = len(arr) -1
    while left < right:
      sum = arr[left] + arr[right]
      if sum == 0:
        return [arr[left], arr[right]]
      elif sum > 0:
        right -= 1 # as the right is the bigger number as arr is sorted
      else:
        left += 1 # as the left is the smaller number as arr is sorted
  ```

---

#### Sliding Window

this pattern involves creating a window which can either be an array or number from one position to another

- depending on a certain condition, the window either increases or closes (and a new window is created)
- very useful for keeping track of a subset of data in an `array`/`string`

![sliding-window](./img/sliding-window1.jpg)

- EX: finding max-sum of window of 3 elements in an array:
  - instead of summing the first 3 elements and then do a nested loop to check for the remaining sum of windows -> `O(n^2`
  - we instead use a "sliding-window" pattern to keep track of the sum of the window and then compare it with a temporary sum of other windows
    - the sum here is calculated by not looping again, but with subtracting the previous number and adding the next number
      ![sliding-window](./img/sliding-window2.jpeg)

---

#### Divide and Conquer

This pattern involves dividing a dataset into smaller chunks and then repeating a process with a subset of data

- this pattern can tremendously decrease **time-complexity**
- EX: **Binary Search**

---

#### Dynamic Programming

#### Greedy Algorithms

#### Backtracking

---

## Testing and Debugging

Testing is the process of experimentally checking the correctness of a program, while debugging is the process of tracking the execution of a program and discovering the errors in it.

### Testing

- we should aim at executing the program on a representative subset of `inputs`. At the very minimum, we should make sure that every method of a class is tested at least once (**method coverage**). Even better, each code statement in the program should be executed at least once (statement coverage).

#### Test fail situations

Programs often tend to fail on a lot of situations like these:

- special **inputs** to the program
  - For example, when testing a method that `sorts` a sequence of integers, we should consider the following inputs:
    - The sequence has zero length (no elements).
    - The sequence has one element.
    - All the elements of the sequence are the same.
    - The sequence is already sorted.
    - The sequence is reverse sorted.
- special conditions for the **structures** used by the program:
  - For example, if we use a Python list to store data, we should make sure that **boundary cases**, such as `inserting` or `removing` at the beginning or end of the list, are properly handled.

#### Testing order

The dependencies among the classes and functions of a program induce a hierarchy. Namely, a component A is above a component B in the hierarchy if A depends upon B, such as when function A calls function B, or function A relies on a parameter that is an instance of class B. There are two main testing strategies, **top-down** and **bottom-up**, which differ in the order in which components are tested.

- **Top-down** testing proceeds from the top to the bottom of the program hierarchy. It is typically used in conjunction with **stubbing**, a boot-strapping technique that replaces a lower-level component with a **"stub"**,
  - > `stub`: a replacement for the component that simulates the functionality of the original.
  - > For example, if function A calls function B to get the first line of a file, when testing A we can replace B with a stub that returns a fixed string.
- **Bottom-up** testing proceeds from lower-level components to higher-level components. For example, bottom-level functions, which do not invoke other functions, are tested first, followed by functions that call only bottom-level functions, and so on. Similarly a class that does not depend upon any other classes can be tested before another class that depends on the former. This form of testing is usually described as **"unit testing"**,
  - as the functionality of a specific component is tested in isolation of the larger software project.

---

### Debugging

The simplest debugging technique consists of using `print` statements to track the values of variables during the execution of the program. A problem with this approach is that eventually the print statements need to be removed or commented out, so they are not executed when the software is finally released.

A better approach is to run the program within a **debugger**, which is a specialized environment for controlling and monitoring the execution of a program. The basic functionality provided by a debugger is the insertion of breakpoints within the code. When the program is executed within the debugger, it stops at each breakpoint. While the program is stopped, the current value of variables can be inspected.
