var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
canvas.fillStyle = "red";//wagon
canvas.fillRect(450, 520, 400, 100);
canvas.fillRect(200, 450, 100, 100);//sign-x,y,w,h
canvas.fillStyle = "white";
canvas.fillRect(300, 610, 125, 50);//smaller wagon
canvas.fillStyle = "black";
canvas.fillRect(245, 650, 10, 100);//2nd square after sign
canvas.fillRect(245, 550, 10, 100);//1st square after sign
canvas.fillStyle = "brown";
canvas.fillRect(100, 700, 1000, 100);//ground
canvas.fillStyle = "chocolate";
canvas.fillRect(445, 350, 10, 100);//tree stump
canvas.fillRect(645, 340, 10, 100);
canvas.fillStyle = "black";

canvas.beginPath();//arrow thing-back
canvas.moveTo(200,300);
canvas.lineTo(300,240);
canvas.lineTo(300,280);
canvas.fill();

canvas.beginPath();//arrow-triangle
canvas.moveTo(200,280);
canvas.lineTo(280,240);
canvas.lineTo(280,280);
canvas.fill();

canvas.fillStyle = "green";
canvas.beginPath();//tree
canvas.moveTo(530,350);//right
canvas.lineTo(445,130);//top
canvas.lineTo(370,350);//left
canvas.fill();

canvas.beginPath();//tree 2
canvas.moveTo(730,340);//right
canvas.lineTo(645,120);//top
canvas.lineTo(570,340);//left
canvas.fill();

var x;
var y;
var radius;
var startAngle;
var endAngle;
canvas.arc(x, y, radius, startAngle, endAngle)

canvas.fillStyle = "black";
canvas.beginPath();//wheels 1
canvas.arc(500, 655, 25, 0, 2*Math.PI);//smaller
canvas.stroke();
canvas.fill();

canvas.beginPath();
canvas.arc(700, 655, 25, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();


canvas.beginPath();
canvas.arc(700, 655, 50, 0, 2*Math.PI);//larger
canvas.stroke();

canvas.beginPath();
canvas.arc(500, 655, 50, 0, 2*Math.PI);
canvas.stroke();

canvas.beginPath();//wheels 2
canvas.arc(325, 680, 12, 0, 2*Math.PI);//smaller
canvas.stroke();
canvas.fill();

canvas.beginPath();
canvas.arc(400, 680, 12, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();


canvas.beginPath();
canvas.arc(400, 680, 24, 0, 2*Math.PI);//larger
canvas.stroke();

canvas.beginPath();
canvas.arc(325, 680, 24, 0, 2*Math.PI);
canvas.stroke();

canvas.fillStyle = "yellow";
canvas.beginPath();//moon
canvas.arc(700, 55, 50, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();
