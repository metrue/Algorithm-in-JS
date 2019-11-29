const rotateRight = (head, k) => {
  if (size(head) === 0) {
    return head
  }

  return rotate(head, k % size(head))
};

const rotate = (head, k) => {
  if (k === 0) {
    return head
  }

  if (k === 1) {
    let p = head
    let q = head.next
    while (q && q.next) {
      q = q.next
      p = p.next
    }

    p.next = null
    if (q) {
      q.next = head
      return q
    }
    return head
  }

  const h = rotate(head, k - 1)
  return rotate(h, 1)
}

const size = (head) => {
  let size = 0
  let p = head
  while (p) {
    p = p.next
    size++
  }
  return size
}

