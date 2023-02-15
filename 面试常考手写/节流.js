//  一定时间内，多次触发，只执行一次
function throttle(fn, delay) {
  let timer = null;
  return function () {
    if (!timer) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.applay(this, arguments);
      }, delay);
    }
  };
}
