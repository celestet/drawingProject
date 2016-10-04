var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
canvas.fillStyle = "red";
canvas.fillRect(450, 520, 400, 100);//above wheels
canvas.fillRect(100, 350, 200, 100);//sign-x,y,w,h
canvas.fillRect(200, 450, 100, 100);
canvas.fillRect(100, 350, 100, 100);
canvas.fillRect(100, 700, 1000, 100);//ground
canvas.fillStyle = "black";

canvas.beginPath();//arrow thing
canvas.moveTo(100,200);
canvas.lineTo(200,140);
canvas.lineTo(200,180);
canvas.fill();

canvas.beginPath();//arrow
canvas.moveTo(100,180);
canvas.lineTo(180,140);
canvas.lineTo(180,180);
canvas.fill();

var x;
var y;
var radius;
var startAngle;
var endAngle;
canvas.arc(x, y, radius, startAngle, endAngle)//wheels

canvas.beginPath();
canvas.arc(500, 655, 25, 0, 2*Math.PI);
canvas.stroke();

canvas.beginPath();
canvas.arc(700, 655, 25, 0, 2*Math.PI);
canvas.stroke();

canvas.beginPath();
canvas.arc(700, 655, 50, 0, 2*Math.PI);
canvas.stroke();



canvas.beginPath();
canvas.arc(500, 655, 50, 0, 2*Math.PI);
canvas.stroke();
