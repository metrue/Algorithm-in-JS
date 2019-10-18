const {
  Counter,
  BetterCounter,
} = require('./counter')

test('counter', () => {
  const counter = new Counter()
  expect(counter.getHits()).toBe(0)

  counter.hit(1);
  counter.hit(2);
  counter.hit(3);

  expect(counter.getHits(4)).toBe(3)

  counter.hit(300);

  expect(counter.getHits(300)).toBe(4)
  expect(counter.getHits(301)).toBe(3)
})

test('counter', () => {
  const counter = new BetterCounter()
  expect(counter.getHits()).toBe(0)

  counter.hit(1);
  counter.hit(2);
  counter.hit(3);

  expect(counter.getHits(4)).toBe(3)

  counter.hit(300);

  expect(counter.getHits(300)).toBe(4)
  expect(counter.getHits(301)).toBe(3)
})
