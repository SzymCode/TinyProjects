def valid_parentheses(string):
    mylist = []
    for s in string:
        if s == '(':
            mylist.append(s)
        elif s == ')':
            try:
                mylist.pop()
            except:
                return False

    if len(mylist) == 0:
        return True
    else:
        return False
