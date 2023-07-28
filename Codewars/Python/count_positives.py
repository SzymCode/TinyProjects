# https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/python

def count_positives_sum_negatives(arr):
    if len(arr) == 0:
        return []
    positive = sum([1 for i in arr if i > 0])
    negative = sum([i for i in arr if i < 0])
    return [positive, negative]
