const merge = (nums1, m, nums2, n) => {
	let mi = m - 1
	let ni = n - 1

	for (let i = m + n - 1; i >= 0; i--) {
		if (mi < 0) {
			nums1[i] = nums2[ni]
			ni--
		} else if (ni < 0) {
			nums1[i] = nums1[mi]
			mi--
		} else if (nums1[mi] < nums2[ni]) {
			nums1[i] = nums2[ni]
			ni--
		} else {
			nums1[i] = nums1[mi]
			mi--
		}
	}
}

const n1 = []
const n2 = [2]
merge(n1, 0, n2, 1)
console.log(n1)
