const solve = require('./solution')

test('bruteforce', () => {
  const arr = [
    ["joe", 1, "home"],
    ["joe", 2, "about"],
    ["joe", 3, "career"],
    ["james", 4, "home"],
    ["james", 5, "cart"],
    ["james", 6, "maps"],
    ["james", 7, "home"],
    ["mary", 8, "home"],
    ["mary", 9, "about"],
    ["mary", 10, "career"],
  ]
  const res = solve(arr)
  expect(res).toEqual(['home', 'about', 'career'])
})
