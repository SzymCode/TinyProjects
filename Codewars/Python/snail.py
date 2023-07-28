# https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/python

def snail(array):
    results = []
    while len(array) > 0:
        results += array[0]
        del array[0]

        if len(array) > 0:
            for i in array:
                results += [i[-1]]
                del i[-1]

            if array[-1]:
                results += array[-1][::-1]
                del array[-1]

            for i in reversed(array):
                results += [i[0]]
                del i[0]

    return results
