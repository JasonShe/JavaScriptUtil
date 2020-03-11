/**
 * 防抖函数 -> 短时间内多次触发同一个函数，只执行最后一次
 * @param {function} func 执行函数
 * @param {number} delay 时间段
 */
function debounce (func, delay) {
  let timmer; // 维护一个定时器
  return function () {
    // 清除定时器（使用该方法来实现防抖）
    clearTimeout(timmer);
    
    // 获取函数的作用域和参数
    let context = this, args = arguments;
    timmer = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  }
}

/**
 * eg.
 * var validate = debounce(function(e) {
 *  console.log("change", e.target.value, new Date-0)
 * }, 380);
 * document.querySelector("input").addEventListener('input', validate);
 * 
 * 应用场合：提交按钮的点击事件
 */
