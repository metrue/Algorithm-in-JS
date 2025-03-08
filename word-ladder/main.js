const ladderLength = (beginWord, endWord, wordList) => {
  if (beginWord === endWord) {
    return 0;
  }

  const visited = '';
  const q = [beginWord];
  let level = 0;
  while (q.length > 0) {
    if (level >= 10) {
      return 0;
    }
    level++;
    const size = q.length;
    for (let i = 0; i < size; i++) {
      const cur = q.shift();
      visited.push(q[i]);
      if (cur === endWord) {
        return level;
      }
      for (const w of wordList) {
        if (isValidStep(cur, w)) {
          if (visited.indexOf(w) === -1) {
            q.push(w);
          }
        }
      }
    }
  }
  return 0;
};

const isValidStep = (cur, next) => {
  if (cur.length !== next.length) {
    return false;
  }
  let diffs = 0;
  for (let i = 0; i < cur.length; i++) {
    if (cur[i] !== next[i]) {
      diffs++;
    }
  }
  return diffs === 1;
};

module.exports = {
  ladderLength,
};
