# https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/python

def is_solved(board):
    if type(board[0][0]) is str:
        temp_board = [eval(elem) for elem in board[0]]
        modified_board = [[elem if elem is not 2 else 4 for elem in row] for row in temp_board]
    else:
        modified_board = [[elem if elem is not 2 else 4 for elem in row] for row in board]

    row_sums = [sum(row) for row in modified_board]
    diagonal1_sum = [sum([modified_board[i][i] for i in range(3)])]
    diagonal2_sum = [sum([modified_board[i][-i + 2] for i in range(3)])]
    modified_board_transposed = list(map(list, zip(*modified_board)))
    col_sums = [sum(col) for col in modified_board_transposed]
    all_sums = row_sums + col_sums + diagonal1_sum + diagonal2_sum

    if 3 in all_sums:
        return 1  # Player 1 wins
    elif 12 in all_sums:
        return 2  # Player 2 wins
    elif 0 in modified_board[0] or 0 in modified_board[1] or 0 in modified_board[2]:
        return -1  # The game is not finished yet
    else:
        return 0  # It's a draw
