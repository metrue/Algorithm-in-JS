const merge = (list1, list2) => {
  const res = []
  let j = 0
  let k = 0
  for (let i = 0; i < list1.length + list2.length; i ++) {
    if (j < list1.length && k < list2.length)  {
      if (list1[j] < list2[k]) {
        res.push(list1[j++])
      } else {
        res.push(list2[k++])
      }
      continue
    }

    if (j >= list1.length) {
      res.push(list2[k++])
      continue
    }

    if (k >= list2.length) {
      res.push(list1[j++])
      continue
    }
  }
  return res
}

const getAllElements = (root1, root2) => {
  const list1 = []
  const list2 = []
  preorder(root1, list1)
  preorder(root2, list2)

console.log(list1)
console.log(list2)
  return merge(list1, list2)
}

const preorder = (root, res = []) => {
  if (!root) {
    return
  }
  if (root.left) {
    preorder(root.left, res)
  }
  res.push(root.val)
  preorder(root.right, res)
}

console.log(merge([1, 2, 4], [0, 1, 3]))
