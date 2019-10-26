const Stack = require('./stack')

test('Stack', () => {
    const stack = new Stack()

    expect(stack.size()).toBe(0)

    stack.push(0)
    expect(stack.size()).toBe(1)

    const val = stack.pop()
    expect(val).toBe(0)
    expect(stack.size()).toBe(0)

    stack.push(1)
    stack.push(2)
    expect(stack.size()).toBe(2)
    expect(stack.pop()).toBe(2)
    expect(stack.pop()).toBe(1)
    expect(stack.size()).toBe(0)
})
