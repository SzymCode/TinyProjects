import time
from calendar import isleap

localtime = time.localtime(time.time())

name = input("Input your name: ")
age = input("Input your age: ")

year = int(age)
month = year * 12 + localtime.tm_mon
day = 0
begin_year = int(localtime.tm_year) - year
end_year = begin_year + year


def judge_leap_year(is_leap):
    if isleap(is_leap):
        return True
    else:
        return False


def month_days(c_month, c_leap_year):
    if c_month in [1, 3, 5, 7, 8, 10, 12]:
        return 31
    elif c_month in [4, 6, 9, 11]:
        return 30
    elif c_month == 2 and c_leap_year:
        return 29
    elif c_month == 2 and (not c_leap_year):
        return 28


for y in range(begin_year, end_year):
    if judge_leap_year(y):
        day = day + 366
    else:
        day = day + 365

leap_year = judge_leap_year(localtime.tm_year)
for m in range(1, localtime.tm_mon):
    day = day + month_days(m, leap_year)

day = day + localtime.tm_mday
print("%s's age is %d years or " % (name, year), end="")
print("%d months or %d days" % (month, day))