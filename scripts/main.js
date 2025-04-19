var goodPhotosBox = document.getElementById("good-photos-box");
var calculator = document.getElementById("calculator");

var pop = document.getElementById("pop");
var popTitle = document.getElementById("popTitle");
var popContent = document.getElementById("popContent");
var popBtn = document.getElementById("popBtn");
var popClose = document.getElementById("popClose");

goodPhotosBox.onclick = function(){
  pop.style.zIndex = "10";
  popTitle.innerHTML = "好看的图片";
  popContent.innerHTML = "网上搜集的资源，侵权删（12大概率是ai作图，所以我把它稍微修改了一下，以显得更自然些,封面图就是修改后的12）";
  popBtn.href = "https://www.123684.com/s/EVPZjv-cjbRd";
  popBtn.innerHTML = "查看";
}
calculator.onclick = function(){
  pop.style.zIndex = "10";
  popTitle.innerHTML = "计算器";
  popContent.innerHTML = "Jeong用javascript开发的计算器，仍在更新中";
  popBtn.href = "./pages/calculator.html";
  popBtn.innerHTML = "打开";
}

popClose.onclick = function(){
  pop.style.zIndex = "-2";
  popTitle.innerHTML = "";
  popContent.innerHTML = "";
  popBtn.href = "./";
  popBtn.innerHTML = "";
}