const fourSum = (nums, target) => {
  const res = []
  dfs(nums.sort((a, b) => {
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    } else {
      return 0
    }
  }), target, [], res)
  return res
}

const dfs = (nums, target, path, res) => {
  if (target === 0 && path.length === 4) {
    res.push(path)
    return
  }

  if (path.length > 4) {
    return
  }

  if (nums.length === 0) {
  console.log("empty")
    return
  }

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    dfs(nums.slice(i + 1), target - nums[i], [...path, nums[i]], res)
  }
}

const nums = [1, 0, -1, 0, -2, 2]
const target = 0
console.log(fourSum(nums, target))
const list = [-493,-482,-482,-456,-427,-405,-392,-385,-351,-269,-259,-251,-235,-235,-202,-201,-194,-189,-187,-186,-180,-177,-175,-156,-150,-147,-140,-122,-112,-112,-105,-98,-49,-38,-35,-34,-18,20,52,53,57,76,124,126,128,132,142,147,157,180,207,227,274,296,311,334,336,337,339,349,354,363,372,378,383,413,431,471,474,481,492]
const t = 6189
console.log(fourSum(list, t))
