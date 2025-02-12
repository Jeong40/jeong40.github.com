//瞎写一通的石山代码
//一堆“娃”（var）
//初始化俩参数
var cal = "";
var content = "";
var initialContent = "0"
//初始化显示
document.getElementById("content").innerHTML = initialContent;
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
  cal = cal + "0"
  document.getElementById("content").innerHTML = content;
}
btn1.onclick = function(){
  content = content + "1";
  cal = cal + "1";
  document.getElementById("content").innerHTML = content;
}
btn2.onclick = function() {
  content = content + "2";
  cal = cal + "2";
  document.getElementById("content").innerHTML = content;
}
btn3.onclick = function() {
  content = content + "3";
  cal = cal + "3";
  document.getElementById("content").innerHTML = content;
}
btn4.onclick = function() {
  content = content + "4";
  cal = cal + "4";
  document.getElementById("content").innerHTML = content;
}
btn5.onclick = function() {
  content = content + "5";
  cal = cal + "5";
  document.getElementById("content").innerHTML = content;
}
btn6.onclick = function() {
  content = content + "6";
  cal = cal + "6";
  document.getElementById("content").innerHTML = content;
}
btn7.onclick = function() {
  content = content + "7";
  cal = cal + "7";
  document.getElementById("content").innerHTML = content;
}
btn8.onclick = function() {
  content = content + "8";
  cal = cal + "8";
  document.getElementById("content").innerHTML = content;
}
btn9.onclick = function() {
  content = content + "9";
  cal = cal + "9";
  document.getElementById("content").innerHTML = content;
}
btnDot.onclick = function() {
  content = content + ".";
  cal = cal + "."
  document.getElementById("content").innerHTML = content;
}
//四则运算（包括清除、等于）
btnJia.onclick = function(){
  content = "";
  cal = cal + "+";
  document.getElementById("content").innerHTML = content;
}
btnJian.onclick = function() {
  content = "";
  cal = cal + "-"
  document.getElementById("content").innerHTML = content;
}
btnCheng.onclick = function() {
  content = "";
  cal = cal + "*"
  document.getElementById("content").innerHTML = content;
}
btnChu.onclick = function() {
  content = "";
  cal = cal + "/"
  document.getElementById("content").innerHTML = content;
}
btnDengyu.onclick = function(){
  cal = eval(cal);
  content = cal;
  document.getElementById("content").innerHTML = content;
}
btnC.onclick = function() {
  content = "";
  cal = ""
  document.getElementById("content").innerHTML = initialContent;
}
//LL是LengthLimitation（长度限制）的缩写
function LL(){
  if(content.length>18){
    content = "";
    cal = "";
    document.getElementById("content").innerHTML = "Errow:(";
  }
}
setInterval(LL,100)

//about button
var about = document.getElementById("about");
about.onclick = function(){
  alert("此计算器全部代码由Jeong编写（包括HTML、CSS和javascript），未经允许，请勿盗用");
}