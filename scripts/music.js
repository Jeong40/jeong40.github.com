var playBtn = document.getElementById("play-btn");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
//播放器三大金刚（bushi

var musicOne = document.getElementById("music1");
var musicTwo = document.getElementById("music2");
var musicThree = document.getElementById("music3");
var musicFour = document.getElementById("music4");
var musicFive = document.getElementById("music5");
var musicSix = document.getElementById("music6");
var musicSeven = document.getElementById("music7");
//选歌列表

var music = document.getElementById("music");
var source = document.getElementById("source");//音源
var cover = document.getElementById("cover");//曲绘
var musicTitle = document.getElementById("music-title");
var musicAuthor = document.getElementById("music-author")
var playing = document.getElementById("playing");
var paused = document.getElementById("paused");
var progressContainer = document.getElementById("progress-container");
var progress = document.getElementById("progress");
var timeDisplay = document.getElementById("time-display");
var timeInfo = "Loading";
//ui信息显示、装饰

var musicList = ["Days of Love","海中都市","希望の光","Minecraft","太阳照常升起","ICARUS","Alice in a xxxxxxxx"];
var authorList = ["松本文纪","松本文纪","松本文纪","C-418","久石让","Tony Ann","Nagiha"];
var sourceList = ["DoL","CityInTheOcean","LightOfHope","Minecraft","TheSunAlsoRises","ICARUS","AliceInAXxxxxxxx"];
var coverList = ["1","2","3","Minecraft","TheSunAlsoRises","ICARUS","AliceInAXxxxxxxx"];
//歌曲信息

var isPlaying = false;
var Deg = 0;
var interval;
var timeInterval;
var progressInterval;
var num = 0;
var progressX = 0;
//参数

musicTitle.innerHTML = musicList[num];
timeDisplay.innerHTML = "Loading";
//initialize

function rotate(){
  Deg = Deg + 1;
  cover.style.transform = `rotate(${Deg}deg)`;
}
function startPlaying(){
  if(isPlaying){
    isPlaying = false;
    music.pause()
    clearInterval(interval);
    playBtn.className = "iconfont icon-player controls-btn";
  }else{
    isPlaying = true;
    interval = setInterval(rotate,15);
    music.play();
    playBtn.className = "iconfont icon-player-pause controls-btn";
  }
}

function updateInfo(){
  progress.style.width = "0%";
  source.src = `../musics/${sourceList[num]}.mp3`
  musicTitle.innerHTML = musicList[num];
  musicAuthor.innerHTML = authorList[num];
  timeDisplay.innerHTML = "Loading";
  clearInterval(timeInterval);
  clearInterval(progressInterval);
  clearInterval(interval)
  music.load();
  Deg = 0;
  cover.style.transform = "rotate(0deg)";
  cover.style.backgroundImage = `url("../img/music-cover/${coverList[num]}.png")`;
  if (isPlaying) {
    music.play();
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `0${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}
//格式化时间

function timeUpdate(){
  let currentTime = music.currentTime;
  let duration = music.duration;
  timeInfo = formatTime(currentTime) + "/" + formatTime(duration);
  timeDisplay.innerHTML = timeInfo;
}

function nextMusic(){
  if (num < musicList.length - 1){
    num = num + 1;
  }else{
    num = 0;
  }
  updateInfo();
}
function prevMusic(){
  if(num > 0){
    num = num - 1;
  }else{
    num = musicList.length - 1;
  }
  updateInfo();
}
//前后切歌

function updateProgress(){
  progressX = (music.currentTime/music.duration)*100;
  progress.style.width = `${progressX}%`;
}
//进度条更新

progressContainer.addEventListener("click",function(e){
  progressX = (e.offsetX / this.clientWidth);
  if(isPlaying){
    music.currentTime = music.duration * progressX;
  }else{
    music.currentTime = music.duration * progressX;
    music.play();
    interval = setInterval(rotate,15);
    playBtn.className = "iconfont icon-player-pause controls-btn";
    isPlaying = true;
  }
});
//调进度条

music.addEventListener("loadedmetadata",function(){
  timeInterval = setInterval(timeUpdate,500);
  progressInterval = setInterval(updateProgress,500);
  if(isPlaying){
    interval = setInterval(rotate,15);
  }
});



playBtn.addEventListener("click",startPlaying);
next.addEventListener("click",nextMusic);
prev.addEventListener("click",prevMusic);
//三大金刚键功能

musicOne.onclick = function(){
  num = 0;
  updateInfo();
}
musicTwo.onclick = function(){
  num = 1;
  updateInfo();
}
musicThree.onclick = function(){
  num = 2;
  updateInfo(); 
}
musicFour.onclick = function(){
  num = 3;
  updateInfo();
}
musicFive.onclick = function(){
  num = 4;
  updateInfo();
}
musicSix.onclick = function(){
  num = 5;
  updateInfo();
}
musicSeven.onclick = function(){
  num = 6;
  updateInfo();
}
//歌单功能

music.addEventListener("ended",nextMusic);
//自动切歌
