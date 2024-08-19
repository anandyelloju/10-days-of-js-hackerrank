// Bitwise Operators

function getMaxLessThanK(n, k) {
  let out_max = 0;

  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let current = i & j;
      if (current < k && current > out_max) {
        out_max = current;
      }
    }
  }

  return out_max;
}
