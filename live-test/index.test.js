const connect = require('./')

test('connect', () => {
  const cases = [
    {
      input: ['Raymond', 'Nora', 'Daniel', 'Louie', 'Peter', 'Esteban'],
      output: ['Peter', 'Raymond', 'Daniel', 'Louie', 'Esteban', 'Nora'],
    },
  ]

  for (const c of cases) {
    const output = connect(c.input)
    expect(c.output).toEqual(output)
  }
})
