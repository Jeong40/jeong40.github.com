var playBtn = document.getElementById("play-btn");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
//播放器三大金刚（bushi

var musicOne = document.getElementById("music1");
var musicTwo = document.getElementById("music2");
var musicThree = document.getElementById("music3");
var musicFour = document.getElementById("music4");
var musicFive = document.getElementById("music5");
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
//ui信息显示、装饰

var musicList = ["Days of Love","海中都市","希望の光","Minecraft","太阳照常升起"];
var authorList = ["松本文纪","松本文纪","松本文纪","C-418","久石让"];
var sourceList = ["DoL","CityInTheOcean","LightOfHope","Minecraft","TheSunAlsoRises"];
var coverList = ["1","2","3","Minecraft","TheSunAlsoRises"]
//歌曲信息

var isPlaying = false;
var Deg = 0;
var interval;
var num = 0;
var progressX = 0;
//参数

musicTitle.innerHTML = musicList[num];
//initialize

function rotate(){
  Deg = Deg + 1;
  cover.style.transform = `rotate(${Deg}deg)`
}
function startPlaying(){
  if(isPlaying){
    isPlaying = false;
    music.pause()
    clearInterval(interval);
     playing.style.color = "rgba(0,0,0,0.0)";
     paused.style.color = "rgba(0,0,0,1.0)";
  }else{
    isPlaying = true;
    interval = setInterval(rotate,15);
    music.play();
    playing.style.color = "rgba(0,0,0,1.0)";
    paused.style.color = "rgba(0,0,0,0.0)"
  }
}

function updateInfo(){
  progress.style.width = "0%";
  source.src = `https://cdn.jsdelivr.net/gh/jeong40/jeong40.github.com/musics/${sourceList[num]}.mp3`
  musicTitle.innerHTML = musicList[num];
  musicAuthor.innerHTML = authorList[num];
  music.load();
  Deg = 0;
  cover.style.transform = "rotate(0deg)";
  cover.style.backgroundImage = `url("https://cdn.jsdelivr.net/gh/jeong40/jeong40.github.com/img/music-cover/${coverList[num]}.png")`;
    if (isPlaying) {
    music.play();
  }
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

function updateProgress(){
  progressX = (music.currentTime/music.duration)*100;
  progress.style.width = `${progressX}%`;
}
//进度条更新

progressContainer.addEventListener("click",function(e){
  progressX = (e.offsetX/this.clientWidth);
  music.currentTime = music.duration * progressX;
});



setInterval(updateProgress,500);


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
//歌单功能

music.addEventListener("ended",nextMusic);
//自动切歌

