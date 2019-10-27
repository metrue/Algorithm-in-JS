var isCousins = function(root, x, y) {
  if (!root) {
    return false
  }
  const xParent = getParent(root, x, 0)
  const yParent = getParent(root, y, 0)
  if (!xParent || !yParent) {
    return false
  }
  return xParent.node.val !== yParent.node.val && xParent.height === yParent.height
}

const getParent = (root, val, height) => {
  if (!root) {
    return
  }

  if (root.left && root.left.val === val) {
    return {
      height,
      node: root,
    }
  }

  if (root.right && root.right.val === val) {
    return {
      height,
      node: root,
    }
  }

  return getParent(root.left, val, height + 1) || getParent(root.right, val, height + 1)
}

module.exports = isCousins
