# INDEX

- [INDEX](#index)
  - [Bit Manipulation](#bit-manipulation)
    - [Bitwise Operators Notes](#bitwise-operators-notes)
    - [Parity of a number](#parity-of-a-number)
    - [Single Number](#single-number)
    - [Single Number II](#single-number-ii)
    - [Single Number III](#single-number-iii)
    - [Swap Bits](#swap-bits)
    - [Reverse Bits](#reverse-bits)
    - [Find the closest integer with the same weight](#find-the-closest-integer-with-the-same-weight)
    - [Implement multiplication without arithmetic operators](#implement-multiplication-without-arithmetic-operators)
    - [Complement of Base 10 Integer](#complement-of-base-10-integer)
    - [Flipping an Image](#flipping-an-image)
    - [Shuffle the Array](#shuffle-the-array)

---

## Bit Manipulation

### Bitwise Operators Notes

```py
# AND
1 & 1 = 1

# OR
1 | 0 = 1

# XOR
1 ^ 0 = 1
1 ^ 1 = 0

# NOT
~1 = 0

# Bit shifting
1 << 1 = 10 # shift left
10 >> 1 = 1 # shift right
```

- To check if the last bit of a number is 1 or 0, we can use the **bitwise AND** operator

  ```py
  5 & 1 = 1 # 5 = 101, 1 = 001
  4 & 1 = 0 # 4 = 100, 1 = 001
  ```

- properties of `XOR`:

  ```py
  a ^ a = 0 # same numbers cancel each other
  a ^ 0 = a # any number XOR 0 is the number itself
  a ^ b ^ a = b # XOR is associative and commutative
  ```

- Count number of bits in a number

  ```py
  def count_bits(n):
      count = 0
      while n:
          count += n & 1 # check if the last bit is 1
          n >>= 1 # shift the number to the right by 1 bit
      return count
  ```

---

### Parity of a number

The parity of a binary word is `1` if the number of `1s` in the word is **odd**; otherwise, it is `0`. For example, the parity of `1011` is `1`, and the parity of `10001000` is `0`.

Return `1` if the number of `1s` in the word is odd; otherwise, return `0`.

- Ex:

  - Input: `n = 5`
  - Output: `1`
  - Explanation: `5` is `101` in binary, with parity `1` since it contains an **odd** number of `1`'s.

- Explanation:

  - First, We can use the **bitwise AND** operator to get the last bit of the number

    - `n & 1` -> This will give us the last bit of the number
      - Ex: `n = 5` -> `n & 1` -> `101 & 001` -> `001`

  - Then, we can shift the number to the right by `1` bit
    - `n >> 1` -> This will shift the number to the right by `1` bit
      - Ex: `n = 5` -> `n >> 1` -> `101 >> 1` -> `10`
  - We can then add the last bit to the result
    - Ex: `result = 0` -> `result + (n & 1)` -> `0 + (101 & 001)` -> `0 + 001` -> `1`

```py
def parity(n):
    result = 0

    while n:
        result += n & 1 # check if the last bit is 1
        n >>= 1 # shift the number to the right by 1 bit

    return result % 2 # return 1 if the number of 1s is odd, otherwise return 0
```

---

### Single Number

Given a **non-empty** array of integers `nums`, every element appears _twice_ except for one. Find that single one.

- Ex:

  - Input: `nums = [2,2,1]`
  - Output: `1`

- Explanation:
  - One way to solve this problem is to use a **hash table** to store the number of times each number appears in the array, and then loop through the hash table to find the number that appears only once
    - This will be `O(n)` time and `O(n)` space
  - We can do better by using **bit manipulation**
    - We can use the **bitwise XOR** operator to get the number that appears only once
      - `a ^ a = 0` -> same numbers cancel each other
      - So, if we XOR all the numbers in the array, we will get the number that appears only once

```py
def single_number(nums):
    res = 0
    for num in nums:
        res ^= num
    return res
```

---

### Single Number II

Given an integer array `nums` where every element appears **three times** except for one, which appears **exactly once**. Find the single element and return it.

- Ex:

  - Input: `nums = [2,2,3,2]`
  - Output: `3`

- Explanation:
  - It's similar to the previous problem, but now each number appears 3 times instead of 2
  - To do so, we can use 2 variables `ones` and `twos`
    - `ones` will store the number that appears once
    - `twos` will store the number that appears twice

```py
def single_number(nums):
    ones = 0
    twos = 0

    for num in nums:
        ones = (ones ^ num) & ~twos # XOR the number with ones and then AND it with the complement of twos
        twos = (twos ^ num) & ~ones # XOR the number with twos and then AND it with the complement of ones

    return ones
```

---

### Single Number III

Given an integer array `nums`, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in **any order**.

- Ex:

  - Input: `nums = [1,2,1,3,2,5]`
  - Output: `[3,5]`

- Explanation:

  - It's similar to the previous problem, but now each number appears twice except for 2 numbers that appear once
  - Let's assume `num1` and `num2` are the 2 numbers that appear once, if we do `XOR` on all the numbers in the array, we will be left with `XOR` of `num1` and `num2`
  - now, we want to find `num1` and `num2` separately

    - we know that `num1` and `num2` are different, so their `XOR` result will have at least 1 bit set

      ```py
      1 ^ 0 = 1
      ```

    - We can take any bit which is ‘1’ in `n1xn2` and partition all numbers in the given array into two groups based on that bit. One group will have all those numbers with that bit set to ‘0’ and the other with the bit set to ‘1’. This will ensure that `num1` will be in one group and `num2` will be in the other. We can take XOR of all numbers in each group separately to get `num1` and `num2`, as all other numbers in each group will cancel each other. Here are the steps of our algorithm:
      1. Taking XOR of all numbers in the given array will give us XOR of `num1` and `num2`, calling this XOR as `n1xn2`.
      2. Find any bit which is set in `n1xn2`. We can take the rightmost bit which is ‘1’. Let’s call this `rightmostSetBit`.
      3. Iterate through all numbers of the input array to partition them into two groups based on `rightmostSetBit`. Take XOR of all numbers in both the groups separately. Both these XORs are equal to `num1` and `num2`.

```py
def single_number(nums):
    # Get the XOR of all the numbers -> which is the XOR of the 2 numbers that appear once
    n1xn2 = 0
    for num in nums:
        n1xn2 ^= num

    # get the rightmost set bit that is '1'
    rightmost_set_bit = 1
    while (rightmost_set_bit & n1xn2) == 0:
        rightmost_set_bit = rightmost_set_bit << 1 # shift the number to the left by 1 bit

    # partition the numbers into 2 groups based on the rightmost set bit
    num1, num2 = 0, 0
    for num in nums:
        if (num & rightmost_set_bit) != 0:
            num1 ^= num
        else:
            num2 ^= num

    return [num1, num2]
```

---

### Swap Bits

Given a 64-bit integer, swap the `i-th` and `j-th` bits, and return the resulting integer.

A 64-bit integer can be represented as a array of `64` bits, with the most significant bit (`MSB`) on the left and the least significant bit (`LSB`) on the right.

- Ex:

  - Input: `n = 0b100011`
  - Output: `0b110001`
  - Explanation: `i = 1`, `j = 4`
    - `0b100011` -> `0b110001`

- Explanation:

  - A brute-force solution would be to use the **bitwise AND** operator to get the `i-th` and `j-th` bits, and then use the **bitwise XOR** operator to swap the bits **(because a bit can only be `0` or `1`)**

    - This will be `O(1)` time and `O(1)` space

  - We can do better by using **bit manipulation**
    - We can use the **bitwise XOR** operator to get the number that appears only once
      - `a ^ a = 0` -> same numbers cancel each other
      - So, if we XOR all the numbers in the array, we will get the number that appears only once

```py
def swap_bits(n, i, j):
    # check if the i-th and j-th bits are different
    if (n >> i) & 1 != (n >> j) & 1:
        # if they are different, then swap them by flipping their values using XOR
        bit_mask = (1 << i) | (1 << j) # 1 << i = 1 << 1 = 10, 1 << j = 1 << 4 = 10000 -> 10 | 10000 = 10010 -> this will be the bit mask that we will use to flip the bits
        n ^= bit_mask

    return n
```

---

### Reverse Bits

Reverse bits of a given 32 bits unsigned integer.

- Ex:

  - Input: `n = 00000010100101000001111010011100`
  - Output: `964176192 (00111001011110000010100101000000)`
  - Explanation: The input binary string `00000010100101000001111010011100` represents the unsigned integer `43261596`, so return `964176192` which its binary representation is `00111001011110000010100101000000`.

- Explanation:
  ![reverse bits](./img/reverse-bits.png)
  - We can use the **bitwise AND** operator to get the last bit of the number
  - We can then shift the number to the right by `1` bit
    - `n >> 1` -> This will shift the number to the right by `1` bit
      - Ex: `n = 5` -> `n >> 1` -> `101 >> 1` -> `10`
  - We can then shift the result to the left by `1` bit
    - `result << 1` -> This will shift the result to the left by `1` bit
      - Ex: `result = 10` -> `result << 1` -> `101`
  - Finally, we can add the last bit to the result
    - `result | (n & 1)` -> This will add the last bit to the result
      - Ex: `result = 0` -> `result | (n & 1)` -> `0 | (101 & 001)` -> `0 | 001` -> `1`
  - **Steps:**
    1. shift the result to the left by `1 bit` and add the last bit of the number to the result
    2. shift the number to the right by `1 bit` to get the next bit
    3. repeat steps 1 and 2 until the number is `0`

```py
def reverseBits(n):
    result = 0

    for _ in range(32):
        # shift the result to the left by 1 bit
        result = result << 1
        # add the last bit to the result
        result = result | (n & 1)
        # shift the number to the right by 1 bit
        n = n >> 1

    # Another way to do it:
    for i in range(32):
      bit = (n >> i) & 1 # get the i-th bit of the number
      result = result | (bit << (31 - i)) # add the bit to the result

    return result


# ex: 1011 -> shift left -> 10110 -> add last bit -> 10110 | 1 -> 10111 -> shift right -> 1011
```

- if problem asks to reverse the bits of a 64-bit integer, we can do the same thing but for 64 bits instead of 32 bits

  ```py
  def reverseBits(n):
      result = 0

      for _ in range(64):
          # shift the result to the left by 1 bit
          result = result << 1
          # add the last bit to the result
          result = result | (n & 1)
          # shift the number to the right by 1 bit
          n = n >> 1

      return result
  ```

---

### Find the closest integer with the same weight

The weight of a non-negative integer `x` is the number of bits that are set to `1` in its binary representation.

- Ex:

  - Input: `x = 6`
  - Output: `5`
  - Explanation: `6` in binary is `110` -> `101` is the closest integer with the same weight

- Explanation:
  - We can use the **bitwise AND** operator to get the last bit of the number and the last bit of the shifted number (to the right)
  - If the last bit and the last bit of the shifted number are different, then we can swap them to get a number with the same weight (or close to it)
  - We repeat this process until we find a number with the same weight (or close to it)

```py
def closest_int_same_bit_count(x):
    NUM_UNSIGNED_BITS = 64

    for i in range(NUM_UNSIGNED_BITS - 1):
        # check if the i-th and i+1-th bits are different
        if (x >> i) & 1 != (x >> (i + 1)) & 1:
            # swap the bits
            x ^= (1 << i) | (1 << (i + 1))
            return x

    # if we get here, then all the bits are either 0 or 1
    raise ValueError("All bits are 0 or 1")
```

---

### Implement multiplication without arithmetic operators

Write a program that multiplies two non-negative integers. The only operators you are allowed to use are: assignment, bitwise operators, equality checks, loops, and functions. You are not allowed to use the multiplication operator.

- Ex:

  - Input: `x = 5`, `y = 3`
  - Output: `15`

- Explanation:

  - A brute-force solution would be to use a loop to add `x` to itself `y` times

    - This will be `O(n)` time for looping `y` times and for adding `x` to itself `y` times, so it will be `O(n^2)` time (BAD ❌)

  - We can do better by using the algorithm taught in school for decimal multiplication, by using (shift + add) to achieve better time complexity
    - we initialize the result to `0`, and then we loop through the bits of `y`
    - if the `i-th` bit of `y` is `1`, then we add `x` to the result, because `x * 1 = x`
    - then we shift `x` to the left by `1` bit
  - **Steps:**
    1. initialize the result to `0`
    2. loop through the bits of `y`
    3. if the `i-th` bit of `y` is `1`, then add `x` to the result
    4. shift `x` to the left by `1` bit
    5. repeat steps 2, 3, and 4 until we reach the end of `y`

```py
def multiply(x: int, y: int) -> int:
    def add(x, y):
      while y:
          carry = x & y # get the addition-carry to add to the next bit
          x = x ^ y # XOR the numbers to get the sum
          y = carry << 1 # shift the carry to the left by 1 bit

      return x

    res = 0
    while x:  # Examines each bit of x.
        if x & 1:
            res = add(res, y)
        x = x << 1 # shift x to the left by 1 bit
        y = y >> 1 # shift y to the right by 1 bit
    return res
```

---

### Complement of Base 10 Integer

The complement of an integer is the integer you get when you flip all the `0`'s to `1`'s and all the `1`'s to `0`'s in its binary representation.

- Every non-negative integer `n` has a binary representation, for example:

  - `8` can be represented as `"1000"` in binary
  - its complement is `"0111"` in binary, which is `7` in base-10

- Ex:

  - Input: `n = 5`
  - Output: `2`
  - Explanation: `5` is `"101"` in binary, with complement `"010"` in binary, which is `2` in base-10

- Solution 1

  ```py
  def bitwiseComplement(n):
      if n == 0:
          return 1

      # get the number of bits in n
      num_bits = n.bit_length()

      mask = (1 << num_bits) - 1 # 1 << num_bits = 1 << 3 = 1000 -> 1000 - 1 = 0111

      # XOR the number with the mask to get the complement
      return n ^ mask
  ```

- Solution 2:

  ```py
  def bitwiseComplement(n):
      bitCount = 0
      while n > 0:
          bitCount += 1
          n = n >> 1
      # now n = 0, bitCount = number of bits in n

      all_bits_set = pow(2, bitCount) - 1 # 2 ^ bitCount = 2 ^ 3 = 1000 -> 1000 - 1 = 0111

      # XOR the number with the mask to get the complement
      return n ^ all_bits_set
  ```

---

### Flipping an Image

Given an `n x n` binary matrix `image`, flip the image **horizontally**, then invert it, and return _the resulting image_.

- To flip an image horizontally means that each row of the image is reversed.
  - For example, flipping `[1,1,0]` horizontally results in `[0,1,1]`.
- To invert an image means that each `0` is replaced by `1`, and each `1` is replaced by `0`.

  - For example, inverting `[0,1,1]` results in `[1,0,0]`.

- Ex:
  - Input: `image = [[1,1,0],[1,0,1],[0,0,0]]`
  - Output: `[[1,0,0],[0,1,0],[1,1,1]]`
  - Explanation: First reverse each row: `[[0,1,1],[1,0,1],[0,0,0]]`.
    Then, invert the image: `[[1,0,0],[0,1,0],[1,1,1]]`

```py
def flipAndInvertImage(image):
    for row in image:
        # reverse the row
        row.reverse()

        # invert the row
        for i in range(len(row)):
            row[i] = row[i] ^ 1 # XOR the number with 1 to invert it

    return image
```

---

### Shuffle the Array

Given the array `nums` consisting of `2n` elements in the form `[x1,x2,...,xn,y1,y2,...,yn]`.

Return the array in the form `[x1,y1,x2,y2,...,xn,yn]`.

- EX: `nums = [2,5,1,3,4,7], n = 3` --> `[2,3,5,4,1,7]`

- Solution 1: using extra memory

  ```py
  def shuffle(nums, n):
      result = []
      for i in range(n):
          result.append(nums[i])
          result.append(nums[i+n])
      return result
  ```

- Solution 2: without using extra memory (in-place) ✅

  - This is done using `Bit Manipulation` and `Division`

  - We know that upper bound of the numbers in the array is `32 bits`, so we can have the `x` and `y` elements in the same element in the array by using `OR` operator
    ![shuffle the array](./img/shuffle-the-array-1.png)
  - To extract the `x` and `y` elements, we can use `AND` operator
  - Then we can shift the `x` and `y` elements to the right by `n` bits to get the original elements

    - To do so, we iterate over the array **in reverse order** and extract the `x` and `y` elements
      ![shuffle the array](./img/shuffle-the-array-2.png)

    ```py
    def shuffle(nums, n):
        for i in range(n):
            nums[i] = nums[i] << 10 # shift the x element to the left by 10 bits
            nums[i] |= nums[i+n] # OR the x element with the y element (Store x and y in the same element)

        # Iterate over the array in reverse order and extract the x and y elements
        j = 2*n - 1 # index of the last element in the array
        for i in range(n-1, -1, -1):
            y = nums[i] & (2**10 - 1) # extract the y element by ANDing the number with 2^10 - 1
            # we use 2^10 - 1 to get the last 10 bits of the number -> 1023
            x = nums[i] >> 10 # extract the x element by shifting the number to the right by 10 bits

            nums[j] = y
            nums[j-1] = x
            j -= 2

        return nums
    ```

---
