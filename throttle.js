/**
 * 节流函数 -> 一段时间内只允许函数执行一次
 * @param {function} func 
 * @param {*} threshhold 
 */
function throttle (func, threshhold = 500) {
  let timmer;
  let start = new Date(); // 记录函数开始执行的时间

  return function () {
    // 清除定时器（使用该方法来实现防抖）
    clearTimeout(timmer);

    // 获取函数的作用域和参数和当前时间
    let context = this, args = arguments, cur = new Date() - 0;

    if (cur - start >= threshhold) {
      func.apply(context, args);
      start = cur;
    } else {
      // 让方法在脱离事件后也能执行一次
      timmer = setTimeout(function () {
        func.apply(context, args);
      }, threshhold);
    }
  }
}

/**
 * eg.
 * var mousemove = throttle(function(e) {
 *   console.log(e.pageX, e.pageY)
 * });
 * document.querySelector("#panel").addEventListener('mousemove', mousemove);
 * 
 * 应用场合：用在比input, keyup更频繁触发的事件中，如resize, touchmove, mousemove, scroll
 */
