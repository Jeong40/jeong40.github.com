/* Time display */
function updateClock() {
  const now = new Date();

  // 获取当前时间
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // 计算指针的角度
  const hourDeg = (hours % 12) * 30 + minutes * 0.5; // 每小时30度，每分钟0.5度
  const minuteDeg = minutes * 6 + seconds * 0.1; // 每分钟6度，每秒钟0.1度
  const secondDeg = seconds * 6; // 每秒钟6度

  // 更新指针的旋转角度
  document.getElementById('hour-hand').style.transform = `rotate(${hourDeg}deg)`;
  document.getElementById('minute-hand').style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById('second-hand').style.transform = `rotate(${secondDeg}deg)`;
}

// 每秒更新一次
setInterval(updateClock, 1000);

// 初始化
updateClock();
/* feedback animation */
document.addEventListener('click', function(event) {
    const feedbackContainer = document.getElementById('feedback-container');
    
    // 创建一个新的反馈圆圈
    const circle = document.createElement('div');
    circle.classList.add('feedback-circle');
    
    // 设置圆圈的位置为点击位置
    circle.style.left = `${event.clientX}px`;
    circle.style.top = `${event.clientY}px`;
    
    // 将圆圈添加到容器中
    feedbackContainer.appendChild(circle);
    
    // 动画结束后移除圆圈
    circle.addEventListener('animationend', function() {
        feedbackContainer.removeChild(circle);
    });
});
