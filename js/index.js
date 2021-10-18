
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

let ballRadius = 10;

function drawBall() {
	context.beginPath();

	/* draw ball */
	context.arc(x, y, ballRadius, 0, Math.PI*2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
}

function draw() {
	/* erase the canvas to have a clean drawing surface */
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	drawBall();
	
	/* collison detection between ball and walls */
	if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
	
	/* the next coordinates to draw the new ball */
	x += dx;
    y += dy;
}

setInterval(draw, 10);