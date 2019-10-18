const Heap = require('../common/heap/heap')

const minMeetingRooms = (meetings) => {
  meetings.sort((m1, m2) => {
    if (m1[0] > m2[0]) {
      return 1
    }

    if (m1[0] < m2[0]) {
      return -1
    }
    return 0
  })

  const fn = (a, b) => {
    return a < b
  }

  let rooms = 0
  const minHeap = new Heap(fn)
  minHeap.push(meetings[0][1])
  rooms += 1

  for (let i = 1; i < meetings.length; i++) {
    const previous = meetings[i - 1]
    const current = meetings[i]

    if (current[0] < minHeap.top()) {
      rooms += 1
    } else {
      minHeap.pop()
    }
    minHeap.push(current[1])
  }
  return rooms
}

module.exports = minMeetingRooms
