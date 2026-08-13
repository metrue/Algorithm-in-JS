const wordBreak = (s, wordDict) => {
  const res = f(s, wordDict);
  return res.map((r) => r.join(" "));
};

const f = (s, wordDict) => {
  const res = [];

  for (let i = 0; i < s.length; i++) {
    const left = s.slice(0, i);
    const right = s.slice(i);

    if (isValid(left, wordDict)) {
      for (const l of f(right, wordDict)) {
        res.push([left, ...l]);
      }
    }
  }
  if (isValid(s, wordDict)) {
    res.push(s);
  }

  // console.warn(res);
  return res;
};

const isValid = (word, wordDict) => {
  return wordDict.indexOf(word) !== -1;
};

module.exports = {
  wordBreak,
};
