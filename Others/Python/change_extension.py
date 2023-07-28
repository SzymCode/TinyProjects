import os


def change_extension(path):
    current_extension = ".txt"
    new_extension = ".pdf"

    for filename in os.listdir(path):
        if filename.endswith(current_extension):
            filepath = os.path.join(path, filename)
            os.rename(filepath, filepath.replace(current_extension, new_extension))


change_extension(input("Enter full path to change files extensions in directory: "))
