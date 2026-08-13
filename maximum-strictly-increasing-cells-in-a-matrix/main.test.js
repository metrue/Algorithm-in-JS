const { maxStrictlyIncreasing } = require("./main");

test("sorted array", () => {
  const nums = [
    [3, 1],
    [3, 4],
  ];

  // sort nums but with x, y info
  const list = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      list.push({ val: nums[i][j], x: i, y: j });
    }
  }

  const sortedList = list.sort((a, b) => a.val - b.val);

  console.warn(sortedList);

  expect(maxStrictlyIncreasing(sortedList).length).toEqual(2);
});

test("sorted array another", () => {
  const nums = [
    [3, 1, 6],
    [-9, 5, 7],
  ];

  // sort nums but with x, y info
  const list = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      list.push({ val: nums[i][j], x: i, y: j });
    }
  }

  const sortedList = list.sort((a, b) => a.val - b.val);

  console.warn(sortedList);

  expect(maxStrictlyIncreasing(sortedList).length).toEqual(4);
});

test("sorted array another another", () => {
  const nums = [
    [1, 1],
    [1, 1],
  ];

  // sort nums but with x, y info
  const list = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      list.push({ val: nums[i][j], x: i, y: j });
    }
  }

  const sortedList = list.sort((a, b) => a.val - b.val);

  console.warn(sortedList);

  expect(maxStrictlyIncreasing(sortedList).length).toEqual(1);
});

test("sorted array another another", () => {
  const nums = [
    [-1, 5, -9],
    [-2, -5, 0],
  ];

  // sort nums but with x, y info
  const list = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      list.push({ val: nums[i][j], x: i, y: j });
    }
  }

  const sortedList = list.sort((a, b) => a.val - b.val);

  console.warn(sortedList);

  expect(maxStrictlyIncreasing(sortedList).length).toEqual(4);
});
