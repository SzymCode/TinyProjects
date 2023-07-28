import random
import math


password = []
gen_password = ""
alpha = "abcdefghijklmnopqrstuvwxyz"
num = "0123456789"
special = "@#$%&*"


pass_len = int(input("Enter password length: "))
alpha_len = pass_len//2 
num_len = math.ceil(pass_len*30/100) 
special_len = pass_len-(alpha_len+num_len) 


def generate_pass(length, array, is_alpha=False):
    for i in range(length):
        index = random.randint(0, len(array) - 1)
        character = array[index]
        if is_alpha:
            case = random.randint(0, 1)
            if case == 1:
                character = character.upper()
        password.append(character)


generate_pass(alpha_len, alpha, True)
generate_pass(num_len, num)
generate_pass(special_len, special)

random.shuffle(password)


for p in password:
    gen_password = gen_password + str(p)
print("Password 50/30/20: ", gen_password)
