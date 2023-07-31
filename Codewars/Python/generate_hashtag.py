# https://www.codewars.com/kata/52449b062fb80683ec000024/train/python

def generate_hashtag(s):
    output = "#"

    for word in s.split():
        output += word.capitalize()

    return False if (len(s) == 0 or len(output) > 140) else output