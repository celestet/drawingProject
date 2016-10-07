var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
canvas.fillStyle = "red";//wagon
canvas.fillRect(350, 520, 400, 100);
canvas.fillRect(100, 450, 100, 100);//sign-x,y,w,h
canvas.fillStyle = "white";
canvas.fillRect(200, 610, 125, 50);//smaller wagon
canvas.fillStyle = "black";
canvas.fillRect(145, 650, 10, 100);//2nd square after sign
canvas.fillRect(145, 550, 10, 100);//1st square after sign
canvas.fillStyle = "brown";
canvas.fillRect(0, 700, 1000, 100);//ground
canvas.fillStyle = "chocolate";
canvas.fillRect(445, 350, 10, 100);//tree stump
canvas.fillRect(645, 340, 10, 100);
canvas.fillRect(245, 340, 10, 100);

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

canvas.beginPath();//tree 3
canvas.moveTo(330,340);//right
canvas.lineTo(245,120);//top
canvas.lineTo(170,340);//left
canvas.fill();

var x;
var y;
var radius;
var startAngle;
var endAngle;
canvas.arc(x, y, radius, startAngle, endAngle)

canvas.fillStyle = "black";
canvas.beginPath();//wheels 1
canvas.arc(400, 655, 25, 0, 2*Math.PI);//smaller
canvas.stroke();
canvas.fill();

canvas.beginPath();
canvas.arc(600, 655, 25, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();


canvas.beginPath();
canvas.arc(600, 655, 50, 0, 2*Math.PI);//larger
canvas.stroke();

canvas.beginPath();
canvas.arc(400, 655, 50, 0, 2*Math.PI);
canvas.stroke();

canvas.beginPath();//wheels 2
canvas.arc(225, 680, 12, 0, 2*Math.PI);//smaller
canvas.stroke();
canvas.fill();

canvas.beginPath();
canvas.arc(300, 680, 12, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();


canvas.beginPath();
canvas.arc(300, 680, 24, 0, 2*Math.PI);//larger
canvas.stroke();

canvas.beginPath();
canvas.arc(225, 680, 24, 0, 2*Math.PI);
canvas.stroke();

canvas.fillStyle = "yellow";
canvas.beginPath();//moon
canvas.arc(700, 55, 50, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();
