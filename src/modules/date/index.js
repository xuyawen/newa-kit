/*
 * date
 */

function formatDate() {
  
}

/**
 * 格式化时间戳
 * @param  time {number} 时间戳
 * @param  fmt {string} 格式
 * @return {String}
 */
  function formatTime(time, fmt = 'yyyy-MM-dd hh:mm:ss') {
  let ret;
  let date = new Date(time);
  let opt = {
    "y+": date.getFullYear().toString(),
    "M+": (date.getMonth() + 1).toString(),     //月份
    "d+": date.getDate().toString(),     //日
    "h+": date.getHours().toString(),     //小时
    "m+": date.getMinutes().toString(),     //分
    "s+": date.getSeconds().toString(),     //秒
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    }
  }
  return fmt;
}

module.exports = {
  formatDate,
  formatTime,
}