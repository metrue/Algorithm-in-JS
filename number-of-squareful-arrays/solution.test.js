const { numSquarefulPerms, squarefulPerms } = require("./main");

test("0", () => {
  const nums = [1, 17, 8];
  const perms = squarefulPerms(nums);
  expect(perms).toEqual([
    [1, 8, 17],
    [17, 8, 1],
  ]);
});

test("0", () => {
  const nums = [2, 2, 2];
  const perms = squarefulPerms(nums);
  expect(perms).toEqual([
    [2, 2],
  ]);
});
