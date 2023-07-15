# INDEX

- [INDEX](#index)
  - [Tips](#tips)
  - [Singly Linked List](#singly-linked-list)
    - [Reverse a Linked List](#reverse-a-linked-list)
    - [Reverse Linked List II](#reverse-linked-list-ii)
    - [Middle Point of a Linked List](#middle-point-of-a-linked-list)
    - [Circular Linked List](#circular-linked-list)
    - [Linked List Cycle](#linked-list-cycle)
    - [From Last](#from-last)
    - [Merge Two Sorted Linked Lists](#merge-two-sorted-linked-lists)
    - [Merge k Sorted Lists](#merge-k-sorted-lists)
    - [Reorder List](#reorder-list)
  - [Doubly Linked List](#doubly-linked-list)
    - [Design Browser History](#design-browser-history)
    - [Flatten a Multilevel Doubly Linked List](#flatten-a-multilevel-doubly-linked-list)

---

## Tips

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

---

## Singly Linked List

### Reverse a Linked List

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

### Reverse Linked List II

> TODO: watch neetcode video

Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to position `right`, and return the reversed list.
![reverse-linked-list](./img/reverse-linked-list-II-1.jpeg)

- Example:

  - Input: `head = [1,2,3,4,5], left = 2, right = 4`
  - Output: `[1,4,3,2,5]`

- Define constraints:
  - will `left` and `right` always be valid? (within the range of the list)
    - if not, we can add a check to make sure that `left` and `right` are valid

```py
def reverseBetween(self, head: ListNode, left: int, right: int) -> ListNode:
    # create a dummy node to avoid edge case of inserting to empty list
    dummy = ListNode(0, head)

    # 1. reach node at position `left`
    leftPrev, cur = dummy, head
    for _ in range(left - 1):
        leftPrev, cur = cur, cur.next

    # Now `cur` is at position `left`, `leftPrev` is at position `left - 1`
    tail = cur # save the node at position `left` to connect to the reversed nodes later

    # 2. reverse the nodes from position `left` to position `right`
    prev = None
    for _ in range(right - left + 1):
        nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt

    # Now `prev` is at position `right`, `cur` is at position `right + 1`
    start = prev # save the node at position `right` to connect to the rest of the list later

    # 3. connect the reversed nodes to the rest of the list
    leftPrev.next = start # connect the node at position `left - 1` to the node at position `right`
    tail.next = cur # connect the node at position `left` to the node at position `right + 1`

    return dummy.next
```

---

### Middle Point of a Linked List

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

### Circular Linked List

Write a function that accepts a linked list and returns true if the linked list contains a **circular reference**.

> Circular Linked List is a linked list where a node's next point actually points back to a previous node in the list.

- EX: `1 -> 2 -> 3 -> 4 -> 5` --> `5.next = 2` --> `True`
- **Steps:**
  ![circular linked list](./img/circular-linked-list-1.png)
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

### Linked List Cycle

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

- Explanation:
  - To detect if a list is cyclic, we can :
  1. check whether a node had been visited before.
     - We go through each node one by one and record each node's reference (or memory address) in a hash table. If the current node is `null`, we have reached the end of the list and it must not be cyclic. If current node’s reference is in the **hash set**, then return true.
     - **Time Complexity:** `O(n)`
     - **Space Complexity:** `O(n)`
  2. **Floyd's tortoise and hare algorithm 🐢🐰**
     - "tortoise" 🐢 -> moves 1 step at a time (Slow)
     - "hare" 🐰 -> moves 2 steps at a time (Fast)
     - We can use two pointers, `fast` and `slow`. The `fast` pointer moves two steps at a time while the `slow` pointer moves one step. If the list has a cycle, the fast pointer will eventually meet the slow pointer.
       ![linked list cycle](./img/linked-list-cycle-1.webp)
       ![linked list cycle](./img/linked-list-cycle-2.png)
     - **Time Complexity:** `O(n)`
     - **Space Complexity:** `O(1)`

```py
# Method 1: using hash set
def hasCycle(self, head: ListNode) -> bool:
    visited = set()
    while head:
        if head in visited:
            return True
        visited.add(head)
        head = head.next
    return False

# Method 2: using Floyd's Cycle-Finding Algorithm
def hasCycle(self, head: ListNode) -> bool:
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
```

---

### From Last

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

### Merge Two Sorted Linked Lists

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

### Merge k Sorted Lists

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

- Another solution using **Priority Queue** (Min Heap)

  - **Time Complexity:** `O(nk log(k))`
  - **Space Complexity:** `O(k)`
  - **Steps:**
    1. create a priority queue and add the head of each list to the queue
    2. create a dummy node and a pointer `curr` to the dummy node
    3. while the queue is not empty
       - pop the node with the smallest value from the queue
       - append the node to the curr.next pointer
       - if the popped node has a next node, add it to the queue
       - advance the curr pointer to the next node
    4. return the next node of the dummy node

  ```py
  def mergeKLists(self, lists: List[ListNode]) -> ListNode:
      # modify the ListNode class to support comparison operators
      ListNode.__eq__ = lambda self, other: self.val == other.val
      ListNode.__lt__ = lambda self, other: self.val < other.val

      h = []
      head = tail = ListNode(0)
      for i in lists:
          if i:
              heapq.heappush(h, (i.val, i))

      while h:
          node = heapq.heappop(h)[1]
          tail.next = node
          tail = tail.next
          if node.next:
              heapq.heappush(h, (node.next.val, node.next))

      return head.next
  ```

---

### Reorder List

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

## Doubly Linked List

### Design Browser History

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

### Flatten a Multilevel Doubly Linked List

You are given a doubly linked list which in addition to the `next` and `previous` pointers, it could have a `child` pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

Given the `head` of a multilevel doubly linked list, **flatten** the list so that all the nodes appear in a single-level, doubly linked list. You are given the `head` of the first level of the list.

- Ex:

  - input: `head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]`
    ![flatten doubly linked list](./img/flatten-doubly-linked-list-1.jpeg)
  - output: `[1,2,3,7,8,11,12,9,10,4,5,6]`
  - explanation:
    ![flatten doubly linked list](./img/flatten-doubly-linked-list-2.jpeg)

- Explanation:

  - Here, we have 3 levels of depth depicted in the figure above. Also, there are 2 lists at each level.
  - We want to flatten from the child list to the parent list (Bottom-up), So that the nodes in the parent list are in the same order as the nodes in the child list.
    ![flatten doubly linked list](./img/flatten-doubly-linked-list-3.png)
    ![flatten doubly linked list](./img/flatten-doubly-linked-list-4.png)
  - We can use a **stack** to store the nodes in the parent list, and then we can pop the nodes from the stack and append them to the child list.
  - We can use a pointer to store the current node in the parent list.
  - We can use a pointer to store the current node in the child list.

- Solution 1: Using stack ✅

  ```py
  # Time Complexity: O(n) | Space Complexity: O(n)
  def flatten(self, head: 'Node') -> 'Node':
      if not head:
          return None

      # create a dummy node to avoid edge case of inserting to empty list
      dummy = Node(0, None, head, None)
      stack = [head]
      prev = dummy

      while stack:
          # pop the node from the stack
          curr = stack.pop()
          # connect the current node to the previous node
          prev.next = curr
          curr.prev = prev

          # if the current node has a next node, push the next node to the stack
          if curr.next:
              stack.append(curr.next)
          # if the current node has a child node, push the child node to the stack
          if curr.child:
              stack.append(curr.child)
              # set the child node to None
              curr.child = None

          # update the previous node
          prev = curr

      newHead = dummy.next
      newHead.prev = None # set the previous node's next node to None
      return newHead
  ```

- Solution 2: Using pointers | less space

  ```py
  # Time Complexity: O(n) | Space Complexity: O(1)
  def flatten(self, head: 'Node') -> 'Node':
      if not head:
          return None

      # create a dummy node to avoid edge case of inserting to empty list
      dummy = Node(0, None, head, None)
      prev = dummy

      while head:
          # if the current node has a child node
          if head.child:
              # connect the current node to the child node
              prev.next = head.child
              head.child.prev = prev

              # find the tail of the child node
              tail = head.child
              while tail.next:
                  tail = tail.next

              # connect the tail of the child node to the next node
              tail.next = head.next
              if head.next:
                  head.next.prev = tail

              # set the child node to None
              head.child = None

          # update the previous node
          prev = head
          # move to the next node
          head = head.next

      newHead = dummy.next
      newHead.prev = None # set the previous node's next node to None
      return newHead
  ```
