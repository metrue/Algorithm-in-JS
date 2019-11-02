const dp = require('./dp')
const dc = require('./dc')

describe('maxSubArray', () => {
  test('dp', () => {
    expect(dp([-2,1,-3,4,-1,2,1,-5,4])).toBe(6)
    expect(dp([-2, -1])).toBe(-1)
    expect(dp([1])).toBe(1)
  })
  test('dc', () => {
    expect(dc([-2,1,-3,4,-1,2,1,-5,4])).toBe(6)
    expect(dc([-2, -1])).toBe(-1)
    expect(dc([1])).toBe(1)
  })
})
