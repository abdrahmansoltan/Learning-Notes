# INDEX

- [INDEX](#index)
  - [Problem Solving](#problem-solving)
    - [Problem Solving Patterns](#problem-solving-patterns)
      - [Frequency Counter](#frequency-counter)
      - [Two Pointers (multiple pointers)](#two-pointers-multiple-pointers)
      - [Sliding Window](#sliding-window)
      - [Monotonic decreasing stack](#monotonic-decreasing-stack)
      - [Monotonic decreasing queue](#monotonic-decreasing-queue)
      - [Divide and Conquer](#divide-and-conquer)
        - [Inductive proofs](#inductive-proofs)
      - [Dynamic Programming](#dynamic-programming)
      - [Greedy Algorithms](#greedy-algorithms)
      - [Backtracking](#backtracking)
  - [Testing and Debugging](#testing-and-debugging)
    - [Testing](#testing)
      - [Test fail situations](#test-fail-situations)
      - [Testing order](#testing-order)
    - [Debugging](#debugging)
  - [String](#string)
    - [Substring (Sliding Window)](#substring-sliding-window)
      - [Longest Substring Without Repeating Characters](#longest-substring-without-repeating-characters)
      - [Longest Repeating Character Replacement](#longest-repeating-character-replacement)
      - [Count Vowel Substrings of a String](#count-vowel-substrings-of-a-string)
      - [Minimum Window Substring](#minimum-window-substring)
    - [Reversing Problems](#reversing-problems)
      - [Palindrome](#palindrome)
      - [Reverse Integer](#reverse-integer)
  - [Arrays](#arrays)
    - [Modify array in plave](#modify-array-in-plave)
      - [Remove Duplicates From Sorted Array](#remove-duplicates-from-sorted-array)
      - [Remove Element](#remove-element)
    - [Array chunk (split array into smaller chunks)](#array-chunk-split-array-into-smaller-chunks)
    - [Array Sums](#array-sums)
      - [Two Sum II](#two-sum-ii)
      - [Three Sum](#three-sum)
      - [4 Sum](#4-sum)
      - [Continuous SubArray Sum](#continuous-subarray-sum)
    - [Product of Array Except Self](#product-of-array-except-self)
    - [Container with most water](#container-with-most-water)
    - [Trapping Rain Water](#trapping-rain-water)
      - [Solution 1: Extra memory used (O(n) space)](#solution-1-extra-memory-used-on-space)
      - [Solution 2: Two pointers Less memory used (O(1) space)](#solution-2-two-pointers-less-memory-used-o1-space)
    - [Interval scheduling problems (overlapping intervals)](#interval-scheduling-problems-overlapping-intervals)
      - [Meeting Rooms](#meeting-rooms)
      - [Meeting Rooms II](#meeting-rooms-ii)
    - [Matrix](#matrix)
      - [Rotate Image](#rotate-image)
      - [Create a Spiral Matrix](#create-a-spiral-matrix)
      - [Return elements of Spiral Matrix](#return-elements-of-spiral-matrix)
  - [Queues and Stacks](#queues-and-stacks)
    - [Queue](#queue)
      - [Queue using two stacks](#queue-using-two-stacks)
      - [Sliding Window Maximum](#sliding-window-maximum)
    - [Stacks](#stacks)
      - [Next Greater Element I](#next-greater-element-i)
      - [Next Greater Element II](#next-greater-element-ii)
      - [Daily Temperatures](#daily-temperatures)
  - [Heaps](#heaps)
    - [Kth Largest Element in an Array](#kth-largest-element-in-an-array)
    - [K Closest Points to Origin](#k-closest-points-to-origin)
    - [Top K Frequent Elements](#top-k-frequent-elements)
      - [Solution 1: using Heap](#solution-1-using-heap)
      - [Solution 2: using Bucket Sort](#solution-2-using-bucket-sort)
    - [Top K Frequent Words](#top-k-frequent-words)
    - [Reorganize String](#reorganize-string)
    - [Find Median from Data Stream](#find-median-from-data-stream)
  - [Linked Lists](#linked-lists)
    - [Singly Linked List](#singly-linked-list)
      - [Reverse a Linked List](#reverse-a-linked-list)
      - [Middle Point of a Linked List](#middle-point-of-a-linked-list)
      - [Circular Linked List](#circular-linked-list)
      - [From Last](#from-last)
      - [Merge Two Sorted Linked Lists](#merge-two-sorted-linked-lists)
      - [Merge k Sorted Lists](#merge-k-sorted-lists)
      - [Reorder List](#reorder-list)
    - [Doubly Linked List](#doubly-linked-list)
      - [Design Browser History](#design-browser-history)
  - [Hash Tables](#hash-tables)
    - [Two sum](#two-sum)
    - [Valid Anagram](#valid-anagram)
    - [Group Anagrams](#group-anagrams)
    - [Unique Number of Occurrences](#unique-number-of-occurrences)
    - [Contains Duplicate II](#contains-duplicate-ii)
    - [Missing Number](#missing-number)
    - [Find the Duplicate Number](#find-the-duplicate-number)
    - [Verifying an Alien Dictionary](#verifying-an-alien-dictionary)
    - [Hand of Straights](#hand-of-straights)
    - [Letter combinations of a phone number](#letter-combinations-of-a-phone-number)
    - [4Sum II](#4sum-ii)
  - [Trees](#trees)
    - [General Tree Questions](#general-tree-questions)
      - [Level Width](#level-width)
      - [Number of islands](#number-of-islands)
      - [Path Sum](#path-sum)
      - [Symmetric Tree](#symmetric-tree)
      - [Lowest Common Ancestor of a Binary Tree](#lowest-common-ancestor-of-a-binary-tree)
      - [Vertical Order Traversal of a Binary Tree](#vertical-order-traversal-of-a-binary-tree)
      - [Flatten Binary Tree to Linked List](#flatten-binary-tree-to-linked-list)
    - [Binary Search Trees (BST)](#binary-search-trees-bst)
      - [BST Insertion](#bst-insertion)
      - [Validate BST](#validate-bst)
      - [Binary Tree Inorder Traversal](#binary-tree-inorder-traversal)
      - [Binary Tree Postorder Traversal](#binary-tree-postorder-traversal)
      - [Maximum Depth of Binary Tree](#maximum-depth-of-binary-tree)
      - [Check Completeness of a Binary Tree](#check-completeness-of-a-binary-tree)
      - [Binary Tree Zigzag Level Order Traversal](#binary-tree-zigzag-level-order-traversal)
      - [Sum of Left Leaves](#sum-of-left-leaves)
      - [Diameter of Binary Tree](#diameter-of-binary-tree)
      - [Minimum Absolute Difference in BST](#minimum-absolute-difference-in-bst)
      - [Invert Binary Tree](#invert-binary-tree)
      - [Kth Smallest Element in a BST](#kth-smallest-element-in-a-bst)
      - [Lowest Common Ancestor of a Binary Search Tree](#lowest-common-ancestor-of-a-binary-search-tree)
  - [Tries](#tries)
    - [Implement Trie (Prefix Tree)](#implement-trie-prefix-tree)
  - [Creating Shapes](#creating-shapes)
    - [Steps shape](#steps-shape)
    - [Pyramid](#pyramid)
    - [Solution 1 - using for loops](#solution-1---using-for-loops)
      - [Solution 2 - using recursion](#solution-2---using-recursion)
  - [Numbers](#numbers)
    - [Climbing Stairs](#climbing-stairs)
    - [Partitioning Into Minimum Number Of Deci-Binary Numbers](#partitioning-into-minimum-number-of-deci-binary-numbers)
    - [Series](#series)
      - [Fibonacci Number](#fibonacci-number)
        - [Recursion solution steps](#recursion-solution-steps)
        - [Fibonacci looping solution](#fibonacci-looping-solution)

---

## Problem Solving

- Problem Solving Steps:

  1. Understand the problem
  2. Explore concrete examples (test cases) and verify the constraints (if any) and edge cases, Ex:

     - When dealing with numbers: we may ask if the number is positive or negative, or if it is an integer or a decimal.
     - we may ask if there're duplicates in the input
     - will there always be a result or can there be no result? and what to return in that case?

  3. Break it down
  4. Solve/Simplify

     - first write a brute force solution
     - then test it with the test cases
     - then optimize it

  5. Look back and refactor and double-check for errors
  6. Analyze the time and space complexity of the solution
     - Check if the input size in increased, how much will the time and space complexity increase?
     - If you found that:
       - the time complexity is `O(n^2)` or `O(n^3)` or `O(2^n)` or `O(n!)`
       - and the space complexity is `O(n)` or `O(1)
       - then you can try to optimize it by using the`Problem Solving Patterns` below. and use some space to save time.

---

### Problem Solving Patterns

#### Frequency Counter

- uses objects or sets to collect Values/frequencies of Values
- this can often avoid the need for nested loops or `O(n^2)` operations with arrays / strings
- this is done by: instead of looping over the first array and then checking for each value in a sub-loop over the second array, we can loop over each array one time individually.
  - this will give us `O(2n) ~= O(n)` instead of `O(n^2)`

---

#### Two Pointers (multiple pointers)

Creating pointers or values that correspond to an `index` or `position` and move towards the beginning, and/or middle based on certain condition

![two pointers](./img/two-pointers.png)

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

#### Monotonic decreasing stack

![monotonic-decreasing-stack](./img/monotonic-decreasing-stack-1.png)

It's a stack that is always sorted in a decreasing order, so the top of the stack is always the smallest element in the stack

- usually used in problems that require finding the next greater/smaller element in an array
  ![monotonic-decreasing-stack](./img/monotonic-decreasing-stack-2.png)

---

#### Monotonic decreasing queue

It's a queue that is always sorted in a decreasing order, so the front of the queue is always the smallest element in the queue

- usually used in problems that require finding the next greater/smaller element in an array

---

#### Divide and Conquer

This pattern involves dividing a dataset into smaller chunks and then repeating a process with a subset of data

- How it works:

  1. Figure out a simple case as the base case
  2. Figure out how to reduce your problem and get to the base case

- Divide and conquer algorithms are often recursive algorithms, To solve a problem using `D&C`, we need to:

  1. Divide (decrease) the problem into a number of subproblems that are smaller instances of the same problem until it becomes the base case.
  2. Conquer the subproblems by solving them recursively. If they are small enough, solve the subproblems as base cases.
  3. Combine the solutions to the subproblems into the solution for the original problem.

- this pattern can tremendously decrease **time-complexity**
- EX: **Binary Search**, **Merge Sort**, **Quick Sort**

##### Inductive proofs

**Inductive proofs** are a way to prove that an algorithm works and involve two steps - the base case and the inductive case. In the case of quicksort, the algorithm's effectiveness is proven for arrays of different sizes through the base case and the inductive case. Inductive proofs are considered fun and complement the Divide and Conquer technique.

- Ex: for `quicksort`. In the base case, The algorithm works for the base case: arrays of size `0` and `1`. In the inductive case, It's shown that if quicksort works for an array of size `1`, it will work for an array of size `2`. And if it works for arrays of size `2`, it will work for arrays of size `3`, and so on. hen I can say that quicksort will work for all arrays of any size.

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

---

## String

### Substring (Sliding Window)

#### Longest Substring Without Repeating Characters

Given a string `s`, find the length of the **longest substring** without repeating characters.

- EX: `s = "abcabcbb"` -> `3` (substring: `"abc"`)
- we can use a **sliding-window** pattern to check for all the substrings of the string
  ![longest-substring](./img/longest-substring-1.png)
  ![longest-substring](./img/longest-substring-2.png)

```py
def lengthOfLongestSubstring(s):
    # Initialize a set to keep track of the characters in the current window
    window = set()

    # Initialize the sliding-window with the first character in the string
    ans = 0
    left = 0

    # Iterate over the string
    for right in range(len(s)):
        # If the current character is in the window, remove it and slide the window
        while s[right] in window:
            window.remove(s[left])
            # Slide the window to the right
            left += 1

        # Add the current character to the window
        window.add(s[right])

        # Update the maximum window size
        ans = max(ans, right - left + 1)

    return ans
```

---

#### Longest Repeating Character Replacement

You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

- EX: `s = "AABABBA", k = 1` -> `4` (substring: `"AABA"`)
- Explanation:

  - We can choose any of the underlined characters in the string, and turn them into 'B': "AABABBA" -> "AABBBBA"
  - After doing so, we have the longest substring of one repeating character of length `4`.

- **Steps:**
  ![longest-char-replacement](./img/longest-char-replacement-1.png)
  1. we want to replace the (least frequent characters) in the current window with the (most frequent character in the window)
  2. to do this, we will need to keep track of the (character frequencies) inside the current window
  3. and check the `window length` against the `max character frequency` to see if the window is valid (valid means `<= k`)

![longest-char-replacement](./img/longest-char-replacement-2.png)
![longest-char-replacement](./img/longest-char-replacement-3.png)
![longest-char-replacement](./img/longest-char-replacement-4.png)
![longest-char-replacement](./img/longest-char-replacement-5.png)
![longest-char-replacement](./img/longest-char-replacement-7.png)
![longest-char-replacement](./img/longest-char-replacement-8.png)

```py
# O(n)
def characterReplacement(s, k):
    # Initialize a dictionary to keep track of the characters in the current window
    char_count = {}

    # Initialize the sliding-window with the first character in the string
    ans = 0
    left = 0
    max_character_frequency = 0

    # Iterate over the string
    for right in range(len(s)):
        # Add the current character to the window if it is not already in it
        char_count[s[right]] = char_count.get(s[right], 0) + 1

        # Update the maximum window size
        max_character_frequency = max(max_character_frequency, char_count[s[right]])

        # If the current window is invalid, slide the window to the right until it becomes valid
        while right - left + 1 - max_character_frequency > k:
            char_count[s[left]] -= 1
            # Slide the window to the right
            left += 1

        # Update the maximum window size if window is valid
        ans = max(ans, right - left + 1)

    return ans
```

---

#### Count Vowel Substrings of a String

Given a string `s` return the number of substrings that have **all vowels** in order.

- EX: `s = "abciiidef"` -> `3` (substrings: `"ae"`, `"ei"`, `"iii"`)
- Steps:
  - we can use a **sliding-window** pattern to check for all the substrings of the string
  - then we check these pair for the desired condition, and if not we change one of the numbers in pair and check again and so on...

```py
def countVowelSubstrings(word):
    # Store vowels in a set for O(1) lookup.
    vowels = {'a', 'e', 'i', 'o', 'u'}

    # Initialize the sliding-window with the first vowel in the string and the last vowel in the string
    ans = 0
    last_consonant = -1

    # Initialize a dictionary to keep track of the last seen vowel
    last_seen_vowels = {v: -2 for v in vowels} # -2 is the smallest possible index

    for i, x in enumerate(word):
        # If the current character is a consonant, update the last_consonant variable.
        if x not in vowels:
            last_consonant = i
        # Otherwise, we've found a vowel.
        else:
            # Update the last_seen_vowels dictionary with the current index.
            last_seen_vowels[x] = i
            # Update the answer variable with the maximum of the current value and the minimum of the last seen vowel's
            # index and the last consonant's index.
            ans += max(min(last_seen_vowels.values())-last_consonant, 0)
    return ans
```

---

#### Minimum Window Substring

Given two strings `s` and `t` of lengths `m` and `n` respectively, return the **minimum window substring** of `s` such that every character in `t` (**including duplicates**) is included in the window. If there is no such substring, return the empty string `""`.

- EX: `s = "ADOBECODEBANC", t = "ABC"` -> `"BANC"`
- Explanation:

  - The minimum window substring `"BANC"` includes `'A'`, `'B'`, and `'C'` from string `t`.

- **Steps:**
  ![min-window-substring](./img/min-sindow-substring-1.png)

  1. we want to find the smallest window in `s` that contains all the characters in `t`
  2. we can use a **sliding-window** pattern to check for all the substrings of the string
  3. then we check these pair for the desired condition, and if not we change one of the numbers in pair and check again and so on...

  - **Condition:** check if the current window contains all the characters in `t`
    - this is done by checking if the frequency of **each** character in the window in the `char_count` dictionary is greater than or equal to the frequency of the same character in the `target_count` dictionary
      - if we have enough of each character in the window, then we have a valid window
      - if not, then we need to slide the window **to the right** until we have a valid window

- **Slow Solution** (checks the entire character count dictionary for each character in the string each time)

  ```py
  # O(n)
  def minWindow(s, t):
      # Initialize dictionaries to keep track of the characters in the current window and the target string
      char_count = {}
      target_count = {}

      for c in t:
          target_count[c] = target_count.get(c, 0) + 1

      # Initialize the sliding-window with the first character in the string
      ans = ""
      min_window_size = float('inf')
      left = 0

      # Iterate over the string
      for right in range(len(s)):
          # Add the current character to the window if it is not already in it
          char = s[right]
          char_count[char] = char_count.get(char, 0) + 1

          # If the current window is invalid, slide the window to the right until it becomes valid
          while all(char_count.get(char, 0) >= target_count.get(char, 0) for char in target_count):
              # Update the minimum window size
              if right - left + 1 < min_window_size:
                  min_window_size = right - left + 1
                  ans = s[left:right+1]

              # keep popping values from the left until we have a valid window
              char_count[s[left]] -= 1
              # Slide the window to the right
              left += 1

      return ans
  ```

- **Faster Solution** (uses a counter to keep track of the number of characters in the window that are also in the target string) -> `have` and `need` counters

  - first, we initialize the `have` and `need` counters to `0` and `len(target_count)` respectively and we iterate over the string `s` using the sliding-window pattern
    ![min-window-substring](./img/min-sindow-substring-2.png)
    ![min-window-substring](./img/min-sindow-substring-3.png)
    ![min-window-substring](./img/min-sindow-substring-4.png)
    ![min-window-substring](./img/min-sindow-substring-5.png)
  - then if `have` is equal to `need` we have a valid window and we can update the answer, and try to find a smaller window by moving the left pointer to the right
    ![min-window-substring](./img/min-sindow-substring-6.png)

  ```py
  # O(n)
  def minWindow(s, t):
      # edge case
      if t == "": return ""

      # Initialize dictionaries to keep track of the characters in the current window and the target string
      window_char_count = {}
      target_count = {}

      for c in t:
          target_count[c] = target_count.get(c, 0) + 1

      # Initialize the sliding-window with the first character in the string
      ans = ""
      min_window_size = float('inf')
      left = 0
      have, need = 0, len(target_count) # have is the number of characters in the window that are also in the target string

      # Iterate over the string
      for right in range(len(s)):
          # Add the current character to the window if it is not already in it
          char = s[right]
          window_char_count[char] = window_char_count.get(char, 0) + 1

          # if the current character is in the target string and the number of times it appears in the window is equal to the number of times it appears in the target string, then we have one more character in the window that is also in the target string
          if char in target_count and window_char_count[char] == target_count[char]:
              have += 1

          # here we only check if the current window is valid if we have all the characters in the target string in the window instead in the slow solution where we check if the current window is valid for each character in the string
          while have == need:
              # Update the minimum window size
              windowSize = right - left + 1
              if windowSize < min_window_size:
                  min_window_size = windowSize
                  ans = s[left : right+1]

              # keep popping values from the left until we have a valid window
              window_char_count[s[left]] -= 1
              # if the current character is in the target string and the number of times it appears in the window is less than the number of times it appears in the target string, then we have one less character in the window that is also in the target string
              if s[left] in target_count and window_char_count[s[left]] < target_count[s[left]]:
                  have -= 1
              # Slide the window to the right
              left += 1

      return ans
  ```

---

### Reversing Problems

#### Palindrome

A palindrome is a word, phrase, number, or other sequence of characters which **reads the same backward or forward**. Allowances may be made for adjustments to capital letters, punctuation, and word dividers.

- EX: `racecar`, `tacocat`, `madam`, `kayak`, `level`
- Here's a possible approach to solve this problem:

  1. Convert the string to lowercase to ignore any case differences.
  2. Remove any non-alphanumeric characters from the string.

     - > **Note:** numbers within the string will be considered alphanumeric.

  3. Use two pointers to iterate through the string from both ends.
  4. Compare the characters at each pointer position. If they are not equal, the string is not a palindrome. If they are equal, move both pointers towards the center of the string.
  5. If the pointers meet in the middle of the string, the string is a palindrome.

```py
# using two pointers
# helper
def isAlphaNum(char):
            # using ASCII values
           return (ord('A') <= ord(char) <= ord('Z') or
                   ord('a') <= ord(char) <= ord('z') or
                   ord('0') <= ord(char) <= ord('9'))
# or use the built-in isalnum() string-method

def is_palindrome(s):
  # First & last pointers
  left, right = 0, len(s)-1

  while left < right:
    if not isAlphaNum(s[left]):
      left += 1
    elif not isAlphaNum(s[right]):
      right -= 1
    elif s[left].lower() != s[right].lower():
      return False
    else:
      left += 1
      right -= 1

  return True

# --------------------------------------------------

# Or: using regex and all() function to check if all elements in an iterable are True
def is_palindrome(s):
    s = s.lower().replace(r'[^a-z0-9]', '')
    return all(s[i] == s[-i-1] for i in range(len(s)//2))
```

---

#### Reverse Integer

1. Convert the integer to a string to access its individual digits.
2. Reverse the string using a string slicing operation.
3. Convert the reversed string back to an integer using the int() function.
4. Handle potential overflow by checking whether the reversed integer is within the range of a 32-bit signed integer (-2^31 to 2^31-1).

```py
def reverse_integer(num):
    sign = -1 if x < 0 else 1
      s = str(x)[::-1] # reverse the string using slicing
      # separate the sign from the rest of the reversed string before converting it to an integer if we have a negative sign at the end if the original integer (e.g. 123-)
      rev = sign * int(s[:-1]) if s[-1] == '-' else sign * int(s)
      if rev < -2147483648 or rev > 2147483647: # check for overflow
          return 0
      else:
          return rev
```

---

## Arrays

### Modify array in plave

#### Remove Duplicates From Sorted Array

Given a sorted array `nums`, remove the duplicates **in-place** such that each element appears only once and returns the new length.

- Ex:

  - `nums = [1,1,2]` -> `2` (nums = [1,2])
  - `nums = [0,0,1,1,1,2,2,3,3,4]` -> `5` (nums = [0,1,2,3,4])

- Explanation:
  ![remove duplicates](./img/remove-duplicates-1.png)
  - we can use a **two pointers** pattern to check for all the elements in the array
  - we can use the first pointer to keep track of the last unique element in the array
  - and the second pointer to iterate over the array and check if the current element is equal to the last unique element
  - if it is, then we skip it, if not, then we increment the last unique index **and then** update the last unique element

```py
def removeDuplicates(nums):
    if len(nums) == 0: return 0

    # initialize the index of the last unique element
    last_unique = 0

    for i in range(1, len(nums)):
        # if the current element is not equal to the last unique element, increment the last unique index and then update the last unique element
        if nums[i] != nums[last_unique]:
            last_unique += 1
            nums[last_unique] = nums[i]

    # return the length of the array
    return last_unique + 1
```

---

#### Remove Element

Given an array `nums` and a value `val`, remove all instances of that value **in-place** and return the new length.

- Ex:

  - `nums = [3,2,2,3], val = 3` -> `2` (`nums = [2,2]`)

- Explanation:
  - we can use a **two pointers** pattern to check for all the elements in the array
  - we can use the first pointer to keep track of the last non-val element in the array
  - and the second pointer to iterate over the array and check if the current element is equal to val
  - if it is, then we skip it, if not, then we update the last non-val element **and then** update the last non-val index

```py
def removeElement(nums, val):
    # initialize the index of the last non-val element
    last_non_val = 0

    for i in range(len(nums)):
        # if the current element is not equal to val, update the last non-val element and then increment the last non-val index
        if nums[i] != val:
            nums[last_non_val] = nums[i]
            last_non_val += 1

    # return the length of the array
    return last_non_val
```

---

### Array chunk (split array into smaller chunks)

Given an array and chunk size, divide the array into many subarrays where each subarray is of length size.

- EX: `chunk([1, 2, 3, 4], 2) --> [[1, 2], [3, 4]]`

```py
def chunk(arr, size):
    chunked = []
    for i in range(0, len(arr), size):
        chunked.append(arr[i:i+size])
        # i += size # without the iteration-step
    return chunked

# --------------------------OR-----------------------------------

def chunk(arr, size):
    result = []
    subarray = []
    for i in arr:
        subarray.append(i)
        # if the subarray is full, append it to the result and reset the subarray
        if len(subarray) == size:
            result.append(subarray)
            subarray = []
    if subarray:
        result.append(subarray)
    return result
```

---

### Array Sums

#### Two Sum II

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 <= numbers.length`.

- EX: `nums = [2, 7, 11, 15], target = 9` --> `[0, 1]` because `nums[0] + nums[1] == 9`

```py
def two_sum(numbers, target):
    # Set the left and right pointers
    left = 0
    right = len(numbers) - 1

    while left < right:
        # If the sum of the left and right pointers is the target, return the indices adding 1 to each since the problem is 1-indexed
        if numbers[left] + numbers[right] == target:
            return [left + 1, right + 1]
        elif numbers[left] + numbers[right] < target:
            left += 1
        else:
            right -= 1
    # If the target was not found, return [-1, -1]
    return [-1, -1]
```

---

#### Three Sum

Given an array `nums` of n integers, are there elements a, b, c in `nums` such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

- EX: `nums = [-1, 0, 1, 2, -1, -4]` --> `[[-1, 0, 1], [-1, -1, 2]]`
- **Steps:**
  ![3sum](./img/3sum.png)

  - Sort the array
  - Loop through the array
    - If the current value is the same as the previous value, skip it, because we've already tried it (To avoid duplicates)
    - Set left and right pointers to find the other two values
    - If the sum is less than zero, move the left pointer to the right to get a larger value
    - If the sum is greater than zero, move the right pointer to the left to get a smaller value
    - If the sum is zero, append the three values to the result
    - Move the left and right pointers to the next unique values to avoid duplicates

- Method 1:

  - sort the input array first. Use two pointers to find the third element that sums to zero, instead of iterating over all possible pairs of elements. Avoid generating duplicate triplets by skipping over duplicates in the input array and avoiding identical pairs of i, `j`, `k` values.

  ```py
  # Time: O(nlog(n)) + O(n^2) = O(n^2)
  def three_sum(nums):
      nums.sort()
      result = []

      for i in range(len(nums)):
          # if the current value is the same as the previous value, skip it, because we've already tried it (To avoid duplicates)
          if i > 0 and nums[i] == nums[i-1]:
              continue

          # set left and right pointers to find the other two values
          left, right = i+1, len(nums)-1
          while left < right:
              total = nums[i] + nums[left] + nums[right]
              # if the sum is less than zero, move the left pointer to the right to get a larger value
              if total < 0:
                  left += 1
              # if the sum is greater than zero, move the right pointer to the left to get a smaller value
              elif total > 0:
                  right -= 1
              # otherwise, we have found the triplet
              else:
                  result.append([nums[i], nums[left], nums[right]])
                  # move both pointers to the middle to see if we have more triplets
                  left += 1
                  right -= 1
                  # skip duplicates
                  while left < right and nums[left] == nums[left-1]:
                      left += 1
                  while left < right and nums[right] == nums[right+1]:
                      right -= 1
      return result
  ```

- Method 2:

  - use three pointers to iterate through the array. Fix `i` at the start and use `j` and `k` to find a pair of elements that sum to the negation of the value at index `i`. Move `j` and `k` towards each other until they meet or the sum is greater than or equal to zero. Add the triplet to a set to remove duplicates. Move `i` to the next unique value and repeat the process.

  ```py
  # Time: O(nlog(n)) + O(n^2) = O(n^2)
  def three_sum(nums):
      result = set()
      nums.sort()

      for i in range(len(nums)):
          # if the current value is the same as the previous value, skip it, because we've already tried it (To avoid duplicates)
          if i > 0 and nums[i] == nums[i-1]:
              continue

          # set left and right pointers to find the other two values
          left, right = i+1, len(nums)-1
          while left < right:
              total = nums[i] + nums[left] + nums[right]
              # if the sum is less than zero, move the left pointer to the right to get a larger value
              if total < 0:
                  left += 1
              # if the sum is greater than zero, move the right pointer to the left to get a smaller value
              elif total > 0:
                  right -= 1
              # otherwise, we have found the triplet
              else:
                  result.add((nums[i], nums[left], nums[right]))
                  # move both pointers to the middle to see if we have more triplets
                  left += 1
                  right -= 1
      return result
  ```

---

#### 4 Sum

Given an array `nums` of `n` integers, return an array of all the **unique** quadruplets `[nums[a], nums[b], nums[c], nums[d]]` such that:

- `0 <= a, b, c, d < n`
- `a`, `b`, `c`, and `d` are **distinct**.
- `nums[a] + nums[b] + nums[c] + nums[d] == target`

You may return the answer in **any order**.

- EX: `nums = [1, 0, -1, 0, -2, 2], target = 0` --> `[[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]`

- **Steps:**
  ![4sum](./img/4sum.png)

  - Sort the array
  - Loop through the array
    - If the current value is the same as the previous value, skip it, because we've already tried it (To avoid duplicates)
    - Set left and right pointers to find the other three values
    - If the sum is less than zero, move the left pointer to the right to get a larger value
    - If the sum is greater than zero, move the right pointer to the left to get a smaller value
    - If the sum is zero, append the four values to the result
    - Move the left and right pointers to the next unique values to avoid duplicates

```py
# Time: O(n^3)

def four_sum(nums, target):
    nums.sort()
    result = []

    for i in range(len(nums)):
        # if the current value is the same as the previous value, skip it, because we've already tried it (To avoid duplicates)
        if i > 0 and nums[i] == nums[i-1]:
            continue

        for j in range(i+1, len(nums)):
            # if the current value is the same as the previous value, skip it, because we've already tried it (To avoid duplicates)
            if j > i+1 and nums[j] == nums[j-1]:
                continue

            # set left and right pointers to find the other two values
            left, right = j+1, len(nums)-1
            while left < right:
                total = nums[i] + nums[j] + nums[left] + nums[right]
                # if the sum is less than zero, move the left pointer to the right to get a larger value
                if total < target:
                    left += 1
                # if the sum is greater than zero, move the right pointer to the left to get a smaller value
                elif total > target:
                    right -= 1
                # otherwise, we have found the quadruplet
                else:
                    result.append([nums[i], nums[j], nums[left], nums[right]])
                    # move both pointers to the middle to see if we have more quadruplets
                    left += 1
                    right -= 1
                    # skip duplicates
                    while left < right and nums[left] == nums[left-1]:
                        left += 1
                    while left < right and nums[right] == nums[right+1]:
                        right -= 1
    return result
```

---

#### Continuous SubArray Sum

Given an integer array `nums` and an integer `k`, return `true` if `nums` has a continuous subarray of size at least two whose elements sum up to a multiple of `k`, or `false` otherwise.

An integer `x` is a multiple of `k` if there exists an integer `n` such that `x = n * k`. `0` is **always** a multiple of `k`.

- EX: `nums = [23, 2, 4, 6, 7], k = 6` --> `true` because `[2, 4]` is a continuous subarray of size 2 and sums up to 6 which is a multiple of 6.

- the brute force solution is to loop through the array and check every possible subarray, but that would be O(n^2) time complexity
- But we can solve it in O(n) time complexity using a dictionary to store the `remainder` and its ending `index`:
  - If the `remainder` is in the dictionary, check if the difference between the current index and the index of the `remainder` is greater than 1
    ![continuous-subarray-sum](./img/continuous-subarray-sum.png)
    - if so, return `True` as we have found a continuous subarray of size at least two whose elements sum up to a multiple of `k`
    - because if the remainder is in the dictionary, that means we have seen it before, and the difference between the current index and the index of the `remainder` is the size of the subarray **because the sum of the elements between the two indices is a multiple of `k`**
    - and if the difference is greater than 1, that means there is at least one element between the two indices, and the sum of the elements between the two indices is a multiple of `k`
  - If the `remainder` is not in the dictionary, add it to the dictionary
    - If the `remainder` is not in the dictionary, that means we have not seen it before, so we add it to the dictionary
  - > **Note:** We initialize the dictionary with `0: -1` because the sum of the first element is 0 and the size of the subarray must be at least 2 and if the first element is a multiple of `k`, we will get index as 0 and 0 - (-1) = 1 which is not greater than 1, so we need to initialize the dictionary with `0: -1` to avoid this case

```py
def check_subarray_sum(nums, k):
    # Create a dictionary to store the remainder and its index
    remaindersDict = {0: -1} # Initialize the dictionary with 0: -1 because the sum of the first element is 0 and the size of the subarray must be at least 2
    total = 0

    for i in range(len(nums)):
        total += nums[i]
        # If k is not 0, get the remainder of the sum by dividing by k
        if k != 0:
            remainder = total % k
        # If the remainder is in the dictionary, check if the difference between the current index and the index of the remainder is greater than 1 -> len(subarray) >= 2
        if remainder not in remaindersDict:
            # If the remainder is not in the dictionary, add it to the dictionary
            remaindersDict[remainder] = i
        elif i - remaindersDict[remainder] > 1:
            return True

    return False
```

---

### Product of Array Except Self

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

- EX: `nums = [1, 2, 3, 4]` --> `answer = [24, 12, 8, 6]`

  - `answer[0] = 2 * 3 * 4 = 24`
  - `answer[1] = 1 * 3 * 4 = 12`
  - `answer[2] = 1 * 2 * 4 = 8`
  - `answer[3] = 1 * 2 * 3 = 6`

- **Steps**:

  1. Brute force solution:

     - Loop through the array and multiply all the elements except the current element
     - Time complexity: `O(n^2)`
     - Space complexity: `O(n)`

  2. Optimal solution:
     ![array-product-except-self](./img/array-product-1.png)
     ![array-product-except-self](./img/array-product-2.jpg)

     - We can use two arrays to store the products of the elements to the left and right of the current element -> `prefix` and `postfix`
     - Then we can multiply the elements of the two arrays to get the final result
     - Time complexity: `O(n)`
     - Space complexity: `O(n)`

```py
def product_except_self(nums):
    # Create two arrays to store the products of the elements to the left and right of the current element
    prefix = [1] * len(nums) # Initialize the array with 1 because the product of the first element is (1 * first element = first element)
    postfix = [1] * len(nums)
    result = []

    # Loop through the array and multiply all the elements to the left of the current element
    for i in range(1, len(nums)):
        prefix[i] = prefix[i-1] * nums[i-1]

    # Loop through the array and multiply all the elements to the right of the current element
    for i in range(len(nums)-2, -1, -1):
        postfix[i] = postfix[i+1] * nums[i+1]

    # Multiply the elements of the two arrays to get the final result
    for i in range(len(nums)):
        result.append(prefix[i] * postfix[i])

    return result

# ----------------------------------------------------------------

# Time complexity: O(n) | Space complexity: O(1) as the output array does not count as extra space
def product_except_self(nums):
    result = [1] * len(nums) # Initialize the array with 1 because the product of the first element is (1 * first element = first element)

    prefix = 1
    # Loop through the array and multiply all the elements to the left of the current element
    for i in range(len(nums)):
        result[i] = prefix
        prefix *= nums[i]

    postfix = 1
    # Loop through the array and multiply all the elements to the right of the current element
    for i in range(len(nums)-1, -1, -1):
        result[i] *= postfix # Multiply instead of assigning
        postfix *= nums[i]

    return result
```

---

### Container with most water

Given n non-negative integers `a1`, `a2`, ..., `an` , where each represents a point at coordinate `(i, ai)`. `n` vertical lines are drawn such that the two endpoints of the line `i` is at `(i, ai)` and `(i, 0)`. Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

- EX: height =`[1, 8, 6, 2, 9, 4]`-->`24`
  ![water container](./img/water-container.png)
- Notes:

  - Here, the width has a direct impact on the area, so the distance between indexes matters.
  - We don't know if we should increase or decrease the width, so we will see which one is shorter and move the pointer in that direction.

- **Steps**:

  1. Verify the constraints:

     - Does the thickness of the lines matter? No.
     - Do the left and right sides of the container form a wall? No.
     - Does a higher line inside the container affect the area, breaking it into 2 parts? No.
       ![water container](./img/water-container-1.png)

  2. Initialize **two pointers**, one at the beginning and one at the end of the array constituting the length of the lines.
  3. At every step, find out the area formed between them
     - width = `right index - left index`
     - height = `min(height[left], height[right])`
  4. update the result and move the pointer pointing to the shorter line towards the other end by one step. This is because the farther the lines, the more will be the area obtained.

```py
def max_area(height):
    max_area = 0
    # Two pointers at the beginning and the end of the array
    left, right = 0, len(height) - 1

    while left < right:
        # The width is the distance between them, and the height is the lower line.
        area = (right - left) * min(height[left], height[right])
        # Update max_area if we have a new maximum
        max_area = max(max_area, area)
        # Move the left and right pointers, depending on which line is shorter
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return max_area
```

---

### Trapping Rain Water

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

- EX: `height = [0,1,0,2,1,0,3,1,0,1,2]` --> `8` units of water
  ![rain water](./img/trapping-rain-water.png)
- **Explanation:**

  - Here, we will need to use the entire array to find the maximum area, so the distance between indexes doesn't matter.
  - We know that the height of water cannot exceed the height of the shorter wall.
  - Formula for the area of water above any **point**:

    ```py
    current_water = min(left_max, right_max) - height[i]

    # height[i] is the height of the current wall
    # left_max is the height of the tallest wall to the left of the current wall.
    # right_max is the height of the tallest wall to the right of the current wall.
    ```

  - To ge the wanted amount of water, we need to **find the area of water above each point and add them up**.
    - if the water is above the current wall, the area will be positive, otherwise it will be negative. So we will only add the positive areas to the total.

#### Solution 1: Extra memory used (O(n) space)

![rain water](./img/trapping-rain-water-1.png)
![rain water](./img/trapping-rain-water-2.png)

- **Steps**:

  1. Verify the constraints:

     - Do the left and right sides of the container form a wall? No.
     - will there be negative numbers? No.

  2. Initialize variables to keep track of the maximum height on both the left and right sides of each bar
     - Loop through the list of heights to find the maximum height on the left side of each bar
     - Loop through the list of heights in reverse order to find the maximum height on the right side of each bar
  3. Loop through the list of heights again and calculate the amount of water that can be trapped above each bar using the formula above.
  4. Add up the amount of water trapped above each bar to get the total amount of water trapped.

```py
def trap(height):
    # initialize two lists to store the max height of the left and right
    # of each position
    left_max = [0] * len(height)
    right_max = [0] * len(height)
    total_water = 0

    # calculate the max height of the left of each position
    max_height = 0
    for i in range(len(height)):
        left_max[i] = max_height
        max_height = max(max_height, height[i])

    # calculate the max height of the right of each position
    max_height = 0
    # loop through the list in reverse order
    for i in range(len(height)-1, -1, -1):
        right_max[i] = max_height
        max_height = max(max_height, height[i])

    # calculate the water in each position
    for i in range(len(height)):
        water = min(left_max[i], right_max[i]) - height[i]
        # add the water to the total if it's positive (above the current wall)
        if water > 0:
            total_water += water

    return total_water
```

#### Solution 2: Two pointers Less memory used (O(1) space)

![rain water](./img/trapping-rain-water-3.png)

- In [solution-1](#solution-1-extra-memory-used-on-space), we actually used 2 pointers (1 individual pointer with one iteration for each) but we were iterating pointers **outwards**. Here we will use 2 pointers to iterate **inwards**.
- We can't use the 2 pointers in order to single handedly figure out what (the walls are for some container and the water inside), but what we can keep track of is the **maximum height of the left and right walls**.

  - meaning that we keep track of every value that we have seen and keep track of the maximum value that is's seen and then decide which one to move inwards.
    ![rain water](./img/trapping-rain-water-4.png)
    ![rain water](./img/trapping-rain-water-5.png)

  - This is because we need only the minimum of the two walls to calculate the water above the current wall. so if the left wall is shorter, we move the left pointer inwards, otherwise we move the right pointer inwards. knowing that the minimum of the two walls is the maximum height of the water above the current wall.

- Here, **we calculate water per vertical-block for each point and not the area**

```py
def trap(height):
    # initialize two lists to store the max height of the left and right of each position
    left_max = 0
    right_max = 0
    total_water = 0

    # initialize two pointers, one at the beginning and one at the end
    l, r = 0, len(height) - 1

    while l < r:
        # update the left_max and right_max
        if height[l] < height[r]:
            # 1. get current left wall height
            left_max = max(left_max, height[l]) # Update the left_max if the current wall is taller than the previous one
            # 2. calculate the water above the current wall
            total_water += left_max - height[l]
            l += 1
        else:
            right_max = max(right_max, height[r])
            total_water += right_max - height[r]
            r -= 1

    return total_water
```

---

### Interval scheduling problems (overlapping intervals)

#### Meeting Rooms

Given an array of meeting time intervals `intervals` where `intervals[i] = [starti, endi]`, determine if a person could attend all meetings.

- EX: `intervals = [[0,30],[5,10],[15,20]]` --> `false`

- Solution : Sort and compare

- **Steps**:

  1. Sort the intervals **by the start time**
  2. Loop through the sorted intervals and check if the end time of the current interval is greater than the start time of the next interval. If it is, then return `false`.
     - check if a meeting starts before the previous meeting ends. we will only need to check the end time of the previous meeting and the start time of the current meeting. and not compare with all the previous meetings. because the meetings are sorted by the start time. (meaning that if the current meeting starts after the previous meeting ends, then it will start after all the previous meetings end and also the all upcoming meetings will start after the current meeting ends) so no need to compare with all the previous meetings.
       ![meeting rooms](./img/meeting-rooms-2.png)
  3. If the loop finishes, return `true`.

```py
"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

def canAttendMeetings(intervals):
    # sort the intervals by the start time
    intervals.sort(key=lambda x: x.start)

    # loop through the sorted intervals (we start from the second interval because we need to compare it with the previous interval)
    for i in range(1, len(intervals)):
        # check if the end time of the previous interval is greater than the start time of the current interval
        if intervals[i-1].end > intervals[i].start:
            return False


    return True
```

---

#### Meeting Rooms II

Given an array of meeting time intervals `intervals` where `intervals[i] = [starti, endi]`, return the minimum number of conference rooms required.

- EX: `intervals = [[0,30],[5,10],[15,20]]` --> `2`
  ![meeting rooms](./img/meeting-rooms-1.png)

- Steps:

  1. use two arrays to keep track of the start times and end times separately.
  2. then sort the two arrays and use two pointers to iterate over them.
  3. We start with the first start time and the first end time. If the start time is less than the end time, we need to allocate a new room and move the start pointer forward. If the start time is greater than or equal to the end time, we can reuse the room and move both pointers forward.

     - we iterate over the start times array and compare each start time with the current end time. If the start time is less than the end time, we need to allocate a new room and move the start pointer forward.
     - If the start time is greater than or equal to the end time, we can reuse the room and move both pointers forward

  4. Finally, we return the number of rooms allocated, which represents the minimum number of meeting rooms required to schedule all the meetings.

```py
"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

def minMeetingRooms(intervals):
    if not intervals:
        return 0

    # initialize two arrays to keep track of the start times and end times
    start_times = sorted([interval.start for interval in intervals])
    end_times = sorted([interval.end for interval in intervals])

    # initialize two pointers to iterate over the start and end times
    start_ptr = end_ptr = 0
    num_rooms = 0

    while start_ptr < len(start_times):
        # check if the start time is less than the end time
        if start_times[start_ptr] < end_times[end_ptr]:
            num_rooms += 1
        else:
            end_ptr += 1

        start_ptr += 1

    return num_rooms
```

---

### Matrix

#### Rotate Image

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image **in-place**, which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.

- EX: `matrix = [[1,2,3],[4,5,6],[7,8,9]]` --> `[[7,4,1],[8,5,2],[9,6,3]]`
  ![rotate image](./img/rotate-matrix.jpg)

- Solution 1: Transpose and then reverse

  - **Steps**:

    - perform a matrix transpose and then reverse each row of the resulting matrix.
    - **Transpose**: swap the elements of the matrix across the diagonal.

      - This is done by iterating through the matrix and swapping the element at index `[i]` `[j]` with the element at index `[j]` `[i]`.

        ```py
        for i in range(len(matrix)):
            for j in range(i):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        ```

  ```py
  # Time: O(n^2) | Space: O(1) -> (in-place)
  def rotate(matrix):
    # transpose the matrix
    for i in range(len(matrix)):
        for j in range(i):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    # Reverse each row
    for i in range(len(matrix)):
        matrix[i].reverse()
  ```

- Solution 2: using 4 pointers -> **(complex)**

  - We initialize two pointers `l` and `r` to point to the leftmost and rightmost columns of the matrix, respectively.
    ![rotate matrix](./img/rotate-matrix-1.png)
  - Swap each element in a cycle of four, using four pointers to keep track of the `top`, `bottom`, `left`, and `right` boundaries of the current cycle.
    ![rotate matrix](./img/rotate-matrix-2.png)
  - Iterate through all elements in the current cycle, from left to right, using a loop variable i.
  - For each element in the current cycle, swap the element with its corresponding element in the cycle, using four pointers to keep track of the top, bottom, left, and right boundaries of the cycle.
    ![rotate matrix](./img/rotate-matrix-3.png)
  - After swapping all elements in the current cycle, move the top pointer down by one row and the bottom pointer up by one row, and move the left pointer to the right by one column and the right pointer to the left by one column. This moves the boundaries of the current cycle inward by one element.

  ```py
  def rotate(matrix):
    # initialize the pointers to point to the leftmost and rightmost columns
    l,r = 0, len(matrix) - 1

    while l < r:
        # loop through the current cycle
        for i in range(r - l):
            top, bottom = l, r
            # save the top-left element
            top_left = matrix[top][l + i]

            # 1. move the bottom-left element to the top-left
            matrix[top][l + i] = matrix[bottom - i][l]
            # 2. move the bottom-right element to the bottom-left
            matrix[bottom - i][l] = matrix[bottom][r - i]
            # 3. move the top-right element to the bottom-right
            matrix[bottom][r - i] = matrix[top + i][r]
            # 4. move the top-left element to the top-right
            matrix[top + i][r] = top_left


        # move the pointers to the next cycle
        l += 1
        r -= 1
  ```

---

#### Create a Spiral Matrix

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n^2 in spiral order.

- EX: `n = 3` --> `[[1, 2, 3], [8, 9, 4], [7, 6, 5]]`

- Steps:
  ![spiral matrix](./img/spiral-matrix-3.png)

```py
def spiral_matrix(n):
    matrix = [[0] * n for _ in range(n)]
    start, right, top, bottom = 0, n - 1, 0, n - 1
    num = 1 # the number to fill in the matrix

    while start <= right and top <= bottom:
        # fill the top row
        for i in range(start, right + 1):
            matrix[top][i] = num
            num += 1
        top += 1

        # fill the right column
        for i in range(top, bottom + 1):
            matrix[i][right] = num
            num += 1
        right -= 1

        # fill the bottom row
        for i in range(right, start - 1, -1):
            matrix[bottom][i] = num
            num += 1
        bottom -= 1

        # fill the start column
        for i in range(bottom, top - 1, -1):
            matrix[i][start] = num
            num += 1
        start += 1

    return matrix
```

---

#### Return elements of Spiral Matrix

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

![spiral matrix](./img/spiral-matrix-1.jpg)
![spiral matrix](./img/spiral-matrix-2.jpg)

- EX: `[[1, 2, 3], [4, 5, 6], [7, 8, 9]] --> [1, 2, 3, 6, 9, 8, 7, 4, 5]`

```py
def spiral_matrix(matrix):
    result = []
    while matrix:
        # add the first row to the result
        result += matrix.pop(0)
        # add the last element of each row to the result
        for row in matrix:
            if row: result.append(row.pop())
        # add the last row to the result in reverse order
        if matrix:
            result += matrix.pop()[::-1]
        # add the first element of each row to the result in reverse order
        for row in matrix[::-1]:
            if row: result.append(row.pop(0))
    return result
```

---

## Queues and Stacks

### Queue

#### Queue using two stacks

Implement a queue data structure using two stacks. Do not create an array inside of the 'Queue' class. Queue should implement the methods 'add', 'remove', and 'peek'. Adding to the queue should store an element until it is removed.

- EX: `q = Queue()` --> `q.add(1)` --> `q.add(2)` --> `q.peek()` --> `1` --> `q.remove()` --> `1` --> `q.remove()` --> `2`
- Here, we want to use two stacks to implement a queue. We can use one stack for adding elements and the other stack for removing elements. When we want to remove an element, we move all elements from the first stack to the second stack, then pop the top element from the second stack. When we want to peek an element, we move all elements from the first stack to the second stack, then peek the top element of the second stack. When we want to add an element, we just push it to the first stack.
  ![queue using two stacks](./img/queue-using-two-stacks.png)

```py
class Queue:
    def __init__(self):
        self.stack1 = []
        self.stack2 = []

    def add(self, item):
        self.stack1.append(item)

    def remove(self):
        # Move all items from stack1 to stack2
        if not self.stack2:
            while self.stack1:
                self.stack2.append(self.stack1.pop())
        return self.stack2.pop()

    def peek(self):
        # Move all items from stack1 to stack2
        if not self.stack2:
            while self.stack1:
                self.stack2.append(self.stack1.pop())
        return self.stack2[-1]

    def empty(self):
        return not self.stack1 and not self.stack2
```

---

#### Sliding Window Maximum

You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

- EX: `nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3` --> `[3, 3, 5, 5, 6, 7]`

  - Explanation:
    | Window Position | Max |
    | --------------- | --- |
    | [1 3 -1] -3 5 3 6 7 | 3 |
    | 1 [3 -1 -3] 5 3 6 7 | 3 |
    | 1 3 [-1 -3 5] 3 6 7 | 5 |
    | 1 3 -1 [-3 5 3] 6 7 | 5 |
    | 1 3 -1 -3 [5 3 6] 7 | 6 |
    | 1 3 -1 -3 5 [3 6 7] | 7 |

- **Explanation:** (recap: it's like (next greater element) using a stack, but we use dqueue to remove from left as well)

  - to get a better solution than `O(n.k)`, we will use the `next greater element` approach, using a **Monotonic decreasing queue (double-ended queue (`deque`))** to store the indices of the elements in the window.
    - > `deque` allows for fast appends and pops **from both ends**.
  - The first element in the queue is the index of the maximum element in the window.
  - When we move the window to the right, we need to remove the element that is out of the window, and remove all elements that are smaller than the current element. Then we add the current element to the queue.
    - This is done because we know that when going to the next window, the first element in the queue is out of the window, so we remove it.
    - Then we remove all elements that are smaller than the current element, because **they will never be the maximum element in the window**. Then we add the current element to the queue.
  - we use queue and not a stack, because we want to remove elements from the left side of the queue, and we want to remove the first element in the queue, which is the maximum element in the window.

- **Steps:**
  1. Initialize a deque `q` to store the indices of the elements in the current sliding window, and initialize `l` and `r` pointers to `0`
  2. iterate over the array `nums` and do the following:
     - pop smaller values from `q` until we find a value that is greater than the current value
     - append the current index ('r') to `q`
     - remove the left val from the window
       - If the index of the oldest element in the sliding window (`l`) is outside of the current sliding window, remove it from the deque `q` using the `popleft()` method
     - check if the window is at least size `k` to add the maximum element (`nums[q[0]]`) to the result

![sliding-window-maximum](./img/sliding-window-maximum.png)

```py
def max_sliding_window(nums, k):
    if not nums: return []
    result = []
    q = collections.deque() # indices of the elements in the window
    l = r = 0

    while r < len(nums):
      # pop smaller values from q if the current value is greater than the last value in q to always make the queue contain the max element
      while q and nums[q[-1]] < nums[r]:
          q.pop()
      q.append(r)

      # remove left val from window if it is outside of the current window
      if l > q[0]:
        q.popleft()

      # check if the window is at least size k to start adding the maximum element to the result
      if (r+1) >= k:
        result.append(nums[q[0]])
        l += 1 # left pointer will only move when the window is at least size k
      r += 1

    return res
```

---

### Stacks

#### Next Greater Element I

You are given two arrays (without duplicates) `nums1` and `nums2` where `nums1`’s elements are subset of `nums2`. Find all the next greater numbers for `nums1`'s elements in the corresponding places of `nums2`.

The Next Greater Number of a number `x` in `nums1` is the first greater number to its right in `nums2`. If it does not exist, output -1 for this number.

- EX: `nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]` --> `[-1, 3, -1]`
  - For number `4` in the first array, you cannot find the next greater number for it in the second array, so output `-1`.
  - For number `1` in the first array, the next greater number for it in the second array is `3`.
  - For number `2` in the first array, there is no next greater number for it in the second array, so output `-1`.
- **Explanation**
  ![next greater element](./img/next-greater-element-i-1.png)
  ![next greater element](./img/next-greater-element-i-2.jpg)
  ![next greater element](./img/next-greater-element-i-3.png)

> **Note:** we start by checking the stack and not with appending to it because the last element in `nums2` won't have any next greater elements by default

```py
def next_greater_element(nums1, nums2):
  # create a stack to store the numbers that we have not found the next greater element for them
  stack = []
  # create a dictionary to store the index for each element in nums1
  nums1Idx = {num: i for i, num in enumerate(nums1)}
  # for each element in nums1, store its index in the dictionary
  res = [-1] * len(nums1)

  for cur in nums2:
    # if the stack is not empty and the current number is greater than the top element of the stack (using while loop to check all the elements in the stack that are smaller than the current number to get the next greater element for them)
    while stack and cur > stack[-1]:
      # pop the top element of the stack and store the next greater element for it
      val = stack.pop()
      idx = nums1Idx[val]
      res[idx] = cur

    # if the current number is in nums1, push it to the stack
    if cur in nums1Idx:
          stack.append(cur)

  return res
```

---

#### Next Greater Element II

Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. The Next Greater Number of a number `x` is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.

- EX: `[1, 2, 1]` --> `[2, -1, 2]`
  - The first 1's next greater number is 2;
  - The number 2 can't find next greater number;
  - The second 1's next greater number needs to search circularly, which is also 2.
- **Steps:**
  1. We create an empty stack and an empty result array of the same length as the input array `nums`.
  2. We iterate through the input array `nums` twice, but treat it as a circular list by iterating through it (twice length of the array).
  3. Here, we don't use a hash map as we're going to be indexing the stack (adding indexes not values) -- we can use a hash map, but it will be un-useful space
  4. for each element in the input array, we check if the stack is not empty and the current number is greater than the top element of the stack. If so, we pop the top element of the stack and store the next greater element for it.

```py
def next_greater_element(nums):
    n = len(nums)
    # create a stack to store the indices of the numbers that we have not found the next greater element for them
    stack = []
    result = [-1] * n

    # we need to traverse the array twice because it is circular, so we need to double the length of the array
    for i in range(2 * n):
        # if the stack is not empty and the current number is greater than the top element of the stack
        while stack and nums[i % n] > nums[stack[-1]]:
            # pop the top element of the stack and store the next greater element for it
            result[stack.pop()] = nums[i % n]

        # push the current number to the stack
        stack.append(i % n)

    return result
```

---

#### Daily Temperatures

Given a list of daily temperatures `T`, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put `0` instead.

- EX: `[73, 74, 75, 71, 69, 72, 76, 73]` --> `[1, 1, 4, 2, 1, 1, 0, 0]`
  - For the first 3 days, the next warmer day is just `1` day away.
  - For the rest of the days, you would have to wait until the next warmer day (`4` days for the `3rd` day, `2` days for the `4th` day, etc).
- Steps:
  ![daily temperatures](./img/daily-temperatures.jpg)

```py
def daily_temperatures(temperatures):
    res = [0] * len(temperatures)
    stack = []

    for i, t in enumerate(temperatures):
      while stack and temperatures[stack[-1]] < t:
          idx = stack.pop()
          res[idx] = i - idx
      stack.append(i)

    return res
```

---

## Heaps

### Kth Largest Element in an Array

Given an integer array `nums` and an integer `k`, return the `kth` largest element in the array.

**You must solve it in O(n) time complexity.**

- EX: `nums = [3, 2, 1, 5, 6, 4], k = 2` --> `5`

  - Explanation: The largest element in the array is `6`, the second largest element is `5`.

- Steps:
  1. we will use a maxHeap instead of sorting the array because we want `O(n)` time complexity and not `O(nlogn)`
  2. push all the elements in the array to the maxHeap -> `O(n)`
  3. pop the top element of the maxHeap `k` times to get the `kth` largest element -> `O(k log(n))`

So the overall complexity will be `O(n + k log(n))` --> `O(n)`

```py
def find_kth_largest(nums, k):
    heap = []
    for num in nums:
        heapq.heappush(heap, num)
    for _ in range(len(nums)-k):
        heapq.heappop(heap)
    return heapq.heappop(heap)
```

> Note: it can also be solved with section sort in `O(n)` time complexity average case, but `O(n^2)` worst case

---

### K Closest Points to Origin

Given an array of points where `points[i] = [xi, yi]` represents a point on the X-Y plane and an integer `k`, return the `k` closest points to the origin `(0, 0)`.
The distance between two points on the X-Y plane is the Euclidean distance (i.e., `√(x1 - x2)^2 + (y1 - y2)^2`).

- EX: `points = [[1, 3], [-2, 2]], k = 1` --> `[[-2, 2]]`

  - Explanation: The distance between `(1, 3)` and the origin is `sqrt(10)`, the distance between `(-2, 2)` and the origin is `sqrt(8)`, since `sqrt(8) < sqrt(10)`, therefore `(-2, 2)` is closer to the origin. We only want the closest `k = 1` points from the origin, so the answer is just `[[-2, 2]]`.

- Steps:
  1. we will use a minHeap instead of sorting the array because we want `O(n)` time complexity and not `O(nlogn)`
  2. push all the elements in the array to the minHeap -> `O(n)`
     - we don't need to calculate the root of the distance because we can compare the distance without calculating the root
  3. pop the top element of the minHeap `k` times to get the `k` closest points -> `O(k log(n))`

So the overall complexity will be `O(n + k log(n))` --> `O(n)`

```py
def k_closest(points, k):
    res = []
    minHeap = []

    for x, y in points:
        dist = (x ** 2) + (y ** 2)
        heapq.heappush(minHeap, [dist, x, y])

    for _ in range(k):
        dist, x, y = heapq.heappop(minHeap)
        res.append([x, y])

    return res
```

---

### Top K Frequent Elements

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in **any order**.

- EX: `nums = [1, 1, 1, 2, 2, 3], k = 2` --> `[1, 2]`

  - Explanation: The answer `[1, 2]` would also be accepted.

#### Solution 1: using Heap

- Steps:
  ![top-k-frequent-elements](./img/top-k-frequent-elements-1.png)
  1. we will use a minHeap instead of sorting the array because we want `O(n)` time complexity and not `O(nlogn)`
  2. create a dictionary to store the frequency of each element in the array -> `O(n)`
  3. push all the elements in the dictionary to the minHeap (with the negative of the frequency-value because we want to pop the elements with the highest frequency) -> `O(n)`
  4. pop the top element of the minHeap `k` times to get the `k` most frequent elements -> `O(k log(n))`
  5. return the elements in the minHeap

![top-k-frequent-elements](./img/top-k-frequent-elements-2.jpg)

```py
def top_k_frequent(nums, k):
    res = []
    minHeap = []
    freq = {}

    for num in nums:
        freq[num] = freq.get(num, 0) + 1

    for key, val in freq.items():
        heapq.heappush(minHeap, [-val, key])

    # now it's a minHeap but like a maxHeap
    for _ in range(k):
        res.append(heapq.heappop(minHeap)[1])

    return res
```

#### Solution 2: using Bucket Sort

- Steps:
  ![top-k-frequent-elements](./img/top-k-frequent-elements-3.png)

  1. create a dictionary to store the frequency of each element in the array
  2. create a list of lists (buckets) with the `length of the array + 1`
     - index will be the frequency of the element and the value will be the elements with that frequency
  3. loop through the dictionary and append the key to the bucket with the index of the value (frequency)
  4. loop through the buckets from the end (max frequency) and append the elements to the result list until the length of the result list is `k` -> `O(n)`
  5. return the result list

```py
def top_k_frequent(nums, k):
    res = []
    count = {}
    freq_buckets = [[] for _ in range(len(nums)+1)]

    for num in nums:
        count[num] = count.get(num, 0) + 1

    for n, c in count.items():
        freq_buckets[c].append(n)

    for i in range(len(freq_buckets)-1, -1, -1):
        if len(res) == k:
            break
        if freq_buckets[i]:
            res.extend(buckets[i])

    return res
```

---

### Top K Frequent Words

Given an array of strings `words` and an integer `k`, return the `k` most frequent strings.
Return the answer **sorted** by the **frequency** from highest to lowest. Sort the words with the same frequency by their **lexicographical order**.

- EX: `words = ["i", "love", "leetcode", "i", "love", "coding"], k = 2` --> `["i", "love"]`

  - Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.

```py
def top_k_frequent(words, k):
    res = []
    freq = {}
    buckets = [[] for _ in range(len(words)+1)]

    for word in words:
        freq[word] = freq.get(word, 0) + 1

    for word, count in freq.items():
        buckets[count].append(word)

    for i in range(len(buckets)-1, -1, -1):
        if len(res) == k:
            break
        if buckets[i]:
            buckets[i].sort()
            res.extend(buckets[i])

    return res
```

---

### Reorganize String

Given a string `s`, rearrange the characters of `s` so that any two adjacent characters are not the same.
Return any possible rearrangement of `s` or return `""` if not possible.

- EX: `s = "aab"` --> `"aba"`
  - Explanation: `aab` --> `aba`
- EX: `s = "aaab"` --> `""`
- EX: `s = "aaabc"` --> `"abaca"`

- Explanation:
  - To solve this we need to use the most frequent characters first and then the less frequent characters
    - we can use a dictionary to store the frequency of each character
    - we can use a maxHeap to store the characters with the most frequency
  - on each iteration we will pop the top element of the maxHeap and append it to the result string
    - if the last element of the result string is the same as the current element, pop the next element and append it to the result string
    - if the maxHeap is empty and the last element of the result string is the same as the current element, this means that we can't reorganize the string so we return `""`
- Steps:
  1. create a dictionary to store the frequency of each character in the string -> `O(n)`
  2. push all the elements in the dictionary to the maxHeap -> `O(n)`
  3. pop the top element of the maxHeap and append it to the result string
     - if the last element of the result string is the same as the current element, pop the next element and append it to the result string
     - if the maxHeap is empty and the last element of the result string is the same as the current element, return `""`
  4. return the result string

```py
def reorganize_string(s):
    maxHeap = []
    freq = {}

    # create a dictionary to store the frequency of each character in the string
    for char in s:
        freq[char] = freq.get(char, 0) + 1
    # push all the elements in the dictionary to the maxHeap by their frequency in negative form (because we want to pop the elements with the highest frequency)
    for key, val in freq.items():
        heapq.heappush(maxHeap, [-val, key]) # python heapify pairs by the first element

    res = ''
    prev = None
    # pop the top element of the maxHeap and append it to the result string
    while maxHeap or prev:
        # 1. pop the top element of the maxHeap + append it to the result + decrement the frequency by 1 to reach 0
        freq, char = heapq.heappop(maxHeap)
        res += char
        freq += 1

        # 2. if prev is not None, we will push it to the maxHeap
        if prev:
            heapq.heappush(maxHeap, prev)
            prev = None

        # 3. if the frequency of the popped element not 0, we will store the popped element as prev
        if freq != 0:
            prev = [freq, char]

        # 4. if the maxHeap is empty and the last element of the result string is the same as the current element, return ""
        if prev and not maxHeap:
            return ''

    return res
```

---

### Find Median from Data Stream

The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

- EX: `[2,3,4]` --> `3`
- EX: `[2,3]` --> `2.5`
  - Explanation: `(2 + 3) / 2 = 2.5`
- EX: `[2,3,4,5]` --> `3.5`

  - Explanation: `(3 + 4) / 2 = 3.5`

- Design a data structure that supports the following two operations:

  - `addNum(int num)` - Add a integer number from the data stream to the data structure.
  - `findMedian()` - Return the median of all elements so far.

- **Solution:**

  1. The idea here that we need the data to be sorted to get the middle value (median). So we need to insert elements **in order**, we'll use 2 heaps:
     ![find-median-from-stream](./img/find-median-from-stream-1.webp)
     - we can use a `minHeap` to store the larger half of the data
     - we can use a `maxHeap` to store the smaller half of the data
       - remember to use negative values to make it a maxHeap in python
     - we can use a variable to store the median
  2. on each `addNum()` call, we will add the new element to the `minHeap` if it's larger than the median, otherwise we will add it to the `maxHeap`
     ![find-median-from-stream](./img/find-median-from-stream-3.webp)

     - if the size of the `minHeap` is larger than the `maxHeap` by 2, we will pop the top element of the `minHeap` and push it to the `maxHeap`
     - if the size of the `maxHeap` is larger than the `minHeap` by 2, we will pop the top element of the `maxHeap` and push it to the `minHeap`

  3. on each `findMedian()` call, we will check the size of the `minHeap` and `maxHeap`: (if one heap is larger than the other by 1, we know that we have **odd** number of elements, so the median will be the top element of the larger heap)
     ![find-median-from-stream](./img/find-median-from-stream-2.png)
     - if the size of the `minHeap` is equal to the `maxHeap`, we will calculate the median by getting the average of the top elements of the `minHeap` and `maxHeap`
     - if the size of the `minHeap` is larger than the `maxHeap`, the median will be the top element of the `minHeap`
     - if the size of the `maxHeap` is larger than the `minHeap`, the median will be the top element of the `maxHeap`

```py
class MedianFinder:

    def __init__(self):
        """
        initialize your data structure here.
        """
        # two heaps, large, small, minheap, maxheap
        # heaps should be equal size
        self.small, self.large = [], []  # maxHeap, minHeap (python default)


    def addNum(self, num: int) -> None:
        if self.large and num > self.large[0]:
            heapq.heappush(self.large, num)
        else:
            heapq.heappush(self.small, -1 * num) # negative the num to make it a maxHeap

        # uneven heaps size ?
        if len(self.small) > len(self.large) + 1:
            val = -1 * heapq.heappop(self.small)
            heapq.heappush(self.large, val)
        if len(self.large) > len(self.small) + 1:
            val = heapq.heappop(self.large)
            heapq.heappush(self.small, -1 * val)

    def findMedian(self) -> float:
        # if odd number of elements:
        if len(self.small) > len(self.large):
            return -1 * self.small[0]
        elif len(self.large) > len(self.small):
            return self.large[0]
        # if even number of elements:
        return (-1 * self.small[0] + self.large[0]) / 2
```

---

## Linked Lists

- **Tips:**

  - To check if linked list is empty --> `if not head:`
  - To check if linked list has only one node --> `if head and not head.next:`
  - To remove the first node --> `head = head.next`
  - To remove the last node --> `prev.next = None`
    1. create 2 variables: `prev` and `curr`
    2. `prev` starts at the head, `curr` starts at the head's next node
    3. if `curr` is the last node, `prev.next` will be `None` --> `prev.next = None`
    4. then `prev` will be `curr` --> `prev = curr` --> `prev` is now the last node

- **Code reuse in Linked Lists (Interview discussion):**
  - rather than creating a new function to (`insert` / `remove` / `get`) the first/last node, we can reuse the function to remove the last node by passing in the head/tail index as the argument
    ![linked list code reuse](./img/linked-list-code-reuse.png)

### Singly Linked List

#### Reverse a Linked List

Write a function that accepts a linked list and reverses it in place.

- EX: `1 -> 2 -> 3 -> 4 -> 5` --> `5 -> 4 -> 3 -> 2 -> 1`
  is `None`

- **Steps**:
  - It's done using 3 pointers: `prev`, `curr`, and `next`
    ![reverse-linked-list](./img/reverse-linked-list.gif)

```py
def reverse_linked_list(head):
    prev = None # Initialize previous pointer to None
    curr = head
    nextNode = head.next

    # Loop until current pointer is None
    while curr:
        curr.next = prev
        # Shift the previous pointer to the current node
        prev = curr
        # Shift the current pointer to the next node
        curr = nextNode
        # Shift the next pointer to the next node of the next node
        if nextNode:
            nextNode = nextNode.next
    # Return the previous node, which is the new head of the reversed list
    return prev
```

---

#### Middle Point of a Linked List

Write a function that accepts a linked list and returns the middle node in the list. If the list has an even number of elements, return the node at the end of the first half of the list. **Do not use a counter variable**, **do not retrieve the size of the list**, and **only iterate through the list one time**.

- EX: `1 -> 2 -> 3 -> 4 -> 5` --> `3`
- **Steps:**
  ![linked list midpoint](./img/linked-list-midpoint.webp)
  1. create 2 variables: `slow` and `fast`
  2. `slow` and `fast` starts at the head
  3. `slow` moves **1 step** at a time, `fast` moves **2 steps** at a time
  4. when `fast` reaches the end of the list, `slow` will be at the middle node

```py
def middle_point(head):
    slow = head
    fast = head

    # check if there're 2 next nodes ahead of `fast`
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow
```

---

#### Circular Linked List

Write a function that accepts a linked list and returns true if the linked list contains a **circular reference**.

> Circular Linked List is a linked list where a node's next point actually points back to a previous node in the list.

- EX: `1 -> 2 -> 3 -> 4 -> 5` --> `5.next = 2` --> `True`
- **Steps:**
  ![circular linked list](./img/circular-linked-list.png)
  1. create 2 variables: `slow` and `fast`
  2. `slow` and `fast` starts at the head
  3. `slow` moves **1 step** at a time, `fast` moves **2 steps** at a time
  4. if `slow` and `fast` ever meet, then there's a circular reference

```py
def circular_linked_list(head):
    slow = head
    fast = head

    # check if there're 2 next nodes ahead of `fast`
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        # if `slow` and `fast` ever meet, then there's a circular reference
        if slow == fast:
            return True
    return False
```

---

#### From Last

Write a function that accepts a linked list and a number `n`. The function should return the node `n` spaces from the last node in the list. Do not call the `size` method of the linked list. Assume that `n` will always be less than the length of the list.

- EX: `1 -> 2 -> 3 -> 4 -> 5`, `n = 2` --> `3`
- **Steps:**
  1. create 2 variables: `slow` and `fast`
  2. `slow` and `fast` starts at the head
  3. `fast` moves `n` steps ahead of `slow`, so that `fast` is `n` spaces ahead of `slow`
  4. when `fast` reaches the end of the list, `slow` will be at the node `n` spaces from the last node

```py
def from_last(head, n):
    slow = head
    fast = head

    # move `fast` `n` steps ahead of `slow`
    while n > 0:
        fast = fast.next
        n -= 1

    # move `slow` and `fast` at the same pace
    while fast.next:
        slow = slow.next
        fast = fast.next
    return slow

# -------------------------------------------------
# Remove nth node from the end of a linked list (same Idea)
# Create two pointers, slow and fast
def removeNthFromEnd(head, n):
    slow = fast = head
    # Move fast pointer n nodes ahead
    for i in range(n):
        fast = fast.next
    # If fast pointer is None, remove the head
    if not fast:
        return head.next
    # Move both pointers until fast pointer reaches the end
    while fast.next:
        slow = slow.next
        fast = fast.next
    # Remove the nth node by updating previous node's nex   pointer
    slow.next = slow.next.next
    return head
```

---

#### Merge Two Sorted Linked Lists

Write a function that accepts two sorted linked lists and returns a new linked list containing the combined sorted values from both lists.

- EX:
  ![merge-2-sorted-lists](./img/merge-2-sorted-lists.jpg)

- **Steps:**
  1. create a dummy node and a pointer `curr` to the dummy node.
     - to avoid edge cases like `l1` or `l2` is empty
  2. iterate over the two input lists and compare the values of the current nodes pointed to by `l1` and `l2`.
     - You append the node with the smaller value to the `curr.next` pointer
     - then advance the pointer of the list from which the smaller value was appended.
  3. If either `l1` or `l2` becomes None, you append the remaining nodes of the other list to the curr.next pointer.
  4. Finally, you return the `head` of the merged sorted list

```py
def merge_sorted_lists(l1, l2):
    # create a dummy node to avoid edge case of inserting to empty list
    dummy = ListNode(0)
    # create a pointer to the dummy node
    curr = dummy

    # while both lists are not empty
    while l1 and l2:
        # if l1's value is smaller than l2's value
        if l1.value < l2.value:
            # set curr's next node to l1
            curr.next = l1
            # move l1 to the next node
            l1 = l1.next
        # if l2's value is smaller than l1's value
        else:
            # set curr's next node to l2
            curr.next = l2
            # move l2 to the next node
            l2 = l2.next
        # move curr to the next node
        curr = curr.next

    # if l1 is not empty after the while loop
    if l1:
        # set curr's next node to l1 (the rest of l1)
        curr.next = l1
    # if l2 is not empty after the while loop
    if l2:
        # set curr's next node to l2 (the rest of l2)
        curr.next = l2

    # return the next node of the dummy node
    return dummy.next
```

---

#### Merge k Sorted Lists

Merge `k` sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

- EX:
  ![merge-k-sorted-lists](./img/merge-k-sorted-lists-1.png)

- **Method 1:** using `merge_sorted_lists` function above

  - **Time Complexity:** `O(nk log(n))`
  - **Space Complexity:** `O(nk)`
  - **Steps:**
    1. create an empty list to store the merged lists
    2. merge the lists in a pairwise fashion until only one list remains
    3. return the first list in the merged_lists

  ```py
  def mergeKLists(self, lists: List[ListNode]) -> ListNode:
      # if lists is empty
      if not lists or len(lists) == 0:
          return None

      # create an empty list to store the merged lists
      merged_lists = []

      # merge the lists in a pairwise fashion until only one list remains
      for lst in lists:
          merged_lists = self.merge_sorted_lists(merged_lists, lst)
      # Or: use an approach like merge sort to merge the lists in a pairwise fashion
      # while len(lists) > 1:
      #     # create an empty list to store the merged lists
      #     merged_lists = []

      #     # merge the lists in a pairwise fashion until only one list remains
      #     for i in range(0, len(lists), 2):
      #         l1 = lists[i]
      #         l2 = lists[i+1] if (i+1) < len(lists) else None
      #         merged_lists.append(self.merge_sorted_lists(l1, l2))
      #     lists = merged_lists


      # return the first list in the merged_lists
      return merged_lists

  def merge_sorted_lists(self, l1: ListNode, l2: ListNode) -> ListNode:
      dummy = ListNode(0)
      curr = dummy
      while l1 and l2:
          if l1.val < l2.val:
              curr.next = l1
              l1 = l1.next
          else:
              curr.next = l2
              l2 = l2.next
          curr = curr.next
      curr.next = l1 or l2
      return [dummy.next]
  ```

---

#### Reorder List

Given a singly linked list `L: L0 -> L1 -> ... -> Ln-1 -> Ln`, reorder it to: `L0 -> Ln -> L1 -> Ln-1 -> L2 -> Ln-2 -> ...`
![reorder list](./img/reorder-list-1.jpg)

- **Steps:**
  1. Split the list into two halves
     - find the middle of the list using the **slow and fast pointer** technique
  2. Reverse the second half of the list using the **reverse linked list** technique
  3. Merge the two halves of the list by alternating the nodes
     ![reorder list](./img/reorder-list-2.png)
     - this is done by breaking the links between the nodes of the two lists and inserting the second list between the nodes of the first list
     - we do so by storing a temporary reference to the next node of the first list and then setting the next node of the first list to the current node of the second list
     - > **Note:** the first half of the list is always longer than or equal to the second half of the list

```py
def reorder_list(head):
    # 1. find the middle of the list
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    # 2. disconnect 2 lists
    head2 = slow.next
    slow.next = None # break the link between the first and second half

    # 3. Reverse the second half of the list
    prev = None
    curr = head2
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    # Now, `head2` will be set to the head of the reversed second half of the list, `prev` will be set to the tail of the reversed second half of the list which is now the new head of the second half of the list

    # 4. Merge the two lists (alternating the nodes)
    head1 = head
    head2 = prev
    while head2:
      # TEMP
      head1_next = head1.next
      head2_next = head2.next

      head1.next = head2
      head2.next = head1_next

      # update pointers
      head1 = head1_next
      head2 = head2_next
```

---

### Doubly Linked List

#### Design Browser History

You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

Implement the `BrowserHistory` class:

- `BrowserHistory(string homepage)` Initializes the object with the homepage of the browser.
- `void visit(string url)` Visits `url` from the current page. It clears up all the forward history.
- `string back(int steps)` Move `steps` back in history. If you can only return `x` steps in the history and `steps > x`, you will return only `x` steps. Return the current `url` after moving back in history **at most** `steps`.
- `string forward(int steps)` Move `steps` forward in history. If you can only forward `x` steps in the history and `steps > x`, you will forward only `x` steps. Return the current `url` after forwarding in history **at most** `steps`.
- **Solution 1: Doubly linked list**

  - we can use a pointer to store the current page
  - we can use a pointer to store the last page
  - we can use a pointer to store the next page
  - we can use a variable to store the number of pages in the history
  - we can use a variable to store the number of pages in the future
  - **Time Complexity:**
    - `visit`: `O(1)`
    - `back`: `O(n)`
    - `forward`: `O(n)`
  - **Space Complexity:** `O(n)`

  ```py
  class Node:
      def __init__(self, val, prev=None, next=None):
          self.val = val
          self.prev = prev
          self.next = next

  class BrowserHistory:
      def __init__(self, homepage: str):
          self.cur = Node(homepage)

      def visit(self, url: str) -> None:
          # make current page point to the new page and make the new page point back to the current page
          self.cur.next = Node(url, self.cur)
          # update the current page
          self.cur = self.cur.next

      def back(self, steps: int) -> str:
          # if the number of steps is greater than the number of pages in the history, we will move back to the first page
          # use cur.prev to make sure that we don't pass the first page
          while steps > 0 and self.cur.prev:
              self.cur = self.cur.prev
              steps -= 1
          return self.cur.val

      def forward(self, steps: int) -> str:
          # if the number of steps is greater than the number of pages in the future, we will move forward to the last page
          # use cur.next to make sure that we don't pass the last page
          while steps > 0 and self.cur.next:
              self.cur = self.cur.next
              steps -= 1
          return self.cur.val
  ```

- **Solution 2: Array (Better ✅)**

  ```py
  class BrowserHistory:
      def __init__(self, homepage: str):
          self.history = [homepage]
          self.curIdx = 0

      def visit(self, url: str) -> None:
          # if we are not at the end of the history, we will remove all the pages after the current page
          if self.curIdx < len(self.history) - 1:
              self.history = self.history[:self.curIdx+1]
          # append the new page to the history
          self.history.append(url)
          # update the current page
          self.curIdx += 1

      def back(self, steps: int) -> str:
          # if the number of steps is greater than the number of pages in the history, we will move back to the first page
          self.curIdx = max(self.curIdx - steps, 0)
          return self.history[self.curIdx]

      def forward(self, steps: int) -> str:
          # if the number of steps is greater than the number of pages in the future, we will move forward to the last page
          self.curIdx = min(self.curIdx + steps, len(self.history) - 1)
          return self.history[self.curIdx]
  ```

---

## Hash Tables

### Two sum

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

- You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

- EX:

  - Input: `nums = [2,7,11,15], target = 9`
  - Output: `[0,1]`
  - Output: Because `nums[0] + nums[1] == 9`, we return `[0, 1]`.

- Explanation:
  - if we know that the array has 2 numbers that add up to the target, we can find the second number by subtracting the first number from the target
  - we can use a dictionary to store the number and its index and then iterate through the array and check if the complement is in the dictionary

```py
def twoSum(self, nums: List[int], target: int) -> List[int]:
    # create a dictionary to store the number and its index
    num_index = {}

    # iterate through the nums
    for i, num in enumerate(nums):
        complement = target - num
        # if the complement is in the dictionary, return the indices
        if complement in num_index:
            return [num_index[complement], i]
        # if the complement is not in the dictionary, add the number and its index to the dictionary
        num_index[num] = i
```

---

### Valid Anagram

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

- EX: `cinema` and `iceman` are anagrams of each other.

```py
# Time: O(s + t) | Space: O(s + t)
def is_anagram(s, t):
    if len (s) != len(t):
        return False

    countS, countT = {}, {}
    for i in range(len(s)):
        countS[s[i]] = 1 + countS.get(s[i], 0)
        countT[t[i]] = 1 + countT.get(t[i], 0)
    for c in countS:
        if countS[c] != countT.get(c, 0):
            return False
    return True

# Solution: 2 (using O(1) memory)
# Time: O(n log(n)) | Space: O(1)
def is_anagram(s, t):
    return sorted(s) == sorted(t)
```

---

### Group Anagrams

Given an array of strings `strs`, group the anagrams together. You can return the answer in **any order**.

- EX:

  - Input: `strs = ["eat","tea","tan","ate","nat","bat"]`
  - Output: `[["bat"],["nat","tan"],["ate","eat","tea"]]`
    ![group anagrams](./img/group-anagrams.jpg)

- **Solution 1: O(n log(n))**

  - we can use a dictionary to store the sorted string as the key and the list of anagrams as the value
  - we can iterate through the array and sort each string and then add it to the dictionary

  ```py
  def group_anagrams(strs):
      # key: sorted string | value: list of anagrams
      anagrams = {}

      for s in strs:
          sorted_s = ''.join(sorted(s)) # joining because sorted returns an array
          if sorted_s not in anagrams:
              anagrams[sorted_s] = [s]
          else:
              anagrams[sorted_s].append(s)

      return anagrams.values()
  ```

- **Solution 2: O(n)**

  - we can use a dictionary to store the (count of each characters in a string) as the key and the list of anagrams as the value
  - we can iterate through the array and count the frequency of each character and then add it to the dictionary
  - Time complexity: `O(n.m.26)` -> `O(n.m)` where:
    - `n` is the length of the array
    - `m` is the length of the longest string in the array

  ```py
  def group_anagrams(strs):
      # key: charCount | value: list of anagrams
      anagrams = {}

      for s in strs:
          # create an array to store the frequency of each character in the string
          count = [0] * 26 # a ... z
          for c in s:
              idx = ord(c) - ord('a') # a = 80 - 80 = 0, b = 81 - 80 = 1, ...
              count[idx] += 1

          # convert the array to a tuple to use it as a key in the dictionary
          key = tuple(count)

          if key not in anagrams:
              anagrams[key] = [s]
          else:
              anagrams[key].append(s)

      return anagrams.values()
  ```

---

### Unique Number of Occurrences

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

- EX:

  - Input: `arr = [1,2,2,1,1,3]`
  - Output: `true`
  - Explanation: The value `1` has 3 occurrences, 2 and 3 both have 2 occurrences, so the answer is `true`.

```py
def uniqueOccurrences(arr):
  # Count the number of occurrences of each value
  count = {}
  for num in arr:
      count[num] = count.get(num, 0) + 1

  # Check if the number of occurrences is unique
  occurrences = set(count.values())
  return len(occurrences) == len(count)
```

---

### Contains Duplicate II

Given an integer array `nums` and an integer `k`, return `true` if there are two distinct indices `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.

- EX:

  - Input: `nums = [1,2,3,1], k = 3`
  - Output: `true`

- **Solution 1:** using HashMap

  ```py
  def containsNearbyDuplicate(nums, k):
      num_index = {} # num: idx

      for i, num in enumerate(nums):
          if num in num_index and i - num_index[num] <= k:
              return True
          num_index[num] = i

      return False
  ```

- **Solution 2:** sliding window

  ```py
  def containsNearbyDuplicate(nums, k):
      window = set() # window must has length <= k
      l = 0
      for r in range(len(nums)):
          if nums[r] in window:
              return True
          window.add(nums[r])

          # shrink the window if invalid-window
          if (r - l + 1) > k:
              window.remove(nums[l])
              l += 1

      return False
  ```

---

### Missing Number

Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.

- Follow up: Could you implement a solution using only `O(1)` extra space complexity and `O(n)` runtime complexity?

- EX:

  - Input: `nums = [3,0,1]`
  - Output: `2`
  - Explanation: `n = 3` since there are `3` numbers, so all numbers are in the range `[0,3]`. `2` is the missing number in the range since it does not appear in `nums`.

- **Solution 1:** using HashMap -> `O(n)` time and `O(n)` space

  ```py
  def missingNumber(nums):
      # Create a dictionary to store the presence of each number
      presence = {}
      for num in nums:
          presence[num] = True

      # Check each number in the range [0, n]
      n = len(nums)
      for i in range(n+1):
          if i not in presence:
              return i
  ```

- **Solution 2:** using `sum` function -> `O(n)` time and `O(1)` space

  ```py
  def missingNumber(nums):
    # Calculate the expected sum of the range [0, n]
    n = len(nums)
    expected_sum = n * (n + 1) // 2

    # Calculate the actual sum of the elements in the array
    actual_sum = sum(nums)

    # Return the difference between the expected sum and the actual sum
    return expected_sum - actual_sum
  ```

---

### Find the Duplicate Number

Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

There is only **one repeated number** in `nums`, return this repeated number.

- You must solve the problem **without** modifying the array `nums` and uses only constant extra space.

- EX:

  - Input: `nums = [1,3,4,2,2]`
  - Output: `2`

- **Solution 1:** using HashMap **(not what the problem wants)** -> `O(n)` time and `O(n)` space

  ```py
  def findDuplicate(nums):
      # Create a dictionary to store the presence of each number
      presence = {}
      for num in nums:
          if num in presence:
              return num
          presence[num] = True
  ```

- **Solution 2:** using **Floyd's Cycle Detection** -> `O(n)` time and `O(1)` space

  - To solve this problem without using space, we can use Floyd's Cycle Detection algorithm. This algorithm is used to detect cycles in a `linked list`.
    - It works by using two pointers, a `slow` pointer and a `fast` pointer. The `slow` pointer moves one step at a time, while the `fast` pointer moves two steps at a time.
    - If the two pointers ever meet, it means that there is a cycle in the linked list. Otherwise, if the `fast` pointer reaches the end of the linked list, it means that there is no cycle in the linked list.
  - **Explanation**
    1. We need to find the **intersection point** of the two runners, because it is the duplicate number that we are looking for.
       ![find duplicate num](./img/find-duplicate-num.png)
       - We start both runners at the beginning of the linked list and keep moving them until they meet. The fast runner will move two steps at a time, while the slow runner will move one step at a time.
    2. Once the two runners meet, we know that there is a cycle in the linked list. We then need to find the "entrance" to the cycle, which is the duplicate number that we are looking for.
       ![find duplicate num](./img/find-duplicate-num-1.png)
       - We start a new pointer at the beginning of the linked list and move it one step at a time. We also move the slow runner one step at a time. When the two runners meet, we have found the "entrance" to the cycle, which is the duplicate number that we are looking for.

  ```py
  def findDuplicate(nums):
      # Find the intersection point of the two runners
      slow = fast = 0
      while True:
          slow = nums[slow] # move 1 step
          fast = nums[nums[fast]] # move 2 steps
          if slow == fast:
              break # found the intersection point

      # Find the "entrance" to the cycle
      slow2 = 0
      while slow2 != fast:
          slow2 = nums[slow2] # move 1 step
          fast = nums[fast] # move 1 step

      return slow2
  ```

---

### Verifying an Alien Dictionary

In an alien language, surprisingly they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of `words` written in the alien language, and the `order` of the alphabet, return `true` if and only if the given `words` are sorted lexicographicaly in this alien language.

- EX:

  - Input: `words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"`
  - Output: `true`
  - Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

- Explanation:
  - We can use a dictionary to store the order of each character in the alien language
  - Then we can iterate through the words and compare each pair of adjacent words
    - If the first word is a substring of the second word (`len(word1)` less than `len(word2)`), then the words are sorted
    - If the first word is lexicographically greater than the second word, then the words are not sorted
  - Time complexity: `O(n)` where `n` is the total number of characters in all the words
  - Space complexity: `O(1)`

```py
def isAlienSorted(words, order):
    # Create a dictionary to store the order of each character in the alien language
    order_index = {c: i for i, c in enumerate(order)}

    # Iterate through the words and compare each pair words to check if they're in-order
    for i in range(len(words) - 1):
        w1 = words[i]
        w2 = words[i+1]

        # looping through the characters of the first word because the first word is a substring of the second word
        for j in range(len(w1)):
            # If we reached the end of word2 but not word1, then the words are not sorted
            if j == len(w2):
                return False
            # If the first word is lexicographically greater than the second word, then the words are not sorted
            if w1[j] != w2[j]:
                # check order index for each character
                if order_index[w1[j]] > order_index[w2[j]]:
                    return False
                break # because we found the different character, and it's valid

    return True
```

---

### Hand of Straights

Alice has a `hand` of cards, given as an array of integers. Now she wants to rearrange the cards into groups so that each group is size `W`, and consists of `W` **consecutive** cards. Return `true` if and only if she can.

- EX:

  - Input: `hand = [1,2,3,6,2,3,4,7,8], W = 3`
  - Output: `true`
  - Explanation: Alice's hand can be rearranged as `[1,2,3],[2,3,4],[6,7,8]`

- Explanation:

  - we can be **greedy** and look for the minimum value available each time and start a group from there

    - because we know that the minimum value will be the start of a group -> `[1, 2, 3]` and we can't have `1` again in the next group because it's already used
      ![hand of straights](./img/hand-of-straights-1.png)

    - we will use a `minHeap` for this to get the minimum value in `O(1)` time instead of getting the minimum of `freq.values()` each time in `O(n)` time
      ![hand of straights](./img/hand-of-straights-2.png)

  - We can use a dictionary to store the frequency of each card
  - Then we can **sort** the hand and iterate through the hand
    - If the current card is not in the dictionary, continue
    - If the current card is in the dictionary, iterate through the next `W` cards, starting from the current card because the hand is sorted and we want to check if the next `W` cards are consecutive -> `[card, card+1, card+2, ..., card+W-1]` -> `[1, 2, 3], [2, 3, 4], [3, 4, 5], ...`
      - If the card is not in the dictionary, return `False`
      - If the card is in the dictionary, decrement its frequency
      - If the card's frequency is `0`, remove it from the dictionary
  - If the dictionary is empty, return `True`

```py
def isNStraightHand(hand, groupSize):
    # if the hand is not divisible by the groupSize
    if len(hand) % groupSize != 0:
        return False

    # create a dictionary to store the frequency of each card
    freq = {}
    for card in hand:
        freq[card] = freq.get(card, 0) + 1

    # use a minHeap to get the minimum value in O(1) time
    minHeap = list(freq.keys())
    heapq.heapify(minHeap)

    while minHeap:
        # get the minimum value
        first = minHeap[0]

        for i in range(first, first + groupSize):
            # if the card is not in the dictionary, return False
            if i not in freq:
                return False
            # if the card is in the dictionary, decrement its frequency
            freq[i] -= 1
            # if the card's frequency is 0, remove it from the dictionary
            if freq[i] == 0:
                if i != first:
                    return False
                heapq.heappop(minHeap)

    return True
```

- Another solution: using a sorted array instead of a minHeap **(Better ✅)**

  ```py
  def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
      # if the hand is not dividable by the groupSize
      if len(hand) % groupSize != 0:
          return False

      # create a dictionary to store the frequency of each card
      freq = {}
      for card in hand:
          freq[card] = freq.get(card, 0) + 1

      # sort the hand
      hand.sort()

      # iterate through the hand
      for card in hand:
          # if the card is not in the dictionary, continue
          if card not in freq:
              continue

          # iterate through the next `groupSize` cards, starting from the current card because the hand is sorted and we want to check if the next `groupSize` cards are consecutive -> [card, card+1, card+2, ..., card+groupSize-1] -> [1, 2, 3, ..., groupSize], [2, 3, 4, ..., groupSize+1], [3, 4, 5, ..., groupSize+2], ...
          for i in range(card, card + groupSize):
              # if the card is not in the dictionary, return False
              if i not in freq:
                  return False
              # if the card is in the dictionary, decrement its frequency
              freq[i] -= 1
              # if the card's frequency is 0, remove it from the dictionary
              if freq[i] == 0:
                  del freq[i]

      # if the dictionary is empty, return True
      return len(freq) == 0
  ```

---

### Letter combinations of a phone number

Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.

- A mapping of digit to letters (just like on the telephone buttons) is given below. Note that `1` does not map to any letters.
  ![letter combinations of a phone number](./img/letter-combinations-of-phone-num-1.jpeg)

- EX:

  - Input: `digits = "23"`

- Explanation:
  - We can use a **backtracking** approach to solve this problem.
    1. We can start with an empty string and then append each letter of the first digit to the string.
    2. Then we can **recursively** call the function with the next digit and append each letter of the next digit to the string. We can continue this process until we reach the end of the string.
    3. Once we reach the end of the string, we can add the string to the result array.
  - Time complexity: `O(n.4^n)` where `n` is the length of the input string; `4` because some digits has 4 letters

```py
def letterCombinations(digits):
    # create a dictionary to store the mapping of each digit to its letters
    digit_letters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }

    # create an array to store the result
    result = []

    # create a helper function to do the backtracking
    def backtrack(i, curStr):
        """
        i: the index of the current digit
        curStr: the current string that we're building
        """
        # if we reached the end of the string, add the string to the result array
        if i == len(digits):
            result.append(curStr)
            return

        # Else: we continue building the string
        # iterate through the letters of the current digit
        for letter in digit_letters[digits[i]]:
            # recursively call the function with the next digit (i+1 because we're moving to the next digit, and add the updated string)
            backtrack(i+1, curStr+letter)

    # call the helper function
    if digits:
        backtrack(0, '')
    return result
```

---

### 4Sum II

Given four lists `A`, `B`, `C`, `D` of integer values, compute how many tuples `(i, j, k, l)` there are such that `A[i] + B[j] + C[k] + D[l]` is zero.

- Ex: `A = [ 1, 2], B = [-2,-1], C = [-1, 2], D = [ 0, 2]`

  - Output: `2`
  - Explanation: The two tuples are:
    1. `(0, 0, 0, 1)` -> `A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0`
    2. `(1, 1, 0, 0)` -> `A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0`

- **Solution 1:** using a dictionary -> `O(n^2)` time and `O(n^2)` space

  ```py
  def fourSumCount(A, B, C, D):
      # create a dictionary to store the sum of each pair of numbers in A and B
      sumAB = {}
      for a in A:
          for b in B:
              sumAB[a+b] = sumAB.get(a+b, 0) + 1

      # create a dictionary to store the sum of each pair of numbers in C and D
      sumCD = {}
      for c in C:
          for d in D:
              sumCD[c+d] = sumCD.get(c+d, 0) + 1

      # iterate through the keys of the first dictionary
      count = 0
      for sum1 in sumAB:
          # if the complement is in the second dictionary, add the product of the frequencies to the count
          if -sum1 in sumCD:
              count += sumAB[sum1] * sumCD[-sum1]

      return count
  ```

- Solution 2: using a dictionary **(Better ✅)** -> `O(n^2)` time and `O(n)` space

  ```py
  def fourSumCount(A, B, C, D):
      # create a dictionary to store the sum of each pair of numbers in A and B
      sumAB = {}
      for a in A:
          for b in B:
              sumAB[a+b] = sumAB.get(a+b, 0) + 1

      # iterate through the keys of the first dictionary
      count = 0
      for c in C:
          for d in D:
              # if the complement is in the first dictionary, add the product of the frequencies to the count
              if -(c+d) in sumAB:
                  count += sumAB[-(c+d)]

      return count
  ```

---

## Trees

- **Trees Tips:**
  - Whenever you see the word **"width"** in any tree question, it's a **Breadth First Search** problem
  - Always ask if the tree is binary search tree (BST) or not, so that you can use the BST properties to solve the problem (e.g. left < root < right)

### General Tree Questions

#### Level Width

Write a function that accepts a root node of a tree and return an array where each element is the width of the tree at each level.

- EX: this tree returns `[1, 3, 2]`
- explanation:

  - To solve this problem, we can use BFS (Breadth-First Search) to traverse the tree level by level. At each level, we can keep track of the indices of the leftmost and rightmost non-null nodes. The width of the level is then calculated as the difference between the indices plus one.

  - We can use a queue to store the nodes that we need to visit. We start by adding the root node to the queue along with its index, which we set to 0. We also initialize two variables, max_width and level_width, to 0. max_width will be used to store the maximum width we have seen so far, and level_width will be used to store the width of the current level.

  - Then, we start the BFS loop. In each iteration of the loop, we first get the number of nodes in the current level by getting the size of the queue. We then loop through all the nodes in the current level and update the leftmost and rightmost indices as necessary. We also add the children of each node to the queue along with their indices, which we calculate based on the indices of their parent node.

  - At the end of each level, we update the max_width variable with the level_width if it is greater than max_width. We then reset the level_width variable to 0 for the next level.

  - Once we have processed all the nodes in the tree, we return the max_width variable as the answer.

- **Steps:** (BFS)

  1. create an array to store the width of each level and initialize the array with `0`
  2. create an array to store the nodes of each level and initialize the array with (the root node and a `'s'` token)
     ![tree level width](./img/tree-level-width-1.png)
  3. while the nodes-array is not empty
     1. `pop` the first node in the array
        ![tree level width](./img/tree-level-width-2.png)
     2. if the node is a `'s' (reference token)`, it means we've reached the end of the current level
        ![tree level width](./img/tree-level-width-3.png)
        1. add a `'s'` to the end of the array to mark the end of the next level
        2. add `0` to the end of the width array
           ![tree level width](./img/tree-level-width-4.png)
     3. if the node is not a `'s'`, add its children to the end of the array
     4. increment the last element in the width array by `1`
  4. return the width array

  ```sh
          0          # level 1
       /  |   \
     1    2    3     # level 2
    / \
   4   5             # level 3
  ```

```py
def level_width(root):
    # create an array to store the width of each level
    widths = [0]
    # create an array to store the nodes of each level
    # initialize the array with the root node
    nodes = [root, 's']

    # while the nodes-array is not empty (will be empty if it only contains one element which is the 's' token)
    while len(nodes) > 1:
        # pop the first node in the array
        node = nodes.pop(0)

        # if the node is a 's', it means we've reached the end of the current level
        # add a 's' to the end of the array to mark the end of the next level
        if node == 's':
            nodes.append('s')
            widths.append(0)
        # if the node is not a 's', add its children to the end of the array
        else:
            nodes.extend(node.children)
            # increment the width of the current level
            widths[-1] += 1
    return widths
```

---

#### Number of islands

Given a 2D grid map of `'1'`s (land) and `'0'`s (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
![number of islands](./img/num-of-islands.png)

- EX: `numIslands(grid) --> 1`
  ![number of islands](./img/num-of-islands-1.png)

- It can be solved using `BFS`, where we create layers of islands and keep track of the number of layers we have created.
  ![number of islands](./img/num-of-islands-2.png)

- **Steps:** -> `BFS`
  - loop through the rows of the grid (i) and loop through the columns of the grid (j) and if the current cell is a `'1'`, increment the number of islands by 1 and call the helper function to mark the current island as visited
  - the bfs-helper-function (`mark_island`) will mark the current cell as visited and then recursively call itself on the adjacent cells (up, down, left, right) that are `'1'`s
  - once the helper function is done, we return the number of islands

```py
def numIslands(grid):
    # if the grid is empty, return 0
    if not grid:
        return 0

    # initialize number of islands to 0
    num_islands = 0
    # get dimensions of the grid
    rows, cols = len(grid), len(grid[0])
    # initialize set of visited islands to mark visited positions
    visited = set()

    # Helper BFS function to mark the current island as visited
    def mark_island(r, c):
        if grid[r][c] != '1' or (r, c) in visited:
            return
        # mark the current cell as visited
        visited.add((r, c))
        # recursively call the helper function on the adjacent cells (up, down, left, right) that are '1's
        if r > 0:
            mark_island(r - 1, c)
        if r < rows - 1:
            mark_island(r + 1, c)
        if c > 0:
            mark_island(r, c - 1)
        if c < cols - 1:
            mark_island(r, c + 1)

    for r in range(rows):
        for c in range(cols):
            # if the current cell is a '1', increment the number of islands by 1
            # and call the helper function to mark the current island as visited
            if grid[r][c] == '1' and (r, c) not in visited:
                mark_island(r, c)
                num_islands += 1

    return num_islands
```

---

#### Path Sum

Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a **root-to-leaf** path such that adding up all the values along the path equals `targetSum`.

- Explanation:
  ![path-sum](./img/path-sum-1.png)

  - We can use a **Depth-First Search** to traverse the tree and keep track of the current sum of the path from the root to the current node. If we reach a leaf node and the current sum is equal to the target sum, then we return `True`. Otherwise, we return `False`.

- Solution 1: by subtracting the current node's value from the target sum

  ```py
  def hasPathSum(root, targetSum):
      if root is None:
          return False

      # if the root is a leaf node, check if the current sum is equal to the target sum
      if root.left is None and root.right is None:
        return root.val == targetSum

      targetSum -= root.val
      return hasPathSum(root.left, targetSum) or hasPathSum(root.right, targetSum)
  ```

- Solution 2: by adding the current node's value to the current sum

  ```py
  def hasPathSum(root, targetSum):
      def dfs(node, curSum):
          if node is None:
              return False

          curSum += node.val
          # if the root is a leaf node, check if the current sum is equal to the target sum
          if not node.left and not node.right:
              return curSum == targetSum

          return dfs(node.left, curSum) or dfs(node.right, curSum)

      return dfs(root, 0)
  ```

---

#### Symmetric Tree

Given the `root` of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

- Explanation:
  ![symmetric tree](./img/symmetric-tree-1.png)

  - We can use a **Depth-First Search** to traverse the tree and check if the left subtree of the root is a mirror of the right subtree of the root.
  - because this is a mirror, we need to check:
    - if the `left` child of the `left` subtree is equal to the `right` child of the `right` subtree
    - and if the `right` child of the `left` subtree is equal to the `left` child of the `right` subtree
  - we will know that the tree is symmetric if the above conditions are true for all nodes in the tree and when we reach `null` nodes

- Time complexity: `O(n)` where `n` is the number of nodes in the tree
- Space complexity: `O(h)` where `h` is the height of the tree (as it's a `BFS` algorithm)

```py
def isSymmetric(root):
    def dfs(left, right):
        # if both nodes are null, return True
        if not left and not right:
            return True
        # if one of the nodes is null, return False
        if not left or not right:
            return False
        # if the values of the nodes are not equal, return False
        if left.val != right.val:
            return False

        return dfs(left.left, right.right) and dfs(left.right, right.left)

    return dfs(root.left, root.right)
```

---

#### Lowest Common Ancestor of a Binary Tree

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

> "The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow **a node to be a descendant of itself**)."

- Ex:
  ![lowest common ancestor](./img/LCA-tree-1.png)

  - The lowest common ancestor of `p = 6` and `q = 7` is `3`.

- Explanation:
  - We can use a **Depth-First Search** to traverse the tree and check:
    - if the current node is equal to `p` or `q`
    - or if the current node is equal to the lowest common ancestor of `p` and `q`.
  - We can use a **Bottom-Up Approach** to solve this problem.
    1. We start by checking if the current node is equal to `p` or `q`. If it is, then we return the current node. Otherwise, we recursively call the function on the left and right subtrees.
    2. If both the left and right subtrees return a non-null value, then we know that the current node is the lowest common ancestor of `p` and `q`.
    3. Otherwise, we return the non-null value that was returned by either the left or right subtree.

```py
def lowestCommonAncestor(root, p, q):
    # base case
    if not root:
      return None

    # if the node is equal to p or q, then we know that the current node is the lowest common ancestor of p and q
    if root == p or root == q:
        return root

    # recursively call the function on the left and right subtrees
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)

    # if both the left and right subtrees return a non-null value, then we know that the current node is the lowest common ancestor of p and q
    if left and right:
        return root
    # otherwise, we return the non-null value that was returned by either the left or right subtree
    return left or right
```

---

#### Vertical Order Traversal of a Binary Tree

Given the `root` of a binary tree, calculate the **vertical order traversal** of the binary tree.

For each node at position `(row, col)`, its left and right children will be at positions `(row + 1, col - 1)` and `(row + 1, col + 1)` respectively. The root of the tree is at `(0, 0)`.

> The **vertical order traversal** of a binary tree is a list of top-to-bottom orderings for each column index starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values.

![vertical order traversal](./img/vertical-order-traversal-1.jpg)

- Solution 1: using `queue`

  ```py
  def verticalTraversal(root):
      # dictionary to store the nodes of each column
      columns = {} # {col: [(row, val), (row, val), ...]}

      # queue to store the nodes that we need to visit
      queue = [(root, 0, 0)]

      # while the queue is not empty
      while queue:
          # pop the first node in the queue
          node, row, col = queue.pop(0)

          # if the node is not null, add it to the dictionary
          if node:
              columns[col] = columns.get(col, []) + [(row, node.val)]
              # add the left and right children of the node to the queue
              queue.append((node.left, row + 1, col - 1))
              queue.append((node.right, row + 1, col + 1))

      # sort the nodes of each column by their row and value
      result = []
      for col in sorted(columns):
          result.append([val for row, val in sorted(columns[col])])

      return result
  ```

- Solution 2: using `DFS`

  ```py
  def verticalTraversal(root):
      # dictionary to store the nodes of each column
      columns = {} # {col: [(row, val), (row, val), ...]}

      # helper function to do the DFS
      def dfs(node, row, col):
          if node:
              columns[col] = columns.get(col, []) + [(row, node.val)]
              dfs(node.left, row + 1, col - 1)
              dfs(node.right, row + 1, col + 1)

      # call the helper function
      dfs(root, 0, 0)

      # sort the nodes of each column by their row and value
      result = []
      for col in sorted(columns):
          result.append([val for row, val in sorted(columns[col])])

      return result
  ```

---

#### Flatten Binary Tree to Linked List

Given the `root` of a binary tree, flatten the tree into a "linked list":

- The "linked list" should use the same `TreeNode` class where the `right` child pointer points to the next node in the list and the `left` child pointer is always `null`.
- The "linked list" should be in the same order as a **pre-order traversal** of the binary tree.
- Ex: `flatten(root) --> [1, null, 2, null, 3, null, 4, null, 5, null, 6]`
  ![flatten binary tree](./img/flatten-binary-tree-to-linked-list.png)

- Solution 1:

  - We can use a **Depth-First Search** to traverse the tree and keep track of the previous node in the linked list.
  - At each node, we set the previous node's `right` child to the current node and set the current node's `left` child to `null`.
  - We then update the previous node to the current node and recursively call the function on the left and right subtrees.

  ```py
  # Time complexity: O(n) where n is the number of nodes in the tree
  # Space complexity: O(h) where h is the height of the tree
  def flatten(root):
      prev = None # current tail of the linked list

      def dfs(node):
          if node:
              # set the previous node's right child to the current node
              # and set the current node's left child to null
              if prev:
                  prev.right = node
                  prev.left = None
              # update the previous node to the current node
              prev = node
              # recursively call the function on the left and right subtrees
              dfs(node.left)
              dfs(node.right)

      # call the helper function
      dfs(root)
  ```

- Another solution:

  ```py
  def flatten(root):
    # flatten the root tree and return the list tail
    def dfs(root):
      if not root:
        return

      leftTail = dfs(root.left)
      rightTail = dfs(root.right)

      if root.left:
        # connect the leftTail to the current root's right child
        leftTail.right = root.right
        # connect the current root's left child to the current root's right child
        root.right = root.left
        root.left = None

      last = rightTail or leftTail or root
      return last

    dfs(root)
  ```

---

### Binary Search Trees (BST)

- **Binary Search Trees Tips:**
  - When you're asked to find the **closest value** in a BST, you can use a **Depth First Search** to traverse the tree
  - When you're asked to find the **closest value** in a BST, you can use a **Breadth First Search** to traverse the tree
  - When you're asked to find the **closest value** in a BST, you can use a **Binary Search** to traverse the tree

#### BST Insertion

Write a function that accepts a root node of a BST and a value to insert into the tree. The function should return the root node of the BST after the insertion.

- EX: `insert(root, 5) --> root`
  ![bst insertion](./img/bst-insertion-1.png)

```py
def insert(root, value):
    # if the root is None, create a new node with the value and return it
    if root is None:
        return Node(value)

    # if the value is less than the root's value, insert it to the left
    if value < root.value:
        root.left = insert(root.left, value)
    # if the value is greater than the root's value, insert it to the right
    else:
        root.right = insert(root.right, value)

    return root
```

---

#### Validate BST

Write a function that accepts a root node of a BST and returns `True` if the tree is a valid BST and `False` if it is not.

- EX: `validate(root) --> True`
- Explanation:
  - The first solution that comes into mind is to check the right & left children of each node and check if they're less than or greater than the root node
    - but that's not enough because the right child of the root node might be less than the root node, but it's greater than the left child of the root node.
      ![validate bst](./img/validate-bst-1.png)
  - So we can't just check the neighbors and children one time and we have to check the whole tree for each node -> `O(n^2)` **BAD!**
- **Solution** is to use ranges for each point:
  ![validate bst](./img/validate-bst-2.png)

  - root node should be in the range of `(-inf, inf)`
  - left child of the root node should be in the range of `(-inf, root.value)`
  - right child of the root node should be in the range of `(root.value, inf)`

- **Solution 1:** Using min and max ranges

  - **Steps:**
    1. create a function that accepts a `root` node, a `min` value and a `max` value
    2. if the root is None, return `True`
    3. if the root's value is less than or equal to the `min` value or greater than or equal to the `max` value, return `False`
    4. recursively call the function with the root's left node and the `min` value and the root's value
    5. recursively call the function with the root's right node and the root's value and the `max` value
    6. return `True`

  ```py
  def isValidBST(root):
      # helper function
      def validate(root, min, max):
          if root is None:
              return True
          if root.value <= min or root.value >= max:
              return False

          # recursively call the function with the root's left/right node and the min/max value and the root's value
          return validate(root.left, min, root.value) and validate(root.right, root.value, max)

      # return the result of the function
      return validate(root, float('-inf'), float('inf'))
  ```

- **Solution 2:** Using In-Order Traversal

  - **Steps:**
    1. create a function that accepts a `root` node
    2. create an array to store the `values` of the nodes in the tree
    3. create a function that accepts a `root` node and adds the `values` of the nodes in the tree to the array, then call the function with the `root`'s `right` node
    4. call the function with the `root` node
    5. loop through the array and check if the values are in ascending order
    6. if the values are in ascending order, return `True`

  ```py
  def validate(root):
      # create an array to store the values of the nodes in the tree
      values = []

      # create a function that accepts a root node
      def traverse(root):
          # if the root is None, return
          if root is None:
              return

          # call the function with the root's left node
          traverse(root.left)
          # add the root's value to the array
          values.append(root.value)
          # call the function with the root's right node
          traverse(root.right)

      # call the function with the root node
      traverse(root)

      # loop through the array and check if the values are in ascending order
      for i in range(len(values) - 1):
          # if the values are not in ascending order, return False
          if values[i] > values[i + 1]:
              return False

      # if the values are in ascending order, return True
      return True
  ```

---

#### Binary Tree Inorder Traversal

Given the `root` of a binary tree, return the inorder traversal of its nodes' values.

![binary-tree-inorder-traversal](./img/binary-tree-inorder-traversal.jpg)

- Explanation:

  - We can use a `DFS` to traverse the tree and add the values of the nodes to an array.
  - We can use a helper function to do the `DFS` and then return the array.

- Solution 1: using `DFS` **recursively**

  ```py
  def inorderTraversal(root):
      values = []

      def traverse(root):
          if root is None:
              return
          # 1. recursively call the function with the root's left node until we reach a leaf node (None)
          traverse(root.left)
          # 2. add the root's value to the array
          values.append(root.value)
          # 3. recursively call the function with the root's right node until we reach a leaf node (None)
          traverse(root.right)

      traverse(root)
      return values
  ```

- Solution 2: using `DFS` + `stack` **iteratively**
  ![binary-tree-inorder-traversal](./img/binary-tree-inorder-traversal-1.png)

  ```py
  def inorderTraversal(root):
      values = []
      stack = []
      cur = root

      # while the stack is not empty or the cur is not None
      while stack or cur:
          # 1. loop through the left nodes of the cur and add them to the stack
          while cur:
              stack.append(cur)
              cur = cur.left

          # 2. add the node's value to the array
          node = stack.pop()
          values.append(node.value)
          # 4. set the root to the node's right node
          cur = node.right

      return values
  ```

---

#### Binary Tree Postorder Traversal

Given the `root` of a binary tree, return the postorder traversal of its nodes' values.

- Solution 1: **Recursive**

  - the recursive solution uses the `call stack` to store the nodes of the tree

  ```py
  def postorderTraversal(root):
      values = []

      def traverse(root):
          if root is None:
              return
          # 1. recursively call the function with the root's left node until we reach a leaf node (None)
          traverse(root.left)
          # 2. recursively call the function with the root's right node until we reach a leaf node (None)
          traverse(root.right)
          # 3. add the root's value to the array
          values.append(root.value)

      traverse(root)
      return values
  ```

- Solution 2: **Iterative**

  - The iterative solution uses a `stack` to store the nodes of the tree
    - for each node, before going to the left node, we need to add the node and the right node to the stack **(to come back to them later)**
    - we only want to add the value of a node to the `result` array when we reach a leaf node (a node that has no children)
      - which means that when visiting the node for the second time, we need to check if the node has been visited before or not
        - if the node has been visited before, we can add its value to the `result` array
        - if the node has not been visited before, we need to add it to the stack and visit its left node

  ```py
  def postorderTraversal(root):
      stack = [root]
      visit = [False]
      res = []

      while stack:
        cur, visited = stack.pop(), visit.pop()
        if cur:
          if visited:
            res.append(cur.val)
          else:
            # append everything (right first because we want to visit it last)
            stack.append(cur)
            visit.append(True)
            stack.append(cur.right)
            visit.append(False)
            stack.append(cur.left)
            visit.append(False)

      return res
  ```

---

#### Maximum Depth of Binary Tree

Given the `root` of a binary tree, return its maximum depth.

A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.

- Explanation:
  - We will use **recursive DFS** to solve this problem
    ![max-depth-of-binary-tree](./img/max-depth-of-binary-tree.png)

```py
def maxDepth(root):
    # if the root is None, return 0
    if root is None:
        return 0

    # recursively call the function with the root's left node and the root's right node
    left = maxDepth(root.left)
    right = maxDepth(root.right)

    # return the maximum depth of the tree
    return max(left, right) + 1
```

- **Other solutions without recursion**

  - **Solution 1:** using `BFS` + `queue` -> **level-order traversal**
    ![max-depth-of-binary-tree](./img/max-depth-of-binary-tree-1.png)

    ```py
    def maxDepth(root):
        if root is None:
            return 0

        level = 0
        q = deque([root])

        # while the queue is not empty
        while queue:
            # loop through the queue to add the children of each node to the queue (BFS) + update level when finished
            for i in range(len(queue)):
                # pop the first node in the queue
                node = q.popleft()
                if node.left:
                  q.append(node.left)
                if node.right:
                  q.append(node.right)
            # increment the level by 1
            level += 1

        return level
    ```

  - **Solution 2:** using `DFS` + `stack`

    ```py
    def maxDepth(root):
        if root is None:
            return 0

        level = 0
        stack = [(root, 1)] # (node, level)

        # while the stack is not empty
        while stack:
            # pop the first node in the stack
            node, level = stack.pop()
            if node.left:
                stack.append((node.left, level + 1))
            if node.right:
                stack.append((node.right, level + 1))

        return level
    ```

---

#### Check Completeness of a Binary Tree

Given the `root` of a binary tree, determine if it is a **complete binary tree**. In a **complete binary tree**, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between `1` and `2h` nodes inclusive at the last level `h`.

- EX: `isCompleteTree(root) --> True`

- Explanation:

  - in a complete binary tree, if we draw the tree level by level, we can see that the **last level is filled from left to right**
  - So, when we pop the last node in the queue, we should not see any more nodes in the queue
    ![check completeness of a binary tree](./img/check-completeness-of-binary-tree-1.png)
  - To do so, we'll use `BFS` because we want to traverse the tree **level by level**, and then check if the last level is filled from **left-to-right**
    - We know that the last level will be filled with `None` nodes
    - So when we reach the first `None` node, we should not see any more nodes in the queue when popping/
      ![check completeness of a binary tree](./img/check-completeness-of-binary-tree-2.png)

- **Solution:** using `BFS` + `queue`

  ```py
  # Time complexity: O(n), Space complexity: O(n)
  def isCompleteTree(root):
      if root is None:
          return True

      # create a queue to store the nodes of each level
      q = deque([root])
      # create a flag to indicate if we've reached the last level
      reached_last_level = False

      # while the queue is not empty
      while q:
          # pop the first node in the queue
          node = q.popleft()

          # if we've reached the last level, but the current node is not None, return False
          if reached_last_level and node is not None:
              return False

          # if the current node is None, set the flag to True
          if node is None:
              reached_last_level = True
          # else add its children to the queue
          else:
              q.append(node.left)
              q.append(node.right)

      # if we didn't return False, return True
      return True
  ```

- **Another solution** without using a boolean state variable:

  ```py
  def isCompleteTree(root):
      q = deque([root])

      while q:
          node = q.popleft()

          if node:
              q.append(node.left)
              q.append(node.right)
          else:
              while q:
                  # if we found a non-null node
                  if q.popleft():
                      return False

      return True
  ```

---

#### Binary Tree Zigzag Level Order Traversal

Given the `root` of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from `left` to `right`, then `right` to `left` for the next level and alternate between).

- Ex:

  - Input: `root = [3,9,20,null,null,15,7]`
  - Output: `[[3],[20,9],[15,7]]`

- Explanation:

  - we want to take every level and reverse it if it's an odd level and then add it to the result array
    ![binary zigzag](./img/binary-zigzag.png)
  - we can use BFS to traverse the tree level by level and:
    1. use a flag to indicate if we're going from left to right or from right to left and toggle it on each level
    2. use a double-ended queue (deque) to store the nodes of each level
    3. reverse the odd levels after adding them to the result array

- **Solution 1** `DFS` + Iterative + `deque`

  ```py
  def zigzagLevelOrder(root):
      if root is None:
          return []

      result = []
      # create a queue to store the nodes of each level
      q = deque([root])

      while q:
          # create an array to store the nodes of the current level
          level = []
          # loop through the queue
          for i in range(len(q)):
              # pop the first node in the queue
              node = q.popleft()
              # add the node's value to the level array
              level.append(node.value)
              # add the node's children to the queue
              if node.left:
                  q.append(node.left)
              if node.right:
                  q.append(node.right)

          # reverse if it's an odd level
          level = reversed(level) if len(result) % 2 else level
          result.append(level)

      return result
  ```

- **Solution 2**: `DFS` + recursive

  ```py
  def zigzagLevelOrder(root):
      if root is None:
          return []

      result = []

      def dfs(node, level):
          if node is None:
              return

          # if the current level is greater than the length of the result array, add a new array to the result array
          if level >= len(result):
              result.append([])

          # add the node's value to the array
          result[level].append(node.value)
          # recursively call the function with the node's left and right nodes and the next level
          dfs(node.left, level + 1)
          dfs(node.right, level + 1)

      dfs(root, 0)

      # reverse the odd levels
      for i in range(len(result)):
          if i % 2:
              result[i] = reversed(result[i])

      return result
  ```

---

#### Sum of Left Leaves

Given the `root` of a binary tree, return the sum of all left leaves.

![sum of left leaves](./img/sum-of-left-leaves.png)

- **Solution 1:** using `DFS` + `stack`

  ```py
  def sumOfLeftLeaves(root):
      if root is None:
          return 0

      stack = [(root, False)] # (node, is_left)
      sum = 0

      while stack:
          node, is_left = stack.pop()
          # if the node is a left leaf, add its value to the sum
          if is_left and node.left is None and node.right is None:
              sum += node.value
          if node.left:
              stack.append((node.left, True))
          if node.right:
              stack.append((node.right, False))

      return sum
  ```

- **Solution 2:** using `BFS` + `recursion`

  ```py
  def sumOfLeftLeaves(root):
      if root is None:
          return 0

      # If root has a left child and the left child is a leaf node, add it to the sum
      if root.left and root.left.left is None and root.left.right is None:
          return root.left.value + sumOfLeftLeaves(root.right)
      # Otherwise, recursively call sumOfLeftLeaves on the left and right children
      else:
          return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
  ```

---

#### Diameter of Binary Tree

Given the `root` of a binary tree, return the length of the **diameter** of the tree.

The diameter of a binary tree is the **length** of the longest path between any two nodes in a tree. This path may or may not pass through the `root`.
![diameter of binary tree](./img/diameter-of-binary-tree-1.png)

- **Explanation**
  - To solve this, we can use a **Depth First Search** to traverse the tree and keep track of the **diameter** of the tree
  - we do so by calculating the diameter for each node recursively and then return the maximum diameter
  - to calculate the diameter of a node, we need to calculate the **height** of the left subtree and the **height** of the right subtree and then add them together
    ![diameter of binary tree](./img/diameter-of-binary-tree-2.png)
    - the **height** of a subtree is the number of edges between the root node and the farthest leaf node
    - `diameter` = `left_height` + `right_height`
    - we add them because the diameter of a node is the longest path between any two nodes in a tree and this path may or may not pass through the `root` (see picture)
      ![diameter of binary tree](./img/diameter-of-binary-tree-3.webp)
- So, the approach for solving this problem is to calculate the `height` of each node's `left` and `right` subtrees and find the maximum `sum` of heights for any node. This `sum` represents the longest path that passes through that node. We can do this recursively for each node in the tree and keep track of the maximum diameter found so far.

```py
def diameterOfBinaryTree(root):
    # create a variable to store the diameter of the tree
    diameter = 0

    # create a function that accepts a root node and returns the height of the tree
    def height(root):
        # if the root is None, return 0
        if root is None:
            return 0

        # recursively call the function with the root's left node and the root's right node
        left = height(root.left)
        right = height(root.right)

        # update the diameter of the tree
        diameter = max(diameter, left + right)

        # return the height of the tree (1 for the current node)
        return max(left, right) + 1

    height(root)
    return diameter
```

---

#### Minimum Absolute Difference in BST

Given the `root` of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

- Ex:

  - Input: `root = [4,2,6,1,3]`
  - Output: `1`

- **Explanation**
  - We can use a **inorder DFS** to traverse the tree and keep track of the **minimum absolute difference** between the values of any two different nodes in the tree
  - we do so by calculating the **absolute difference** between the current node's value and the **previous** node's value and then return the minimum absolute difference
    - > Here, `prev` is the node below and not above
  - we create a recursive function `traverse()`:
    - it takes a node as input and recursively traverses its **left subtree** until it reaches a leaf node
      - > because the values in the **left** subtree are less than the current node's value
    - then checks if the `prev` variable is not `None`. If it is not None, it calculates the absolute difference between the current node and the previous node, and updates the `min_diff` variable with the minimum of the current minimum absolute difference and the absolute difference between the current node and the previous node.
    - It then sets the `prev` variable to the current node and recursively traverses the **right subtree**.
      - we go to `left` subtree first because the values in the `left` subtree are less than the current node's value

```py
def getMinimumDifference(root):
    min_diff = float('inf')
    prev = None

    def traverse(root):
        if not root:
            return

        traverse(root.left)

        # if the previous node's value is not None, update the minimum absolute difference
        if prev:
            min_diff = min(min_diff, root.value - prev.val)

        # update the previous node's value
        prev = root

        # recursively call the function with the root's right node
        traverse(root.right)

    # call the function with the root node
    traverse(root)
    return min_diff
```

---

#### Invert Binary Tree

Given the `root` of a binary tree, invert the tree, and return its root.

- Ex:
  ![invert bst](./img/invert-bst-1.jpg)

  - Input: `root = [4,2,7,1,3,6,9]`
  - Output: `[4,7,2,9,6,3,1]`

- Explanation:
  - here, we want to visit every node and swap its `left` and `right` children
  - do this recursively for each node with `DFS`

```py
def invertTree(root):
    if not root:
        return None

    # swap the children
    root.left, root.right = root.right, root.left

    # recursively call the function with the root's left node and the root's right node
    invertTree(root.left)
    invertTree(root.right)

    return root

# -------------------------------------------------------------------
# Different method (DFS)
def invertTree(root):
    if not root:
      return None

    # recursively call the function with the root's left node and the root's right node
    left = invertTree(root.left)
    right = invertTree(root.right)

    # swap the children
    root.left = right
    root.right = left

    return root
```

---

#### Kth Smallest Element in a BST

Given the `root` of a binary search tree, and an integer `k`, return the `kth` smallest value (`1-indexed`) of all the values of the nodes in the tree.

- Ex:

  - Input: `root = [3,1,4,null,2], k = 1`
  - Output: `1`

- Explanation:
- **Solution 1:** using `DFS` + sorting **(recursively)**

  - we can use `DFS` to traverse the tree and add the values of the nodes to an array
  - then we can sort the array and return the `kth` smallest value

  ```py
  def kthSmallest(root, k):
      values = []

      def traverse(root):
          if root is None:
              return

          # Traverse in-order
          traverse(root.left)
          values.append(root.value)
          traverse(root.right)

      traverse(root)
      values.sort()
      return values[k - 1]
  ```

- **Solution 2:** using `DFS` + `stack` **(iteratively)**

  - we go left as far down as we can with adding the values to the stack and then go up by popping the nodes from the stack and adding their values to the array

    - we can use a `stack` to store the nodes of the tree in descending order
    - then we can pop the first `k` nodes from the stack and return the last node's value

    ```py
    def kthSmallest(root, k):
        stack = []
        cur = root

        while stack or cur:
            # loop through the left nodes of the cur and add them to the stack
            while cur:
                stack.append(cur)
                cur = cur.left

            # pop the first node in the stack
            node = stack.pop()
            k -= 1
            if k == 0:
                return node.value

            # set the root to the node's right node
            cur = node.right
    ```

---

#### Lowest Common Ancestor of a Binary Search Tree

Given a binanaary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

> "The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow **a node to be a descendant of itself**)."

- Explanation:
  - This is different from the **lowest common ancestor of a binary tree** problem because in a **binary tree**, we can have nodes with only one child, and also the nodes can be in any order.
  - But in a **binary search tree**, we know that the nodes in the left subtree are less than the root node and the nodes in the right subtree are greater than the root node.
  - So, we can use this property to find the lowest common ancestor of two nodes in a BST.

```py
def lowestCommonAncestor(root, p, q):
    cur = root

    while cur:
      # if the current node is bigger than both p and q, go left (smaller value)
      if cur.value > p.value and cur.value > q.value:
        cur = cur.left
      # else if the current node is smaller than both p and q, go right (bigger value)
      elif cur.value < p.value and cur.value < q.value:
        cur = cur.right
      # else return the current node -> it's the lowest common ancestor
      else:
        return cur
```

---

## Tries

### Implement Trie (Prefix Tree)

A **trie** (pronounced as "try") or **prefix tree** is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

- Steps
  - when inserting a word, we loop through each character in the word and check if the character is in the trie
    - if the character is in the trie, we move to the next character until we reach the end of the word
    - if the character is not in the trie, we add it to the trie by creating a node for that character
  - when adding all the characters of a word, we need to mark the last character as the end of the word by adding a `*` to the node

```py
class TrieNode:
    def __init__(self):
        """
        # Ex: children = {'a': TrieNode(), 'b': TrieNode()}
        # or: children['a'] = TrieNode()
        """
        self.children = {}
        self.end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        cur = self.root

        for char in word:
            # if the character is not in the trie, add it
            if char not in cur.children:
                cur.children[char] = TrieNode()
            # move to the next character if it's in the trie
            cur = cur.children[char]

        # mark the last character as the end of the word
        cur.end_of_word = True

    def search(self, word):
        cur = self.root

        for char in word:
            # if the character is not in the trie, return False
            if char not in cur.children:
                return False
            # move to the next character
            cur = cur.children[char]

        # return True if the last character is the end of the word
        return cur.end_of_word

    def startsWith(self, prefix):
        cur = self.root

        for char in prefix:
            # if the character is not in the trie, return False
            if char not in cur.children:
                return False
            # move to the next character
            cur = cur.children[char]

        # return True if we reach the end of the prefix
        return True
```

---

## Creating Shapes

### Steps shape

Write a function that accepts a positive number N. The function should print a step shape with N levels using the # character. Make sure the step has **spaces** on the right hand side!

- EX: `steps(3) --> '#  ', '## ', '###'`

```py
# Solution 1 - using for loops
def print_steps(n):
    for i in range(1, n + 1):
        step = '#' * i
        spaces = ' ' * (n - i)
        print(step + spaces)

# -------------------------------------------------

# Solution 2 - using recursion
def print_steps(n, row=0, step=''):
    # Base case: when we've printed all rows, stop recursion
    if n == row:
        return

    # If we've printed all the #s for the current row, print a new line and start a new row
    if n == len(step):
        print(step)
        return print_steps(n, row + 1) # must return to stop the function from executing the rest of the code

    # If we're still printing characters in the current row, decide whether to add a '#' or ' '
    if len(step) <= row:
        step += '#'
    else:
        step += ' '

    # Recursively call print_steps to print the next character in the current row
    print_steps(n, row, step)
```

---

### Pyramid

Write a function that accepts a positive number N. The function should console log a pyramid shape with N levels using the # character. Make sure the pyramid has spaces on both the left and right hand sides!

- EX:

  ```py
  pyramid(3)
  '  #  '
  ' ### '
  '#####'`
  ```

### Solution 1 - using for loops

- steps:

  1. Find the midpoint of the row
  2. Add the # to the left of the midpoint
  3. Add the # to the right of the midpoint
  4. Repeat until you reach N levels

```py
def pyramid(n):
    midpoint = (2 * n - 1) // 2

    # loop through each row in the pyramid (n rows)
    for row in range(n):
        level = ''
        for column in range(2 * n - 1):
            if midpoint - row <= column <= midpoint + row:
                level += '#' # add a # to the level when the column is within the range of the midpoint +/- the current row
            else:
                level += ' '
        print(level)
```

#### Solution 2 - using recursion

```py
def pyramid(n):
    if N == 0:
        return

    print_pyramid(N - 1)

    num_chars = 2 * N - 1
    num_spaces = (2 * N - 1 - num_chars) // 2
    level = " " * num_spaces + "#" * num_chars + " " * num_spaces

    print(level)

# ---------------------------OR------------------------------

def pyramid(n, row=0, level=''):
    # Base case: when we've printed all rows, stop recursion
    if n == row:
        return

    # If we've printed all the #s for the current row, print a new line and start a new row
    if len(level) == 2 * n - 1:
        print(level)
        return pyramid(n, row + 1) # must return to stop the function from executing the rest of the code

    midpoint = (2 * n - 1) // 2
    add = ''
    if midpoint - row <= len(level) <= midpoint + row:
        add = '#'
    else:
        add = ' '

    # Recursively call pyramid to print the next character in the current row
    pyramid(n, row, level + add)
```

---

## Numbers

### Climbing Stairs

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

- Ex:

  - Input: `n = 2`
  - Output: `2`
  - Explanation: There are two ways to climb to the top.
    1. `1 step + 1 step`
    2. `2 steps`

- **Explanation**
  ![climbing stairs](./img/climbing-stairs-1.png)
  ![climbing stairs](./img/climbing-stairs.png)
  - We can use **dynamic programming** to solve this problem
  - We can use a **bottom-up** approach to solve this problem
  - We can create an array of size `n + 1` to store the number of ways to reach each step
  - We can then loop through the array and calculate the number of ways to reach each step
    - The number of ways to reach the current step is equal to the number of ways to reach the previous step + the number of ways to reach the step before the previous step
    - We can then return the last element in the array

```py
def climbStairs(n):
    # create an array of size n + 1 to store the number of ways to reach each step
    dp = [0] * (n + 1)

    # set the first two elements in the array to 1
    dp[0] = 1
    dp[1] = 1

    # loop through the array and calculate the number of ways to reach each step
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    # return the last element in the array
    return dp[-1]
```

---

### Partitioning Into Minimum Number Of Deci-Binary Numbers

A decimal number is called **deci-binary** if each of its digits is either `0` or `1` without any leading zeros. For example, `101` and `1100` are **deci-binary**, while `112` and `3001` are not.

Given a string `n` that represents a positive decimal integer, return the **minimum** number of positive **deci-binary** numbers needed so that they sum up to `n`.

- EX:

  ```py
  Input: n = "32"
  Output: 3
  Explanation: 10 + 11 + 11 = 32
  ```

  ```py
  Input: n = "82734"
  Output: 8
  ```

- **Steps:**

  1. Find the largest digit in `n`. This digit will be used to create a deci-binary number.

  2. Create a deci-binary number using only the digits `0` and `1`, with the length equal to the largest digit found in step 1. This deci-binary number represents the largest multiple of 10 (in decimal) that is less than or equal to n.

     - ex: `n = 42`, largest digit is 4, so create a deci-binary number with 4 digits: `1111`
       - **How** -> Create a deci-binary number with length `4`. The largest multiple of `10` (in decimal) that is less than or equal to `42` is `40`, which is represented in deci-binary as `11110`.

  3. Subtract the deci-binary number from n to get a new number. Repeat steps 1-3 with the new number until the new number becomes `0`.

     - Subtract `40` from `42` to get `2`. Repeat steps 1-3 with `2`.
     - Subtract `2` from `2` to get `0`. Stop.

  4. The number of deci-binary numbers created in steps 2-3 is the minimum number of deci-binary numbers required to represent n.

- **EX** -> `82734`

  ```py
  # 82734 - 11111 = 71623
  # 71623 - 11111 = 60512
  # 60512 - 10111 = 50401
  # 50401 - 10101 = 40300
  # 40300 - 10100 = 30200
  # 30200 - 10100 = 20100
  # 20100 - 10100 = 10000
  # 10000 - 10000 = 0

  # -> 8 times

  # 42 - 1111 = 37
  # 37 - 1111 = 26
  # 26 - 1111 = 15
  # 15 - 1111 = 4
  # 4 - 1111 = -7 (stop)
  ```

```py
def min_partitions(n):
    # convert the string to a list of integers
    nums = [int(num) for num in n]

    # return the largest digit in the list
    return max(nums)

# another solution using for loop
def min_partitions(n):
    max_num = 0
    for num in n:
        if int(num) > max_num:
            max_num = int(num)
    return max_num
```

---

### Series

#### Fibonacci Number

The Fibonacci sequence is a series of numbers where a number is the sum of the two preceding numbers. The sequence starts with `0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...`

- EX: nth entry = `fib(4) --> 3`

##### Recursion solution steps

- The function takes an integer n as input, which represents the position of the number we want to find in the Fibonacci sequence.
- If n is not 0 or 1, the function returns the sum of the previous two numbers in the sequence, which are found by recursively calling the function with `n-1` and `n-2` as inputs.

  - For example, if we call `fib(5)`, the function will return the sum of the previous two numbers in the sequence: `fib(4)` + `fib(3)`. To find `fib(4)`, it will call `fib(3)` and `fib(2)`, and so on, until it reaches the base cases of `fib(0)` and `fib(1)`.
    ![Fibonacci](./img/fibonacci.png)
  - we will neglect `fib(0)` as it returns 0, and will only focus on `fib(1)`, which returns 1. This means that `fib(2)` will return 1, and `fib(3)` will return 2. This means that `fib(4)` will return 3, and `fib(5)` will return 5.
    ![Fibonacci](./img/fibonacci-1.png)

- Solution 1 - using recursion `O(2^n)` --> exponential time (BAD)

  - `O(2^n)` because we're calling the function twice for each number in the sequence and doing this for each level(`n` levels)

  ```py
  def fib(n):
      if n < 2:
          return n
      return fib(n - 1) + fib(n - 2)
  ```

**INTERVIEW QUESTION:** How can we improve this `O(2^n)` performance?

- **Memoization:** In the current implementation, the function recalculates the same values multiple times, which can be inefficient. We can use memoization to store the results of previous calculations and avoid redundant calculations.
  ![Fibonacci](./img/fibonacci-2.png)

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

- using generic memoization function (useful for interviews)

  ```py
  # def slowFib(n):
  #   if (n < 2):
  #     return n
  #   return fib(n - 1) + fib(n - 2)

  # # generic memoization function
  # def memoize(fn):
  #   cache = {}
  #   def memoized(*args):
  #     if args in cache:
  #       return cache[args]
  #     res = fn(*args)
  #     cache[args] = res
  #     return res
  #   return memoized

  # # apply memoization to fib function
  # fib = memoize(slowFib)
  ```

---

##### Fibonacci looping solution

```py
# Solution 1 - using loops O(n)
def fib(n):
    # base case
    if n < 2:
        return n

    # initialize first 2 elements (a and b)
    a, b = 0, 1

    # loop through n -> [a, b, c] and change the values of a, b, and c or create an array and append the values of c
    for i in range(2, n + 1):
        # update a, b, and c
        c = a + b
        a = b
        b = c
    return b

# -------------------------------------------------

# Solution 2 - using loops O(n)
def fib(n):
    total = 0
    fib0, fib1 = 0, 1
    for x in range(n+1):
        if x > 0:
            if x == 1:
                total = 1
            else:
                total = fib0 + fib1
                fib0 = fib1
                fib1 = total
    return total
```
