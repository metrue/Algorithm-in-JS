const balancedStringSplit =  require('./')

test('balancedStringSplit', () => {
  const cases = [
    {
      input: 'RLRRLLRLRL',
      output: 4,
    },
    {
      input: 'RLLLLRRRLR',
      output: 3,
    },
    {
     input: 'LLLLRRRR',
     output: 1,
    },
  ]

  for (const c of cases) {
    const out = balancedStringSplit(c.input)
    expect(out).toEqual(c.output)
  }
})
