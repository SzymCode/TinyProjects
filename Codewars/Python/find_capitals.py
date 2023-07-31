# https://www.codewars.com/kata/539ee3b6757843632d00026b/train/python

def capitals(word):
    capital_indices = []
    index = 0
    for char in word:
        if char.isupper():
            capital_indices.append(index)
        index += 1
    return capital_indices
