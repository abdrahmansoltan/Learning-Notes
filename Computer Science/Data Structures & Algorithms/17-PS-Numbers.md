# INDEX

- [INDEX](#index)
  - [Numbers Manipulation](#numbers-manipulation)
    - [Numbers Notes](#numbers-notes)
    - [Reverse Integer](#reverse-integer)
    - [Check if a decimal integer is a palindrome](#check-if-a-decimal-integer-is-a-palindrome)
    - [Count Primes](#count-primes)
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
