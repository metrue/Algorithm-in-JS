const squarefulPerms = function (nums) {
  if (nums.length === 1) {
    return [];
  }

  if (nums.length === 2) {
    if (Math.sqrt(nums[0] + nums[1]) % 1 === 0) {
      if (nums[0] != nums[1]) {
        return [
          [nums[0], nums[1]],
          [nums[1], nums[0]],
        ];
      } else {
        return [[nums[0], nums[1]]];
      }
    }

    return [];
  }

  // dynamic programming to get all the squareful permutations
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const rest = nums.slice(0, i).concat(nums.slice(i + 1));
    const perms = squarefulPerms(rest);
    for (let j = 0; j < perms.length; j++) {
      if (Math.sqrt(nums[i] + perms[j][0]) % 1 === 0) {
        result.push([nums[i]].concat(perms[j]));
      }
    }
  }
  return result;
};

// d[i][j] = d[i][j] + d[k][j - 1] if A[i] + A[k] is a square number

const numSquarefulPerms = function (nums) {
  return squarefulPerms(nums).length;
};

module.exports = {
  numSquarefulPerms,
  squarefulPerms,
};
