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
var paused = document.getElementById("paused");
//ui信息显示、装饰

var musicList = ["Days of Love","海中都市","希望の光"];
var authorList = ["松本文纪","松本文纪","松本文纪"];
var sourceList = ["https://cccimg.com/view.php/9405d42cdf464bde862f4475d4112a8e.mp3","https://cccimg.com/view.php/e26fb44ea5cf1a4ba6b89fb652ef7b81.mp3","https://cccimg.com/view.php/3e37a29db7e9d124b75c867b8a81e543.mp3"];
var coverList = ["https://s1.imagehub.cc/images/2025/05/03/053efdee659e879ecc5afe43dea5d84a.th.png","https://s1.imagehub.cc/images/2025/05/03/db85ecf62478f032685f3a65ee288e7a.th.png","https://s1.imagehub.cc/images/2025/05/03/f8117c6c215bdd07e595d6ccf937161c.th.png"]
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
  source.src = `${sourceList[num]}`
  musicTitle.innerHTML = musicList[num];
  musicAuthor.innerHTML = authorList[num];
  music.load();
  Deg = 0;
  cover.style.transform = "rotate(0deg)";
  cover.style.backgroundImage = `url("${coverList[num]}")`
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
  source.src = `${sourceList[num]}`
  musicTitle.innerHTML = musicList[num];
  musicAuthor.innerHTML = authorList[num];
  music.load();
  Deg = 0;
  cover.style.transform = "rotate(0deg)";
  cover.style.backgroundImage = `url("${coverList[num]}")`
  if (isPlaying) {
    music.play();
  }
}

playBtn.addEventListener("click",startPlaying);
next.addEventListener("click",nextMusic);
prev.addEventListener("click",prevMusic);
music.addEventListener("ended",nextMusic);
