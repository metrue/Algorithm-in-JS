const letterCombinations = require('./')

test('letterCombinations', () => {
  const cases = [
    {
      input: '23',
      output: [
        'ad', 'bd', 'cd',
        'ae', 'be', 'ce',
        'af', 'bf', 'cf'
      ],
    },
  ]

  for (const c of cases) {
    output =letterCombinations(c.input)
    expect(output).toEqual(c.output)
  }
})
