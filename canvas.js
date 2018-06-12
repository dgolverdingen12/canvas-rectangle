var canvas = document.querySelector('canvas');

// Canvas width & height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// rectangle
var c = canvas.getContext('2d');
c.fillStyle = "#5A9BDC";
c.fillRect(100, 100, 100, 100);

//circle
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(300, 150, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();

