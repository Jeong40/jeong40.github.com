var goodPhotosBox = document.getElementById("good-photos-box");
var calculator = document.getElementById("calculator");
var mcBox = document.getElementById("mc-box");
var music = document.getElementById("music");

var pop = document.getElementById("pop");
var popTitle = document.getElementById("popTitle");
var popContent = document.getElementById("popContent");
var popBtn = document.getElementById("popBtn");
var popClose = document.getElementById("popClose");

goodPhotosBox.onclick = function(){
  popTitle.innerHTML = "Good photos";
  popContent.innerHTML = "网上收集的资源，侵权删";
  popBtn.href = "https://www.123684.com/s/EVPZjv-cjbRd";
  popBtn.innerHTML = "查看";
  popBtn.target = "_blank"
  pop.style.top = "50%";
  
}
calculator.onclick = function(){
  popTitle.innerHTML = "计算器";
  popContent.innerHTML = "自己用javascript写的计算器，仍在更新中";
  popBtn.href = "./pages/calculator.html";
  popBtn.innerHTML = "打开";
  popBtn.target = "_self"
  pop.style.top = "50%";
}
mcBox.onclick = function(){
  popTitle.innerHTML = "这是什么？？？";
  popContent.innerHTML = "项脊轩……但是是在MC里？？？";
  popBtn.href = "https://www.bilibili.com/video/BV16p5yzjEmB/";
  popBtn.innerHTML = "观看";
  popBtn.target = "_blank";
  pop.style.top = "50%";
}
music.onclick = function(){
  popTitle.innerHTML = "Great musics";
  popContent.innerHTML = "一些好听的音乐（若喜欢的话，请支持原作者！）";
  popBtn.href = "../pages/music.html";
  popBtn.innerHTML = "打开";
  popBtn.target = "_self";
  pop.style.top = "50%";
}

popClose.onclick = function(){
  pop.style.top = "150vh";
}