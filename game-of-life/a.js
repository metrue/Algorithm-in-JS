const count = (board, row, col) => {
  const h = board.length;
  const w = board[0].length;

  let lives = 0;
  for (let i = Math.max(row - 1, 0); i <= Math.min(row + 1, h - 1); i++) {
    for (let j = Math.max(col - 1, 0); j <= Math.min(col + 1, w - 1); j++) {
      if (col === j && row === i) {
        continue
      }
      lives += board[i][j] & 1;
    }
  }
  return lives;
}

const game = (board) => {
  const M = board.length
  const N = board[0].length

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      const lives = count(board, i, j)
      if (board[i][j] === 0) {
        if (lives === 3) {
          board[i][j] = 0b10
        }
      } else {
        if (lives === 2 || lives === 3) {
          board[i][j] = 0b11
        }
      }
    }
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      board[i][j] = board[i][j] >> 1
    }
  }
}

module.exports = game
