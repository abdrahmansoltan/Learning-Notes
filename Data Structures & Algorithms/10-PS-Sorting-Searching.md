# INDEX

- [INDEX](#index)
  - [Notes](#notes)
  - [Searching](#searching)
    - [Binary Search](#binary-search)
    - [Find first and last position of element in sorted array](#find-first-and-last-position-of-element-in-sorted-array)
    - [Search a 2D Matrix](#search-a-2d-matrix)
    - [Koko Eating Bananas](#koko-eating-bananas)
    - [Search in Rotated Sorted Array](#search-in-rotated-sorted-array)
    - [Find Minimum in Rotated Sorted Array](#find-minimum-in-rotated-sorted-array)
    - [Time Based Key-Value Store](#time-based-key-value-store)
    - [Single Element in a Sorted Array](#single-element-in-a-sorted-array)
    - [Find First and Last Position of Element in Sorted Array](#find-first-and-last-position-of-element-in-sorted-array-1)
  - [Sorting](#sorting)
    - [Insertion Sort List](#insertion-sort-list)
    - [Largest Number](#largest-number)
    - [Merge Intervals](#merge-intervals)
    - [Non-overlapping Intervals](#non-overlapping-intervals)
    - [Sort colors](#sort-colors)
    - [Median of Two Sorted Arrays](#median-of-two-sorted-arrays)
    - [Squares of a Sorted Array](#squares-of-a-sorted-array)

---

## Notes

---

## Searching

- **Note:** In `binary search`, when we get the middle element, we use: `mid = (low + high) // 2`, Actually this can lead to an **integer overflow**. Imagine that `low` and `high` are very large numbers. Adding them up will cause an integer overflow.
  - A better way is to compute `mid` as `mid = low + (high - low) // 2`. Dividing `high - low` before adding `low` avoids the integer overflow.

### Binary Search

```py
def binary_search(arr, target):
    l, r = 0, len(arr) - 1

    while l <= r:
        mid = (l + r) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            l = mid + 1
        else:
            r = mid - 1

    return -1
```

> Interview question: what if `left` and `right` values are in the upper limit of the `32` bit integer? so adding them will result in an **"overflow"**
>
> - Answer: we can instead get the `mid` value by using `mid = left + (right - left) // 2`

---

### Find first and last position of element in sorted array

Given an array of integers `nums` sorted in ascending order, find the starting and ending position of a given `target` value. If `target` is not found in the array, return `[-1, -1]`.

**You must write an algorithm with `O(log n)` runtime complexity.**

- Ex:

  - `nums = [5, 7, 7, 8, 8, 10], target = 8 --> [3, 4]`
  - `nums = [5, 7, 7, 8, 8, 10], target = 6 --> [-1, -1]`

- Bad solution `O(n)` -> will eventually be `O(log(n))` if the target value is found in the array, but not the best solution ❌

  - `O(log(n)) + O(log(n/2)) + O(log(n/4)) + ... + O(log(1)) = O(log(n))`

  ```py
  def searchRange(nums, target):
      def search():
          l, r = 0, len(nums) - 1
          start, end = -1, -1

          while l <= r:
              m = l + (r - l) // 2

              if nums[m] == target:
                  # check if there's a value on the left of the current index that is equal to the target value
                  while m - 1 >= 0 and nums[m - 1] == target:
                      start = m - 1
                  while m + 1 < len(nums) and nums[m + 1] == target:
                      end = m + 1

                  return [start, end]

              elif nums[m] < target:
                  l = m + 1
              else:
                  r = m - 1

          return [start, end]

      return search()
  ```

- Good solution `O(log(n))` ✅

  ```py
  def searchRange(nums, target):
      def search(leftBias):
          """
          leftBias(boolean): True if we are looking for the left most index
          """
          l, r = 0, len(nums) - 1
          res = -1

          while l <= r:
              m = l + (r - l) // 2

              if nums[m] == target:
                  res = m
                  # If we are looking for the left most index, then we want to keep searching the left side
                  if leftBias:
                      r = m - 1
                  else:
                      l = m + 1
              elif nums[m] < target:
                  l = m + 1
              else:
                  r = m - 1

          return res

      return [search(True), search(False)]
  ```

---

### Search a 2D Matrix

You are given an `m x n` integer matrix `matrix` sorted in ascending order, and an integer `target`. Return `true` if `target` is in `matrix`, or `false` otherwise.

- Each row of `matrix` is sorted in ascending order.
- The first integer of each row is greater than the last integer of the previous row

- Ex:
  ![alt](./img/search-matrix-1.jpg)

  - `matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]`
  - `target = 3 --> True`
  - `target = 13 --> False`

- Explanation
  ![alt](./img/search-matrix-2.png)

  - We can make use of that each row is sorted to perform a binary search on each row
    - this will be `O(m * log(n))`, where `m` is the number of rows and `n` is the number of columns
  - We can do even better, by performing a binary search on the entire matrix to make use of that the last element of each row is smaller than the first element of the next row
    - this will be `O(log(m) + log(n))`, where `m` is the number of rows and `n` is the number of columns

- Solution 1 -> `O(log(m) + log(n))` -> double binary-search

  ```py
  def searchMatrix(matrix, target):
      ROWS, COLS = len(matrix), len(matrix[0])
      top, bottom = 0, ROWS - 1

      # Perform binary search
      while top <= bottom:
        row = (top + bottom) // 2
        # if the target is smaller than the first element of the row, go up
        if target < matrix[row][0]:
          bottom = row - 1
        # if the target is bigger than the last element of the row, go down
        elif target > matrix[row][COLS - 1]:
          top = row + 1
        else:
          # Perform binary search on the row
          left, right = 0, COLS - 1
          while left <= right:
            mid = (left + right) // 2
            if target < matrix[row][mid]:
              right = mid - 1
            elif target > matrix[row][mid]:
              left = mid + 1
            else:
              return True
          return False # MUST RETURN FALSE HERE AND NOT OUTSIDE THE WHILE LOOP
  ```

- Solution 2 -> `O(m + n)`

  ```py
  def searchMatrix(matrix, target):
      if not matrix or not matrix[0]:
          return False

      row = 0
      col = len(matrix[0]) - 1

      # Perform binary search
      while row < len(matrix) and col >= 0:
          if matrix[row][col] == target:
              return True
          elif matrix[row][col] > target:
              col -= 1
          else:
              row += 1

      return False
  ```

---

### Koko Eating Bananas

Koko loves to eat bananas. There are `n` piles of bananas, the `ith` pile has `piles[i]` bananas. The guards have gone and will come back in `h` hours.

Koko can decide her bananas-per-hour eating speed of `k`. Each hour, she chooses some pile of bananas and eats `k` bananas from that pile. If the pile has less than `k` bananas, she eats all of them instead and will not eat any more bananas during this hour.

Return _the minimum integer_ `k` _such that she can eat all the bananas within_ `h` _hours_.

- Ex:

  - `piles = [3, 6, 7, 11], h = 8 --> 4`
  - `piles = [30, 11, 23, 4, 20], h = 5 --> 30`
  - `piles = [30, 11, 23, 4, 20], h = 6 --> 23`

- Explanation:

  - We want to get the minimum `k` number where `k` is the maximum number of bananas Koko can eat per hour (eating speed)
  - for example: `piles = [3, 6, 7, 11], h = 8`
    - `k = 1` -> we will require `3` hours to eat the first pile, then `6` hours to eat the second pile, then `7` hours to eat the third pile, then `11` hours to eat the fourth pile, this will exceed the `8` hours threshold
    - `k = 4` -> we will require `1` hour to eat the first pile, then `2` hours to eat the second pile, then `2` hours to eat the third pile, then `3` hours to eat the fourth pile, this will not exceed the `8` hours threshold so this is the minimum `k` number

- Steps:
  - Instead of brute-forcing all the possible `k` values (`1` -> `max(piles)`), we can use **binary search** to find the minimum `k` value
    ![koko banana](./img/koko-banana-1.png)
  - We can start with `k = 1` and `k = max(piles)`, then we can get the `mid` value and check if it is possible to eat all the bananas within `h` hours
    ![koko banana](./img/koko-banana-2.png)
  - If it is possible, then we can try to get a smaller `k` value, so we can set `right = mid - 1`
  - If it is not possible, then we can try to get a bigger `k` value, so we can set `left = mid + 1`
    ![koko banana](./img/koko-banana-3.png)

```py
def minEatingSpeed(piles, h):
    l, r = 1, max(piles)
    res = r # if we can't eat all the bananas within h hours, then we will return the upper bound

    while l <= r:
        # k = mid
        k = (l + r) // 2
        totalTime = 0
        for p in piles:
            totalTime += math.ceil(p / k)

        if totalTime <= h:
          res = min(res, k)
          r = k - 1
        else:
          l = k + 1

    return res
```

---

### Search in Rotated Sorted Array

You are given an integer array `nums` sorted in ascending order, and an integer `target`. Suppose that `nums` is rotated at some pivot unknown to you beforehand (i.e., `[0, 1, 2, 4, 5, 6, 7]` might become `[4, 5, 6, 7, 0, 1, 2]`). Given `nums` and `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`. **You must write an algorithm with `O(log n)` runtime complexity.**

- Ex:

  - `nums = [4, 5, 6, 7, 0, 1, 2], target = 0 --> 4`
  - `nums = [4, 5, 6, 7, 0, 1, 2], target = 3 --> -1`

- Steps:
  - We can use **binary search** to find the target value
  - We can check if the `mid` value is equal to the `target` value
  - Also we will chack if the left/right side of the `mid` value is sorted (we have 2 sorted halves in the array after the rotation)
    ![search rotated array](./img/search-rotated-arr-1.png)
  - to choose which side to search in, we can check if the `mid` value is greater than the `left` value or less than the `right` value
    ![search rotated array](./img/search-rotated-arr-2.png)
    - If the `left` side is sorted, then we can check if the `target` value is in the `left` side
    - If the `right` side is sorted, then we can check if the `target` value is in the `right` side
    - If the `target` value is not in the left/right side, then we can set `left = mid + 1` or `right = mid - 1`

```py
def search(nums, target):
    l, r = 0, len(nums) - 1

    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target:
            return mid

        # left sorted side
        if nums[l] <= nums[mid]:
            # check if the target is in the left side
            if nums[l] <= target <= nums[mid]:
                r = mid - 1
            else:
                l = mid + 1
        # left sorted side
        else:
            if nums[mid] <= target <= nums[r]:
                l = mid + 1
            else:
                r = mid - 1

    return -1
```

---

### Find Minimum in Rotated Sorted Array

Same as the previous problem, but instead of returning the index of the target value, we will return the minimum value in the array

- Explanation
  - We can use **binary search** to find the minimum value
  - We can check if the `mid` value in the `left` portion or the `right` portion
    - if we're in the `left` portion, then we can check if the `mid` value is less than the `right` value
      - This is because the `left` side will have values greater than every value in the `right` side, so the minimum value will be in the `right` side
        ![find-min-in-rotated-sorted-arr](./img/find-min-in-rotated-sorted-arr-1.png)
  - To check if the `mid` value is in the `left` portion, we can check if the `mid` value is greater than the first value in the `left` portion
    ![find-min-in-rotated-sorted-arr](./img/find-min-in-rotated-sorted-arr-2.png)
  - If the `mid` value is in the `right` portion, then we can check if the `mid` value is less than the `right` value and repeat
    ![find-min-in-rotated-sorted-arr](./img/find-min-in-rotated-sorted-arr-3.png)

```py
def findMin(nums):
    l, r = 0, len(nums) - 1
    curMin = nums[0]

    while l <= r:
        mid = (l + r) // 2
        curMin = min(curMin, nums[mid])

        # right side is not sorted -> right side has the minimum value
        if nums[r] < nums[mid]:
            l = mid + 1
        # left side has the min
        else:
            r = mid - 1

    return curMin
```

---

### Time Based Key-Value Store

Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

- Ex: ![Time based store](./img/time-based-store-1.png)

- Solution:
  - `"All the timestamps timestamp of set are strictly increasing"` -> sorted
- Ex: ![Time based store](./img/time-based-store-2.png)
  - So, we can use **binary search** to find the value at a certain timestamp

```py
class TimeMap:
    def __init__(self):
        self.store = {} # key: list of [val, timestamp]

    def set(self, key, val, timestamp):
        if key not in self.store:
            self.store[key] = []
        self.store[key].append([val, timestamp])

    def get(self, key, timestamp):
      res = ''
      values = self.store.get(key, []) # To handle the case where the key is not in the store

      # Binary search
      l, r = 0, len(values) - 1
      while l <= r:
        mid = (l + r) // 2
        if values[mid][1] <= timestamp:
          res = values[mid][0] # The closest value to the timestamp we've seen so far
          l = mid + 1
        else:
          r = mid - 1

      return res
```

---

### Single Element in a Sorted Array

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once. **Do it in O(logn) time and O(1) space**.

- Ex:

  - `nums = [1, 1, 2, 3, 3, 4, 4, 8, 8] --> 2`

- Explanation:
  - We can use **binary search** to find the single element
  - We will make use of that **"the array is sorted"**, We can check if the `mid` value is the single element by checking if the `mid` value is equal to the value before and after it
  - If the `mid` value is not the single element, then we want to know which side the single element is in
    - This can be figured out by also using another operation that **"All the elements are repeated twice, except for one element which appears exactly once"** -> So the length of the array will be **odd**
      ![single element in a sorted array](./img/single-element-in-sorted-arr.png)
    - So we will use the length of the left/right sides to determine which side the single element is in
      - If the length of the left side is odd, then the single element is in the left side
      - If the length of the right side is odd, then the single element is in the right side

```py
def singleNonDuplicate(nums):
    l, r = 0, len(nums) - 1

    while l <= r:
        m = l + (r - l) // 2

        if (
          (m - 1 < 0 or nums[m - 1] != nums[m]) and
          (m + 1 >= len(nums) or nums[m + 1] != nums[m])
        ):
            return nums[m]

        leftSize = m - 1 if nums[m - 1] == nums[m] else m
        if leftSize % 2:
            r = m - 1
        else:
            l = m + 1
```

---

### Find First and Last Position of Element in Sorted Array

Given an array of integers `nums` sorted in ascending order, find the starting and ending position of a given `target` value. If `target` is not found in the array, return `[-1, -1]`.

**You must write an algorithm with `O(log n)` runtime complexity.**

- Ex:

  - `nums = [5, 7, 7, 8, 8, 10], target = 8 --> [3, 4]`
  - `nums = [5, 7, 7, 8, 8, 10], target = 6 --> [-1, -1]`

- Explanation:
  - We can use **binary search** to find the starting and ending position of the target value
  - We will use **two binary searches** to find the starting and ending position
    - The first binary search will find the starting position
      - If the `mid` value is equal to the target value, then we will check if the `mid` value is the starting position by checking if the value before it is less than the `mid` value
    - The second binary search will find the ending position
      - If the `mid` value is equal to the target value, then we will check if the `mid` value is the ending position by checking if the value after it is greater than the `mid` value

```py
def searchRange(nums, target):
    def search(leftBias):
        """
        leftBias(boolean): True if we are looking for the left most index
        """
        l, r = 0, len(nums) - 1
        res = -1

        while l <= r:
            m = l + (r - l) // 2

            if nums[m] == target:
                res = m
                # If we are looking for the left most index, then we want to keep searching the left side
                if leftBias:
                    r = m - 1
                else:
                    l = m + 1
            elif nums[m] < target:
                l = m + 1
            else:
                r = m - 1

        return res

    return [search(True), search(False)]
```

---

## Sorting

### Insertion Sort List

Sort a linked list using insertion sort.

- Ex:

  - `head = [4, 2, 1, 3] --> [1, 2, 3, 4]`
  - `head = [-1, 5, 3, 4, 0] --> [-1, 0, 3, 4, 5]`

```py
def insertionSortList(head):
    dummy = ListNode()
    cur = head

    while cur:
        prev = dummy
        # find the position to insert the current node
        while prev.next and prev.next.val < cur.val:
            prev = prev.next

        # insert the current node
        nextNode = cur.next
        cur.next = prev.next
        prev.next = cur

        # move to the next node
        cur = nextNode

    return dummy.next
```

---

### Largest Number

Given a list of non-negative integers `nums`, arrange them such that they form the largest number.

> Note: The result may be very large, so you need to return a string instead of an integer.

- Ex:

  - `nums = [10, 2] --> '210'`
  - `nums = [3, 30, 34, 5, 9] --> '9534330'`

- Explanation:
  - We can sort the numbers by comparing the first digit of each number
  - If the first digit of `a` is bigger than the first digit of `b`, then `a` should come before `b`
  - If the first digit of `a` is smaller than the first digit of `b`, then `b` should come before `a`
  - If the first digit of `a` is equal to the first digit of `b`, then we need to compare the second digit of each number
  - We can do this by converting the numbers to strings and comparing the strings

```py
def largestNumber(nums):
    def compare(x, y):
        if int(str(x)+str(y)) > int(str(y)+str(x)):
            return -1
        else:
            return 1

    # sort the numbers using the compare function
    nums = sorted(nums, key=cmp_to_key(compare))
    return str(int(''.join(map(str, nums))))
```

---

### Merge Intervals

Given an array of intervals where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

- Ex:

  - `intervals = [[1, 3], [2, 6], [8, 10], [15, 18]] --> [[1, 6], [8, 10], [15, 18]]`
    ![merge intervals](./img/merge-intervals-1.png)

- Explanation:
  - We can sort the intervals by the `start` time
  - Then we can check if the current interval overlaps with the previous interval
    - If there is no overlap, then we can add the current interval to the merged intervals
    - If there is overlap, then we can merge the current interval with the previous interval

```py
def merge(intervals):
    # sort the intervals by the start time
    intervals.sort(key=lambda x: x[0])

    merged = []
    for interval in intervals:
        # check if interval does not overlap with the previous one
        if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            # otherwise, there is overlap, so we merge the current and previous interval (which is the last interval in the `merged` list)
            merged[-1][1] = max(merged[-1][1], interval[1])

    return merged

# another way

def merge(intervals):
    intervals.sort(key=lambda x: x[0])

    res = [intervals[0]]
    for interval in intervals[1:]:
        lastEnd = res[-1][1]

        # check if start of current interval is less than or equal to the end of the last interval
        if interval[0] <= lastEnd:
            res[-1][1] = max(lastEnd, interval[1])
        else:
            res.append(interval)

    return res
```

---

### Non-overlapping Intervals

Given an array of intervals `intervals` where `intervals[i] = [starti, endi]`, return the **minimum** number of intervals you need to remove to make the rest of the intervals non-overlapping.

- Ex:

  - `intervals = [[1, 2], [2, 3], [3, 4], [1, 3]] --> 1`
  - Explanation: [1, 3] can be removed and the rest of intervals are non-overlapping.

- Explanation:
  - We can sort the intervals by the `start` time
  - Then we can check if the current interval overlaps with the previous interval
    - If there is no overlap, then we can add the current interval to the merged intervals
    - If there is overlap, then we can merge the current interval with the previous interval

```py
def eraseOverlapIntervals(intervals):
    # sort the intervals by the start time
    intervals.sort(key=lambda x: x[0])

    res = 0
    prevEnd = intervals[0][1]
    for start, end in intervals[1:]:
        # overlap
        if start < prevEnd:
            res += 1
            prevEnd = min(prevEnd, end) # remove the interval with the larger end time
        # no overlap
        else:
            prevEnd = end

    return res
```

---

### Sort colors

Given an array `nums` with `n` objects colored red, white, or blue, sort them **in-place** so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

- Ex:

  - `nums = [2, 0, 2, 1, 1, 0] --> [0, 0, 1, 1, 2, 2]`

- Explanation:

  - We know that the array only contains 3 colors: red, white, and blue (represented by 0, 1, and 2) -> **Finite range**
    - So we can use `bucket sort` to sort the array in-place
  - We can also use the 3-way partitioning algorithm to sort the array in-place

- Solution 1: Bucket sort

  ```py
  def sortColors(nums):
      # count the number of 0s, 1s, and 2s
      buckets = [0] * (1+max(nums))
      for num in nums:
          buckets[num] += 1

      # overwrite the original array with the sorted array
      i = 0
      for j in range(len(buckets)):
          while buckets[j] > 0:
              nums[i] = j
              i += 1
              buckets[j] -= 1
  ```

- Solution 2: 3-way partitioning **(not fully understood ❌)**

  ```py
  def sortColors(nums):
      # 3-way partitioning
      low, mid, high = 0, 0, len(nums)-1

      while mid <= high:
          if nums[mid] == 0:
              nums[low], nums[mid] = nums[mid], nums[low]
              low += 1
              mid += 1
          elif nums[mid] == 1:
              mid += 1
          else:
              nums[mid], nums[high] = nums[high], nums[mid]
              high -= 1
  ```

- Solution 3: using `minHeap`

  ```py
  def sortColors(nums):
      heap = []
      for num in nums:
          heapq.heappush(heap, num)
      for i in range(len(nums)):
          nums[i] = heapq.heappop(heap)
  ```

---

### Median of Two Sorted Arrays

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return **the median** of the two sorted arrays.

**The overall run time complexity should be `O(log(m+n))`.**

- Ex:

  - `nums1 = [1, 3], nums2 = [2] --> 2.00000`
  - `nums1 = [1, 2], nums2 = [3, 4] --> 2.50000`
  - `nums1 = [0, 0], nums2 = [0, 0] --> 0.00000`
  - `nums1 = [], nums2 = [1] --> 1.00000`

- Explanation:
  - Here It requires solving it with `O(log(n+m))`, so we can't just merge the two arrays and find the median as we would do in `O(n+m)`
  - To do so, we can use the **binary search** algorithm
    - We will have 2 partitions, one in each array, and the `median` will be the average of the max of the left partition and the min of the right partition
      - if the total length of the two arrays is **odd**, then the median will be the middle element
        ![median of 2 sorted arrays](./img/median-of-2-sorted-arr-1.png)
      - if the total length of the two arrays is **even**, then the median will be the average of the middle 2 elements
        ![median of 2 sorted arrays](./img/median-of-2-sorted-arr-2.png)
  - The total number of elements in the left partition should be equal to the total number of elements in the right partition (half of the total number of elements in the two arrays)
    - `len(left_part) == len(right_part)`
    - `half` = `(len(nums1) + len(nums2) + 1) // 2`
  - we use the `half` to find the correct partition in the two arrays
    - `partitionX = (low + high) // 2`
      ![median of 2 sorted arrays](./img/median-of-2-sorted-arr-3.png)
    - `partitionY = half - partitionX`
      ![median of 2 sorted arrays](./img/median-of-2-sorted-arr-4.png)
  - Now We need to know if the `left` partition is correct or not
    - So, we will check if the overall left partition is less than the overall right partition
    - This is done by checking if the max of the left partition in `nums1` is less than the min of the right partition in `nums2` and vice versa
      ![median of 2 sorted arrays](./img/median-of-2-sorted-arr-5.png)
      - `maxLeftX <= minRightY`
      - `maxLeftY <= minRightX`
  - If the left partition is correct, then we can return the median
    ![median of 2 sorted arrays](./img/median-of-2-sorted-arr-6.png)
    - if the total length of the two arrays is **odd**, then the median will be the middle element which is the **minimum** of the `2 mins` of the right partitions
      ![median of 2 sorted arrays](./img/median-of-2-sorted-arr-7.png)
    - if the total length of the two arrays is **even**, then the median will be the average of the middle 2 elements which are:
      ![median of 2 sorted arrays](./img/median-of-2-sorted-arr-10.png)
      - the **maximum** of the `2 maxs` of the left partitions
      - the **minimum** of the `2 mins` of the right partitions
  - If the left partition is not correct, then we need to move the `low` or `high` pointer to the correct position
    - if `maxLeftX > minRightY`, then we need to move `high` pointer to the left
    - if `maxLeftY > minRightX`, then we need to move `low` pointer to the right
      ![median of 2 sorted arrays](./img/median-of-2-sorted-arr-8.png)
      ![median of 2 sorted arrays](./img/median-of-2-sorted-arr-9.png)

```py
def findMedianSortedArrays(nums1, nums2):
    A, B = nums1, nums2
    total = len(nums1) + len(nums2)
    half = total // 2

    # make sure that A is the smaller array
    if len(A) > len(B):
        A, B = B, A

    # set the low and high pointers
    low, high = 0, len(A) - 1

    # loop until we find the correct partition
    while True:
        # get the partition of A
        i = (low + high) // 2
        # get the partition of B
        j = half - i - 2 # -2 because we start from 0

        # get the elements of the left and right partitions
        Aleft = A[i] if i >= 0 else float('-inf')
        Aright = A[i + 1] if (i + 1) < len(A) else float('inf')
        Bleft = B[j] if j >= 0 else float('-inf')
        Bright = B[j + 1] if (j + 1) < len(B) else float('inf')

        # check if the left partition is correct
        if Aleft <= Bright and Bleft <= Aright:
            # check if the total length is odd or even
            if total % 2:
                # return the median
                return min(Aright, Bright)
            else:
                # return the median
                return (max(Aleft, Bleft) + min(Aright, Bright)) / 2
        else:
            # if the max of the left partition in A is greater than the min of the right partition in B
            if Aleft > Bright:
                # move the high pointer to the left
                high = i - 1
            # if the max of the left partition in B is greater than the min of the right partition in A
            else:
                # move the low pointer to the right
                low = i + 1
```

---

### Squares of a Sorted Array

Given an integer array `nums` sorted in **non-decreasing** order, return an array of **the squares of each number sorted in non-decreasing order**.

- EX: `[-4,-1,0,3,10] --> [0,1,9,16,100]`

- Explanation:
  - We can solve it normally in `O(nlogn)` time by squaring each element and then sorting the array
  - But we can do better in `O(n)` time by using **2 pointers**
    ![sort squares](./img/sort-squares.jpg)
    - This is done by using 2 pointers, one at the start of the array and one at the end of the array
    - this is because the array is sorted in **non-decreasing** order so we can get the largest element by comparing the absolute values of the 2 pointers (both sides)
    - we can then square the largest element and add it to the result array using the index of the responding pointer

```py
def sortedSquares(nums):
    l, r = 0, len(nums) - 1
    result = [0] * len(nums)
    # set the index of the result array
    index = len(nums) - 1

    # loop until the left pointer is greater than the right pointer
    while l <= r:
        left_abs, right_abs = abs(nums[l]), abs(nums[r])

        # check if the left absolute value is greater than the right absolute value and change the result array accordingly
        if left_abs > right_abs:
            result[index] = left_abs ** 2
            l += 1
        else:
            result[index] = right_abs ** 2
            r -= 1

        # move the index pointer to the left
        index -= 1

    return result
```

---
