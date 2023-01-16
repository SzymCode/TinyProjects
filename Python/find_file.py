import os

def find_files(extension, path):
    for root, dirs, files in os.walk(path):
        for file in files:
            if file.endswith(extension):
                file_path = os.path.join(root, file)
                print(file_path)

path = input("Find files with extension. Full path: ")
find_files('.txt', path)
