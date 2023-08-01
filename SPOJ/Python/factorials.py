# https://www.spoj.com/problems/FCTRL/

def main():
    T = int(input())
    while T > 0:
        sm = 0
        n = int(input())
        while n:
            sm += n // 5
            n //= 5
        print(sm)
        T -= 1

if __name__ == '__main__':
    main()