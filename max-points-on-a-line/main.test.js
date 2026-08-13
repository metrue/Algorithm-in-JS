const { maxPoints } = require("./main");

it("t1", () => {
  const points = [
    [1, 1],
    [2, 2],
    [3, 3],
  ];
  const res = maxPoints(points);
  expect(res).toEqual(3);
});

it("t2", () => {
  const points = [
    [1, 1],
    [3, 2],
    [5, 3],
    [4, 1],
    [2, 3],
    [1, 4],
  ];
  const res = maxPoints(points);
  expect(res).toEqual(4);
});
