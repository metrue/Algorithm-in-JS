const Stack = require('../common/stack/stack')

const simplifyPath = (path) => {
  const stack = new Stack()
  const names = path.split('/')

  for (let i = 0; i < names.length; i++) {
    const name = names[i]
    if (name === '' || name === '.') {
      continue
    } else if (name === "..") {
      stack.pop()
    } else {
      stack.push(`/${name}`)
    }
  }
  let res = ''
  while (stack.size() > 0) {
    const cur = stack.pop()
    res = `${cur}${res}`
  }
  return res === '' ? '/' : res
};
