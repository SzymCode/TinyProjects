# https://www.codewars.com/kata/5848565e273af816fb000449/train/python

def encrypt_this(s: str) -> str:
    if s == '':
        return ''
    else:
        words = s.split(' ')
        result = []
        for element in words:
            a = list(element)
            a[0] = str(ord(element[0]))
            if len(a) > 2:
                a[1], a[-1] = a[-1], a[1]
            result.append(''.join(a))
        return ' '.join(result)