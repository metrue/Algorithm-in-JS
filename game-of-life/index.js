const numberOf = (list, val) => {
  let num = 0
  for (const i of list) {
    if (i === val) {
      num++
    }
  }
  return num
}

const judge = (row, column, board) => {
  const minRow = row === 0 ? 0 : row - 1
  const maxRow = row === board.length - 1 ? board.length - 1 : row + 1

  const minColumn = column === 0 ? 0 : column - 1
  const maxColumn = column === board[0].length - 1 ? board[0].length - 1 : column + 1

  const neibors = []
  for (let m = minRow; m <= maxRow; m++) {
    for (let n = minColumn; n <= maxColumn; n++) {
      if (m === row && n === column)  {
        continue
      } else {
        neibors.push(board[m][n])
      }
    }
  }

  liveNum = numberOf(neibors, 1)
  if (board[row][column] === 0) {
    if (liveNum === 3) {
      return 1
    }
    return 0
  }

  if (liveNum === 2 || liveNum === 3) {
    return 1
  }
  return 0
}

const gameOfLife = (board) => {
  if (board.length <= 0) {
    return board
  }

  const N = board.length
  const M = board[0].length

  // snapshot
  const next = []
  for (let i = 0; i < N; i++) {
    next.push(board[i].slice())
  }

   // count
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const num = judge(i, j, next)
      board[i][j] = num
    }
  }
  return board;
};

const countNeibo = (x, y, board) => {
  const h = board.length;
  const w = board[0].length;

  let lives = 0;
  for (let i = Math.max(x - 1, 0); i <= Math.min(x + 1, h - 1); i++) {
    for (let j = Math.max(y - 1, 0); j <= Math.min(y + 1, w - 1); j++) {
      lives += board[i][j] & 1;  // Get 1st bit
    }
  }
  lives -= board[x][y] & 1;  // subtract itself
  return lives;
}

const useBits = (board) => {
  if (board.length <= 0) {
    return board
  }

  const N = board.length
  const M = board[0].length

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      lives = countNeibo(i, j, board)
      if (board[i][j] === 0) {
        if (lives === 3) {
        // 00 --> 10
          board[i][j] = 0b10
        }
      } else {
        if (lives === 2 || lives === 3) {
          // 01 ---> 11
          board[i][j] = 0b11
        // TODO so werid, why it's not correct when bellow code uncomment
        // } else {
        //   // 01 ---> 00
        //   board[i][j] = 0b00
        }
      }
    }
  }

  for (i = 0; i < N; i++) {
    for (j = 0; j < M; j++) {
      board[i][j] = board[i][j] >> 1
    }
  }
}

module.exports = {
  gameOfLife,
  useBits,
}
