/**
 * 深度克隆
 * @param {object} origin 源对象
 * @returns {object} 克隆后新对象
 */
function deepClone(origin, target = {}) {
  if (origin === null) return null

  for (const prop of Object.keys(origin)) {
    if (typeof origin[prop] === 'object') {
      // 引用类型
      Object.prototype.toString.call(origin[prop]) === '[object Array]'
        ? (target[prop] = [])
        : (target[prop] = {})
      deepClone(origin[prop], target[prop])
    } else {
      // 值类型
      target[prop] = origin[prop]
    }
  }

  return target
}
