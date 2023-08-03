# https://www.spoj.com/problems/AE00/

import math

n = int(input())
ans = math.sqrt(n)
rez = int(ans)

cnt = 0
j = 0
for i in range(1, rez + 1):
    for j in range(i + 1, n + 1):
        if i * j <= n:
            cnt += 1

cnt += int(math.sqrt(n))
print(cnt)