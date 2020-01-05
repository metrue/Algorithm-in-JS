const Node = require('../common/linked_list/node')

// const reverse = (head) => {
//   if (head) {
//     reverse(head.next)
//     console.log(head.val)
//   }
// }
//
const head = new Node(0)
const n1 = new Node(1)
const n2 = new Node(1)
head.next = n1
n1.next = n2

// reverse(head)

const calculate = (head, res = { count, sum }) => {
  if (head) {
    calculate(head.next, res)
    res.sum += head.val * Math.pow(2, res.count)
    res.count++
  }
}

const getDecimalValue = (head) => {
  const res = { count: 0, sum: 0 }
  calculate(head, res)
console.log(res)
  return res.sum
}

getDecimalValue(head)
