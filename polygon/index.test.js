const getShape = require('./')

test('getShape', () => {
  const cases = [
    {
      input: [36, 30, 36, 30],
      output: 1,
    },
    {
      input: [15,15,15,15],
      output: 0,
    },
    {
      input: [46,96,90,100],
      output: 2,
    },
    {
      input: [86,86,86,86],
      output: 0,
    },
    {
      input:  [100,200,100,200],
      output: 1,
    },
    {
      input: [-100, 200, -100, 200],
      output: 2,
    },
  ]

  for (const c of cases) {
    const output = getShape(c.input)
    if (c.output !== output) {
      console.error(`should get ${c.output} but got ${output} on case ${JSON.stringify(c, null, 2)}`)
      expect(c.output).toBe(output)
    }
  }
})
