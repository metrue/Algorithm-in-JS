const Queue = require('../common/queue/queue')

const watchedVideosByFriends = (watchedVideos, friends, id, level) => {
  const q = new Queue()
  q.enqueue(id)

  const visited = {}
  visited[id] = true
  const videos = {}
  let lvl = 0
  while (q.size() > 0) {
    const k = q.size()
    if (lvl === level) {
      for (let i = 0; i < k; i++) {
        const cur = q.dequeue()
        for (const v of watchedVideos[cur]) {
          if (!videos[v]) {
            videos[v] = 0
          }
          videos[v] ++
        }
      }
    } else {
      lvl++
      for (let i = 0; i < k; i++) {
        const cur = q.dequeue()
        for (const f of friends[cur]) {
          if (!visited[f]) {
            q.enqueue(f)
            visited[f] = true
          }
        }
      }
    }
  }

 return Object.keys(videos)
    .map(k => ({ key: k, val: videos[k] }))
    .sort((a, b) => {
      if (a.val > b.val) {
        return 1
      } else if (a.val < b.val) {
        return -1
      } else if (a.key > b.key) {
        return 1
      } else if (a.key < b.key) {
        return -1
      } else {
        return 0
      }
    })
    .map(c => c.key)
}

//const watchedVideos = [["A","B"],["C"],["B","C"],["D"]], friends = [[1,2],[0,3],[0,3],[1,2]], id = 0, level = 1
const watchedVideos = [["A","B"],["C"],["B","C"],["D"]], friends = [[1,2],[0,3],[0,3],[1,2]], id = 0, level = 2
console.log(watchedVideosByFriends(watchedVideos, friends, id, level))
