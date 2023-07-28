# https://www.codewars.com/kata/529b418d533b76924600085d/train/python

def to_underscore(string):
    input_str = str(string)
    output = [input_str[0].lower()]
    for c in input_str[1:]:
        if c in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ':
            output.append('_')
            output.append(c.lower())
        else:
            output.append(c)
    return str.join('', output)
