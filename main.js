canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var roverWidth = 80;
var roverHeight = 100;
var roverx = 10;
var rovery = 10;
var marspic = "mars.jpg";
var roverpic = "rover.png";

function add(){
    backgroundpic = new Image();
    backgroundpic.onload=uploadbackground;
    backgroundpic.src=marspic;
    roverimage = new Image();
    roverimage.onload=uploadrover;
    roverimage.src=roverpic;
}
function uploadbackground(){
    ctx.drawImage(backgroundpic, 0, 0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(roverimage, roverx, rovery, roverWidth, roverHeight );
}
window.addEventListener("keydown",mykeydown)
function mykeydown(e){
code=e.keyCode;
if(code=='37'){
   left();
}
if(code=='38'){
    top();
}
if(code=='39'){
    right();
}
if(code=='40'){
    bottom();
}
console.log(code);
}