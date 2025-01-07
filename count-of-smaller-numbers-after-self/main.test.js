const {
  s1,
  s2,
  s3,
  countSmallerInRightSide,
  mergeSort,
  countInversions,
  binarySearch,
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

test("test 3", () => {
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

test("binarySearch", () => {
  expect(
    binarySearch([{ num: 0 }, { num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }], {
      num: 0,
    })
  ).toEqual(0);
  // expect(binarySearch([0, 1, 2, 3, 4], -1)).toEqual(-1);
  // expect(binarySearch([0, 1, 2, 3, 4], 2)).toEqual(2);
  // expect(binarySearch([0], 0)).toEqual(0);
  // expect(binarySearch([0, 1], 1)).toEqual(1);
  // expect(binarySearch([0, 1, 2, 3, 4], 4)).toEqual(4);
});

test.only("test s3", () => {
  const out = s3([8, 8, 1, 8, 2, 2, 3]);
  console.log("--->", out);
  expect(out).toEqual([4, 4, 0, 3, 0, 0, 0]);
  expect(s3([5, 2, 6, 1])).toEqual([2, 1, 1, 0]);
});
