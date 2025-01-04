const {
  s1,
  s2,
  countSmallerInRightSide,
  mergeSort,
  countInversions,
} = require("./main");

test("test 1", () => {
  expect(s1([8, 1, 2, 2, 3])).toEqual([4, 0, 0, 0, 0]);
  expect(s1([5, 2, 6, 1])).toEqual([2, 1, 1, 0]);
});

test("test 2", () => {
  // expect(s2([8, 1, 2, 2, 3])).toEqual([4, 0, 0, 0, 0]);
  // expect(s2([5, 2, 6, 1])).toEqual([2, 1, 1, 0]);
});

test("mergeSort", () => {
  const nums = [5, 2, 6, 1];
  expect(mergeSort(nums)).toEqual([1, 2, 5, 6]);
});

test("countInversions", () => {
  const nums = [4, 3, 2, 1];
  expect(countInversions(nums)).toEqual(6);
});

test.only("test 3", () => {
  expect(countSmallerInRightSide([8, 1, 2, 2, 3])).toEqual([4, 0, 0, 0, 0]);
  expect(countSmallerInRightSide([5, 2, 6, 1])).toEqual([2, 1, 1, 0]);
  expect(
    countSmallerInRightSide([
      26, 78, 27, 100, 33, 67, 90, 23, 66, 5, 38, 7, 35, 23, 52, 22, 83, 51, 98,
      69, 81, 32, 78, 28, 94, 13, 2, 97, 3, 76, 99, 51, 9, 21, 84, 66, 65, 36,
      100, 41,
    ])
  ).toEqual([
    10, 27, 10, 35, 12, 22, 28, 8, 19, 2, 12, 2, 9, 6, 12, 5, 17, 9, 19, 12, 14,
    6, 12, 5, 12, 3, 0, 10, 0, 7, 8, 4, 0, 0, 4, 3, 2, 0, 1, 0,
  ]);
});
