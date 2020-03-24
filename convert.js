/**
 * 将数字转换为千分制
 * @param {number} num
 * @returns {string}
 */
function convert(num = 0) {
  if (num === null) return ''
  // \d 代表数字 [0-9]
  // + 代表匹配 1 次或多次
  // ? 代表匹配 0 次或 1 次
  // ?=pattern 代表在任何匹配 pattern 的字符串开始处匹配查找字符串
  return num.toString().replace(/\d+/, function(s) {
    return s.replace(/(\d)(?=(\d{3})+$)/g, '$1,') // 插入第 n 个括号匹配的字符串。提示：索引是从1开始
  })
}
