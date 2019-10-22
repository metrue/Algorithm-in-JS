const combinationSum = require('./')
const backtracking = require('./backtracking')

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
    const output = combinationSum(c.candidates, c.target)
    expect(output).toEqual(c.output)
  }
})

test('backtracking', () => {
  const cases = [
    {
      candidates: [8, 7, 4, 3],
      target: 11,
      output: [
				[8, 3],
				[7, 4],
				[4, 4, 3],
			]
    }
  ]

  for (const c of cases) {
    const output = backtracking(c.candidates, c.target)
    expect(output).toEqual(c.output)
  }
})
