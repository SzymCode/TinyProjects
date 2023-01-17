import os
import hashlib

def find_duplicate_files(path):
    files_seen = {}
    duplicate_files = []

    for dirpath, dirnames, filenames in os.walk(path):
        for filename in filenames:
            file_path = os.path.join(dirpath, filename)
            file_hash = hashlib.md5(open(file_path, 'rb').read()).hexdigest()
            if file_hash in files_seen:
                duplicate_files.append(file_path)
            else:
                files_seen[file_hash] = file_path

    return duplicate_files

def delete_files(file_list):
    for file_path in file_list:
        os.remove(file_path)

duplicate_files = find_duplicate_files("path/to/directory")
delete_files(duplicate_files)
