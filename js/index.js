
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
