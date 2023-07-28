# https://www.codewars.com/kata/5a516c2efd56cbd7a8000058/train/python

PRIME_DIGITS = (2, 3, 5, 7)


def is_total(n):
    while n:
        n, m = divmod(n, 10)
        if m not in PRIME_DIGITS:
            return False
    return True


def is_prime(n):
    if n == 2:
        return True
    x = 3
    if n < x or x % 2 == 0:
        return False
    m = int(n ** .5) + 1
    while x < m:
        if n % x == 0:
            return False
        x += 2
    return True


TOTAL_PRIMES = []
limit = int(1e7)
num = 23

while num < limit:
    if is_total(num) and is_prime(num):
        TOTAL_PRIMES.append(num)
    num += 2


def get_total_primes(a, b):
    count = 0
    for candidate in TOTAL_PRIMES:
        if candidate >= b:
            break
        count += candidate >= a
    return count
