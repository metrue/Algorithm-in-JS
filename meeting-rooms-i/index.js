const hasOverlap = (m, meetings) => {
  for (const meeting of meetings) {
    if (m[0] > meeting[0] && m[0] < meeting[1]) {
      return true
    }
    if (m[1] > meeting[0] && m[1] < meeting[1]) {
      return true
    }
  }
  return false
}

const canAttendAll = (meetings) => {
  if (meetings.length == 1) {
    return true
  }

  // O(nn)
  for (const m of meetings) {
    if (hasOverlap(m, meetings)) {
      return false
    }
  }
  return true
}

const sortThenCheck = (meetings) => {
  if (meetings.length == 1) {
    return meetings
  }

  const s = meetings.sort((m1, m2) => {
    if (m1[0] > m2[0]) {
      return 1
    }
    if (m1[0] < m2[0]) {
      return -1
    }
    return 0
  })

  for (let i = 1; i < meetings.length; i++) {
    const lastMeeting = meetings[i - 1]
    const currentMeeting = meetings[i]
    if (currentMeeting[0] < lastMeeting[1]) {
      return false
    }
  }
  return true
}

module.exports = {
  canAttendAll,
  sortThenCheck,
}
