/**
 * 求 2 个数的最大公约数
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function gcd (a, b) {
  return 0 === b ? a : gcd(b, a % b)
}

// test
console.log(gcd(12, 20)) // 4
