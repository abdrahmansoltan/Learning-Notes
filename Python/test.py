# def is_multiple(n, m):
#   if n % m == 0:
#     return True
#   else:
#     return False

# print(is_multiple(3,2))
# print(is_multiple(6,2))
# print('*'*100)

# def is_even(k):
#     res = abs(k)
#     while (res != 0):
#         if res < 0:
#             return False
#         res -= 2
#     return True


# print(is_even(3))
# print(is_even(6))

# def minmax(*data):
#     min = max = data[0]
#     for i in data:
#         if i < min:
#             min = i
#         elif i > max:
#             max = i
#     return min, max


# print(minmax(5, 9, 105, 36, -99, -1, 0, 77))


# def squares_sum(num):
#     return [num**2 for num in range(num)]


# print(squares_sum(5))

# def odds_squares_sum(num):
#     return [num**2 for num in range(num) if (num % 2 != 0 and num > 0)]


# print(odds_squares_sum(5))


# def odds_squares_sum(num):
#     return [num**2 for num in range(num) if (num % 2 != 0 and num > 0)]


# print(odds_squares_sum(5))

a=10
b=20
srting='a+b'
print(eval(srting))
