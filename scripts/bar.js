var btn = document.getElementById("menu-btn");
var firstLine = document.getElementById("first-line");
var secondLine = document.getElementById("second-line");
var menu = document.getElementById("menu");
var off = true;


btn.onclick = function() {
  if (off) {
    firstLine.style.transform = "rotate(45deg)";
    firstLine.style.top = "50%";
    secondLine.style.transform = "rotate(-45deg)";
    secondLine.style.top = "50%";
    menu.style.left = "0px"
    off = false;
  } else {
    firstLine.style.transform = "rotate(0deg)";
    firstLine.style.top = "14px";
    secondLine.style.transform = "rotate(0deg)";
    secondLine.style.top = "32px";
    menu.style.left = "-200px";
    off = true;
  }
}