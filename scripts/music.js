var playBtn = document.getElementById("play-btn");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
//播放器三大金刚（bushi

var music = document.getElementById("music");
var source = document.getElementById("source");//音源
var cover = document.getElementById("cover");//曲绘
var musicTitle = document.getElementById("music-title");
var musicAuthor = document.getElementById("music-author")
var playing = document.getElementById("playing");
var pasued = document.getElementById("paused");
//ui信息显示、装饰

var musicList = ["Days of Love","海中都市","希望の光"];
var authorList = ["松本文纪","松本文纪","松本文纪"];
var sourceList = ["DoL","CityInTheOcean","LightOfHope"];
var coverList = ["1","2","3"]
//歌曲信息

var isPlaying = false;
var Deg = 0;
var interval;
var num = 0;
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
function nextMusic(){
  if (num < musicList.length - 1){
    num = num + 1;
  }else{
    num = 0;
  }
  source.src = `../musics/${sourceList[num]}.mp3`
  musicTitle.innerHTML = musicList[num];
  musicAuthor.innerHTML = authorList[num];
  music.load();
  Deg = 0;
  cover.style.transform = "rotate(0deg)";
  cover.style.backgroundImage = `url("../img/music-cover/${coverList[num]}.png")`
  if(isPlaying){
    music.play();
  }
}
function prevMusic(){
  if(num > 0){
    num = num - 1;
  }else{
    num = musicList.length - 1;
  }
  source.src = `../musics/${sourceList[num]}.mp3`
  musicTitle.innerHTML = musicList[num];
  musicAuthor.innerHTML = authorList[num];
  music.load();
  Deg = 0;
  cover.style.transform = "rotate(0deg)";
  cover.style.backgroundImage = `url("../img/music-cover/${coverList[num]}.png")`
  if (isPlaying) {
    music.play();
  }
}

playBtn.addEventListener("click",startPlaying);
next.addEventListener("click",nextMusic);
prev.addEventListener("click",prevMusic);
music.addEventListener("ended",nextMusic);
