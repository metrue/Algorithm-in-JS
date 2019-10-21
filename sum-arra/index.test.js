const hasTargetSum = require('./')

test('hasTargetSum', () => {
  const cases = [
    {
      input: [10, 18, 11, 21, 28, 31, 38, 40, 55, 60, 62],
      sum: 66,
      output: 1,
    },
  ]

  for (const c of cases) {
    const output = hasTargetSum(c.input, c.sum)
    expect(c.output).toEqual(output)
  }
})
