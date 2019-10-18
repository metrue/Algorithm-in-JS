const {
  canAttendAll,
  sortThenCheck,
} = require('./')

test('canAttendAll', () => {
  const cases = [
    {
      input: [[0,30],[5,10],[15,20]],
      output: false,
    },
    {
      input: [[7,10],[2,4]],
      output: true,
    },
  ]

  for (const c of cases) {
    let output = canAttendAll(c.input)
    expect(output).toEqual(c.output)

    output = sortThenCheck(c.input)
    expect(output).toEqual(c.output)
  }
})
