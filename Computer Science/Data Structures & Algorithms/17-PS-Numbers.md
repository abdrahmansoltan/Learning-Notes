# INDEX

- [INDEX](#index)
  - [Numbers Manipulation](#numbers-manipulation)
    - [Numbers Notes](#numbers-notes)
    - [Reverse Integer](#reverse-integer)
    - [Check if a decimal integer is a palindrome](#check-if-a-decimal-integer-is-a-palindrome)
    - [Count Primes](#count-primes)
  - [Numbers \& Math](#numbers--math)
    - [Power of Two](#power-of-two)
    - [Pow(x, n)](#powx-n)
    - [Partitioning Into Minimum Number Of Deci-Binary Numbers](#partitioning-into-minimum-number-of-deci-binary-numbers)
  - [Dates](#dates)
    - [Dates Notes](#dates-notes)
    - [Number of Days Between Two Dates](#number-of-days-between-two-dates)

---

## Numbers Manipulation

### Numbers Notes

- To get the nth digit of a number, we can use the **modulus** operator and the **division** operator

  ```py
  123 % 10 = 3 # get the last digit
  123 % 100 = 23 # get the last 2 digits

  123 // 10 = 12 # get the number without the last digit
  123 // 100 = 1 # get the first digit
  ```

---

### Reverse Integer

Given a signed 32-bit integer `x`, return `x` _with its digits reversed_. If reversing `x` causes the value to go outside the signed 32-bit integer range `[-2^31, 2^31 - 1]`, then return `0`.

- Ex:

  - Input: `x = 123`
  - Output: `321`

- Explanation:
  - We can use the **modulus** operator to get the last digit of the number and then add it to the result
  - We can then divide the number by `10` to get the next digit
  - We repeat this process until the number is `0`
- Time Complexity: `O(log(x))` -> `O(n)` where `n` is the number of digits in `x`

```py
def reverse(x):
    result = 0
    is_negative = x < 0
    x_remaining = abs(x) # because python modulus operator returns a negative number if the number is negative -> ( -123 % 10 = 7 not -3 )

    while x_remaining:
        # get the last digit of the number
        last_digit = x_remaining % 10
        # add the last digit to the result (shifted to the left by 1 digit to make room for the next digit)
        result = result * 10 + last_digit
        # divide the number by 10 to get the next digit
        x_remaining = x_remaining // 10

    # check if the number is out of range (overflow)
    if result > 2 ** 31 - 1:
        return 0

    # return the result
    return -result if is_negative else result
```

---

### Check if a decimal integer is a palindrome

Given an integer `x`, return `true` if `x` is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, `121` is palindrome while `123` is not.

- Ex:

  - Input: `x = 121`
  - Output: `true`

```py
def isPalindrome(x):
    if x < 0:
        return False

    # get the number of digits in x
    num_digits = math.floor(math.log10(x)) + 1

    # loop through the digits of x
    for i in range(num_digits // 2):
        # get the i-th digit of x
        left_digit = x // 10 ** (num_digits - i - 1) % 10
        # get the (num_digits - i - 1)-th digit of x
        right_digit = x // 10 ** i % 10

        # check if the digits are different
        if left_digit != right_digit:
            return False

    return True
```

---

### Count Primes

Given an integer `n`, return the number of prime numbers that are strictly less than `n`.

- Ex:

  - Input: `n = 10`
  - Output: `4`
  - Explanation: There are `4` prime numbers less than `10`, they are `2, 3, 5, 7`.

- Explanation:
  - Prime numbers are numbers that are only divisible by `1` and themselves
    ![Prime Numbers](./img/prime-numbers.png)
  - The brute-force solution would be to loop through the numbers from `2` to `n` and check if each number is prime by looping through the numbers from `2` to `n` and checking if the number is divisible by any of them (checking if remainder is `0`)
    - This will be `O(n * sqrt(n))` time and `O(1)` space
  - Instead, We can use the **Sieve of Eratosthenes** algorithm to find all the prime numbers less than `n`
    ![Sieve of Eratosthenes](./img/sieve-of-eratosthenes.png)
    - We can start by creating a list of booleans from `2` to `n` and mark them as prime
    - Then, we loop through the numbers from `2` to `n` and mark all the multiples of each number as not prime
    - Finally, we count the number of prime numbers in the list
  - Time Complexity: `O(n * log(log(n)))` -> `O(n)` where `n` is the number of digits in `x`
    - because the number of times we loop through the numbers from `2` to `n` is `O(log(log(n)))` as we can see in the image above which is equivalent to `O(n)`

```py
def countPrimes(n):
    # create a list of numbers from 2 to n and mark them as prime
    is_prime = [True] * n

    # loop through the numbers from 2 to n
    for i in range(2, n):
        # check if the number is prime
        if is_prime[i]:
            # mark all the multiples of the number as not prime
            for j in range(i * i, n, i):
                is_prime[j] = False

    # count the number of prime numbers in the list
    count = 0
    for i in range(2, n):
        if is_prime[i]:
            count += 1

    return count
```

---

## Numbers & Math

### Power of Two

Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.
An integer `n` is a power of two, if there exists an integer `x` such that `n == 2^x`.

- Solution 1: using loop (reusable for any number and not just `2`)

  ```py
  # O(log n)
  def is_power_of_two(n):
      if n == 0:
          return False

      while n > 1:
          if n % 2 != 0:
            return False
          n //= 2 # no need to use floor division here because n is an integer

      return True
  ```

- Solution 2: using bitwise operators

  ![power of two](./img/power-of-two-1.jpg)

  - We can check this by using the **bitwise AND** operator between `n` and `n - 1`
  - This is because `n` and `n - 1` will have all the same bits as `n`, except for the rightmost `1` in `n`, **so all the bits in `n` and `n - 1` will be different**
    ![power of two](./img/power-of-two-2.png)

  ```py
  # O(1)
  def is_power_of_two(n):
      return n > 0 and n & (n - 1) == 0
  ```

---

### Pow(x, n)

Implement `pow(x, n)`, which calculates `x` raised to the power `n` (i.e., `x^n`).

- Explanation:

  - instead of looping and multiplying `x` by itself `n` times, we can use **Divide & conquer** to reduce the number of multiplications
    - `x^n = x^(n/2) * x^(n/2) * x^(n%2)`
    - `x^10` = `x^5 * x^5`
      - `x^5` = `x^2 * x^2 * x`
        - `x^2` = `x * x`
          - `x^1` = `x`
            - `x^0` = `1`

- Time complexity: `O(log n)`

```py
def my_pow(x, n):
    if n == 0:
        return 1

    if n > 0:
        partial = my_pow(x, n // 2)
        if n % 2 == 0:
            return partial * partial
        else:
            return partial * partial * x
    else:
        partial = my_pow(x, -n // 2)
        if n % 2 == 0:
            return 1 / (partial * partial)
        else:
            return 1 / (partial * partial * x)

# ---------------------------OR------------------------------

def my_pow(x, n):
    def helper(x, n):
      if x == 0: return 0 # base case
      if n == 0: return 1 # base case

      res = helper(x, n // 2)
      return res * res * x if n % 2 else res * res

    return helper(x, n) if n >= 0 else 1 / helper(x, -n)
```

---

### Partitioning Into Minimum Number Of Deci-Binary Numbers

A decimal number is called **deci-binary** if each of its digits is either `0` or `1` without any leading zeros. For example, `101` and `1100` are **deci-binary**, while `112` and `3001` are not.

Given a string `n` that represents a positive decimal integer, return the **minimum** number of positive **deci-binary** numbers needed so that they sum up to `n`.

- EX:

  - Input: `n = "32"`
    - Output: `3`
    - Explanation: `10 + 11 + 11 = 32`
  - Input: `n = "82734"`
  - Output: `8`

- Explanation:

  - If each deci-binary number has no higher than a `1` in the each position, then it will take at least `x` numbers to sum up to `n`, where `x` is the largest digit in `n`
  - This means that the largest character in any position in `n` will determine how many deci-binary numbers must be added together to obtain `n`.
    ![minimum-deci-bi](./img/minimum-deci-bi-1.png)
    ![minimum-deci-bi](./img/minimum-deci-bi-2.png)

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
    nums = [int(num) for num in n] # don't forget to convert the string to an integer or the max function will return the largest character in the string and not the largest number

    # return the largest digit in the list
    return max(nums)
```

---

## Dates

### Dates Notes

- To get the current date, we can use the `datetime` module

  ```py
  from datetime import datetime

  now = datetime.now() # get the current date and time

  today = datetime.today() # get the current date
  #equivalent to
  today = datetime.now().date()
  ```

---

### Number of Days Between Two Dates

Write a program to count the number of days between two dates.

The two dates are given as strings, their format is `YYYY-MM-DD` as shown in the examples.

- Ex:

  - Input: `date1 = "2020-01-15", date2 = "2019-12-31"`
  - Output: `15`

```py
from datetime import datetime

def daysBetweenDates(date1, date2):
    # convert the dates to datetime objects
    date1 = datetime.strptime(date1, "%Y-%m-%d")
    date2 = datetime.strptime(date2, "%Y-%m-%d")

    # get the difference between the dates
    diff = date1 - date2
    return abs(diff.days)

# ------------------- Another way to do it -------------------
from datetime import date
def daysBetweenDates(date1, date2):
    year1, month1, day1 = map(int, date1.split('-'))
    year2, month2, day2 = map(int, date2.split('-'))
    # or year1, month1, day1 = (int(d) for d in date1.split('-'))

    # convert the dates to datetime objects
    date1 = date(year1, month1, day1)
    date2 = date(year2, month2, day2)

    diff = date1 - date2
    return abs(diff.days)
```
