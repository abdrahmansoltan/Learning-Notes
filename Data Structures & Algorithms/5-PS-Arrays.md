# INDEX

- [INDEX](#index)
  - [Remove Element](#remove-element)
  - [Replace Elements with Greatest Element on Right Side](#replace-elements-with-greatest-element-on-right-side)
  - [Array chunk (split array into smaller chunks)](#array-chunk-split-array-into-smaller-chunks)
  - [Two pointers](#two-pointers)
    - [Two Sum II](#two-sum-ii)
    - [Three Sum](#three-sum)
    - [4 Sum](#4-sum)
    - [Continuous SubArray Sum](#continuous-subarray-sum)
    - [Pair with Target Sum](#pair-with-target-sum)
    - [Remove Duplicates From Sorted Array](#remove-duplicates-from-sorted-array)
    - [Container with most water](#container-with-most-water)
  - [Sliding Window](#sliding-window)
    - [Average of All Contiguous Subarrays of Size K](#average-of-all-contiguous-subarrays-of-size-k)
    - [Minimum Size Subarray Sum](#minimum-size-subarray-sum)
    - [Fruit Into Baskets](#fruit-into-baskets)
    - [Longest Subarray of 1's After Deleting One Element](#longest-subarray-of-1s-after-deleting-one-element)
    - [Max Consecutive Ones III](#max-consecutive-ones-iii)
    - [Sliding Window Maximum](#sliding-window-maximum)
  - [Product of Array Except Self](#product-of-array-except-self)
  - [Trapping Rain Water](#trapping-rain-water)
    - [Solution 1: Extra memory used (O(n) space)](#solution-1-extra-memory-used-on-space)
    - [Solution 2: Two pointers Less memory used (O(1) space)](#solution-2-two-pointers-less-memory-used-o1-space)
  - [Interval scheduling problems (overlapping intervals)](#interval-scheduling-problems-overlapping-intervals)
    - [Meeting Rooms](#meeting-rooms)
    - [Meeting Rooms II](#meeting-rooms-ii)
  - [2D Array ( Matrix )](#2d-array--matrix-)
    - [Rotate Image](#rotate-image)
    - [Create a Spiral Matrix](#create-a-spiral-matrix)
    - [Return elements of Spiral Matrix](#return-elements-of-spiral-matrix)
    - [Valid Tic-Tac-Toe State](#valid-tic-tac-toe-state)

---

## Remove Element

Given an array `nums` and a value `val`, remove all instances of that value **in-place** and return the new length.

- Ex:

  - `nums = [3,2,2,3], val = 3` -> `2` (`nums = [2,2]`)

- Explanation:
  - we can use a **two pointers** pattern to check for all the elements in the array
  - we can use the first pointer (`lastIndex`) to keep track of the last val element in the array
  - and the second pointer to iterate over the array and check if the current element is equal to val `(i)`
    - if it is, then we skip it, if not, then we update the last val element **and then** update the last val index

```py
def removeElement(nums, val):
    lastIndex = 0
    for i in range(len(nums)):
        if nums[i] != val:
            nums[lastIndex] = nums[i]
            lastIndex += 1
    return lastIndex
```

---

## Replace Elements with Greatest Element on Right Side

Given an array `arr`, replace every element in that array with the greatest element among the elements to its right, and replace the last element with `-1`.

- Ex:

  - `arr = [17,18,5,4,6,1]` -> `[18,6,6,6,1,-1]`

- Explanation:
  - Instead of using nested loops `O(n^2)`, we can loop through the array in reverse order and keep track of the maximum element we've seen so far.
- Time complexity: `O(n)`

```py
def replaceElements(arr):
    # initialize the max element for the last element in the array
    rightMax = -1

    for i in range(len(arr) - 1, -1, -1):
        newMax = max(rightMax, arr[i])
        arr[i] = rightMax
        rightMax = newMax

    return arr
```

---

## Array chunk (split array into smaller chunks)

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

## Two pointers

### Two Sum II

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

### Three Sum

Given an array `nums` of n integers, are there elements a, b, c in `nums` such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

- EX: `nums = [-1, 0, 1, 2, -1, -4]` --> `[[-1, 0, 1], [-1, -1, 2]]`
- **Steps:**
  ![3sum](./img/3sum.png)

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

### 4 Sum

Given an array `nums` of `n` integers, return an array of all the **unique** quadruplets `[nums[a], nums[b], nums[c], nums[d]]` such that:

- `0 <= a, b, c, d < n`
- `a`, `b`, `c`, and `d` are **distinct**.
- `nums[a] + nums[b] + nums[c] + nums[d] == target`

You may return the answer in **any order**.

- EX: `nums = [1, 0, -1, 0, -2, 2], target = 0` --> `[[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]`

- **Steps:**
  ![4sum](./img/4sum)

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

### Continuous SubArray Sum

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

### Pair with Target Sum

Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

- EX: `arr = [1, 2, 3, 4, 6], target = 6` --> `[1, 3]` because `1 + 3 = 6`

- Explanation:
  - the thing here is to make use of the fact that the **array is sorted**
  - So, one solution would be to use a `binary search` to find the second number -> `O(nlog(n))`, but we can do better
  - The best solution would be to use a **two pointers** pattern to check for all the elements in the array -> `O(n)`

```py
def pair_with_targetsum(arr, target_sum):
    left = 0
    right = len(arr) - 1

    while left < right:
        if arr[left] + arr[right] == target_sum:
            return [left, right]
        elif arr[left] + arr[right] < target_sum:
            left += 1
        else:
            right -= 1
    # If the target was not found, return [-1, -1]
    return [-1, -1]
```

---

### Remove Duplicates From Sorted Array

Given a sorted array `nums`, remove the duplicates **in-place** such that each element appears only once and returns the new length.

- Ex:

  - `nums = [1,1,2]` -> `2` -> `(nums = [1,2,_])`
  - `nums = [0,0,1,1,1,2,2,3,3,4]` -> `5` -> `(nums = [0,1,2,3,4,_,_,_,_,_])`
    ![remove duplicates](./img/remove-duplicates-1.png)

- Explanation:
  - we can use a **two pointers** pattern to check for all the elements in the array
    ![remove duplicates](./img/remove-duplicates-2.png)
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
  4. update the result and move the pointer pointing to the shorter line towards the other end by one step.
     - we choose which pointer to move by comparing the heights of the two lines and moving the pointer pointing to the shorter line towards the other end by one step
       - so that we may get a relatively longer line next time and possibly will be able to hold more water.

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

## Sliding Window

### Average of All Contiguous Subarrays of Size K

Given an array, find the average of all contiguous subarrays of size `k` in it.

- EX: `arr = [1, 3, 2, 6, -1, 4, 1, 8, 2], k = 5` --> `[2.2, 2.8, 2.4, 3.6, 2.8]`

  - Explanation:
    - For the first `5` numbers (subarray from index `0-4`), the average is: `(1 + 3 + 2 + 6 - 1) / 5` => `2.2`
    - The average of next `5` numbers (subarray from index `1-5`) is: `(3 + 2 + 6 - 1 + 4) / 5` => `2.8`
    - and so on...

- Explanation

  - we can re-use the `sum` result of the previous subarray to calculate the `sum` of the next subarray
  - The efficient way to solve this problem would be to visualize each contiguous subarray as a sliding window of ‘5’ elements. This means that when we move on to the next subarray, we will slide the window by one element. So, to reuse the sum from the previous subarray, we will subtract the element going out of the window and add the element now being included in the sliding window. This will save us from going through the whole subarray to find the sum and, as a result, the algorithm complexity will reduce to `O(N)`.

    ![sliding window](./img/average-contiguous-subarrays-1.svg)

```py
def find_averages_of_subarrays(k, arr):
    result = []
    windowSum = 0.0
    windowStart = 0

    for windowEnd in range(len(arr)):
        windowSum += arr[windowEnd]

        if windowEnd >= k - 1:
            result.append(windowSum / k)
            windowSum -= arr[windowStart]
            windowStart += 1

    return result
```

---

### Minimum Size Subarray Sum

Given an array of positive integers `nums` and a positive integer `target`, return the minimal length of a **contiguous subarray** `[nums[l], nums[l+1], ..., nums[r-1], nums[r]]` of which the sum is greater than or equal to `target`. If there is no such subarray, return `0` instead.

```py
# Time: O(n) -> O(n + n) = O(n)
def min_sub_array_len(target, nums):
    minLength = float('inf')
    start = 0
    windowSum = 0

    for end in range(len(nums)):
        windowSum += nums[end]

        while windowSum >= target:
            minLength = min(minLength, end - start + 1)
            windowSum -= nums[start]
            start += 1

    return minLength if minLength != float('inf') else 0
```

- Time complexity: `O(n + n) = O(n)` because the outer `for` loop runs for all elements and the inner `while` loop processes each element **only once**, therefore the time complexity of the algorithm will be `O(n+n)` which is asymptotically equivalent to `O(n)`.
  - It's not `O(n^2)` because the inner `while` loop will process each element **only once**.

---

### Fruit Into Baskets

Given an array of integers where each integer represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

It's similar to the [Longest Substring with K Distinct Characters](./6-PS-Strings.md#longest-substring-with-k-distinct-characters) problem.

```py
def fruits_into_baskets(fruits):
    windowStart = 0
    maxLength = 0
    fruitFrequency = {}

    for windowEnd in range(len(fruits)):
        rightFruit = fruits[windowEnd]
        fruitFrequency[rightFruit] = fruitFrequency.get(rightFruit, 0) + 1

        # Shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
        while len(fruitFrequency) > 2:
            leftFruit = fruits[windowStart]
            fruitFrequency[leftFruit] -= 1
            if fruitFrequency[leftFruit] == 0:
                del fruitFrequency[leftFruit]
            windowStart += 1

        maxLength = max(maxLength, windowEnd - windowStart + 1)

    return maxLength
```

Note: the space complexity of the above algorithm will be `O(1)` not `O(n)`, because we can have a maximum of three types of fruits stored in the `fruitFrequency` dictionary.

---

### Longest Subarray of 1's After Deleting One Element

Same as the [Longest Repeating Character Replacement](./6-PS-Strings.md#longest-repeating-character-replacement) problem.

---

### Max Consecutive Ones III

Given a binary array `nums` and an integer `k`, return the maximum number of consecutive `1`'s in the array if you can flip at most `k` `0`'s.

- Solution 1: Sliding window like the [Longest Repeating Character Replacement](./6-PS-Strings.md#longest-repeating-character-replacement) problem.

- Solution 2: (Faster)

  ```py
  def longest_ones(nums, k):
      l = 0

      for r in range(len(nums)):
          if nums[r] == 0:
              k -= 1
          if k < 0: # If we have more than k zeros, move the left pointer to the right
              if nums[l] == 0:
                  k += 1
              l += 1

      return r - l + 1
  ```

---

### Sliding Window Maximum

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

  - The brute force solution is to iterate on all windows of size `k` and find the maximum element in each window. This solution takes `O(n.k)` since we have `O(n-k+1)` windows and for each window we take `O(k)` time to find the maximum element in it.
    - to get a better solution, we will use the `next greater element` approach, using a **Monotonic decreasing queue (double-ended queue (`deque`))** to store the indices of the elements in the window.
    - > `deque` allows for fast appends and pops **from both ends**.
  - The first element in the `queue` is the index of the maximum element in the window.
  - When we move the window to the right, we need to remove the element that is out of the window, and remove all elements that are smaller than the current element. Then we add the current element to the queue.
    - This is done because we know that when going to the next window, the first element in the queue is out of the window, so we remove it. Then we remove all elements that are smaller than the current element, because **they will never be the maximum element in the window**. Then we add the current element to the queue.
  - we use queue and not a stack, because we want to remove elements from the left side of the queue, and we want to remove the first element in the queue, which is the maximum element in the window.

So, to recap: we use a `queue` to store the indices of the elements in the current window in a **decreasing order**. At each step, we add the current element to the queue, and then we pop from the `queue` (from the right) all the elements that are smaller than the current element. We then remove (from the left) the first element in the queue if it is outside of the current window. Finally, we add the first element of the queue to the output. **(The first element of the queue will always be the maximum element of the window because we are using a decreasing order)**

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

## Product of Array Except Self

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

## Trapping Rain Water

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

- EX: `height = [0,1,0,2,1,0,3,1,0,1,2]` --> `8` units of water
  ![rain water](./img/trapping-rain-water.png)
- **Explanation:**

  - By examining the diagram, we can see that the amount of water above each point depends on these factors:
    1. The height of the current wall (the current point)
    2. The height of the tallest wall to the left of the current wall.
    3. The height of the tallest wall to the right of the current wall.
    4. The height of the shorter wall between the left and right tallest walls.
       - We know that the height of water cannot exceed the height of the shorter wall.
  - So, the amount of water above each point is the difference between the height of the shorter (tallest walls) and the height of the current wall.
  - Formula for the area of water above any **point**:

    ```py
    current_water = min(left_max, right_max) - height[i]

    # height[i] is the height of the current wall
    # left_max is the height of the tallest wall to the left of the current wall.
    # right_max is the height of the tallest wall to the right of the current wall.
    ```

  - To get the wanted amount of water, we need to **find the area of water above each point and add them up**.
    - if the water is above the current wall, the area will be positive, otherwise it will be negative. So **we will only add the positive areas to the total**.

### Solution 1: Extra memory used (O(n) space)

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

### Solution 2: Two pointers Less memory used (O(1) space)

![rain water](./img/trapping-rain-water-3.png)

- In [solution-1](#solution-1-extra-memory-used-on-space), we actually used 2 pointers (1 individual pointer with one iteration for each) but we were iterating pointers **outwards**. Here we will use 2 pointers to iterate **inwards**.
  ![rain water](./img/trapping-rain-water-4.png)
- We can't use the 2 pointers in order to single handedly figure out what (the walls are for some container and the water inside), but what we can keep track of is the **maximum height of the left and right walls**.
- So we will have 2 pointers, one at the beginning and one at the end of the array, and we will move the pointer that is pointing to the shorter wall inwards.

  - pointer 1: points to the left wall
  - pointer 2: points to the right wall
  - meaning that we keep track of every point that we have seen and keep track of the maximum value that is's seen and then decide which one to move inwards.
    ![rain water](./img/trapping-rain-water-5.png)

- We only need the minimum of the two walls to calculate the water above the current wall. so if the `left wall pointer` is shorter, we move the `left pointer` inwards, otherwise we move the `right pointer` inwards. knowing that the minimum of the two walls is the maximum height of the water above the current wall.

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
        # check which pointer is shorter so that we can use it to calculate the water above the current wall and move it inwards
        if height[l] < height[r]:
            # 1. get current left wall height
            left_max = max(left_max, height[l]) # Update the left_max if the current wall is taller than the previous one
            # 2. calculate the water above the current wall
            total_water += left_max - height[l]
            # 3. move the left pointer inwards
            l += 1
        else:
            right_max = max(right_max, height[r])
            total_water += right_max - height[r]
            r -= 1

    return total_water
```

---

## Interval scheduling problems (overlapping intervals)

### Meeting Rooms

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

### Meeting Rooms II

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

## 2D Array ( Matrix )

### Rotate Image

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image **in-place**, which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.

- EX: `matrix = [[1,2,3],[4,5,6],[7,8,9]]` --> `[[7,4,1],[8,5,2],[9,6,3]]`
  ![rotate image](./img/rotate-matrix.jpg)

- **Solution 1:** Transpose and then reverse

  - **Steps**:

    - perform a matrix transpose and then reverse each row of the resulting matrix.
    - **Transpose**: swap the elements of the matrix across the diagonal.

      - This is done by iterating through the matrix and swapping the element at index `[i]` `[j]` with the element at index `[j]` `[i]`.

        ```py
        matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        ```

    - The nested loop will iterate over the `range(row)`

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

- **Solution 2:** using 4 pointers -> `l`, `r`, `t`, `b`

  - We initialize two pointers `l` and `r` to point to the leftmost and rightmost columns of the matrix, respectively.
    ![rotate matrix](./img/rotate-matrix-1.png)
  - Swap each element in a cycle of four, using four pointers to keep track of the `top`, `bottom`, `left`, and `right` boundaries of the current cycle.
    ![rotate matrix](./img/rotate-matrix-2.png)
  - Iterate through all elements in the current cycle, from left to right, using a loop variable i.
  - For each element in the current cycle, swap the element with its corresponding element in the cycle, using four pointers to keep track of the top, bottom, left, and right boundaries of the cycle.
    ![rotate matrix](./img/rotate-matrix-3.png)
  - After swapping all elements in the current cycle, move the top pointer down by one row and the bottom pointer up by one row, and move the left pointer to the right by one column and the right pointer to the left by one column. This moves the boundaries of the current cycle inward by one element.
    - That's where we use the `for` loop to iterate over the current cycle. and the `i` variable to keep track of the current element in the cycle.
      - use the picture above as a reference to know how `i` is changed for each point. Ex:
        - top left -> `matrix[top][left + i]` instead of `matrix[top][left]`
  - Also, note that we move points starting from `bottom-left` so that we only use one temporary variable to store the `top-left` element for later.

  ```py
  def rotate(matrix):
    # initialize the pointers to point to the leftmost and rightmost columns
    l,r = 0, len(matrix) - 1

    while l < r:
        # loop through the current depth of the matrix
        for i in range(r - l):
            top, bottom = l, r
            # Temporarily save the top-left element for later
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

### Create a Spiral Matrix

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

### Return elements of Spiral Matrix

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

### Valid Tic-Tac-Toe State

A Tic-Tac-Toe board is given as a string array `board`. Return `true` if and only if it is possible to reach this board position during the course of a valid tic-tac-toe game.

- Ex:

  - `board = ["O  ", "   ", "   "] --> false` --> no one has won yet
  - `board = ["XOX", " X ", "   "] --> false` --> X has won, but the game is not over yet
  - `board = ["XXX", "   ", "OOO"] --> false` --> the game is over, but X didn't have the turn to play
  - `board = ["XOX", "O O", "XOX"] --> true` --> the game is over, and no one won

```py
def validTicTacToe(board):
    # count the number of Xs and Os
    numXs = sum(row.count('X') for row in board)
    numOs = sum(row.count('O') for row in board)

    # check if the number of Xs is equal to the number of Os or the number of Xs is 1 greater than the number of Os
    if numXs != numOs and numXs != numOs + 1:
        return False

    # check if X has won
    if hasWon(board, 'X') and numXs != numOs + 1:
        return False

    # check if O has won
    if hasWon(board, 'O') and numXs != numOs:
        return False

    return True

def hasWon(board, player):
    # check rows
    for row in board:
        if row.count(player) == 3:
            return True

    # check columns
    for col in range(3):
        if board[0][col] == player and board[1][col] == player and board[2][col] == player:
            return True

    # check diagonals
    if board[0][0] == player and board[1][1] == player and board[2][2] == player:
        return True
    if board[0][2] == player and board[1][1] == player and board[2][0] == player:
        return True

    return False
```

---
