// 防抖：一定时间内，最多只执行一次操作，如果多次触发，那么重新计时

function debounce(fn, delay) {
  let timer = null;
  return function () {
    if (timer) return;
    timer = setTimeout(() => {
      fn.applay(this, ...arguments);
      clearTimeout(timer);
    }, delay);
  };
}
