
/* find the canvas element and start manipulating it */
let canvas = document.getElementById("myCanvas");

/* get the 2D rendering context */
let context = canvas.getContext("2d");

/* start manipulating the context object */
context.beginPath();
/* draw the paddle to hit ball */
context.rect(20, 40, 50, 50);
/* color the rect */
context.fillStyle = "#FF0000";
context.fill();
/* finish manipulating context object */
context.closePath();

/* draw the ball */
context.beginPath();
context.arc(240, 260, 20, 0, Math.PI*2, false);
context.fillStyle = "green";
context.fill();
context.closePath();

/* draw the bricks */
context.beginPath();
context.rect(160, 10, 100, 40);
context.strokeStyle = "rgba(0, 0, 255, 0.5)";
context.stroke();
context.closePath();

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