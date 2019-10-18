const Queue = require('./queue')

test('queue', () => {
  const q = new Queue()
  expect(q.empty()).toBe(true)
  q.enqueue(0)
  expect(q.empty()).toBe(false)
  expect(q.size()).toBe(1)
  q.enqueue(1)
  expect(q.size()).toBe(2)
  expect(q.dequeue()).toBe(0)
  expect(q.dequeue()).toBe(1)
  expect(q.size()).toBe(0)
})
