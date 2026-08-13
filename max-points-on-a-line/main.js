const maxPoints = (points) => {
  const counts = {};

  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      let key = "";
      if (points[i][0] - points[j][0] === 0) {
        key = `x=${points[i][0]}`;
      } else if (points[i][1] - points[j][1] === 0) {
        key = `y=${points[i][1]}`;
      } else {
        const a = (points[i][1] - points[j][1]) / (points[i][0] - points[j][0]);
        const b = points[i][1] - a * points[i][0];
        key = `y=${a}x+${b}`;
      }
      if (counts[key] === undefined) {
        counts[key] = new Set();
      }
      counts[key].add(`(${points[i][0]},${points[i][1]})`);
      counts[key].add(`(${points[j][0]},${points[j][1]})`);
    }
  }

console.warn(counts)
  let max = 0;
  Object.values(counts)
    .map((s) => s.size)
    .forEach((c) => {
      if (c >= max) {
        max = c;
      }
    });
  return max;
};

module.exports = {
  maxPoints,
};
