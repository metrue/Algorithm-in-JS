const { wordBreak } = require("./main");

it("t0", () => {
  const s = "leetcode";
  const wordDict = ["leet", "code"];
  const res = wordBreak(s, wordDict);
  expect(res).toEqual(true);
});

it("t1", () => {
  const s = "applepenapple";
  const wordDict = ["apple", "pen"];
  const res = wordBreak(s, wordDict);
  expect(res).toEqual(true);
});

it("t2", () => {
  const s = "catsandog";
  const wordDict = ["cats", "dog", "sand", "and", "cat"];
  const res = wordBreak(s, wordDict);
  expect(res).toEqual(false);
});

it("t3", () => {
  const s = "bccdbacdbdacddabbaaaadababadad";
  const wordDict = [
    "cbc",
    "bcda",
    "adb",
    "ddca",
    "bad",
    "bbb",
    "dad",
    "dac",
    "ba",
    "aa",
    "bd",
    "abab",
    "bb",
    "dbda",
    "cb",
    "caccc",
    "d",
    "dd",
    "aadb",
    "cc",
    "b",
    "bcc",
    "bcd",
    "cd",
    "cbca",
    "bbd",
    "ddd",
    "dabb",
    "ab",
    "acd",
    "a",
    "bbcc",
    "cdcbd",
    "cada",
    "dbca",
    "ac",
    "abacd",
    "cba",
    "cdb",
    "dbac",
    "aada",
    "cdcda",
    "cdc",
    "dbc",
    "dbcb",
    "bdb",
    "ddbdd",
    "cadaa",
    "ddbc",
    "babb",
  ];
  const res = wordBreak(s, wordDict);
  expect(res).toEqual(true);
});

it.only("t4", () => {
  const s = "acaaaaabbbdbcccdcdaadcdccacbcccabbbbcdaaaaaadb";
  const wordDict = [
    "abbcbda",
    "cbdaaa",
    "b",
    "dadaaad",
    "dccbbbc",
    "dccadd",
    "ccbdbc",
    "bbca",
    "bacbcdd",
    "a",
    "bacb",
    "cbc",
    "adc",
    "c",
    "cbdbcad",
    "cdbab",
    "db",
    "abbcdbd",
    "bcb",
    "bbdab",
    "aa",
    "bcadb",
    "bacbcb",
    "ca",
    "dbdabdb",
    "ccd",
    "acbb",
    "bdc",
    "acbccd",
    "d",
    "cccdcda",
    "dcbd",
    "cbccacd",
    "ac",
    "cca",
    "aaddc",
    "dccac",
    "ccdc",
    "bbbbcda",
    "ba",
    "adbcadb",
    "dca",
    "abd",
    "bdbb",
    "ddadbad",
    "badb",
    "ab",
    "aaaaa",
    "acba",
    "abbb",
  ];

  const res = wordBreak(s, wordDict);
  expect(res).toEqual(true);
});
