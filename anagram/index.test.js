const getAnagrams = require('./')

test('getAnagrams', () => {
  const cases = [
    {
      input: [
        'pear',
        'amleth',
        'dormitory',
        'tinsel',
        'dirty room',
        'hamlet',
        'listen',
        'silnet',
       ],
      output: [
        ['pear'],
        ['amleth', 'hamlet'],
        ['dormitory', 'dirty room'],
        ['tinsel','listen', 'silnet',],
      ],
    },
  ]

  for (const c of cases) {
    output = getAnagrams(c.input)
    expect(output).toEqual(c.output)
  }
})
