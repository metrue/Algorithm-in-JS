const { wordBreak } = require("./main");

it("t0", () => {
  const s = "ca";
  const wordDict = ["c", "a"];
  expect(wordBreak(s, wordDict)).toEqual(["c a"]);
});

it("t1", () => {
  const s = "catsanddog";
  const wordDict = ["cat", "cats", "and", "sand", "dog"];
  expect(wordBreak(s, wordDict)).toEqual(["cats and dog", "cat sand dog"]);
});
