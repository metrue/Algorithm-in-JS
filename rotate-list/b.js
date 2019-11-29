const rotateRight = (head, k) => {
  const { size, tail } = getSizeAndTail(head)
  k = k % size
  if (k === 0) {
    return head
  }

  let q = head
  for (let i = 1; i < size - k; i++) {
    q = q.next
  }
  const newHead = q.next
  q.next = null
  tail.next = head

  return newHead
}

const getSizeAndTail = (head) => {
  let size = 1
  let tail = head
  while (tail && tail.next) {
    tail = tail.next
    size++
  }
  return { size, tail }
}
