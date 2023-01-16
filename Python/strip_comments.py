import re

def strip_comments(path):
    with open(path, 'r') as file:
        content = file.read()

    content = re.sub(r'#.*', '', content)
    with open(path, 'w') as file:
        file.write(content)

strip_comments('main.py')
