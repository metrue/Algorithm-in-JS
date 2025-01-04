const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

const merge = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) {
      result.push(right[rightIndex]);
      rightIndex++;
    } else {
      result.push(left[leftIndex]);
      leftIndex++;
    }
  }
  if (leftIndex < left.length) {
    result.push(...left.slice(leftIndex));
  }
  if (rightIndex < right.length) {
    result.push(...right.slice(rightIndex));
  }
  return result;
};

const mergeAndCount = (left, right) => {
  const sorted = [];
  let leftIndex = 0;
  let rightIndex = 0;
  let count = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) {
      sorted.push(right[rightIndex]);
      rightIndex++;
      count += left.length - leftIndex;
    } else {
      sorted.push(left[leftIndex]);
      leftIndex++;
    }
  }
  if (leftIndex < left.length) {
    sorted.push(...left.slice(leftIndex));
  }
  if (rightIndex < right.length) {
    sorted.push(...right.slice(rightIndex));
  }
  return { sorted, count };
};

const countInversions = (list) => {
  const divide = (arr) => {
    if (arr.length <= 1) {
      return { arr, count: 0 };
    }

    const mid = Math.floor(arr.length / 2);
    const left = divide(arr.slice(0, mid));
    const right = divide(arr.slice(mid));
    const { sorted, count } = mergeAndCount(left.arr, right.arr);
    return { arr: sorted, count: left.count + right.count + count };
  };

  const { count } = divide(list);
  return count;
};

const countSmallerInRightSide = (nums) => {
  const mergeAndCount = (left, right) => {
    const sorted = [];
    let leftIndex = 0;
    let rightIndex = 0;
    let count = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex].num <= right[rightIndex].num) {
        console.warn("set -->", count);
        left[leftIndex].count += count;
        sorted.push(left[leftIndex]);
        leftIndex++;
      } else {
        count++;
        console.warn("add -->", count);
        sorted.push(right[rightIndex]);
        rightIndex++;
      }
    }
    if (leftIndex < left.length) {
      // TODO: to understand this part
      left[leftIndex].count += count;
      sorted.push(...left.slice(leftIndex));
    }
    if (rightIndex < right.length) {
      sorted.push(...right.slice(rightIndex));
    }
    return sorted;
  };

  const divide = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = divide(arr.slice(0, mid));
    const right = divide(arr.slice(mid));
    return mergeAndCount(left, right);
  };

  const numsWithIndex = nums.map((num, index) => ({ num, index, count: 0 }));
  const counts = Array(nums.length).fill(0);
  const counted = divide(numsWithIndex);
  console.warn(counted);
  for (const item of counted) {
    counts[item.index] += item.count;
  }
  //console.warn(counts);
  return counts;
};

//
// Time ccomplexity: O(n^2)
const s1 = function (nums) {
  const counts = Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        counts[i]++;
      }
    }
  }
  return counts;
};

const s2 = function (nums) {
  const counts = Array(nums.length).fill(0);
  const list = nums.map((num, index) => ({ num, index }));
  list.sort((a, b) => a.num - b.num);
  for (let i = 0; i < list.length; i++) {
    const { index } = list[i];
    counts[index] = i;
  }

  console.warn(counts);
  return counts;
};

module.exports = {
  s1,
  s2,
  mergeSort,
  countInversions,
  countSmallerInRightSide,
};
