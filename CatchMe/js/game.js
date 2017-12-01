var songMP3 = new Audio('Sonidos/song.mp3');
songMP3.play();
(function($) {
	$(document).ready(function() {
		$('#logo').click(function() {
			document.location.href = 'http://www.spritely.net/';
		});
				
		$('#mainMenu')
			.sprite({fps: 60, no_of_frames: 0})
			.spRandom({top: 100, bottom: 100, left: 0, right: 0})
			//.activeOnClick()

		$('#star')
			.sprite({fps: 6, no_of_frames: 3})

	});
})(jQuery);


var fade = function(){
	songMP3.play();
	$('h2').text("");
	$('a').text("");	
	$('#mainMenu').fadeTo('fast', 0);
	$('#star').fadeTo('fast', 9);
	$('#star').fadeTo('fast', 8);
	$('#star').fadeTo('fast', 7);
	$('#star').fadeTo('fast', 6);
	$('#star').fadeTo('fast', 6);
	$('#star').fadeTo('fast', 6);
	$('#star').fadeTo('fast', 6);
	$('#star').fadeTo('fast', 6);
	$('#star').fadeTo('fast', 6);
	$('#star').fadeTo('fast', 6);
	$('#star').fadeTo('fast', 3);
	$('#star').fadeTo('fast', 2);
	$('#star').fadeTo('fast', 1);
	$('#star').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 9);
	$('#playButton').fadeTo('fast', 8);
	$('#playButton').fadeTo('fast', 7);
	$('#playButton').fadeTo('fast', 6);
	$('#playButton').fadeTo('fast', 5);
	$('#playButton').fadeTo('fast', 4);
	$('#playButton').fadeTo('fast', 3);
	$('#playButton').fadeTo('fast', 2);
	$('#playButton').fadeTo('fast', 0);
	$('#insButton').fadeTo('fast', 9);
	$('#insButton').fadeTo('fast', 8);
	$('#insButton').fadeTo('fast', 7);
	$('#insButton').fadeTo('fast', 6);
	$('#insButton').fadeTo('fast', 5);
	$('#insButton').fadeTo('fast', 4);
	$('#insButton').fadeTo('fast', 3);
	$('#insButton').fadeTo('fast', 2);
	$('#insButton').fadeTo('fast', 0);
	setTimeout(start, 4000);
}
var fade1 = function(){
	$("h2").text("");
	$('a').text("");
	$('#mainMenu').fadeTo('fast', 0);
	$('#star').fadeTo('fast', 9);
	$('#star').fadeTo('fast', 8);
	$('#star').fadeTo('fast', 7);
	$('#star').fadeTo('fast', 6);
	$('#star').fadeTo('fast', 6);
	$('#star').fadeTo('fast', 6);
	$('#star').fadeTo('fast', 6);
	$('#star').fadeTo('fast', 6);
	$('#star').fadeTo('fast', 6);
	$('#star').fadeTo('fast', 6);
	$('#star').fadeTo('fast', 3);
	$('#star').fadeTo('fast', 2);
	$('#star').fadeTo('fast', 1);
	$('#star').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 9);
	$('#playButton').fadeTo('fast', 8);
	$('#playButton').fadeTo('fast', 7);
	$('#playButton').fadeTo('fast', 6);
	$('#playButton').fadeTo('fast', 5);
	$('#playButton').fadeTo('fast', 4);
	$('#playButton').fadeTo('fast', 3);
	$('#playButton').fadeTo('fast', 2);
	$('#playButton').fadeTo('fast', 0);
	$('#insButton').fadeTo('fast', 9);
	$('#insButton').fadeTo('fast', 8);
	$('#insButton').fadeTo('fast', 7);
	$('#insButton').fadeTo('fast', 6);
	$('#insButton').fadeTo('fast', 5);
	$('#insButton').fadeTo('fast', 4);
	$('#insButton').fadeTo('fast', 3);
	$('#insButton').fadeTo('fast', 2);
	$('#insButton').fadeTo('fast', 0);
	setTimeout(showIns, 3000);
}

var showIns  = function(){

	$("h2").text("Instructions");
	var str = "The game is simple to play. \r\nJust use the left and right arrow to move around the screen. When you're close to the star you score."
	$('a').text(str);
	
	$('h1').text("");
	$('#mainMenu').fadeTo('fast', 6);
	$('#mainMenu').fadeTo('fast', 7);
	$('#mainMenu').fadeTo('fast', 8);
	$('#mainMenu').fadeTo('fast', 9);
	$('#mainMenu').fadeTo('fast', 10);
	
	$('#playButton').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 0);
	$('#playButton').fadeTo('fast', 3);
	$('#playButton').fadeTo('fast', 5);
	$('#playButton').fadeTo('fast', 7);
	$('#playButton').fadeTo('fast', 10);

}
function start(){
		$('h2').text("");
		$('a').text("");
	$('canvas').fadeTo('slow', 0.3, function()
{
    $(this).css('background-image', "url('images/moon.png')");
}).fadeTo('slow', 1);
	//var div = document.getElementById("playButton");
	//div.parentNode.removeChild(div);
	$('h1').text("Get Ready!");
	$('#mainMenu').fadeTo('fast', 6);
	$('#mainMenu').fadeTo('fast', 7);
	$('#mainMenu').fadeTo('fast', 8);
	$('#mainMenu').fadeTo('fast', 9);
	$('#mainMenu').fadeTo('fast', 10);
	$('#mainMenu').fadeTo('fast', 9);
	$('#mainMenu').fadeTo('fast', 8);
	$('#mainMenu').fadeTo('fast', 7);
	$('#mainMenu').fadeTo('fast', 6);
	$('#mainMenu').fadeTo('fast', 5);
	$('#mainMenu').fadeTo('fast', 0);
	setTimeout(game, 5000);
}

var game = function(){
	
	var canvas= document.getElementById('canvas');
	var ctx = canvas.getContext("2d");

	canvas.width = 480;
canvas.height = 320;

var btn = document.createElement("BUTTON");
var t = document.createTextNode("Play");       // Create a text node


// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/moon.png";
// Hero image

var heroReady = false;
var ok = true;
var heroImage = new Image();
heroImage.onload = function () {
	if(ok){
		set_hero();
	}
	heroReady = true;
};
heroImage.src = "images/pera.gif";

// star image
var starReady = false;
var starImage = new Image();
starImage.onload = function () {
	starReady = true;
};

starImage.src = "images/box.gif";

var heartReady = false;
var heartImage = new Image();
heartImage.onload = function () {
	heartReady = true;
};

heartImage.src = "images/heart.png";

// Game objects
var hero = {
	speed: 300 // movement in pixels per second
};

var star = { };
var starsCaught1 = 0;
var lifes = 3;
var sp = 2;

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a star
var set_hero = function(){
	hero.x = canvas.width / 2-50;
	hero.y = canvas.height / 2 +100;
	
}

var reset = function () {
	var dropMP3 = new Audio('Sonidos/fall.mp3');
	dropMP3.play();
	star.x =32 + (Math.random() * (canvas.width - 64));
	star.y = 1;
};

// Update game objects
var update = function (modifier) {
	
	heroImage.src = "images/pera.gif";
	if (37 in keysDown) { // Izquierda
		heroImage.src = "images/left.gif";
		ok = false;
		hero.x -= 300* modifier;
		if(hero.x<=0){
			hero.x=0;
		}
	}
	if (39 in keysDown) { // Derecha

		heroImage.src = "images/right.gif";
		
		ok = false;
		hero.x += 300* modifier;
		
		if(hero.x>448){
			hero.x=448;
		}
	}

	if (
		hero.x <= (star.x + 32)
		&& star.x <= (hero.x + 32)
		&& hero.y <= (star.y + 32)
		&& star.y <= (hero.y + 32)
	) {
		++starsCaught1;
		var dropMP3 = new Audio('Sonidos/drop.mp3');
		dropMP3.play();
		reset();
	}
	
};
var sp=150;
var update_star = function(delta){
	star.y+=delta*sp;
	if(starsCaught1==5)
	{
		sp+=1;
	}
	if(starsCaught1==10)
	{
		sp+=0.1;
	}
	if(starsCaught1==25)
	{
		sp+=1;
	}
	if(star.y>=260){
		var dropMP3 = new Audio('Sonidos/drop.mp3');
		dropMP3.play();
		lifes-=1;
		reset();
		if(lifes==0){
			this.stop();
		}	
	}
}
var render = function () {
	if (bgReady) {
		
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}
	if (starReady) {
		ctx.drawImage(starImage, star.x, star.y);
	}
	if (heartReady) {
		if(lifes==3){
		ctx.drawImage(heartImage, 85,45);
		ctx.drawImage(heartImage, 100,45);
		ctx.drawImage(heartImage, 115,45);
		
		}
		if(lifes==2){
		ctx.drawImage(heartImage, 85,45);
		ctx.drawImage(heartImage, 100,45);
		
		}
		if(lifes==1){
		ctx.drawImage(heartImage, 85,45);
		
		}
	}
	ctx.fillStyle = "rgb(248, 248, 255)";
	ctx.font = "20px Papyrus";
	ctx.textAlign = "left";
	ctx.textBaseline = "bottom";
	ctx.fillText("Stars " + starsCaught1, 32, 40);
	ctx.fillStyle = "rgb(248, 248, 255)";
	ctx.font = "20px Papyrus";
	ctx.textAlign = "left";
	ctx.textBaseline = "bottom";
	ctx.fillText("Lifes: " ,32,70);
};
// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;
	update(delta / 1000);
	update_star(delta / 1000);
	render();
	then = now;
	// Request to do this again ASAP
	requestId = requestAnimationFrame(main);
	if(starsCaught1==35){
		window.cancelAnimationFrame(requestId);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		$('h1').text("You Won!");
		$('h2').text("Score: "+starsCaught1);
		songMP3.pause();
		var song2MP3 = new Audio('Sonidos/level.mp3');
		song2MP3.play();
		$('#mainMenu').fadeTo('fast', 7);
		$('#mainMenu').fadeTo('fast', 8);
		$('#mainMenu').fadeTo('fast', 9);
		$('#mainMenu').fadeTo('fast', 10);

		var elem = document.getElementById("playButton");
		elem.value = "Retry?";
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		
		$('#playButton').fadeTo('slow', 1);
		$('#playButton').fadeTo('slow', 2);
		$('#playButton').fadeTo('slow', 3);
		$('#playButton').fadeTo('slow', 4);
		$('#playButton').fadeTo('slow', 5);
		$('#playButton').fadeTo('slow', 6);
		$('#playButton').fadeTo('slow', 6);
		$('#playButton').fadeTo('slow', 6);
		$('#playButton').fadeTo('slow', 7);
		$('#playButton').fadeTo('slow', 7);
		$('#playButton').fadeTo('slow', 8);
		$('#playButton').fadeTo('slow', 8);
		$('#playButton').fadeTo('slow', 9);
		$('#playButton').fadeTo('slow', 9);
		$('#playButton').fadeTo('slow', 10);
	}
	
	if(lifes==0){
		window.cancelAnimationFrame(requestId);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		$('h1').text("Game Over");
		$('h2').text("Score: "+starsCaught1);
		songMP3.pause();
		var song2MP3 = new Audio('Sonidos/level.mp3');
		song2MP3.play();
		$('#mainMenu').fadeTo('fast', 7);
		$('#mainMenu').fadeTo('fast', 8);
		$('#mainMenu').fadeTo('fast', 9);
		$('#mainMenu').fadeTo('fast', 10);
		var elem = document.getElementById("playButton");
		elem.value = "Retry?";
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 0);
		$('#playButton').fadeTo('slow', 1);
		$('#playButton').fadeTo('slow', 2);
		$('#playButton').fadeTo('slow', 3);
		$('#playButton').fadeTo('slow', 4);
		$('#playButton').fadeTo('slow', 5);
		$('#playButton').fadeTo('slow', 6);
		$('#playButton').fadeTo('slow', 6);
		$('#playButton').fadeTo('slow', 6);
		$('#playButton').fadeTo('slow', 7);
		$('#playButton').fadeTo('slow', 7);
		$('#playButton').fadeTo('slow', 8);
		$('#playButton').fadeTo('slow', 8);
		$('#playButton').fadeTo('slow', 9);
		$('#playButton').fadeTo('slow', 9);
		$('#playButton').fadeTo('slow', 10);
	}
	
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();
}




	




