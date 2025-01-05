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
        left[leftIndex].count += count;
        sorted.push(left[leftIndex]);
        leftIndex++;
      } else {
        count++;
        sorted.push(right[rightIndex]);
        rightIndex++;
      }
    }

    while (leftIndex < left.length) {
      // TODO: to understand this part
      left[leftIndex].count += count;
      sorted.push(left[leftIndex]);
      leftIndex++;
    }

    while (rightIndex < right.length) {
      sorted.push(right[rightIndex]);
      rightIndex++;
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

  for (const item of counted) {
    counts[item.index] += item.count;
  }

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

const s3 = (arr) => {
  const nums = arr.map((num, index) => ({ num, index }));
  nums.sort((a, b) => a.num - b.num);

  const counts = Array(nums.length).fill(0);
  for (const n of nums) {
    const idx = binarySearch(nums, n);
    for (let j = 0; j < idx; j++) {
      if (nums[j].index > n.index) {
        counts[n.index]++;
      }
    }
  }
  return counts;
};

// O
const binarySearch = (arr, target) => {
  if (arr.length === 0) {
    return -1;
  }

  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target.num === arr[mid].num) {
      return mid;
    }
    if (target.num > arr[mid].num) {
      left = mid + 1;
    }
    if (target.num < arr[mid].num) {
      right = mid - 1;
    }
  }
  return -1;
};

module.exports = {
  s1,
  s2,
  s3,
  mergeSort,
  countInversions,
  countSmallerInRightSide,
  binarySearch,
};
