# INDEX

- [INDEX](#index)
  - [Notes](#notes)
  - [Queue](#queue)
    - [Queue using two stacks](#queue-using-two-stacks)
  - [Stacks](#stacks)
    - [Implement Stack using Queues](#implement-stack-using-queues)
    - [Valid Parentheses](#valid-parentheses)
    - [Valid Parenthesis String](#valid-parenthesis-string)
    - [Minimum Remove to Make Valid Parentheses](#minimum-remove-to-make-valid-parentheses)
    - [Minimum Add to Make Parentheses Valid](#minimum-add-to-make-parentheses-valid)
    - [Next Greater Element I](#next-greater-element-i)
    - [Next Greater Element II](#next-greater-element-ii)
    - [Daily Temperatures](#daily-temperatures)
    - [Tag Validator](#tag-validator)

---

## Notes

- You should think about using a stack or a queue when you have:
  - problem where the order of the elements matters -> `queue`
  - problem where the order of processing the elements matters -> `stack`
  - problem where you need to keep track of the last element -> `stack`

---

## Queue

### Queue using two stacks

Implement a queue data structure using two stacks. Do not create an array inside of the 'Queue' class. Queue should implement the methods 'add', 'remove', and 'peek'. Adding to the queue should store an element until it is removed.

- EX: `q = Queue()` --> `q.add(1)` --> `q.add(2)` --> `q.peek()` --> `1` --> `q.remove()` --> `1` --> `q.remove()` --> `2`

- verify the constraints:

  - Do the queue methods need to perform at the same complexity as a real queue? --> `No`, but they should be performant

- Explanation:

  - Here, we want to use two stacks to implement a queue.

    - We can use one stack for adding elements
    - and the other stack for removing elements.

    ![queue using two stacks](./img/queue-using-two-stacks.png)

  - When we want to `add` an element, we just push it to the first stack.
  - When we want to `remove` an element, we move all elements from the first stack to the second stack, then pop the top element from the second stack.
  - When we want to `peek` an element, we move all elements from the first stack to the second stack, then peek the top element of the second stack.

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

## Stacks

### Implement Stack using Queues

```py
class MyStack:

    def __init__(self):
        self.q = collections.deque()

    def push(self, x: int) -> None:
        self.q.append(x)
        # rotate the queue so that the last element is the first one
        for _ in range(len(self.q) - 1):
            self.q.append(self.q.popleft())

    def pop(self) -> int:
        return self.q.popleft()

    def top(self) -> int:
        return self.q[0]

    def empty(self) -> bool:
        return len(self.q) == 0
```

---

### Valid Parentheses

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

- An input string is valid if:

  - Open brackets must be closed by the same type of brackets.
  - Open brackets must be closed in the correct order.

- EX: `s = "()[]{}"` --> `true`
- EX: `s = "([)]"` --> `false`

- Explanation:
  - Each time we encounter an `opening` bracket, we push it onto the stack.
  - Each time we encounter a `closing` bracket, we check if the top element of the stack is the corresponding opening bracket.
    - If it is, then we pop it off the stack. If it isn't, or if the stack is empty, then we return `false`.

```py
# Solution 1
def isValid(s):
    stack = []
    for char in s:
        if char == '(':
            stack.append(')')
        elif char == '[':
            stack.append(']')
        elif char == '{':
            stack.append('}')
        elif not stack or stack.pop() != char:
            return False
    return not stack
```

---

### Valid Parenthesis String

Same as [Valid Parentheses](#valid-parentheses) but here we have a third type of brackets `*` which can be used as a `left`, `right` or `empty` bracket.

- EX: `s = "(*))"` --> `true`
- EX: `s = "(*))"` --> `true`

```py
def checkValidString(s):
    left_stack = []
    star_stack = []

    for i in range(len(s)):
        if s[i] == '(':
            left_stack.append(i)
        elif s[i] == '*':
            star_stack.append(i)
        # if the current char is a right bracket
        else:
            # pop the top element from either the left_stack or the star_stack
            if left_stack:
                left_stack.pop()
            elif star_stack:
                star_stack.pop()
            # if both stacks are empty, return False
            else:
                return False

    while left_stack and star_stack:
        # if the top element of the left_stack is greater than the top element of the star_stack -> '*' is used as an empty string
        if left_stack[-1] > star_stack[-1]:
            return False
        # pop the top element of the left_stack and star_stack
        left_stack.pop()
        star_stack.pop()

    # if the left_stack is not empty -> there are more left brackets than right brackets
    if left_stack:
        return False

    return True
```

---

### Minimum Remove to Make Valid Parentheses

Given a string `s` of `'('` , `')'` and lowercase English characters. Remove the minimum number of parentheses ( `'('` or `')'`, in any positions ) so that the resulting parentheses string is valid and return **any** valid string.

- parenthesis string is valid if and only if:

  - It is the empty string, contains only lowercase characters, or
  - It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are valid strings, or
  - It can be written as `(A)`, where `A` is a valid string.

- EX: `s = "lee(t(c)o)de)"` --> `"lee(t(c)o)de"`

- Explanation:
  - To solve this problem, we need to use a stack to store the indices of the opening brackets.
  - so, it's better to convert the string into an array of characters, so we can modify it.
  - We iterate over the string and do the following:
    - If the current character is an opening bracket `(`, we push its `index` to the stack.
    - If the current character is a closing bracket `)`
      - if the stack is not empty, we pop the top element from the stack.
        - This indicates that we have found a matching opening bracket and closing bracket.
      - If the stack is empty, we replace the current character with an empty string `""`.
        - This means that the current closing bracket doesn't have a corresponding opening bracket, so we need to remove it.
    - at the end, if the stack is not empty, this means that there are more opening brackets than closing brackets, so we need to remove them. by replacing the indices of the opening brackets in the stack with empty strings `""`.

```py
def minRemoveToMakeValid(s):
    stack = []
    s = list(s)

    for i in range(len(s)):
        if s[i] == '(':
            stack.append(i)
        elif s[i] == ')':
            if stack:
                stack.pop()
            else:
                s[i] = ''

    # if the stack is not empty, this means that there are more opening brackets than closing brackets
    while stack:
        s[stack.pop()] = ''

    return ''.join(s)
```

---

### Minimum Add to Make Parentheses Valid

Given a string `s` of `'('` and `')'` parentheses, we add the minimum number of parentheses ( `'('` or `')'`, and in any positions ) so that the resulting parentheses string is valid.

- EX: `s = "())"` --> `1`
- EX: `s = "((("` --> `3`

- Explanation:
  - Same as previous problem, but we need to count the number of opening brackets that don't have a corresponding closing bracket.
  - So, we need to add the number of opening brackets that are left in the stack at the end to the result.
  - We don't need to check if the stack is empty or not, because we know that the string is valid, so the stack will be empty at the end.

```py
def minAddToMakeValid(s):
    res = 0
    stack = []

    for char in s:
        if char == '(':
            stack.append(char)
        elif char == ')':
            if stack:
                stack.pop()
            else:
                res += 1

    return res + len(stack) # add the number of opening brackets that are left in the stack at the end to the result
```

---

### Next Greater Element I

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

### Next Greater Element II

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

### Daily Temperatures

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

### Tag Validator

Given a string `code` representing a **valid** code snippet, implement a function `tag_validator` to parse the HTML code and return whether it is **valid**.

- EX: `code = "<DIV>This is the first line <![CDATA[<div>]]></DIV>"` --> `true`
  - Explanation:
    - The code is wrapped in a closed tag : `<DIV>`.
    - There is no leading or trailing whitespace.
    - The four tags ( `<DIV>`, `<![CDATA[`, `</DIV>` and `]]>`) are nested correctly.

```py
def tag_validator(code):
    stack = []
    i = 0

    while i < len(code):
        # check if the current tag is a closing tag
        if i > 0 and stack[-1] == '<':
            # get the tag name
            j = code.find('>', i)
            tag = code[i+1:j]
            # check if the tag name is valid
            if not tag.isupper() or len(tag) < 1 or len(tag) > 9:
                return False
            # check if the tag is the same as the last opening tag
            if not stack or stack.pop() != tag:
                return False
            i = j
        # check if the current tag is an opening tag
        elif code.startswith('<![CDATA[', i):
            # check if the stack is empty or the last element in the stack is not an opening tag
            if not stack or stack[-1] != '<':
                return False
            # get the index of the closing tag
            j = code.find(']]>', i)
            # check if the closing tag exists
            if j < 0:
                return False
            i = j + 3
        # check if the current tag is an opening tag
        elif code.startswith('</', i):
            # get the index of the closing tag
            j = code.find('>', i)
            # get the tag name
            tag = code[i+2:j]
            # check if the tag name is valid
            if not tag.isupper() or len(tag) < 1 or len(tag) > 9:
                return False
            # check if the stack is empty or the last element in the stack is not an opening tag
            if not stack or stack.pop() != tag:
                return False
            i = j
        # check if the current tag is an opening tag
        elif code.startswith('<', i):
            # get the index of the closing tag
            j = code.find('>', i)
            # get the tag name
            tag = code[i+1:j]
            # check if the tag name is valid
            if not tag.isupper() or len(tag) < 1 or len(tag) > 9:
                return False
            # add the tag to the stack
            stack.append(tag)
            i = j
        else:
            i += 1

    return not stack
```

---
