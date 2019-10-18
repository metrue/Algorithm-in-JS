const minMeetingRooms = require('./count_meeting_rooms')

test('min rooms', () => {
  const cases = [
    {
      input: [[0, 30],[5, 10],[15, 20]],
      output: 2,
    },
   {
     input: [[7,10],[2,4]],
     output: 1,
   },
  ]

  for (const c of cases) {
    const out = minMeetingRooms(c.input)
    expect(out).toEqual(c.output)
  }
})
