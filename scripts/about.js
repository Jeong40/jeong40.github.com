var aboutJeongBtn  = document.getElementById("aboutJeongBtn");
var backBtnOne = document.getElementById("backBtnOne");
var updateBtn = document.getElementById("updateBtn");
var backBtnTwo = document.getElementById("backBtnTwo");
var websiteBtn = document.getElementById("websiteBtn");
var backBtnThree = document.getElementById("backBtnThree");

var updatePage = document.getElementById("updatePage");
var aboutJeongPage = document.getElementById("aboutJeongPage");
var websitePage = document.getElementById("websitePage");


aboutJeongBtn.addEventListener("click",function(){
  aboutJeongPage.style.left = "0px";
})
backBtnOne.addEventListener("click",function(){
  aboutJeongPage.style.left = "100vw";
})
updateBtn.addEventListener("click",function(){
  updatePage.style.left = "0px";
});
backBtnTwo.addEventListener("click",function(){
  updatePage.style.left = "100vw";
});
websiteBtn.addEventListener("click",function(){
  websitePage.style.left = "0px"
});
backBtnThree.addEventListener("click",function(){
  websitePage.style.left = "100vw";
})

