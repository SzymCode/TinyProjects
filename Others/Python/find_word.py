def find_word(name, search_word):
    with open(name, 'r') as f:
        lines = f.readlines()

    count = 0
    print(f'{search_word} found on lines: ', end="")
    for i, line in enumerate(lines):
        if word in line:
            count += 1
            print(i+1, ", ", end="")

    print(f'\n{search_word} found {count} times in {name}')


file_name = input("File name: ")
word = input("Search word in file: ")
find_word(file_name, word)
