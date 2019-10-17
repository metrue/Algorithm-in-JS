const {
  gameOfLife,
  useBits,
} = require('.')

test("game of life", () => {
  const input = [
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
  console.log(input)
  useBits(input)
  console.log(input)
})

// 1 0 [ 0, 2 ] [ 0, 1 ]
// console.log game-of-life/index.js:33
// 1 0 [ 0, 0, 0, 1, 1 ]
