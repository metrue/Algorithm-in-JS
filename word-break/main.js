const wordBreak = (s, wordDict) => {
  const dict = new Set();
  for (const w of wordDict) {
    dict.add(w);
  }

  const res = f(s, dict, {});
//  console.warn(res);
  return res.length > 0;
};

const f = (s, dict, mem) => {
  if (mem[s]) {
    return mem[s];
  }

  const res = [];
  if (dict.has(s)) {
    res.push([s]);
  }

  for (let i = 0; i < s.length; i++) {
    const left = s.slice(0, i);
    if (dict.has(left)) {
      const right = s.slice(i);
      for (const r of f(right, dict, mem)) {
        // console.warn("--->", r);
        res.push([left, ...r]);
      }
    }
  }
  mem[s] = res;
  return res;
};

module.exports = {
  wordBreak,
};
