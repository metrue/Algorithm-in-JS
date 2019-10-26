class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const generateTrees = (n) => {
  if(n === 0) {
    return []
  }
    return generate(1,n)
};

function generate(start,end) {
  let result = []

  if (end === start) {
    return [new TreeNode(start)]
  }

  if (end < start) {
    return [null]
  }
  for (let i = start; i <= end; i++) {
    const left = generate(start, i - 1)
    const right = generate(i + 1,end)
    for (const l of left) {
      for (const r of right) {
        const node = new TreeNode(i)
        result.push(node)

        node.left = l
        node.right = r
      }
    }
  }
  return result
}

console.log(generateTrees(2))
