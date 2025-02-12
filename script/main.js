//钟
//一个函数解决一切（bushi
function updateClock() {
  const now = new Date();

  // 获取时间
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // 计算指针角度
  const hourDeg = (hours % 12) * 30 + minutes * 0.5; 
  // 每小时30度，每分钟0.5度
  const minuteDeg = minutes * 6 + seconds * 0.1; 
  // 每分钟6度，每秒钟0.1度
  const secondDeg = seconds * 6; 
  // 每秒钟6度

  // 应用指针旋转角度
  document.getElementById('hour-hand').style.transform = `rotate(${hourDeg}deg)`;
  document.getElementById('minute-hand').style.transform = `rotate(${minuteDeg}deg)`;
  //日期显示
  document.getElementById('second-hand').style.transform = `rotate(${secondDeg}deg)`;
  document.getElementById("date").innerHTML = month + "月" + day + "日";
}

setInterval(updateClock, 1000);

updateClock();
