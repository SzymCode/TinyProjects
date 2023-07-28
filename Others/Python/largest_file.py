import os

highest = 0
totalSize = 0
highest_name = ""

print("Largest file finder. Path: ", end=' ')
path = input()

for filename in os.listdir(path):
    totalSize = os.path.getsize(os.path.join(path, filename))

    if totalSize > highest:
        highest = os.path.getsize(os.path.join(path, filename))
        highest_name = os.path.relpath(filename)

print("Largest file: " + os.path.relpath(highest_name))
print(str(highest/8) + ' B.')
print(str(highest/8/1000) + ' KB.')
print(str(highest/8/1000/1000) + ' MB.')

input()
