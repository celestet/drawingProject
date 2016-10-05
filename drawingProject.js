var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
canvas.fillStyle = "red";
canvas.fillRect(450, 520, 400, 100);//above wheels
canvas.fillRect(200, 450, 100, 100);//sign-x,y,w,h
canvas.fillStyle = "black";
canvas.fillRect(245, 650, 10, 100);//2nd square after sign
canvas.fillRect(245, 550, 10, 100);//1st square after sign
canvas.fillStyle = "brown";
canvas.fillRect(100, 700, 1000, 100);//ground
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

var x;
var y;
var radius;
var startAngle;
var endAngle;
canvas.arc(x, y, radius, startAngle, endAngle)

canvas.fillStyle = "black";
canvas.beginPath();//wheels
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

canvas.fillStyle = "yellow";
canvas.beginPath();//sun
canvas.arc(700, 55, 50, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();
