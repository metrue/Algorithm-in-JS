const printList = (root) => {
  let p = root
  let res = ''
  while(p) {
    if (res) {
      res +=`->${p.val}`
    } else {
      res = `${p.val}`
    }
    p = p.next
  }
  console.log(res)
}

module.exports = { printList }
