def find_word(file_name, word):
    with open(file_name, 'r') as f:
        lines = f.readlines()

    count = 0
    print(f'{word} found on lines: ', end="")
    for i, line in enumerate(lines):
        if word in line:
            count += 1
            print(i+1, ", ", end="")

    print(f'\n{word} found {count} times in {file_name}')


file_name = input("File name: ")
word = input("Search word in file: ")
find_word(file_name, word)
