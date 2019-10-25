// dp without memory
const letterCasePermutation = (s) => {
	if (s.length === 0) {
		return []
	}

	if (s.length === 1) {
		if (s.toLowerCase() !== s.toUpperCase()) {
			return [s.toLowerCase(), s.toUpperCase()]
		}
		return [s]
	}

	const sub = letterCasePermutation(s.substr(0, s.length - 1))
	const last = s.substr(s.length - 1)
	const res = []
	if (last.toUpperCase() !== last.toLowerCase()) {
		for (const subRes of sub) {
			res.push(subRes + last.toLowerCase())
			res.push(subRes + last.toUpperCase())
		}
	} else {
		for (const subRes of sub) {
			res.push(subRes + last)
		}
	}
	return res
}
