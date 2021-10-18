
/* find the canvas element and start manipulating it */
let canvas = document.getElementById("myCanvas");

/* get the 2D rendering context */
let context = canvas.getContext("2d");

/* define the canvas size */
let x = canvas.width/2;
let y = canvas.height-30;

/* variables to handle movement */
let dx = 2;
let dy = -2;

function drawBall() {
	context.beginPath();

	/* draw ball */
	context.arc(x, y, 10, 0, Math.PI*2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
}

function draw() {
	/* erase the canvas to have a clean drawing surface */
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	drawBall();
	
	/* the next coordinates to draw the new ball */
	x += dx;
    y += dy;
}

setInterval(draw, 10);