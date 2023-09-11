# INDEX

- [INDEX](#index)
  - [Remove Element](#remove-element)
  - [Replace Elements with Greatest Element on Right Side](#replace-elements-with-greatest-element-on-right-side)
  - [Array chunk (split array into smaller chunks)](#array-chunk-split-array-into-smaller-chunks)
  - [Minimum Absolute Difference](#minimum-absolute-difference)
  - [Two pointers](#two-pointers)
    - [Two Sum II](#two-sum-ii)
    - [Three Sum (Triplet Sum to Zero)](#three-sum-triplet-sum-to-zero)
    - [3Sum Closest](#3sum-closest)
    - [3Sum Smaller](#3sum-smaller)
    - [4 Sum](#4-sum)
    - [Pair with Target Sum](#pair-with-target-sum)
    - [Remove Duplicates From Sorted Array](#remove-duplicates-from-sorted-array)
    - [Remove Duplicates from Sorted Array II](#remove-duplicates-from-sorted-array-ii)
    - [Container with most water](#container-with-most-water)
    - [Squares of a Sorted Array](#squares-of-a-sorted-array)
    - [Shortest Unsorted Continuous Subarray](#shortest-unsorted-continuous-subarray)
  - [Sliding Window](#sliding-window)
    - [Average of All Contiguous Subarrays of Size K](#average-of-all-contiguous-subarrays-of-size-k)
    - [Minimum Size Subarray Sum](#minimum-size-subarray-sum)
    - [Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold](#number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold)
    - [Fruit Into Baskets](#fruit-into-baskets)
    - [Longest Subarray of 1's After Deleting One Element](#longest-subarray-of-1s-after-deleting-one-element)
    - [Max Consecutive Ones III](#max-consecutive-ones-iii)
    - [Sliding Window Maximum](#sliding-window-maximum)
  - [Prefix / Prefix Sum](#prefix--prefix-sum)
    - [Range Sum Query - Immutable](#range-sum-query---immutable)
    - [Range Sum Query 2D - Immutable](#range-sum-query-2d---immutable)
    - [Product of Array Except Self](#product-of-array-except-self)
    - [Continuous SubArray Sum](#continuous-subarray-sum)
    - [Subarray Sum Equals K](#subarray-sum-equals-k)
    - [Find Pivot Index](#find-pivot-index)
  - [Kadane's Algorithm](#kadanes-algorithm)
    - [Maximum Subarray](#maximum-subarray)
    - [Maximum Sum Circular Subarray](#maximum-sum-circular-subarray)
    - [Longest Turbulent Subarray](#longest-turbulent-subarray)
  - [Fast and Slow Pointers](#fast-and-slow-pointers)
    - [Find the Duplicate Number](#find-the-duplicate-number)
  - [Trapping Rain Water](#trapping-rain-water)
    - [Solution 1: Extra memory used (O(n) space)](#solution-1-extra-memory-used-on-space)
    - [Solution 2: Two pointers Less memory used (O(1) space)](#solution-2-two-pointers-less-memory-used-o1-space)
  - [Merge Intervals Pattern](#merge-intervals-pattern)
    - [Merge Intervals](#merge-intervals)
    - [Insert Interval](#insert-interval)
    - [Interval List Intersections](#interval-list-intersections)
    - [Non-overlapping Intervals](#non-overlapping-intervals)
    - [Meeting Rooms](#meeting-rooms)
    - [Meeting Rooms II](#meeting-rooms-ii)
    - [Maximum CPU Load](#maximum-cpu-load)
    - [Employee Free Time](#employee-free-time)
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

## Minimum Absolute Difference

Given an array of distinct integers `arr`, find all pairs of elements with the minimum absolute difference of any two elements. Return a list of pairs in ascending order(with respect to pairs), each pair `[a, b]` follows

- `a, b` are from `arr`
- `a < b`
- `b - a` equals to the minimum absolute difference of any two elements in `arr`

- Ex:

  - `arr = [4, 2, 1, 3], --> [[1, 2], [2, 3], [3, 4]]`

```py
def minimumAbsDifference(arr):
    arr.sort()
    minDiff = float('inf')
    res = []

    for i in range(1, len(arr)):
        diff = arr[i] - arr[i - 1]
        if diff < minDiff:
            minDiff = diff
            res = [[arr[i - 1], arr[i]]] # start over
        elif diff == minDiff:
            res.append([arr[i - 1], arr[i]]) # add to the result

    return res
```

---

## Two pointers

- Notes:
  - for `N sum` problems (2sum, 3sum, 4sum, etc...) we can use a `helper` function for searching to make the code cleaner

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

### Three Sum (Triplet Sum to Zero)

Given an array `nums` of n integers, are there elements a, b, c in `nums` such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

- EX: `nums = [-1, 0, 1, 2, -1, -4]` --> `[[-1, 0, 1], [-1, -1, 2]]`
- **Steps:**
  ![3sum](./img/3sum.png)

  - sort the input array first. Use two pointers to find the third element that sums to `zero`, instead of iterating over all possible pairs of elements.
  - Avoid generating duplicate triplets by skipping over duplicates in the input array and avoiding identical pairs of `(i, j, k)` values.
    - or we can use a `set` to avoid duplicates

```py
# Time: O(n.log(n)) + O(n^2) = O(n^2)
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

- **Modification:** using a `helper` function

  ```py
  def three_sum(nums):
      nums.sort()
      result = []

      for i in range(len(nums)):
          # if the current value is the same as the previous value, skip it, because we've already tried it (To avoid duplicates)
          if i > 0 and nums[i] == nums[i-1]:
              continue

          # find all pairs that sum to -nums[i]
          find_two_sum(nums, -nums[i], i+1, result)

      return result

  def find_two_sum(nums, target, left, result):
      right = len(nums) - 1

      while left < right:
          total = nums[left] + nums[right]
          if total < target:
              left += 1
          elif total > target:
              right -= 1
          else:
              result.append([-target, nums[left], nums[right]])
              left += 1
              right -= 1
              # skip duplicates
              while left < right and nums[left] == nums[left-1]:
                  left += 1
              while left < right and nums[right] == nums[right+1]:
                  right -= 1
  ```

---

### 3Sum Closest

Given an array `nums` of `n` integers and an integer `target`, find three integers in `nums` such that the sum is **closest** to `target`. Return the sum of the three integers.

You may assume that each input would have exactly one solution.

- EX: `nums = [-1, 2, 1, -4], target = 1` --> `2` because `(-1 + 2 + 1) = 2`

- Explanation:

  - it's very similar to the [3Sum](#three-sum-triplet-sum-to-zero) problem, but instead of checking if the `sum` is equal to `zero`, we check if the `sum` is equal to the `target`
  - also, we need to keep track of the `closest` value to the `target` and update it if we find a closer value

    - to do that, we can use the `abs()` function to get the absolute value of the difference between the `sum` and the `target`

      ```py
      if abs(total - target) < abs(closest - target):
                  closest = total
      ```

```py
# Time: O(n^2)
def three_sum_closest(nums, target):
    nums.sort()
    closest = float('inf')

    for i in range(len(nums)):
        if i > 0 and nums[i] == nums[i-1]:
            continue

        left, right = i+1, len(nums)-1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total < target:
                left += 1
            elif total > target:
                right -= 1
            else:
                return total

            # update the closest value
            if abs(total - target) < abs(closest - target):
                closest = total
    return closest
```

---

### 3Sum Smaller

Given an array `nums` of `n` integers and an integer `target`, find the number of index triplets `i`, `j`, `k` with `0 <= i < j < k < n` that satisfy the condition `nums[i] + nums[j] + nums[k] < target`.

- EX: `nums = [-2, 0, 1, 3], target = 2` --> `2`

  - because `(-2 + 0 + 1) < 2` and `(-2 + 0 + 3) < 2`

- Explanation:

  - it's very similar to the [3Sum](#three-sum-triplet-sum-to-zero) problem, but instead of checking if the `sum` is equal to `zero`, we check if the `sum` is less than the `target`
  - also, we need to keep track of the `count` of the triplets that satisfy the condition

```py
# Time: O(n^2)
def three_sum_smaller(nums, target):
    nums.sort()
    count = 0

    for i in range(len(nums)):
        if i > 0 and nums[i] == nums[i-1]:
            continue

        left, right = i+1, len(nums)-1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total < target:
                count += right - left
                left += 1
            else:
                right -= 1
    return count
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

### Pair with Target Sum

Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Same as [Two Sum II](#two-sum-ii)

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

### Remove Duplicates from Sorted Array II

Given a sorted array `nums`, remove the duplicates **in-place** such that duplicates appeared at most **twice** and return the new length.

return the new length.

- Ex:

  - `nums = [1,1,1,2,2,3]` -> `5` -> `(nums = [1,1,2,2,3,_,_])`

- Explanation:
  - we can use a **two pointers** pattern
  - we can use the first pointer to keep track of the `last unique` element in the array, and the second pointer to iterate over the array and check if the current element is equal to the last unique element
    - if it is, then we increment the `count` of the current element
    - if it is not, then we reset the `count` of the current element to `1`
  - if the count is less than or equal to `2`, then we increment the `last unique` index **and then** update the `last unique` element

```py
def removeDuplicates(nums):
    if len(nums) == 0: return 0

    last_unique = 0
    count = 1 # count of the current element

    for i in range(1, len(nums)):
        # if the current element is equal to the last unique element, increment the count
        if nums[i] == nums[last_unique]:
            count += 1
        # if the current element is not equal to the last unique element, reset the count to 1
        else:
            count = 1

        # if the count is less than or equal to 2, increment the last unique index and then update the last unique element
        if count <= 2:
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

### Squares of a Sorted Array

Given an integer array `nums` sorted in **non-decreasing** order, return an array of **the squares of each number sorted in non-decreasing order**.

- EX: `[-4,-1,0,3,10] --> [0,1,9,16,100]`

- Explanation:
  - We can solve it normally in `O(nlogn)` time by squaring each element and then sorting the array
  - But we can do better in `O(n)` time by using **2 pointers**
    ![sort squares](./img/sort-squares.jpg)
    - This is done by using 2 pointers, one at the start of the array and one at the end of the array
    - Since the numbers at both the ends can give us the largest square, an alternate approach could be to use two pointers starting at both the ends of the input array. At any step, whichever pointer gives us the bigger square we add it to the result array and move to the next/previous number according to the pointer.
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

### Shortest Unsorted Continuous Subarray

Given an integer array `nums`, you need to find one **continuous subarray** that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

Return the **shortest** such subarray and output its length.

- EX: `nums = [2,6,4,8,10,9,15]` --> `5`

  - because the subarray `[6,4,8,10,9]` needs to be sorted in ascending order to make the whole array sorted in ascending order.

- Explanation
  ![shortest unsorted continuous subarray](./img/shortest-unsorted-continuous-subarray-1.png)
  - We know, once an array is sorted, the smallest element is at the beginning and the largest element is at the end of the array.
    - So if we start from the beginning of the array to find the first element which is out of sorting order i.e., (which is **smaller than its previous element**), and similarly from the end of array to find the first element (which is **bigger than its previous element**)
    - will sorting the subarray between these two numbers result in the whole array being sorted?
      - No, because there could be some intermediate numbers that are bigger than the number in the beginning of the array and smaller than the number at the end of the array.
      - We will need to include all such intermediate numbers while trying to find the smallest subarray to be sorted.
      - we do so by getting the `min` and `max` of the subarray
        - then we extend the subarray to include any number which is bigger than the minimum of the subarray
        - and extend the subarray to include any number which is smaller than the maximum of the subarray
        - this way we can include all the numbers that are out of sorting order
  - Time complexity: `O(n)`

```py
def find_unsorted_subarray(nums):
    # find the first number out of sorting order from the beginning
    i = 0
    while i < len(nums) - 1 and nums[i] <= nums[i+1]:
        i += 1

    # if the array is already sorted
    if i == len(nums) - 1:
        return 0

    # find the first number out of sorting order from the end
    j = len(nums) - 1
    while j > 0 and nums[j] >= nums[j-1]:
        j -= 1

    # find the maximum and minimum of the subarray
    subarray_max = max(nums[i:j+1])
    subarray_min = min(nums[i:j+1])

    # extend the subarray to include any number which is bigger than the minimum of the subarray
    while i > 0 and nums[i-1] > subarray_min:
        i -= 1
    # extend the subarray to include any number which is smaller than the maximum of the subarray
    while j < len(nums) - 1 and nums[j+1] < subarray_max:
        j += 1

    return j - i + 1
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

### Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

Given an array of integers `arr` and two integers `k` and `threshold`. Return the number of sub-arrays of size `k` and average greater than or equal to `threshold`.

```py
def num_of_subarrays(arr, k, threshold):
    result = 0
    windowSum = 0
    windowStart = 0

    for windowEnd in range(len(arr)):
        windowSum += arr[windowEnd]

        if windowEnd >= k - 1:
            if windowSum / k >= threshold:
                result += 1
            windowSum -= arr[windowStart]
            windowStart += 1

    return result
```

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

## Prefix / Prefix Sum

It's based on that the `prefix` of an array is the sum of the starting window of the array (first element to the current element). and then we can get the sum of any subarray by subtracting the prefix of the element before the start of the subarray from the prefix of the last element of the subarray.

- In English: an array where each `index` is the **sum** of all elements from `0` up to and including that `index` in the original array.

![prefix-sum](./img/prefix-sum-1.png)

- To calculate the prefix sum for a given range `[i, j]`, we can use the following formula: `prefix[j] - prefix[i-1]`
- It must start from the **beginning** of the array, and it must be continuous.

### Range Sum Query - Immutable

Given an integer array `nums`, find the sum of the elements between indices `left` and `right` inclusive, where `(left <= right)`

- EX: `['NumArray', 'sumRange', 'sumRange', 'sumRange'], [[[1, 2, 3, 4, 5]], [0, 2], [2, 4], [0, 4]]` --> `[null, 6, 12, 15]`

- Explanation:
  - This is a **prefix sum** problem, we can use a `prefix` array to store the sum of the first `i` elements of the array, and then we can get the sum of any `subarray` by subtracting the `prefix` of the element before the `start` of the subarray (`left`) from the `prefix` of the last element of the subarray (`right`).
  - We do this because we want to remove the sum of the elements before the `start` of the subarray from the sum of the elements before the `end` of the subarray, so we can get the sum of the subarray.
    - We do it by subtracting the `prefix` of the element before the `start` of the subarray from the `prefix` of the last element of the subarray.
    - because the `prefix` of the element before the `start` of the subarray contains the sum of the elements before the `start` of the subarray, and the `prefix` of the last element of the subarray contains the sum of the elements before the `end` of the subarray.
      ![prefix-sum](./img/range-sum-query-0.png)

```py
class NumArray:
    def __init__(self, nums):
        # we add an extra element to the prefix array to make it easier to calculate the sum of the first element
        self.prefix = [0] * (len(nums) + 1)
        for i in range(len(nums)):
            self.prefix[i+1] = self.prefix[i] + nums[i]

    def sumRange(self, left, right):
        return self.prefix[right+1] - self.prefix[left]
```

---

### Range Sum Query 2D - Immutable

Given a 2D matrix `matrix`, handle multiple queries of the following type:

- Calculate the sum of the elements of `matrix` inside the rectangle defined by its **upper left corner** `(row1, col1)` and **lower right corner** `(row2, col2)`.
- Implement the NumMatrix class:

  - `NumMatrix(int[][] matrix)` Initializes the object with the integer matrix `matrix`.
  - `int sumRegion(int row1, int col1, int row2, int col2)` Returns the sum of the elements of `matrix` inside the rectangle defined by its **upper left corner** `(row1, col1)` and **lower right corner** `(row2, col2)`.

![prefix-sum-2d](./img/range-sum-query-1.jpeg)
![prefix-sum-2d](./img/range-sum-query-2.png)
![prefix-sum-2d](./img/range-sum-query-3.png)

```py
class NumMatrix:
    def __init__(self, matrix):
        if not matrix or not matrix[0]: return
        self.prefix = [[0] * (len(matrix[0]) + 1) for _ in range(len(matrix) + 1)]
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                self.prefix[i+1][j+1] = self.prefix[i+1][j] + self.prefix[i][j+1] - self.prefix[i][j] + matrix[i][j]

    def sumRegion(self, row1, col1, row2, col2):
        top_left = self.prefix[row1][col1]
        top_right = self.prefix[row1][col2+1]
        bottom_left = self.prefix[row2+1][col1]
        bottom_right = self.prefix[row2+1][col2+1]

        return bottom_right - bottom_left - top_right + top_left
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

### Continuous SubArray Sum

Given an integer array `nums` and an integer `k`, return `true` if `nums` has a continuous subarray of size at least two whose elements sum up to a multiple of `k`, or `false` otherwise.

An integer `x` is a multiple of `k` if there exists an integer `n` such that `x = n * k`. `0` is **always** a multiple of `k`.

- EX: `nums = [23, 2, 4, 6, 7], k = 6` --> `true` because `[2, 4]` is a continuous subarray of size 2 and sums up to 6 which is a multiple of 6.

- Explanation
  - the brute force solution is to loop through the array and check every possible subarray, but that would be `O(n^2)` time complexity
  - But we can solve it in `O(n)` time complexity using a **prefix sum** and a dictionary to store the `remainder` and its ending `index`:
    - Here, we want to use `prefix sum` because we want to know the sum of the elements between two indices **(range sum)**
      - range sum = `prefix_sum[j] - prefix_sum[i-1]`
    - The `remainder` will be the indicator of whether the sum of the elements between two indices is a multiple of `k`
      - If the `remainder` is in the dictionary, that means we have seen it before, and the difference between the current index and the index of the `remainder` is the size of the subarray **because the sum of the elements between the two indices is a multiple of `k`**
      - and if the difference is greater than 1, that means there is at least one element between the two indices, and the sum of the elements between the two indices is a multiple of `k`
    - If the `remainder` is in the dictionary, check if the difference between the current index and the index of the `remainder` is greater than `1`
      ![continuous-subarray-sum](./img/continuous-subarray-sum.png)
      - if so, return `True`
    - If the `remainder` is not in the dictionary, that means we have not seen it before, so we add it to the dictionary
    - **Note:** We initialize the dictionary with `0: -1` because the sum of the first element is 0 and the size of the subarray must be at least `2` and if the first element is a multiple of `k`, we will get index as `0` and `0 - (-1) = 1` which is not greater than `1`, so we need to initialize the dictionary with `0: -1` to avoid this case
      - So this will ensure that we won't return `true` if the first element is a multiple of `k`

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

### Subarray Sum Equals K

Given an array of integers `nums` and an integer `k`, return the total number of continuous subarrays whose sum equals to `k`.

- EX: `nums = [1, 1, 1], k = 2` --> `2` because `[1, 1]` and `[1, 1]` are the only two subarrays whose sum equals to `k`

- Explanation
  - we use `prefix sum` technique to solve this problem in `O(n)` time complexity
  - we create a dictionary to store the `prefix sum` and its `count`
    - we initialize the dictionary with `0: 1` because the sum of the first element is 0 and the size of the subarray must be at least `1`
  - We use formula `sum - k` to get the value we want to remove from the subarray's sum to get a sum of `k`
    ![subarray-sum-equals-k](./img/subarray-sum-equals-k-1.png)
    - If the difference between the sum and `k` is in the dictionary, add the frequency of the difference to the count, because that means we have seen the difference before, and the difference between the current index and the index of the difference is the size of the subarray **because the sum of the elements between the two indices is `k`**
      - and if the difference is greater than `1`, that means there is at least one element between the two indices, and the sum of the elements between the two indices is `k`
    - If the sum is not in the dictionary, add it to the dictionary

```py
def subarray_sum(nums, k):
    count = 0
    sum = 0
    # Create a dictionary to store the prefix sum and its count
    dic = {0: 1} # Initialize the dictionary with 0: 1 because the sum of the first element is 0 and the size of the subarray must be at least 1

    for i in range(len(nums)):
        sum += nums[i]
        # If the difference between the sum and k is in the dictionary, add the frequency of the difference to the count
        if sum - k in dic:
            count += dic[sum - k]
        # If the sum is not in the dictionary, add it to the dictionary
        dic[sum] = dic.get(sum, 0) + 1

    return count
```

---

### Find Pivot Index

Given an array of integers `nums`, calculate the **pivot index** of this array.

```py
def pivot_index(nums):
    total = sum(nums)
    left_sum = 0

    for i in range(len(nums)):
        right_sum = total - left_sum - nums[i]
        if left_sum == right_sum:
            return i
        # Add the current element to the left sum
        left_sum += nums[i]

    return -1
```

---

## Kadane's Algorithm

Kadane's algorithm is used to find the **maximum sum** of a contiguous subarray within an array of numbers in `O(n)` time.

![kadane's-algorithm](./img/kadane-algorithm.png)

- It's based on the idea that a positive contiguous segment (`max_ending_here`) is added to the previous contiguous segment (`max_so_far`) only if the previous contiguous segment is `positive`. Otherwise, it is better to start a new contiguous segment from the current element because adding the current element to the previous contiguous segment will only decrease the sum.
- It's very common to `sliding window` and `2 pointers` problems.

### Maximum Subarray

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

- EX: `nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]` --> `6`

  - Explanation: `[4, -1, 2, 1]` has the largest sum = `6`

- **Explanation:**
  - Instead of using nested loops, we can use Kadane's algorithm to find the maximum sum of a contiguous subarray within an array of numbers in `O(n)` time.
  - We can use a variable `max_sum` to store the maximum sum of the subarray, and another variable `current_sum` to store the current sum of the subarray.
  - We iterate over the array and do the following:
    - If the `current_sum` is less than `0`, we reset it to `0` **because we don't want to add a negative number to the next element in the array**.
    - We then add the current element to the `current_sum`.
    - We then check if the `current_sum` is greater than the `max_sum`, and if it is, we set the `max_sum` to the `current_sum`.

```py
def max_subarray(nums):
    max_sum = nums[0]
    current_sum = 0

    for num in nums:
        if current_sum < 0:
            current_sum = 0
        current_sum += num
        max_sum = max(max_sum, current_sum)

    return max_sum
```

---

### Maximum Sum Circular Subarray

> Watch neetcode'∂s video ⚠️

Given a circular integer array `nums` of length `n`, return the maximum possible sum of a non-empty subarray of `nums`.

A circular array means the end of the array connects to the beginning of the array. Formally, the next element of `nums[i]` is `nums[(i + 1) % n]` and the previous element of `nums[i]` is `nums[(i - 1 + n) % n]`.

- EX: `nums = [1, -2, 3, -2]` --> `3`

  - Explanation: `[3]` has the maximum sum `3`

- **Explanation:**
  - Same as the previous problem, but we need to consider the case where the maximum sum is circular.
    ![maximum-sum-circular-subarray](./img/maximum-sum-circular-subarray.png)
  - This is done by finding the `minimum` sum of a subarray and subtracting it from the total sum of the array.
    - The minimum sum of a subarray is found by using Kadane's algorithm on the negative of the array.
    - It's used to find the maximum sum of a subarray that wraps around the array.

```py
def maxSubarraySumCircular(nums):
    max_sum = nums[0]
    min_sum = nums[0]
    current_max = 0
    current_min = 0
    total_sum = 0

    for num in nums:
        current_max = max(current_max + num, num)
        max_sum = max(max_sum, current_max)

        current_min = min(current_min + num, num)
        min_sum = min(min_sum, current_min)

        total_sum += num

    if total_sum == min_sum:
        return max_sum

    return max(max_sum, total_sum - min_sum)
```

---

### Longest Turbulent Subarray

> Watch neetcode'∂s video ⚠️

Given an integer array `arr`, return the length of a maximum size turbulent subarray of `arr`.

> A subarray is **turbulent** if the comparison sign flips between each adjacent pair of elements in the subarray.
> More formally, a subarray `[arr[i], arr[i + 1], ..., arr[j]]` of `arr` is said to be turbulent if and only if:
>
> - For `i <= k < j`: `arr[k] > arr[k + 1]` when `k` is odd, and `arr[k] < arr[k + 1]` when `k` is even.
> - Or, for `i <= k < j`: `arr[k] > arr[k + 1]` when `k` is even, and `arr[k] < arr[k + 1]` when `k` is odd.

- EX: `arr = [9, 4, 2, 10, 7, 8, 8, 1, 9]` --> `5`

  - Explanation: `[4, 2, 10, 7, 8]` is the longest turbulent subarray.

- **Explanation:**
  - We can use Kadane's algorithm to find the longest turbulent subarray.
  - We can use two pointers `l` and `r` to keep track of the start and end of the subarray.
  - We can use a variable `res` to keep track of the longest turbulent subarray.
  - We can use a variable `prev` to keep track of the previous comparison sign.
    - If the previous comparison sign is `>` and the current comparison sign is `<`, we increment `r` and update `res`. because the subarray is still turbulent.
    - If the previous comparison sign is `<` and the current comparison sign is `>`, we increment `r` and update `res`. because the subarray is still turbulent.
    - If the previous comparison sign is `>` and the current comparison sign is `>`, we reset `l` and `r` to `r - 1` because the subarray is no longer turbulent.

```py
def maxTurbulenceSize(arr):
    l, r = 0, 1
    res, prev = 1, ""

    while r < len(arr):
        if arr[r - 1] > arr[r] and prev != ">":
            res = max(res, r - l + 1)
            r += 1
            prev = ">"
        elif arr[r - 1] < arr[r] and prev != "<":
            res = max(res, r - l + 1)
            r += 1
            prev = "<"
        else:
            r = r + 1 if arr[r - 1] == arr[r] else r
            l = r - 1
            prev = ""

    return res
```

---

## Fast and Slow Pointers

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

- **Solution 2:** using **Floyd's Cycle Detection** -> `O(n)` time and `O(1)` space ✅

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

- **Solution 3:** using **cyclic sort**, [here](./10-PS-Sorting-Searching.md#find-the-duplicate-number)

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

## Merge Intervals Pattern

It's a pattern that can be used to solve problems that involve overlapping intervals, where we need to find the overlapping intervals or merge them.

- if we have 2 intervals `a` and `b`, there are 6 different ways they can relate to each other:
  ![merge intervals](./img/merge-intervals-0.png)

### Merge Intervals

Given an array of intervals where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

![merge intervals](./img/merge-intervals-2.svg)

- Ex:

  - `intervals = [[1, 3], [2, 6], [8, 10], [15, 18]] --> [[1, 6], [8, 10], [15, 18]]`
    ![merge intervals](./img/merge-intervals-1.png)

- Explanation:

  - goal is to merge the overlapping intervals like this:
    ![merge intervals](./img/merge-intervals-3.svg)
  - We can sort the intervals by the `start` time
  - Then we can check if the current interval overlaps with the previous interval

    - If there is **no overlap**, then we can add the current interval to the merged intervals
    - If there is **overlap**, then we can merge the current interval with the previous interval

      ```py
      c.start = a.start
      c.end = max(a.end, b.end)
      ```

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


# -----------------------------another way-----------------------------

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

### Insert Interval

Given a set of `non-overlapping` intervals, insert a new interval into the intervals. such that the intervals are still sorted. and no overlapping intervals exist. (merge if necessary)

- Ex:

  - input: `intervals = [[1, 3], [6, 9]], newInterval = [2, 5]`
  - output: `[[1, 5], [6, 9]]`

- Explanation:
  - We need to first find the position of the new interval in the intervals (we need to skip the intervals that come before the new interval)
  - Once we find the position of the new interval, we can merge it with the intervals that overlap with it
  - Finally, we can add the new interval to the merged intervals and add the rest of the intervals that come after the new interval

```py
def insert(intervals, newInterval):
    merged = []
    i = 0

    # add all the intervals that come before the new interval
    while i < len(intervals) and intervals[i][1] < newInterval[0]:
        merged.append(intervals[i])
        i += 1

    # merge all the intervals that overlap with the new interval
    while i < len(intervals) and intervals[i][0] <= newInterval[1]:
        newInterval[0] = min(newInterval[0], intervals[i][0])
        newInterval[1] = max(newInterval[1], intervals[i][1])
        i += 1

    # add the new interval
    merged.append(newInterval)

    # add all the intervals that come after the new interval
    while i < len(intervals):
        merged.append(intervals[i])
        i += 1

    return merged
```

---

### Interval List Intersections

Given two lists of `closed` intervals, each list of intervals is pairwise disjoint and in sorted order. Return the intersection of these two interval lists.

The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of `[1, 3]` and `[2, 4]` is `[2, 3]`.

![interval list intersections](./img/interval-list-intersections-1.png)

- Ex:

  - input: `firstList = [[0, 2], [5, 10], [13, 23], [24, 25]], secondList = [[1, 5], [8, 12], [15, 24], [25, 26]]`
  - output: `[[1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25]]`

```py
# O(n + m) time and O(n + m) space
def intervalIntersection(firstList, secondList):
    res = []
    i, j = 0, 0
    start, end = 0, 1

    while i < len(firstList) and j < len(secondList):
        # check if the intervals overlap
        if (
          firstList[i][start] <= secondList[j][end] and
          firstList[i][end] >= secondList[j][start]
        ):
            # get the intersection
            intersection = [
              max(firstList[i][start], secondList[j][start]),
              min(firstList[i][end], secondList[j][end])
            ]
            res.append(intersection)

        # move to the next interval that comes first
        if firstList[i][end] < secondList[j][end]:
            i += 1
        else:
            j += 1

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

### Meeting Rooms

Given an array of meeting time intervals `intervals` where `intervals[i] = [starti, endi]`, determine if a person could attend all meetings.

- EX: `intervals = [[0,30],[5,10],[15,20]]` --> `false`

- Solution : Sort and compare

- **Steps**:

  1. Sort the intervals **by the start time**
  2. Loop through the sorted intervals and check if the `end` time of the `current` interval is greater than the `start` time of the `next` interval. If it is, then return `false`.
     ![meeting rooms](./img/meeting-rooms-2.png)
  3. If the loop finishes, return `true`.

```py
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end

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

Given an array of meeting time intervals `intervals` where `intervals[i] = [starti, endi]`, return the **minimum** number of conference rooms required to hold all
the meetings.

- EX: `intervals = [[4,5], [2,3], [2,4], [3,5]]` --> `2`
  ![meeting rooms](./img/meeting-rooms-1.svg)

- Explanation:

  - We need to find the overlapping meetings, and keep track of the mutual exclusiveness of the overlapping meetings.

- **Solution 1: using `pointers`**

  1. use two arrays to keep track of the `start` times and `end` times separately.
  2. then sort the two arrays and use two pointers to iterate over them.
  3. We start with the first `start` time and the first `end` time. If the `start` time is less than the `end` time, we need to allocate a new room and move the `start` pointer forward.

     - we iterate over the `start` times array and compare each `start` time with the current `end` time. If the `start` time is less than the `end` time, we need to allocate a new room and move the `start` pointer forward.
     - If the `start` time is greater than or equal to the `end` time, we can reuse the room and move both pointers forward

  4. Finally, we return the number of rooms allocated, which represents the minimum number of meeting rooms required to schedule all the meetings.

  ```py
  class Interval(object):
      def __init__(self, start, end):
          self.start = start
          self.end = end

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

- **Solution 2: using `minHeap`**

  1. Sort all the meetings on their `start` time.
  2. Create a `minHeap` to store all the active meetings. This min-heap will also be used to find the active meeting with the **smallest** `end` time.
  3. Since the `minHeap` contains all the active meetings, so before scheduling `m1` we can remove all meetings from the heap that have ended before `m1`, i.e., remove all meetings from the `heap` that have an `end` time smaller than or equal to the `start` time of `m1`.
  4. The `heap` will always have all the overlapping meetings, so we will need rooms for all of them. Keep a counter to remember the maximum size of the heap at any time which will be the minimum number of rooms needed.

  ```py
  def minMeetingRooms(intervals):
      if not intervals:
          return 0

      # sort the intervals by the start time
      intervals.sort(key=lambda x: x.start)

      # initialize a minHeap to store the active meetings
      minHeap = []
      # add the first meeting to the minHeap
      heapq.heappush(minHeap, intervals[0].end)

      # loop through the remaining meetings
      for i in range(1, len(intervals)):
          # check if the start time of the current meeting is greater than or equal to the end time of the meeting at the top of the minHeap
          if intervals[i].start >= minHeap[0]:
              # remove the meeting at the top of the minHeap
              heapq.heappop(minHeap)

          # add the current meeting to the minHeap
          heapq.heappush(minHeap, intervals[i].end)

      # the size of the minHeap at the end will be the minimum number of rooms needed
      return len(minHeap)
  ```

---

### Maximum CPU Load

We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running. Our goal is to find the **maximum CPU load** at any time if all the jobs are running on the same machine.

- EX: `jobs = [[1,4,3], [2,5,4], [7,9,6]]` --> `7`
  - explanation: Since `[1,4,3]` and `[2,5,4]` overlap, their maximum CPU load `(3+4=7)` will be when both the jobs are running at the same time i.e., during the time interval `(2,4)`.

```py
class Job:
    def __init__(self, start, end, cpu_load):
        self.start = start
        self.end = end
        self.cpu_load = cpu_load

def find_max_cpu_load(jobs):
    # sort the jobs by the start time
    jobs.sort(key=lambda x: x.start)

    max_cpu_load = 0
    current_cpu_load = 0
    minHeap = []

    for job in jobs:
        # remove all the jobs that have ended
        while len(minHeap) > 0 and job.start >= minHeap[0].end:
            current_cpu_load -= minHeap[0].cpu_load
            heapq.heappop(minHeap)

        # add the current job to the minHeap
        heapq.heappush(minHeap, job)
        current_cpu_load += job.cpu_load
        max_cpu_load = max(max_cpu_load, current_cpu_load)

    return max_cpu_load
```

---

### Employee Free Time

For ‘K’ employees, we are given a list of intervals representing the working hours of each employee. Our goal is to find out if there is a free interval that is common to all employees. You can assume that each list of employee working hours is **sorted** on the `start` time.

- EX: `schedule = [[[1,3], [9,12]], [[2,4]], [[6,8]]]` --> `[[4,6], [8,9]]`

  - Explanation: All employees are free between `[4,6]` and `[8,9]`.
    ![employee free time](./img/employee-free-time.svg)

- Explanation:

  - We are given the intervals of working hours for each employee in a sorted order. So, a brute force solution could be to search for a common interval every time for all employees. If we don’t find a common interval, we can move on to the next interval of the employee with the smallest start time.
  - A better approach is to use a `minHeap`
    - We take the `first` interval of each employee and add it to a `minHeap`. This `minHeap` can always be used to find the interval with the smallest start time.
    - Once we have the interval with the smallest `start` time, we can then compare it with the next smallest `start` time interval (again from the `minHeap`) to find the `common interval (gap)`.
    - Whenever we take an interval out of the `minHeap`, we can insert the next interval of the same employee to the `minHeap`.
      - This means that we need to know which interval belongs to which employee.

```py
class Interval:
    def __init__(self, start, end):
        self.start = start
        self.end = end

def find_employee_free_time(schedule):
    # initialize a minHeap to store the intervals
    minHeap = []

    # add the first interval of each employee to the minHeap
    for i in range(len(schedule)):
        heapq.heappush(minHeap, (schedule[i][0].start, schedule[i][0].end, i, 0)) # (start, end, employee, index)

    # initialize a variable to keep track of the previous interval
    previous_interval = minHeap[0]
    # initialize a list to store the free intervals
    free_time = []

    while minHeap:
        # get the interval at the top of the minHeap
        start, end, employee, index = heapq.heappop(minHeap)

        # check if the previous interval is not overlapping with the current interval
        if previous_interval.end < start:
            free_time.append(Interval(previous_interval.end, start))
            previous_interval = Interval(start, end)
        # otherwise, the previous interval is overlapping with the current interval, check if the current interval ends after the previous interval
        elif previous_interval.end < end:
            previous_interval = Interval(previous_interval.start, end)

        # check if the current employee has more intervals
        if index + 1 < len(schedule[employee]):
            # add the next interval of the current employee to the minHeap
            heapq.heappush(minHeap, (schedule[employee][index + 1].start, schedule[employee][index + 1].end, employee, index + 1))

    return free_time
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
