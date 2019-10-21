const connect = (arr) => {
	if (arr.length <= 1) {
		return arr
	}
	const L = arr.length
	const connected = []
	let i = 0
	while (true) {
		if (connected.length >= L) {
			break
		}
		const cur = arr[i++ % L]
		if (connected.length === 0) {
			connected.push(cur)
		} else {
			const start = connected[0]
			const end = connected[connected.length - 1]
			if (cur.toLowerCase().endsWith(start.toLowerCase()[0])) {
				connected.unshift(cur)
			} else if (cur.toLowerCase().startsWith(end.toLowerCase()[end.length -1])) {
				connected.push(cur)
			} else {
				console.log("skip", cur, connected)
			}
		}
	}
	return connected
}

module.exports = connect
