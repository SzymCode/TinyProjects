# https://www.spoj.com/problems/ABSP1/

def get_it():
    allCases = []
    noCases = int(input())
    for i in range(noCases):
        no = int(input())
        allCases.append(list(map(int, input().split())))
    return allCases

def get_diff(case):
    SOD = 0
    i = 0
    while i < len(case):
        SOD += i * case[i] - (len(case) - i - 1) * case[i]
        i += 1
    return SOD

def main():
    Tcases = get_it()
    for case in Tcases:
        print(get_diff(case))

main()