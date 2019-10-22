const {
  combineDP,
  combineBacktracking,
}= require('./')

test('combineDP', () => {
  const cases = [
    {
      n: 4,
      k: 2,
      output: [
        [1,2],
        [1,3],
        [1,4],
        [2,3],
        [2,4],
        [3,4],
      ],
    },
  ]

  for (const c of cases) {
    const output = combineDP(c.n, c.k)
    expect(output).toEqual(c.output)
  }
})

test('combineBacktracking', () => {
  const cases = [
    {
      n: 4,
      k: 2,
      output: [
        [1,2],
        [1,3],
        [1,4],
        [2,3],
        [2,4],
        [3,4],
      ],
    },
  ]

  for (const c of cases) {
    const output = combineBacktracking(c.n, c.k)
    console.log('===>', output)
    expect(output).toEqual(c.output)
  }
})
