const exist = (board, word) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (backtracking(board, word, i, j, 0)) {
        return true
      }
    }
  }
  return false
};


const backtracking = (board, word, row, col, index) => {
  if (index === word.length) {
    return true
  }

   if (row < 0
    || col < 0
    || row > board.length - 1
    || col > board[0].length - 1) {
     return false;
    }
      if (board[row][col] != word[index]) {
        return false;
      }

      board[row][col] = '*'; // avoid duplicate

      const next =  backtracking(board, word, row + 1, col, index + 1)
        || backtracking(board, word, row - 1, col, index + 1)
        || backtracking(board, word, row, col - 1, index + 1)
        || backtracking(board, word, row, col + 1, index + 1)

      board[row][col] = word[index]; // modify it back!
      return next;
}

const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
console.log(exist(board, 'SEE'))
