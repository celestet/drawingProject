var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
canvas.fillStyle = "yellow";
canvas.fillRect(300, 350, 100, 100);
canvas.fillRect(200, 250, 100, 100);

canvas.beginPath();
canvas.moveTo(500,580);
canvas.lineTo(580,540);
canvas.lineTo(580,580);
canvas.fill();

canvas.beginPath();
canvas.moveTo(100,180);
canvas.lineTo(180,140);
canvas.lineTo(180,180);
canvas.fill();

var x;
var y;
var radius;
var startAngle;
var endAngle;
canvas.arc(x, y, radius, startAngle, endAngle)

canvas.beginPath();
canvas.arc(500, 475, 50, 0, 2*Math.PI);
canvas.stroke();

canvas.beginPath();
canvas.arc(700, 475, 50, 0, 2*Math.PI);
canvas.stroke();
