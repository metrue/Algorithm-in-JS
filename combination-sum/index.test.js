const combinationSum = require('./')

test('combinationSum', () => {
  const cases = [
    {
      candidates: [2,3,6,7],
      target: 7,
      output: [
        [7],
        [2,2,3]
      ],
    }
  ]

  for (const c of cases) {
    output = combinationSum(c.candidates, c.target)
    expect(output).toEqual(c.output)
  }
})
