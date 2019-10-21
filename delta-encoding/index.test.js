const deltaEncoding = require('./')

test('deltaEncoding', () => {
  const cases = [
    {
      input: [25626,25757,24367,24267,16,100,2,7277],
      output: [25626,-128,131,-128,-1390,-100,-128,-24251,84,-98, -128,7275],
    },
  ]

  for (const c of cases) {
    output = deltaEncoding(c.input)
    expect(c.output).toEqual(output)
  }
})
