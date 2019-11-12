const Stack = require('../common/stack/stack')

const nextGreaterElement = (nums1, nums2) => {
	if (nums2.length <= 0) {
		return []
	}

	const stack = new Stack()
	stack.push(nums2[0])

	const flag = {}
	for (const n of nums2) {
		while (stack.size() > 0 && stack.top() < n) {
			flag[stack.pop()] = n
		}
		stack.push(n)
	}

	const res = []
	for (const n of nums1) {
		res.push(flag[n] || -1)
	}

	return res
}
