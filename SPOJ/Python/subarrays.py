# https://www.spoj.com/problems/ARRAYSUB/

from collections import deque

def main():
    n = int(input())
    a = list(map(int, input().split()))
    k = int(input())

    dq = deque()

    for i in range(k):
        while dq and a[i] >= a[dq[-1]]:
            dq.pop()
        dq.append(i)

    for i in range(k, n):
        print(a[dq[0]], end=" ")

        while dq and dq[0] <= i - k:
            dq.popleft()
        while dq and a[i] >= a[dq[-1]]:
            dq.pop()

        dq.append(i)

    print(a[dq[0]])


if __name__ == '__main__':
    main()