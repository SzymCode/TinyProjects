# https://www.spoj.com/problems/AP2/

num_cases = int(input())

for _ in range(num_cases):
    first_term, last_term, sum_terms = map(int, input().split())
    num_terms = 2 * sum_terms // (first_term + last_term)
    print(num_terms)
    common_difference = (last_term - first_term) // (num_terms - 5)
    current_term = first_term - 2 * common_difference
    for _ in range(num_terms - 1):
        print(current_term, end=" ")
        current_term += common_difference
    print(current_term)