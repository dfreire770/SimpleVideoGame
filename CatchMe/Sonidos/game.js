// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 480;
canvas.height = 320;

document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";
// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	set_hero();
	heroReady = true;
};
heroImage.src = "images/hero.png";

// box image
var boxReady = false;
var boxImage = new Image();
boxImage.onload = function () {
	boxReady = true;
};

boxImage.src = "images/box.jpg";
//boxImage.src = "images/box.png";

//Ship image
var shipReady = false;
var shipImage = new Image();
shipImage.onload = function () {
	set_ship();
	shipReady = true;
	
};
shipImage.src = "images/ship.gif";

// Game objects
var hero = {
	speed: 300 // movement in pixels per second
};

var ship={ };
var box = { };
var boxsCaught1 = 0;
var boxsCaught2 = 0;
var timer=60000;


// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a box
var set_hero = function(){
	hero.x = canvas.width / 2-50;
	hero.y = canvas.height / 2 +100;

}
var set_ship = function(){
	ship.x = canvas.width / 2+50;
	//ship.x = 0;
	ship.y = canvas.height / 2 +100;
	//ship.y = 60;
}
var get_ship_x = function(ship){
	return ship.x;
}

var get_ship_y = function(ship){
	return ship.y;
}

var reset = function () {

	// Throw the box somewhere on the screen randomly
	box.x = 32 + (Math.random() * (canvas.width - 64));
	box.y = 32 + (Math.random() * (canvas.height - 64));
	var dropMP3 = new Audio('Sonidos/fall.mp3');
		dropMP3.play();
	
	//box.x =32 + (Math.random() * (canvas.width - 64));
	//box.y = 60;
};

// Update game objects
var update = function (modifier) {
	if(32 in keysDown){
		
		
	}
	if (38 in keysDown) { // Player holding up
		hero.y -= 300* modifier ;
	}
	if (40 in keysDown) { // Player holding up
		hero.y += 300* modifier ;
	}
	//var dropMP3 = new Audio('Sonidos/boing.mp3');
		
	if (37 in keysDown) { // Player holding left
		hero.x -= 300* modifier;
	//			dropMP3.play();

	}
	if (39 in keysDown) { // Player holding right
		hero.x += 300* modifier;
	}
	// Are they touching?
	if (
		hero.x <= (box.x + 32)
		&& box.x <= (hero.x + 32)
		&& hero.y <= (box.y + 32)
		&& box.y <= (hero.y + 32)
	) {
		++boxsCaught1;
		var dropMP3 = new Audio('Sonidos/drop.mp3');
		dropMP3.play();
		reset();
	}
};

var update_s = function (modifier) {
	if (104 in keysDown) { // Player holding up
		ship.y -= 300* modifier ;
	}
	if (98 in keysDown) { // Player holding up
		ship.y += 300* modifier ;
	}
	//var dropMP3 = new Audio('Sonidos/boing.mp3');
		
	
	if (100 in keysDown) { // Player holding left
		ship.x -= 300* modifier;
	//			dropMP3.play();

	}
	if (102 in keysDown) { // Player holding right
		ship.x += 300* modifier;
	}
	// Are they touching?
	if (
		ship.x <= (box.x + 32)
		&& box.x <= (ship.x + 32)
		&& ship.y <= (box.y + 32)
		&& box.y <= (ship.y + 32)
	) {
		++boxsCaught2;
		var dropMP3 = new Audio('Sonidos/drop.mp3');
		dropMP3.play();
		reset();
	}
};

/*var update_ship = function(delta){
	console.log(ship.x);
}*/



var update_box = function(delta){
	var posx = ship.x;
	
	box.y+=delta*50;
}

// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}
	
	if (shipReady) {
		ctx.drawImage(shipImage, ship.x, ship.y);
		
	}
	if (boxReady) {
		ctx.drawImage(boxImage, box.x, box.y);
	}

	// Score
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "bottom";
	ctx.fillText("Jugador 1: " + boxsCaught1, 32, 32);
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "bottom";
	ctx.fillText("Jugador 2: " + boxsCaught2, 32, 62);
	time=6000-setInterval(1000);
	ctx.fillText("Tiempo: " +time,32,320);
	
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	update_s(delta / 1000);
	update_box(delta / 1000);
	
	render();
	
	then = now;
	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
//var dropMP3 = new Audio('Sonidos/song.mp3');
//		dropMP3.play();
reset();
main();
