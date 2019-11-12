const oddEvenList = (head) => {
  if (!head) {
    return head
  }

  let eHead = head.next

  let e = head.next
  let o = head
  while (e && e.next) {
    o.next = o.next.next
    e.next = e.next.next
    o = o.next
    e = e.next
  }
  odd.next = eHead

  return head
}
