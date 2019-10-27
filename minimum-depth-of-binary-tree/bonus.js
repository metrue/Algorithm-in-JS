const minDepth = function(root) {
  if (!root) {
    return 0
  }

  if (!root.left) {
    return 1 + minDepth(root.right);
  } else if (!root.right) {
    return 1 + minDepth(root.left);
  } else {
    const L = minDepth(root.left)
    const R = minDepth(root.right)
    return 1 + Math.min(L, R)
  }
}

module.exports = minDepth
