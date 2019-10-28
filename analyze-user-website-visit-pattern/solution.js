const solution = (arr) => {
  if (arr.length <= 3) {
    return arr
  }

  const records = {}
  for (const log of arr) { // O(n)
    const user = log[0]
    const timestamp = log[1]
    const website = log[2]
    if (records[user] === undefined) {
      records[user] = []
    }
    records[user].push({ timestamp, website })
  }

  // sort by time stamp
  for (const user of Object.keys(records)) { // O(k)
    records[user].sort((a, b) => {
      if (a.timestamp > b.timestamp) {
        return 1
      }
      if (a.timestamp < b.timestamp) {
        return -1
      }
      return 0
    })
  }

  const seqs = {}
  for (const user of Object.keys(records)) {  // O(n)
    const paths = records[user]
    for (let i = 0; i < paths.length; i++) {
      for (let j = i + 1; j < paths.length; j++)  {
        for (let k = j + 1; k < paths.length; k++) {
          const key = `${paths[i].website}_${paths[j].website}_${paths[k].website}`
          if (seqs[key] === undefined) {
            seqs[key] = []
          }
          seqs[key].push(user)
        }
      }
    }
  }

  // flat it
  const paths = []
  for (const k of Object.keys(seqs)) {
    paths.push({ path: k, users: seqs[k] })
  }

  paths.sort((a, b) => {  // O(mlogm)
    if (a.users.length < b.users.length) {
      return 1
    } else if (a.users.length > b.users.length) {
      return -1
    } else {
      if (a.path > b.path) {
        return 1
      } else if (a.path < b.path) {
        return -1
      }
      return 0
    }
  })
  return paths[0].path.split('_')
}

module.exports = solution
