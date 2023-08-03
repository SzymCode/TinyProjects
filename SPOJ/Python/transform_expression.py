# https://www.spoj.com/problems/ONP/

operators = ["+", "-", "*", "/", "^"]
precedence = {"+": 0, "-": 1, "*": 2, "/": 3, "^": 4}
alpha = 'abcdefghijklmnopqrstuvwxyz'

def pre_check(op1, op2):
    if precedence[op1] >= precedence[op2]:
        return True
    else:
        return False

def main():
    t = int(input())
    for i in range(t):
        x = input()
        stack = []
        y = ''
        for e in x:
            if e == "(":
                stack.append(e)
            elif e in alpha:
                y += e
            elif e in operators:
                while stack and stack[-1] in operators:
                    if pre_check(stack[-1], e):
                        y += stack.pop()
                stack.append(e)
            elif e == ')':
                while stack and not stack[-1] == '(':
                    y += stack.pop()
                stack.pop()

        while stack:
            if stack[-1] == '(':
                stack.pop()
            else:
                y += stack.pop()

        print(y)

main()