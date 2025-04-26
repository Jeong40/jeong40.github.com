//不会写瞎写的
//一堆“娃”（var）
//初始化俩参数
var cal = "";
var content = "";
var displayC = "0"
//style
var contentStyle = document.getElementById("content").style

//初始化显示
document.getElementById("content").innerHTML = displayC;
//为了方便以后维护（如果我会维护的话）写的
var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btnDot = document.getElementById("btnDot");
var btnJia = document.getElementById("btnJia");
var btnJian = document.getElementById("btnJian");
var brnCheng = document.getElementById("btnCheng");
var btnChu = document.getElementById("btnChu");
var btnDengyu = document.getElementById("btnDengyu")
var btnC = document.getElementById("btnC");

//数字键盘(包括小数点)
btn0.onclick = function() {
  content = content + "0";
  displayC = content;
  cal = cal + "0"
  contentStyle.color = "#000";
  document.getElementById("content").innerHTML = displayC;
}
btn1.onclick = function() {
  content = content + "1";
  displayC = content;
  cal = cal + "1";
  contentStyle.color = "#000";
  document.getElementById("content").innerHTML = displayC;
}
btn2.onclick = function() {
  content = content + "2";
  displayC = content;
  cal = cal + "2";
  contentStyle.color = "#000";
  document.getElementById("content").innerHTML = displayC;
}
btn3.onclick = function() {
  content = content + "3";
  displayC = content;
  cal = cal + "3";
  contentStyle.color = "#000";
  document.getElementById("content").innerHTML = displayC;
}
btn4.onclick = function() {
  content = content + "4";
  displayC = content;
  cal = cal + "4";
  contentStyle.color = "#000";
  document.getElementById("content").innerHTML = displayC;
}
btn5.onclick = function() {
  content = content + "5";
  displayC = content;
  cal = cal + "5";
  contentStyle.color = "#000";
  document.getElementById("content").innerHTML = displayC;
}
btn6.onclick = function() {
  content = content + "6";
  displayC = content;
  cal = cal + "6";
  contentStyle.color = "#000";
  document.getElementById("content").innerHTML = displayC;
}
btn7.onclick = function() {
  content = content + "7";
  displayC = content;
  cal = cal + "7";
  contentStyle.color = "#000";
  document.getElementById("content").innerHTML = displayC;
}
btn8.onclick = function() {
  content = content + "8";
  displayC = content;
  cal = cal + "8";
  contentStyle.color = "#000";
  document.getElementById("content").innerHTML = displayC;
}
btn9.onclick = function() {
  content = content + "9";
  displayC = content;
  cal = cal + "9";
  contentStyle.color = "#000";
  document.getElementById("content").innerHTML = displayC;
}
btnDot.onclick = function() {
  content = content + ".";
  displayC = content;
  cal = cal + "."
  contentStyle.color = "#000";
  document.getElementById("content").innerHTML = displayC;
}
//四则运算（包括清除、等于）
btnJia.onclick = function() {
  displayC = content;
  content = "";
  cal = cal + "+";
  contentStyle.color = "#0f0";
  document.getElementById("content").innerHTML = displayC;
}
btnJian.onclick = function() {
  displayC = content;
  content = "";
  cal = cal + "-"
  contentStyle.color = "#0f0";
  document.getElementById("content").innerHTML = displayC;
}
btnCheng.onclick = function() {
  displayC = content;
  content = "";
  cal = cal + "*"
  contentStyle.color = "#0f0";
  document.getElementById("content").innerHTML = displayC;
}
btnChu.onclick = function() {
  displayC = content;
  content = "";
  cal = cal + "/"
  contentStyle.color = "#0f0";
  document.getElementById("content").innerHTML = displayC;
}
btnDengyu.onclick = function() {
  cal = eval(cal);
  content = cal;
  contentStyle.color = "#000";
  document.getElementById("content").innerHTML = content;
}
btnC.onclick = function() {
  content = "";
  cal = "";
  displayC = "0";
  contentStyle.color = "#000";
  document.getElementById("content").innerHTML = displayC;
}
//LL是LengthLimitation（长度限制）的缩写
//function LL(){
//if(content.length>18){
//content = "";
//cal = "";
//document.getElementById("content").innerHTML = "Errow:(";
//}
//}
//setInterval(LL,100)

//新的数字大小优化
function LL() {
  if (displayC.length >= 1 && displayC.length < 10) {
    contentStyle.fontSize = "50px";
    document.getElementById("warning").innerHTML = "";
  } else {
    if (10 <= displayC.length && displayC.length < 18) {
      contentStyle.fontSize = "30px";
    } else {
      if (displayC.length >= 18 && displayC.length < 26) {
        contentStyle.fontSize = "20px";
      } else {
        if (displayC.length > 26) {
          document.getElementById("warning").innerHTML = "你真的需要那么长的数字吗";
        }
      }
    }
  }
}
setInterval(LL, 50);
//about button
var about = document.getElementById("about");
about.onclick = function() {
  alert("一个功能不多的简易计算器\n可前往Resources下载html文件");
}