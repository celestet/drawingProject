var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
canvas.fillStyle = "red";
canvas.fillRect(80, 150, 100, 100);

canvas.beginPath();
canvas.moveTo(160,80);
canvas.lineTo(80,40);
canvas.lineTo(80,80);
canvas.fill();

var x;
var y;
var radius;
var startAngle;
var endAngle;
canvas.arc(x, y, radius, startAngle, endAngle)

canvas.beginPath();
canvas.arc(100, 75, 50, 0, 2*Math.PI);
canvas.stroke();
