const {
  MedianFinder,
  MedianFinderRange,
  MedianFinderMostInRange,
} = require("./main");

test("MedianFinder", () => {
  const medianFinder = new MedianFinder();
  medianFinder.addNum(1);
  medianFinder.addNum(2);
  medianFinder.addNum(3);

  expect(medianFinder.findMedian()).toBe(2);
});

test("MedianFinderRange", () => {
  const medianFinder = new MedianFinderRange();
  medianFinder.addNum(1);
  medianFinder.addNum(2);
  medianFinder.addNum(3);

  expect(medianFinder.findMedian()).toBe(2);
});

test("MedianFinderMostInRange", () => {
  const medianFinder = new MedianFinderMostInRange();
  medianFinder.addNum(1);
  medianFinder.addNum(2);
  medianFinder.addNum(3);

  // [1,2,3]
  expect(medianFinder.findMedian()).toBe(2);
  medianFinder.addNum(101);
  // [1, 2,3,101]
  expect(medianFinder.findMedian()).toBe(2.5);
  medianFinder.addNum(-1);
  // [-1,1,2,3,101]
  expect(medianFinder.findMedian()).toBe(2);
  medianFinder.addNum(0);
  // [-1,0,1,2,101]
  expect(medianFinder.findMedian()).toBe(1.5);
  medianFinder.addNum(100);
  // [-1,0,1,2,3,100,101]
  expect(medianFinder.findMedian()).toBe(2);
});
