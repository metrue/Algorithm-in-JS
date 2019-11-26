const addTwoNumbers = (l1, l2) => {
  const root = new ListNode(null)
  let p = root
  let carry = 0

  while (l1 || l2) {
    let sum = carry
    if (l1 && l2) {
      sum += l1.val + l2.val

      l1 = l1.next
      l2 = l2.next
    } else if (l1) {
      sum += l1.val

      l1 = l1.next
    } else if (l2) {
      sum += l2.val

      l2 = l2.next
    }

    if (sum > 9) {
      sum = sum - 10
      carry = 1
    } else {
      carry = 0
    }
    p.next = new ListNode(sum)
    p = p.next
  }

  if (carry === 1) {
    p.next = new ListNode(1)
  }

  return root.next
}

const l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

const l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

const res = addTwoNumbers(l1, l2)
console.log(res)


