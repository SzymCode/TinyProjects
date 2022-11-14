num = 1

print("Prime number checker")
while int(num) > 0:
    print("Enter positive integer or close program: ", end="")
    num = input()
    if int(num) > 1:
        for i in range(2, int(int(num)/2)+1):
            if (int(num) % i) == 0:
                print(num, "is not a prime number")
                break
        else:
            print(num, "is a prime number")
    else:
        print(num, "is not a prime number")
 
