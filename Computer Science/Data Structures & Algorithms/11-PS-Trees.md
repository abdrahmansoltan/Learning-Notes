# INDEX

- [INDEX](#index)
  - [Notes](#notes)
  - [General Tree Questions](#general-tree-questions)
    - [Count Complete Tree Nodes](#count-complete-tree-nodes)
    - [Level Width](#level-width)
    - [Maximum Width of Binary Tree](#maximum-width-of-binary-tree)
    - [Path Sum](#path-sum)
    - [Path Sum II](#path-sum-ii)
    - [Path Sum III](#path-sum-iii)
    - [Binary Tree Paths](#binary-tree-paths)
    - [Sum Root to Leaf Numbers](#sum-root-to-leaf-numbers)
    - [Diameter of Binary Tree](#diameter-of-binary-tree)
    - [Binary Tree Maximum Path Sum](#binary-tree-maximum-path-sum)
    - [Symmetric Tree](#symmetric-tree)
    - [Same Tree](#same-tree)
    - [Lowest Common Ancestor of a Binary Tree](#lowest-common-ancestor-of-a-binary-tree)
    - [Vertical Order Traversal of a Binary Tree](#vertical-order-traversal-of-a-binary-tree)
    - [Flatten Binary Tree to Linked List](#flatten-binary-tree-to-linked-list)
    - [Employee Importance](#employee-importance)
  - [Binary Search Trees (BST)](#binary-search-trees-bst)
    - [Insert into a Binary Search Tree](#insert-into-a-binary-search-tree)
    - [Delete Node in a BST](#delete-node-in-a-bst)
    - [Validate Binary Search Tree](#validate-binary-search-tree)
    - [Binary Tree Inorder Traversal](#binary-tree-inorder-traversal)
    - [Binary Tree Postorder Traversal](#binary-tree-postorder-traversal)
    - [Binary Search Tree Iterator](#binary-search-tree-iterator)
    - [Binary Tree Level Order Traversal](#binary-tree-level-order-traversal)
    - [Binary Tree Level Order Traversal II](#binary-tree-level-order-traversal-ii)
    - [Average of Levels in Binary Tree](#average-of-levels-in-binary-tree)
    - [Minimum Depth of Binary Tree](#minimum-depth-of-binary-tree)
    - [Maximum Depth of Binary Tree](#maximum-depth-of-binary-tree)
    - [Level Order Successor](#level-order-successor)
    - [Populating Next Right Pointers in Each Node ( Connect Level Order Siblings )](#populating-next-right-pointers-in-each-node--connect-level-order-siblings-)
    - [Populating Next Right Pointers in Each Node II](#populating-next-right-pointers-in-each-node-ii)
    - [Connect All Level Order Siblings](#connect-all-level-order-siblings)
    - [Binary Tree Right Side View](#binary-tree-right-side-view)
    - [Check Completeness of a Binary Tree](#check-completeness-of-a-binary-tree)
    - [Binary Tree Zigzag Level Order Traversal](#binary-tree-zigzag-level-order-traversal)
    - [Sum of Left Leaves](#sum-of-left-leaves)
    - [Minimum Absolute Difference in BST](#minimum-absolute-difference-in-bst)
    - [Invert Binary Tree](#invert-binary-tree)
    - [Kth Smallest Element in a BST](#kth-smallest-element-in-a-bst)
    - [Lowest Common Ancestor of a Binary Search Tree](#lowest-common-ancestor-of-a-binary-search-tree)
    - [Unique Binary Search Trees](#unique-binary-search-trees)
    - [Unique Binary Search Trees II](#unique-binary-search-trees-ii)
    - [Serialize and Deserialize BST](#serialize-and-deserialize-bst)
  - [Tries](#tries)
    - [Implement Trie (Prefix Tree)](#implement-trie-prefix-tree)

---

## Notes

- Trees usually have `O(log(n))` time complexity because it's the **height** of the tree -> `O(h)`
- **Trees Tips:**
  - Whenever you see the word **"width"** in any tree question, it's a **Breadth First Search** problem
  - Always ask if the tree is binary search tree (BST) or not, so that you can use the BST properties to solve the problem (e.g. `left < root < right`)
- When you find the word `"Autocomplete"` in a question, it's a **Trie** problem
- When verifying constraints, ask these questions:
  - are there any duplicates in the BST? and how to handle this case?

## General Tree Questions

### Count Complete Tree Nodes

| Video Solution                                                | Hint                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Video Solution](https://www.youtube.com/watch?v=4wPlA_InnGY) | Use **DFS** to traverse the tree and count the number of nodes in the tree. We can use a **Bottom-Up Approach** to solve this problem. **OR** we can use the fact that the tree is **complete** to solve this problem. get the `height` of the tree (from the `left` side and the `right` side). if the height of the `left` subtree is equal to the height of the `right` subtree, then the tree is a **perfect binary tree** and we can calculate the number of nodes using the formula: `count = 2^(h-1) - 1`, else, call the function recursively on the `left` and `right` subtrees |

Given the `root` of a **complete** binary tree, return the number of the nodes in the tree.

- Ex:

  - Input: `root = [1,2,3,4,5,6]`
  - Output: `6`

- **Solution 1**: DFS -> `O(n)` ✅

  - we can use a **Depth-First Search** to traverse the tree and count the number of nodes in the tree
  - we can use a **Bottom-Up Approach** to solve this problem.
    - we start by checking if the root is `None`, if it is, then we return `0`
    - otherwise, we recursively call the function on the left and right subtrees
    - we then return the sum of the number of nodes in the left subtree, the number of nodes in the right subtree, and `1` for the current node

  ```py
  def countNodes(root):
      # helper function
      def dfs(node):
          if node is None:
              return 0
          return dfs(node.left) + dfs(node.right) + 1

      return dfs(root)
  ```

- **Solution 2**: using the fact that the tree is **complete** -> `O(n)`

  - tree is complete when all levels are filled except the last level
  - The brute force solution is to traverse the tree and count the number of nodes. But this solution is not efficient because it takes `O(n)` time to traverse the tree.
  - We're given that the tree is a **complete** binary tree, which means that the tree is **perfectly balanced**. This means that the left subtree and the right subtree of the root node have the same height.
    - So we can use this property to solve the problem and get a solution with `O(log(n))` time complexity.
    - We can break the problem into 2 sections:
      ![count-complete-tree-nodes](./img/count-complete-tree-nodes-1.png)
      - get the height of the tree (from the left side and the right side)
      - if the height of the left subtree is equal to the height of the right subtree, then the tree is a **perfect binary tree** and we can calculate the number of nodes using the formula:
        - `count = 2^(h-1) - 1`
      - if the height of the left subtree is not equal to the height of the right subtree, then the tree is not a **perfect binary tree** and we need to recursively call the function on the left and right subtrees

  ```py
  def countNodes(root):
      if root is None:
          return 0

      # get the height of the tree
      leftHeight = getHeight(root, 'left')
      rightHeight = getHeight(root, 'right')

      # if the height of the left subtree is equal to the height of the right subtree, then the tree is a perfect binary tree
      if leftHeight == rightHeight:
          return (2 ** leftHeight) - 1 # 2^(h-1) - 1
      # else, call the function recursively on the left and right subtrees
      else:
          return countNodes(root.left) + countNodes(root.right) + 1

  # helper function to get the height of the tree
  def getHeight(node, direction='left'):
      height = 0
      while node:
          height += 1
          node = node.left if direction == 'left' else node.right
      return height
  ```

---

### Level Width

| Video Solution | Hint                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NA             | Use **BFS** to traverse the tree and keep track of the indices of the leftmost and rightmost non-null nodes. The width of the level is then calculated as the difference between the indices plus one. We can use a queue to store the nodes that we need to visit. We start by adding the root node to the queue along with its index, which we set to 0. We also initialize two variables, max_width and level_width, to 0. max_width will be used to store the maximum width we have seen so far, and level_width will be used to store the width of the current level. Then, we start the BFS loop. In each iteration of the loop, we first get the number of nodes in the current level by getting the size of the queue. We then loop through all the nodes in the current level and update the leftmost and rightmost indices as necessary. We also add the children of each node to the queue along with their indices, which we calculate based on the indices of their parent node. At the end of each level, we update the max_width variable with the level_width if it is greater than max_width. We then reset the level_width variable to 0 for the next level. Once we have processed all the nodes in the tree, we return the max_width variable as the answer. |

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

### Maximum Width of Binary Tree

| Video Solution                                                | Hint                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Video Solution](https://www.youtube.com/watch?v=FPzLE2L7uHs) | The width of the tree is then calculated as the maximum width among all levels. Use **BFS** to traverse the tree by using a `queue` to store the nodes that we need to visit. We start by adding the root node to the queue as `(node, row, col)` or `(node, level, idx)`. We also initialize two variables, `prevLevel` and `prevIdx` |

Given the `root` of a binary tree, return the **maximum width** of the given tree.

The **maximum width** of a tree is the maximum width among all levels.

The **width** of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes are also counted into the length calculation.

- Ex:
  ![maximum width of binary tree](./img/maximum-width-of-binary-tree-1.jpeg)

  - Input: `root = [1,3,2,5,3,null,9]`
  - Output: `4`
  - Explanation: The maximum width existing in the third level with the length `4` -> `(5,3,null,9)`.

- Explanation

  - The width of a level is calculated by getting the indices of the **leftmost and rightmost non-null nodes**. The width of the tree is then calculated as the maximum width among all levels.

    ```py
    width = rightmost_index - leftmost_index + 1
    ```

  - In order to get the indices of the nodes on each level, we need to represent each node by its index.
    - We do this by presenting each node as fol;ows: `(node, row, col)`
  - We will use `BFS` to go level-by-level and keep track of the indices of the nodes on each level.
    - We will use a `queue` to store the nodes that we need to visit.
    - We start by adding the root node to the queue.
    - We also initialize two variables, `max_width` and `level_width`, to `0`.
      - `max_width` -> max width of the tree
      - `level_width` -> width of the current level
    - Then, we start the `BFS` loop. In each iteration of the loop, we first get the number of nodes in the current level by getting the size of the queue. We then loop through all the nodes in the current level and update the `leftmost` and `rightmost` indices as necessary. We also add the children of each node to the queue along with their indices, which we calculate based on the indices of their parent node.
    - At the end of each level, we update the `max_width` variable.

```py
def widthOfBinaryTree(root):
    # create a queue to store the nodes that we need to visit
    q = deque([(root, 0, 1)]) # (node, level, idx)
    maxWidth = 0
    prevLevel, prevIdx = 0, 1

    while q:
      node, level, idx = q.popleft()
      # if we're in a new level, update the prevLevel and prevIdx
      if level != prevLevel:
        prevLevel, prevIdx = level, idx

      # update the maxWidth
      maxWidth = max(maxWidth, idx - prevIdx + 1)

      # add the children of the node to the queue
      if node.left:
        q.append((node.left, level + 1, idx * 2)) # idx * 2 because it's a binary tree
      if node.right:
        q.append((node.right, level + 1, idx * 2 + 1)) # idx * 2 + 1 because it's a binary tree

    return maxWidth
```

---

### Path Sum

| Video Solution                                                | Hint                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Video Solution](https://www.youtube.com/watch?v=LSKQyOz_P8I) | Use **DFS** to traverse the tree and keep track of the current sum of the path from the root to the current node. If we reach a leaf node and the current sum is equal to the target sum, then we return `True`. Otherwise, we return `False`. call the function recursively on the left and right subtrees |

Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a **root-to-leaf** path such that adding up all the values along the path equals `targetSum`.

- Explanation:
  ![path-sum](./img/path-sum-1.png)

  - We can use a **Depth-First Search** to traverse the tree and keep track of the current sum of the path from the root to the current node. If we reach a leaf node and the current sum is equal to the target sum, then we return `True`. Otherwise, we return `False`.

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

- Time complexity: `O(n)` where `n` is the number of nodes in the tree
- Space complexity: `O(h)` where `h` is the height of the tree, this space is used by the recursion stack (IMPORTANT ⚠️)

---

### Path Sum II

| Video Solution                                                | Hint                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Video Solution](https://www.youtube.com/watch?v=-mkM5FUaA5c) | Use **DFS** to traverse the tree and keep track of the current sum of the **path** from the root to the current node. If we reach a leaf node and the current sum is equal to the target sum, then we add the current path to the result. call the function recursively on the left and right subtrees, **Then backtrack** by popping / removing the current node from the path. |

Given the `root` of a binary tree and an integer `targetSum`, return all **root-to-leaf** paths where each path's sum equals `targetSum`.

- EX:
  ![path sum II](./img/path-sum-ii-1.jpeg)
  - Input: `root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22`
  - Output: `[[5,4,11,2],[5,8,4,5]]`

```py
def pathSum(root, targetSum):
    def dfs(node, curSum, path):
        if node is None:
            return

        curSum += node.val
        path.append(node.val)

        # if the root is a leaf node, check if the current sum is equal to the target sum
        if not node.left and not node.right and curSum == targetSum:
            result.append(path[:]) # append a copy of the path to prevent it from being modified later

        dfs(node.left, curSum, path)
        dfs(node.right, curSum, path)
        path.pop() # backtrack (remove the current node from the path)

    result = []
    dfs(root, 0, [])
    return result
```

---

### Path Sum III

| Video Solution                                                | Hint                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Video Solution](https://www.youtube.com/watch?v=VDTZiggKlAE) | Use **DFS** to traverse the tree and keep track of the current path. When traversing, we will: add the current node to the path, calculate sums of all sub-paths ending with the current node (loop backwords on the path array), if the sum is equal to the target sum, we will increment the `pathCount` by `1`, remove the current node from the path and backtrack |

Given the `root` of a binary tree and an integer `targetSum`, return the number of paths where the sum of the values along the path equals `targetSum`.

The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).
![path sum III](./img/path-sum-iii-1.jpeg)

- Explanation:

  - We can use `DFS`
  - we will keep track of the current `path` passed to every recursive call
  - when traversing we will:
    - add the current node to the path
    - calculate sums of all sub-paths ending with the current node
      - if the sum is equal to the target sum, we will increment the `pathCount` by `1`
    - remove the current node from the path and backtrack

- Time complexity: `O(n^2)` where `n` is the number of nodes in the tree, this is because we traverse each node once and for each node, we traverse all the nodes in the path (worst case)
  - if tree is `balanced`, then the time complexity will be `O(nlog(n))` (best case)
- Space complexity: `O(n)` where `n` is the number of nodes in the tree, **this space is used by the recursion stack**

```py
def pathSum(root, targetSum):
    def dfs(node, path):
        if node is None:
            return 0

        path.append(node.val)
        pathCount, pathSum = 0, 0
        # iterate in reverse order to
        for i in range(len(path) - 1, -1, -1):
            pathSum += path[i]
            if pathSum == targetSum:
                pathCount += 1

        pathCount += dfs(node.left, path)
        pathCount += dfs(node.right, path)

        path.pop() # backtrack

        return pathCount

    return dfs(root, [])
```

---

### Binary Tree Paths

| Video Solution                                                | Hint                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Video Solution](https://www.youtube.com/watch?v=H2D4HcVZq_g) | Use **DFS** to traverse the tree and keep track of the current **path as string**. When traversing, we will: add the current node to the path, if the root is a leaf node, add the path to the result, call the function recursively on the left and right subtrees, when calling the function recursively, pass the path concatenated with the `->` symbol |

Given the `root` of a binary tree, return all **root-to-leaf** paths in any order.

- Trick here, is that we want to return the result in this format: `["1->2->5", "1->3"]`

```py
def binaryTreePaths(root):
    def dfs(node, path):
        if node is None:
            return

        path += str(node.val)

        # if the root is a leaf node, add the path to the result
        if not node.left and not node.right:
            result.append(path)

        dfs(node.left, path + '->')
        dfs(node.right, path + '->')

    result = []
    dfs(root, '')
    return result
```

---

### Sum Root to Leaf Numbers

| Video Solution                                                | Hint                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Video Solution](https://www.youtube.com/watch?v=H2D4HcVZq_g) | Use **DFS** to traverse the tree and keep track of the current sum of the path from the root to the current node. When traversing, we will: update the current sum **by multiplying it by `10` and adding the current node's value**, if the root is a leaf node, return the current sum, call the function recursively on the left and right subtrees and add the results of both calls |

Given the `root` of a binary tree containing digits from `0-9` only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path `1->2->3` which represents the number `123`.

Return the total sum of all root-to-leaf numbers.

- EX:
  ![sum root to leaf numbers](./img/sum-root-to-leaf-numbers-1.jpeg)
  - Input: `root = [1,2,3]`
  - Output: `25`
  - Explanation:
    - The root-to-leaf path `1->2` represents the number `12`.
    - The root-to-leaf path `1->3` represents the number `13`.
    - Therefore, sum = 12 + 13 = `25`.

```py
def sumNumbers(root):
    def dfs(node, curSum):
        if node is None:
            return 0

        curSum = (curSum * 10) + node.val

        # if the root is a leaf node, add the current sum to the result
        if not node.left and not node.right:
            return curSum

        return dfs(node.left, curSum) + dfs(node.right, curSum)

    return dfs(root, 0)
```

---

### Diameter of Binary Tree

| Video Solution                                                | Hint                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Video Solution](https://www.youtube.com/watch?v=bkxqA8Rfv04) | Use **DFS** to traverse the tree and calculate the **height** of each node's `left` and `right` subtrees. The diameter of a node is the longest path between any two nodes in a tree. This path may or may not pass through the `root`. We can do this recursively for each node in the tree and keep track of the maximum diameter found so far. |

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

### Binary Tree Maximum Path Sum

Given the `root` of a binary tree, return the maximum **path sum** of any path.

- EX:
  ![binary tree maximum path sum](./img/binary-tree-maximum-path-sum-1.jpeg)
  - Input: `root = [-10,9,20,null,null,15,7]`
  - Output: `42`
  - Explanation: The optimal path is `15 -> 20 -> 7` with a path sum of `15 + 20 + 7 = 42`.

```py
def maxPathSum(root):
    def dfs(node):
        if node is None:
            return 0

        # recursively call the function with the root's left node and the root's right node
        leftSum = max(0, dfs(node.left))
        rightSum = max(0, dfs(node.right))

        # update the maximum path sum
        maxSum = max(maxSum, leftSum + rightSum + node.val)

        return max(leftSum, rightSum) + node.val

    maxSum = float('-inf')
    dfs(root)
    return maxSum
```

---

### Symmetric Tree

| Video Solution                                                | Hint                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Video Solution](https://www.youtube.com/watch?v=Mao9uzxwvmc) | Use **DFS** to traverse the tree and check if the left subtree of the root is a mirror of the right subtree of the root. Check: if the `left` child of the `left` subtree is equal to the `right` child of the `right` subtree and if the `right` child of the `left` subtree is equal to the `left` child of the `right` subtree. if there's no left child but there's a right child, or if there're no right child but there's a left child, then the tree is not symmetric. |

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
        # or
        # return left.val == right.val and dfs(left.left, right.right) and dfs(left.right, right.left)

    return dfs(root.left, root.right)
```

---

### Same Tree

| Video Solution                                                | Hint                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Video Solution](https://www.youtube.com/watch?v=vRbbcKXCxOw) | Use **DFS** to traverse the trees and check if the values of the nodes are equal. If the values are equal, then we recursively call the function on the left and right subtrees. If the values are not equal, then we return `False`. If we reach the end of both trees, then we return `True`. |

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

It's very similar to the previous problem (Symmetric Tree), but in this problem we don't need to check if the left subtree is a mirror of the right subtree.

- Explanation:
  - Here, we want to check if the value & the structure of the two trees are the same. That's why we must use `DFS` to traverse the trees and check if the values of the nodes are equal.
  - if we used `BFS`, we would only check the values of the nodes in the same level, but we wouldn't be check the values of the nodes in the same position in the tree. **So we won't check its structure**.

```py
def isSameTree(p, q):
    def dfs(p, q):
        # if both nodes are null, means that we reached the end of the tree -> return True
        if not p and not q:
            return True
        # if one of the nodes is null, return False
        if not p or not q:
            return False
        # if the values of the nodes are not equal, return False
        if p.val != q.val:
            return False

        return dfs(p.left, q.left) and dfs(p.right, q.right)

    return dfs(p, q)
```

---

### Lowest Common Ancestor of a Binary Tree

| Video Solution                                                | Hint                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Video Solution](https://www.youtube.com/watch?v=gs2LMfuOR9k) | Use **DFS** to traverse the tree and check: if the current node is equal to `p` or `q` if so, then we return the current node. Otherwise, we recursively call the function on the left and right subtrees. If both the left and right subtrees return a non-null value, **then we know that the current node is the lowest common ancestor of `p` and `q`**. Otherwise, we return the non-null value that was returned by either the left or right subtree which will be the lowest common ancestor of `p` and `q`. |

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

### Vertical Order Traversal of a Binary Tree

| Video Solution                                                | Hint                                                                                                                                                      |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Video Solution](https://www.youtube.com/watch?v=Yjf-8CyyL18) | Use **DFS or BFS** to traverse the tree and keep track of the nodes of each column in a dictionary. Sort the nodes of each column by their row and value. |

Given the `root` of a binary tree, calculate the **vertical order traversal** of the binary tree.

For each node at position `(row, col)`, its left and right children will be at positions `(row + 1, col - 1)` and `(row + 1, col + 1)` respectively. The root of the tree is at `(0, 0)`.

> The **vertical order traversal** of a binary tree is a list of top-to-bottom orderings for each column index starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values.

![vertical order traversal](./img/vertical-order-traversal-1.jpg)

- Explanation:

  - **IMPORTANT:** In both solution, we must add the `row` with the node-value in the dictionary, because we want to sort the nodes of each column by their `row` and `value`.

- Solution 1: using `queue`

  ```py
  def verticalTraversal(root):
      columns = {} # {col: [(row, val), (row, val), ...]}

      queue = [(root, 0, 0)] # (node, row, col)

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
          columns[col] = columns.get(col, []) + [(row, node.val)]
          if node.left: dfs(node.left, row + 1, col - 1)
          if node.right: dfs(node.right, row + 1, col + 1)

      # call the helper function
      dfs(root, 0, 0)

      # sort the nodes of each column by their row and value
      result = []
      for col in sorted(columns):
          result.append([val for row, val in sorted(columns[col])])

      return result
  ```

---

### Flatten Binary Tree to Linked List

| Video Solution                                                | Hint                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Video Solution](https://www.youtube.com/watch?v=rKnD7rLT0lI) | Use **DFS** to traverse the tree and get the left-leaves and right-leaves of the current node, then connect the left-child of the current node to the right-child of the current node, and connect the right-child of the current node to the left-child of the current node. return the last node of the tree. |

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
def flatten(root):
    def dfs(root):
        if not root: return
        # reach the end of the left and right subtrees
        leftTail = dfs(root.left)
        rightTail = dfs(root.right)

        # keep the right subtree, and handle the left subtree
        if root.left:
          # connect the leftTail to the current root's right child
          leftTail.right = root.right
          # connect the current root's left child to the current root's right child
          root.right = root.left
          root.left = None

        # return the rightTail if it exists, otherwise return the leftTail, otherwise return the root (leaf node)
        last = rightTail or leftTail or root
        return last
    dfs(root)
```

---

### Employee Importance

| Video Solution                                                | Hint                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Video Solution](https://www.youtube.com/watch?v=8uMRWVfsfmQ) | First, map the employees to a dictionary for faster lookup by `id`. Then, add the importance value of the current employee to the total importance value. Finally, recursively call the function on the direct subordinates of the current employee and add the returned value to the total importance value. |

You are given a data structure of employee information, which includes the employee's unique `id`, their importance value, and their direct subordinates' `id`.

You are also given an `id`, which represents the id of a specific employee.

Return the **importance value** of this employee and all their subordinates.

- Ex:
  ![employee importance](./img/employee-importance-1.jpeg)

  - Input: `employees = [[1,5,[2,3]],[2,3,[]],[3,3,[]]], id = 1`
  - Output: `11`
  - Explanation: Employee `1` has importance value `5`, and he has two direct subordinates: employee `2` and employee `3`. They both have importance value `3`. So the total importance value of employee `1` is `5 + 3 + 3 = 11`.

- Explanation:
  - We can use a **Depth-First Search** to traverse the tree and calculate the total importance value of the employee and all their subordinates.
  - We can use a **Bottom-Up Approach** to solve this problem.
    1. We start by calculating the importance value of the current employee.
    2. Then, we recursively call the function on the direct subordinates of the current employee and add the returned value to the total importance value.
    3. Finally, we return the total importance value.

```py
def getImportance(employees, id):
    # create a dictionary to store the employees
    employeesDict = {} # {id: (importance, [subordinates])}

    # populate the dictionary
    for employee in employees:
        employeesDict[employee.id] = (employee.importance, employee.subordinates)

    # helper function to calculate the total importance value of the employee and all their subordinates
    def dfs(id):
        # calculate the importance value of the current employee
        curImportance, subordinates = employeesDict[id]

        # recursively call the function on the direct subordinates of the current employee
        for subordinate in subordinates:
            curImportance += dfs(subordinate)

        return curImportance


    return dfs(id)
```

- Time complexity: `O(n)` where `n` is the number of employees
- Space complexity: `O(n)` where `n` is the number of employees
  - `O(n)` for the dictionary
  - `O(h)` for the recursion stack where `h` is the height of the tree
  - `O(n + h)` -> `O(n)` because `h` is always less than `n`

---

## Binary Search Trees (BST)

### Insert into a Binary Search Tree

| Video Solution                                                | Hint                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Video Solution](https://www.youtube.com/watch?v=Cpg8f79luEA) | Use **Depth-First Search** to traverse the tree uisng **Binary Search** to find the correct position to insert the new node. Start at the `root` and keep searching until you find the valid position (where `root` is `None`) and return the new node. else if the value is less than the root's value, insert it to the left. else insert it to the right. |

Write a function that accepts a root node of a BST and a value to insert into the tree. The function should return the root node of the BST after the insertion.

- EX: `insert(root, 5) --> root`
  ![bst insertion](./img/bst-insertion-1.png)

- Explanation:

  - We can use a **Depth-First Search** to traverse the tree and use **Binary Search** to find the correct position to insert the new node.
  - We start at the `root` and keep searching until we find the valid position (where `root` is `None`) and return the new node.
  - Time complexity: `O(h)` where `h` is the height of the tree
    - worst case: `O(n)` where `n` is the number of nodes in the tree if the tree is not balanced
      ![unbalanced-search-tree](./img/unbalanced-search-tree.png)
  - Space complexity: `O(h)` where `h` is the height of the tree
    - extra space is used by the **recursion call stack**

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

### Delete Node in a BST

| Video Solution                                                | Hint                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Video Solution](https://www.youtube.com/watch?v=LFzAoJJt92M) | Use **Depth-First Search** to traverse the tree and find the node that we want to delete. Once we find the node, we can use a **Bottom-Up Approach** to delete the node, and we have multiple cases to consider: 1. If the node is a leaf node (has no childern), then we can simply delete the node by returning `None`. 2. If the node has only one child, then we can delete the node by returning its child. 3. If the node has two children, then we can delete the node by replacing its value with the value of its successor node (the smallest node in its right subtree) and then recursively call the function on the right subtree to delete the successor node. |

Given the `root` of a binary search tree and a `key`, delete the node with the given `key` in the BST. Return the root of the binary search tree after deleting the given `key`. If the `key` does not exist in the BST, return the `root`.

- EX: `deleteNode(root, 5) --> root`
  ![delete node in a bst](./img/delete-node-in-a-bst-1.jpeg)

- Explanation:

  - One solution that comes to mind is to keep a pointer to the parent node of the node that we want to delete. This way, we can easily delete the node by setting the parent's `left` or `right` child to the node's child.
    - This seems easy, but it's not because we need to keep track of the parent node while traversing the tree.❌ **(use it when thinking loudly with the interviewer)**
  - We can use a **Depth-First Search** to traverse the tree and find the node that we want to delete, and then replace it with its `successor` node.
  - Once we find the node, we can use a **Bottom-Up Approach** to delete the node, and we have multiple cases to consider:
    1. If the node is a leaf node (has no childern), then we can simply delete the node by returning `None`.
       ![delete node in a bst](./img/delete-node-in-a-bst-2.png)
    2. If the node has only one child, then we can delete the node by returning its child.
       ![delete node in a bst](./img/delete-node-in-a-bst-3.png)
    3. If the node has two children, then we can delete the node by replacing its value with the value of its `successor` node **(the smallest node in its right subtree)** and then recursively call the function on the right subtree to delete the successor node.
       ![delete node in a bst](./img/delete-node-in-a-bst-4.png)
       - We call it again on the right subtree because the successor node can have a right subtree.
  - Time complexity:
    - Finding the node: `O(h)` where `h` is the height of the tree
    - Deleting the node: `O(h)` where `h` is the height of the tree
    - Total: `O(2h)` -> `O(h)`
  - Space complexity: `O(h)` where `h` is the height of the tree
    - extra space is used by the **recursion call stack**

```py
def deleteNode(root, key):
    if root is None:
        return None

    # if the key is less than the root's value, delete the key from the left subtree
    if key < root.value:
        root.left = deleteNode(root.left, key)
    # if the key is greater than the root's value, delete the key from the right subtree
    elif key > root.value:
        root.right = deleteNode(root.right, key)
    # if the key is equal to the root's value, delete the key from the current node
    else:
        # if the node is a leaf node (has no childern), delete the node by returning None
        if not root.left and not root.right: return None
        # if the node has only one child, then we can delete the node by returning its child
        elif not root.left: return root.right
        elif not root.right: return root.left
        # if the node has two children, then we can delete the node by replacing its value with the value of its successor node (the smallest node in its right subtree) and then recursively call the function on the right subtree to delete the successor node
        else:
            # find the successor node
            successor = root.right
            while successor.left:
                successor = successor.left
            # replace the root's value with the successor's value
            root.value = successor.value
            # delete the successor node from the right subtree recursively
            root.right = deleteNode(root.right, successor.value)

    return root
```

---

### Validate Binary Search Tree

| Video Solution                                                | Hint                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Video Solution](https://www.youtube.com/watch?v=s6ATEkipzow) | Use (`min`, `max`) ranges for each node. The root node should be in the range of `(-inf, inf)`, check the left child of the root node and check if it's in the range of `(-inf, root.value)`, check the right child of the root node and check if it's in the range of `(root.value, inf)`. **OR** Use **In-Order Traversal** and check if the values are in ascending order. |

Write a function that accepts a root node of a BST and returns `True` if the tree is a valid BST and `False` if it is not.

- EX: `validate(root) --> True`
- Explanation:

  - The first solution that comes into mind is to check the `right` & `left` children of each node and check if they're less than or greater than the `root` node
    - but that's not enough because the right child of the root node might be less than the root node, but it's greater than the left child of the root node.
      ![validate bst](./img/validate-bst-1.png)
    - So we can't just check the neighbors and children one time and we have to check the whole tree for each node -> `O(n^2)` **BAD! ❌**
  - Instead, we can:
    - Use **ranges** for each point ✅
    - Or, use **In-Order Traversal** and check if the values are in ascending order

- **Solution 1:** Using `min` and `max` ranges for each node ✅

  - create a function that accepts a `root` node, a `min` value and a `max` value
  - Each node will have a `min` and `max` value that it should be in the range of
    ![validate bst](./img/validate-bst-2.png)
    ![validate bst](./img/validate-bst-3.png)

    - root node should be in the range of `(-inf, inf)`
      - we use infinity because we don't know the values of the nodes in the tree
    - left child of the root node should be in the range of `(-inf, root.value)`
    - right child of the root node should be in the range of `(root.value, inf)`

  - Time complexity: `O(n)` where `n` is the number of nodes in the tree
  - Space complexity: `O(h) = O(log(n))` where `h` is the height of the tree -> call stack
    - in worst case: `O(n)` where `n` is the number of nodes in the tree but this won't happen in a balanced tree

  ```py
  def isValidBST(root):
      # helper function
      def validate(root, min, max):
          if root is None: # if reached a leaf node,
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
  - Time complexity: `O(n)` where `n` is the number of nodes in the tree
  - Space complexity: `O(n)` where `n` is the number of nodes in the tree

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

### Binary Tree Inorder Traversal

| Video Solution                                                | Hint                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Video Solution](https://www.youtube.com/watch?v=g_S5WuasWUE) | Use **Depth-First Search** to traverse the tree and add the values of the nodes to an array. We can use a helper function to do the DFS and then return the array. **OR** Use iterative approach using a **Stack** to traverse the tree: 1. loop through the left nodes of the cur and add them to the stack until we reach a leaf node (None) 2. add the node's value to the result array 3. set the root to the node's right node |

Given the `root` of a binary tree, return the inorder traversal of its nodes' values.

![binary-tree-inorder-traversal](./img/binary-tree-inorder-traversal.jpg)

- Explanation:

  - **Inorder** means traversing the tree in a sorted order (smaller to larger) and to do so, we need to visit the left node first, then the root node, then the right node and so on

- Time complexity: `O(n)` where `n` is the number of nodes in the tree

- Solution 1: using `DFS` **recursively**

  - we do this by :
    1. recursively calling the function on the **left** node to reach the smallest node
    2. then we print the value of the node
    3. then we recursively call the function on the **right** node to reach the largest node
  - We can use a `DFS` to traverse the tree and add the values of the nodes to an array.
  - We can use a helper function to do the `DFS` and then return the array.
  - Time complexity: `O(n)` where `n` is the number of nodes in the tree
  - Space complexity: `O(h) = O(log(n))` where `h` is the height of the tree -> call stack
    - in worst case: `O(n)` where `n` is the number of nodes in the tree but this won't happen in a balanced tree

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

  - TODO: WAtch Neetcode course video about iterative DFS

  - Steps:
    1. Create empty stack to mimic the call stack
    2. iterate through the tree and add the nodes to the stack, starting from the root node
    3. while the stack is not empty, reach the left-most node of the tree and add it to the stack each time
    4. when we reach a leaf node (None), we pop the last node in the stack and add it to the `result` array
    5. then we set the root to the node's right node and repeat the process

  ```py
  def inorderTraversal(root):
      values = []
      stack = []
      cur = root

      # while the stack is not empty or the cur is not None
      while stack or cur:
          # 1. loop through the left nodes of the cur and add them to the stack until we reach a leaf node (None)
          while cur:
              stack.append(cur)
              cur = cur.left

          # 2. add the node's value to the array
          node = stack.pop()
          values.append(node.value)
          # 4. set the root to the node's right node
          cur = node.right

      return values

  # --------------------------------------------

  # Another approach
  def inorderTraversal(root):
      values = []
      stack = []

      # while the stack is not empty or the cur is not None
      while stack or root:
          # 1. loop through the left nodes of the cur and add them to the stack until we reach a leaf node (None)
          if root:
              stack.append(root)
              root = root.left
          else:
              # 2. add the node's value to the array
              node = stack.pop()
              values.append(node.value)
              # 4. set the root to the node's right node
              root = node.right

      return values
  ```

---

### Binary Tree Postorder Traversal

| Video Solution                                                | Hint                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Video Solution](https://www.youtube.com/watch?v=QhszUQhGGlA) | Use **Depth-First Search** to traverse the tree and add the values of the nodes to an array. We can use a helper function to do the DFS and then return the array. **OR** Use iterative approach using a **Stack** to traverse the tree: 1. create a `visited` stack to store the nodes that we have visited before 2. create a `stack` to store the nodes of the tree 3. loop through the nodes of the tree and add them to the stack 4. while the stack is not empty, pop the first node in the stack and add it to the `visited` stack 5. if the node has a left node, add it to the stack 6. if the node has a right node, add it to the stack 7. loop through the `visited` stack and add the values of the nodes to the result array |

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

### Binary Search Tree Iterator

Implement the `BSTIterator` class that represents an iterator over the **in-order traversal** of a binary search tree (BST):

- `BSTIterator(TreeNode root)` Initializes an object of the `BSTIterator` class. The `root` of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.
- `boolean hasNext()` Returns `true` if there exists a number in the traversal to the right of the pointer, otherwise returns `false`.
- `int next()` Moves the pointer to the right, then returns the number at the pointer.
  - Notice that by initializing the pointer to a non-existent smallest number, the first call to `next()` will return the smallest element in the BST.
- Explanation:
  - The intuitive solution is to use **Inorder traversal** to traverse the tree and store the values in an array **(in the constructor)**, then we can use the array to implement the `next()` and `hasNext()` functions.
    - But this solution will take `O(n)` space and `O(n)` time to construct the array
    - We want to use `O(h)` space and `O(1)` time to implement the `next()` and `hasNext()` functions, So we will use **Iterative DFS** to solve this problem
      - We use `iterative DFS` instead of `recursive DFS` because it's simpler to implement here as we won't add all the nodes to the stack at once, we will only add the nodes that we need to visit next

```py
class BSTIterator:
    def __init__(self, root):
        self.stack = []
        self.cur = root

    def next(self):
        while self.cur:
            self.stack.append(self.cur)
            self.cur = self.cur.left # in-order traversal

        node = self.stack.pop() # (left-most node)
        self.cur = node.right # move to the right node
        return node.val

    def hasNext(self):
        return self.stack or self.cur # if the stack is not empty or the cur is not None
```

---

### Binary Tree Level Order Traversal

Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

- Ex:
  - Input: `root = [3,9,20,null,null,15,7]`
  - Output: `[[3],[9,20],[15,7]]`

![level order traversal](./img/level-order-traversal-1.png)

- Explanation
  - We can use a **Breadth-First Search** to traverse the tree level by level and add the values of the nodes to an array.
  - We can use a `queue` to store the nodes of each level, and a `level` array to store the values of the nodes of each level.
    ![level order traversal](./img/level-order-traversal-2.png)
    ![level order traversal](./img/level-order-traversal-3.png)
    ![level order traversal](./img/level-order-traversal-4.png)
    ![level order traversal](./img/level-order-traversal-5.png)
  - We can use a `while` loop to traverse the tree level by level and a `for` loop to traverse the nodes of each level.
    - We can use a `deque` to store the nodes of each level.

```py
def levelOrder(root):
    if root is None:
        return []

    result = []
    q = deque([root])

    # while the queue is not empty
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

        # add the level array to the result array
        result.append(level)

    return result
```

---

### Binary Tree Level Order Traversal II

Given the `root` of a binary tree, return the **bottom-up** level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

- Ex:
  ![level order traversal](./img/level-order-traversal-6.jpeg)

  - Input: `root = [3,9,20,null,null,15,7]`
  - Output: `[[15,7],[9,20],[3]]`

- Explanation:
  - It's the same as the previous problem, but we need to reverse the result array at the end.
  - We can use a `queue` to store the nodes of each level and a `result` array to store the values of the nodes of each level.
  - we will append the level array to the result queue from the left instead of the right

```py
def levelOrderBottom(root):
    if root is None:
        return []

    result = deque()
    q = deque([root])

    # while the queue is not empty
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

        # add the level array to the result array
        result.appendleft(level)

    return result
```

---

### Average of Levels in Binary Tree

Given the `root` of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within `10^-5` of the actual answer will be accepted.

- Ex:
  ![average of levels in binary tree](./img/average-of-levels-in-binary-tree-1.png)
  - Input: `root = [1, 2, 3, 4, 5, 6, 7]`
  - Output: `[1, 2.5, 5.5]`

```py
def averageOfLevels(root):
    if root is None:
        return []

    result = []
    q = deque([root])

    # while the queue is not empty
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

        # add the average of the level array to the result array
        result.append(sum(level) / len(level))

    return result
```

---

### Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

- Ex:
  ![minimum depth of binary tree](./img/minimum-depth-of-binary-tree-1.png)

- Explanation:
  - Here, we can use `BFS` or `DFS` to traverse the tree level by level and return the level when we reach a leaf node.
    - `BFS` is better because it will return the minimum depth faster than `DFS` because it will traverse the tree level by level
    - `DFS` will traverse the tree until it reaches a `leaf` node, then it will **backtrack** to the `root` node and traverse the tree again until it reaches another `leaf` node and so on, each time it reaches a `leaf` node, it will compare the current level with the minimum level and update the minimum level if the current level is less than the minimum level.

```py
def minDepth(root):
    if root is None:
        return 0

    level = 0
    q = deque([root])

    # while the queue is not empty
    while q:
        # increment the level by 1
        level += 1
        # loop through the queue
        for i in range(len(q)):
            # pop the first node in the queue
            node = q.popleft()
            # if the node is a leaf node, return the level
            if not node.left and not node.right:
                return level
            # add the node's children to the queue
            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)
```

---

### Maximum Depth of Binary Tree

Given the `root` of a binary tree, return its maximum depth.

A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.

- Explanation:

  - We can use `BFS` or `DFS` to traverse the tree level by level and return the level when we reach a leaf node.
    - `BFS` is better because it will return the maximum depth faster than `DFS` because it will traverse the tree level by level
    - `DFS` will traverse the tree until it reaches a `leaf` node, then it will **backtrack** to the `root` node and traverse the tree again until it reaches another `leaf` node and so on, each time it reaches a `leaf` node, it will compare the current level with the maximum level and update the maximum level if the current level is greater than the maximum level.
      ![max-depth-of-binary-tree](./img/max-depth-of-binary-tree.png)

- Time complexity: `O(n)` where `n` is the number of nodes in the tree

  - best case: `O(log(n))` if the tree is balanced
  - worst case: `O(n)` if the tree is not balanced

- **Solution 1:** using recursive `DFS`

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

  # ----------------------------------------------------------

  # same solution with tail recursion (Better) ✅
  def maxDepth(root, depth=0):
      # if the root is None, return 0
      if root is None:
          return depth

      # recursively call the function with the root's left node and the root's right node
      left = maxDepth(root.left, depth + 1)
      right = maxDepth(root.right, depth + 1)

      # return the maximum depth of the tree
      return max(left, right)
  ```

- **Solution 2:** using `BFS` + `queue` -> **level-order traversal**
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

- **Solution 3:** using `DFS` + `stack`

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

### Level Order Successor

Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.

- Ex:
  ![level order successor](./img/level-order-successor-1.png)
  - Input: `root = [1, 2, 3, 4, 5], key = 3`
  - Output: `4`

```py
def levelOrderSuccessor(root, key):
    if root is None:
        return None

    q = deque([root])

    while q:
        for i in range(len(q)):
            node = q.popleft()
            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)

            # if we found the key, return the first node in the queue
            if node.value == key:
                return q[0].value if q else None
```

---

### Populating Next Right Pointers in Each Node ( Connect Level Order Siblings )

// TODO: Watch the video

You are given a **perfect binary tree** where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

- EX:
  ![connect level order siblings](./img/connect-level-order-siblings-1.png)

  - Input: `root = [1, 2, 3, 4, 5, 6, 7]`
  - Output: `[1, #, 2, 3, #, 4, 5, 6, 7, #]`

- Explanation:
  - We can use `BFS` to traverse the tree level by level and connect the nodes of each level.
  - We can use a `for` loop to traverse the nodes of each level and connect them.
    - We can use a `prev` variable to store the previous node and connect it to the current node.

```py
def connect(root):
    if root is None:
        return None

    q = deque([root])
    while q:
        prev = None
        for i in range(len(q)):
            node = q.popleft()
            if prev:
                prev.next = node
            prev = node

            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)

    return root
```

---

### Populating Next Right Pointers in Each Node II

Same as the previous problem, but the tree is not a **perfect binary tree**.

- Ex:
  ![connect level order siblings](./img/connect-level-order-siblings-2.png)

  - Input: `root = [1, 2, 3, 4, 5, null, 7]`
  - Output: `[1, #, 2, 3, #, 4, 5, 7, #]`

```py
# Same solution as the previous problem
```

---

### Connect All Level Order Siblings

// TODO: Watch the video or explanation

Given a binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level.

![connect all level order siblings](./img/connect-all-level-order-siblings-1.png)

- Explanation:
  - It's a mix between [Level Order Successor](#level-order-successor) and [Populating Next Right Pointers in Each Node](#populating-next-right-pointers-in-each-node--connect-level-order-siblings)

```py
def connect(root):
    if root is None:
        return None

    q = deque([root])
    curr, prev = None, None
    while q:
      currentNode = q.popleft()
      if prev:
        prev.next = currentNode
      prev = currentNode # update prev

      if currentNode.left:
        q.append(currentNode.left)
      if currentNode.right:
        q.append(currentNode.right)
```

---

### Binary Tree Right Side View

Given the `root` of a binary tree, imagine yourself standing on the **right side** of it, return the values of the nodes you can see ordered from top to bottom.

- Ex:
  ![binary tree right side view](./img/binary-tree-right-side-view-1.jpeg)

  - Input: `root = [1, 2, 3, null, 5, null, 4]`
  - Output: `[1, 3, 4]`

- Explanation:
  - The trick here is to add the **last node** of each level to the result array.
  - to do so, we need to store the **level size** before looping through the nodes of each level.

```py
def rightSideView(root):
    if root is None:
        return []

    result = []
    q = deque([root])

    while q:
        levelSize = len(q) # Must store the level size before looping through the nodes of each level ⚠️
        for i in range(levelSize):
            node = q.popleft()
            # if we reached the last node in the current level, add its value to the result array
            if i == levelSize - 1:
                result.append(node.value)

            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)

    return result
```

---

### Check Completeness of a Binary Tree

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

### Binary Tree Zigzag Level Order Traversal

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

- **Solution 1** `BFS` + Iterative + `deque`

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

### Sum of Left Leaves

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

### Minimum Absolute Difference in BST

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

### Invert Binary Tree

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

### Kth Smallest Element in a BST

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

### Lowest Common Ancestor of a Binary Search Tree

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

### Unique Binary Search Trees

Given an integer `n`, return the number of structurally unique **BST's** (binary search trees) which has exactly `n` nodes of unique values from `1` to `n`.

- Ex:
  ![unique binary search trees](./img/unique-binary-search-trees-1.jpeg)

  - Input: `n = 3`
  - Output: `5`

- Explanation

  - We can use `DP` to solve this problem
  - We have subproblems that we can solve and use their solutions to solve the main problem
    - for each `root` node, we can calculate the number of unique BST's that can be created from the nodes in its `left` subtree and the nodes in its `right` subtree
    - then we can multiply the number of unique BST's in the `left` subtree with the number of unique BST's in the `right` subtree to get the total number of unique BST's that can be created from the nodes in the left subtree and the nodes in the right subtree
      ![unique binary search trees](./img/unique-binary-search-trees-2.png)
  - We do this for every `root` node and add the total number of unique BST's to the `result` array
  - Ex: to calculate the number for `root=4`, we need to calculate the number of unique BST's for `root=1`, `root=2`, `root=3` and `root=5` and then multiply them together -> **(Subproblems -> DP)**

    ```py
    # 0 nodes = 1 tree
    # 1 node = 1 tree
    # 2 nodes = 2 trees
    # 3 nodes = 5 trees
    # 4 nodes = 14 trees

    numTree(4) = numTree(0) * numTree(3) + # because we have 4 nodes (1 node in the left subtree and 3 nodes in the right subtree)
                 numTree(1) * numTree(2) + # because we have 4 nodes (2 nodes in the left subtree and 2 nodes in the right subtree)
                 numTree(2) * numTree(1) + # because we have 4 nodes (3 nodes in the left subtree and 1 node in the right subtree)
                 numTree(3) * numTree(0)  # because we have 4 nodes (4 nodes in the left subtree and 0 nodes in the right subtree)
    ```

- Time complexity: `O(n^2)`, Space complexity: `O(n)`

  - We have `n` subproblems and each subproblem takes `O(n)` time to solve
  - We can use a `DP` array to store the solutions of the subproblems

```py
def numTrees(n):
    # create a DP array to store the solutions of the subproblems
    dp = [0] * (n + 1) # numTree
    # set the first two values to 1
    dp[0] = dp[1] = 1

    # loop through the numbers from 2 to n
    for i in range(2, n + 1):
        # loop through the numbers from 1 to i
        for j in range(1, i + 1):
            # calculate the number of unique BST's for each root node
            dp[i] += dp[j - 1] * dp[i - j] # See the explanation above

    return dp[n]
```

---

### Unique Binary Search Trees II

Given an integer `n`, return all the structurally unique **BST's** (binary search trees), which has exactly `n` nodes of unique values from `1` to `n`. Return the answer in **any order**.

- Ex:
  ![unique binary search trees](./img/unique-binary-search-trees-1.jpeg)

  - Input: `n = 3`
  - Output: `[[1,null,3,2],[3,2,null,1],[3,1,null,null,2],[2,1,3],[1,null,2,null,3]]`

- Explanation

  - Here, we want to create all the unique BST's that can be created from the numbers from `1` to `n`
  - instead of using recursion to build tree from each `root`
  - we can divide the problem into **subproblems** and use `DP` to solve it
    - for example starting from `1`:
      ![unique binary search trees](./img/unique-binary-search-trees-3.png)
      - Then we focus on the `right` subtree of `1`:
        ![unique binary search trees](./img/unique-binary-search-trees-4.png)
        ![unique binary search trees](./img/unique-binary-search-trees-5.png)
    - We do this for every `root` node and add the total number of unique BST's to the `result` array
    - We will notice a repeated work when generating the subtree, and that's where we can use `DP caching`

- Time complexity: `4^n` for `input = 4`
  - because we have `n` subproblems and each subproblem takes `O(n)` time to solve

```py
def generateTrees(n):
    dp = {}
    def generate(left, right):
        if left == right:
            return [TreeNode(left)] # return a tree with one node
        # when array is empty, return None
        if left > right:
            return [None] # because leaf nodes are None and not []
        if (left, right) in dp:
            return dp[(left, right)]

        res = []
        for val in range(left, right + 1):
            # recursively call the function with the left and right subtrees
            leftSubtrees = generate(left, val - 1)
            rightSubtrees = generate(val + 1, right)

            # loop through the left and right subtrees to get all the possible combinations
            for leftSubtree in leftSubtrees:
                for rightSubtree in rightSubtrees:
                    # create a new tree with the current value as the root node
                    root = TreeNode(val)
                    root.left = leftSubtree
                    root.right = rightSubtree
                    # add the tree to the result array
                    res.append(root)

        dp[(left, right)] = res
        return res

    return generate(1, n)
```

---

### Serialize and Deserialize BST

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a **binary search tree**. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.

- EX:

  - Input: `root = [2,1,3]`
  - Output: `[2,1,3]`
  - Explanation:
    - The original BST was `[2,1,3]`, serialized into `"2 1 3"` string format.
    - The deserialized BST was `[2,1,3]`, which is the same as the original BST.

- Explanation:
  - We can use `DFS` to traverse the tree and serialize it into a string
  - Then we can deserialize the string back into a tree
  - We can use `preorder` traversal to serialize the tree into a string
    - We can use a `stack` to store the nodes of the tree
    - We can use a `queue` to store the values of the nodes in the tree
    - We can use a `#` to indicate a `None` node
    - We can use a `,` to separate the values of the nodes
    - We can use a `space` to separate the nodes
    - Ex: `[2,1,3]` -> `2 1 3` -> `2,1,3`

```py
def serialize(root):
    if root is None:
        return ''

    tree = []
    queue = deque([root])

    while queue:
        node = queue.popleft()
        if node:
            tree.append(str(node.value)) # convert the value to a string
            queue.append(node.left)
            queue.append(node.right)
        else:
            tree.append('#') # add a # to indicate a None node

    return ' '.join(tree) # join the values with a space

def deserialize(data):
    if data == '':
        return None

    tree = data.split(' ') # split the string into an array
    root = TreeNode(int(tree[0])) # create the root node
    queue = deque([root])
    i = 1 # start from the second node to skip the root node

    while queue:
        node = queue.popleft()
        if tree[i] != '#':
            node.left = TreeNode(int(tree[i]))
            queue.append(node.left)
        i += 1

        if tree[i] != '#':
            node.right = TreeNode(int(tree[i]))
            queue.append(node.right)
        i += 1

    return root
```

---

## Tries

### Implement Trie (Prefix Tree)

| Video Solution                                                | Hint                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Video Solution](https://www.youtube.com/watch?v=oobqoCJlHA0) | Create a `TrieNode` class with a `children` property that stores the children of the node and a `isEndOfWord` property that indicates if the node is the end of a word. Create a `Trie` class with a `root` property that stores the root node of the trie. Implement the `insert` method that takes a word as input and inserts it into the trie. Implement the `search` method that takes a word as input and returns `True` if the word is in the trie and `False` if it's not. Implement the `startsWith` method that takes a prefix as input and returns `True` if the prefix is in the trie and `False` if it's not. |

A **trie** (pronounced as "try") or **prefix tree** is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

- Explanation
  - Create a `TrieNode` class with a `children` property that stores the children of the node and a `isEndOfWord` property that indicates if the node is the end of a word.
  - when inserting a word, we loop through each character in the word and check if the character is in the `trie`
    - if the character is in the `trie`, we move to the next character until we reach the end of the word
    - if the character is not in the `trie`, we add it to the `trie` by creating a node for that character
    - After adding all the characters of the word, we need to mark the end of the word by adding a `*` to the node or setting the `isEndOfWord` property to `True`
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
