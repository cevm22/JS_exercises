


var states = Object.freeze({
	SplashScreen: 0,
	GameScreen: 1,
	ScoreScreen: 2
});

var currentstate;

var gravity = 0.35;
var velocity = 1;
var position = 180;
var rotation = 0;
var jump = -4.6;
//var flyArea = $("#flyarea").height();

var score = 0;
var highscore = 0;


var pipeheight = 120;
var pipewidth = 55;
var pipes = new Array();

var replayclickable = false;

//sounds
var volume = 20;
//var soundJump = new buzz.sound("app/sounds/games/game-bird/sfx_wing.ogg");
//var soundScore = new buzz.sound("app/sounds/games/game-bird/sfx_point.ogg");
//var soundHit = new buzz.sound("app/sounds/games/game-bird/sfx_hit.ogg");
//var soundDie = new buzz.sound("app/sounds/games/game-bird/sfx_die.ogg");
//var soundSwoosh = new buzz.sound("app/sounds/games/game-bird/sfx_swooshing.ogg");
//buzz.all().setVolume(volume);

var time_start = 0;

//loops
var loopGameloop;
var loopPipeloop;

$(document).ready(function() {
	//get the highscore
	var savedscore = getCookie("highscore");
	if(savedscore != "")
		highscore = parseInt(savedscore);
	
	//start with the splash screen
	showSplash();
});

function getCookie(cname)
{
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) 
	{
		var c = ca[i].trim();
		if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	}
	return "";
}

function setCookie(cname,cvalue,exdays)
{
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

function showSplash()
{
	currentstate = states.SplashScreen;
	
	// ÑƒÑÑ‚Ð°Ð½Ð¾Ð²Ð¸Ñ‚ÑŒ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ñ Ð¿Ð¾ ÑƒÐ¼Ð¾Ð»Ñ‡Ð°Ð½Ð¸ÑŽ (ÑÐ½Ð¾Ð²Ð°)
	velocity = 0;
	position = 150;
	rotation = 0;
	score = 0;
	
	//update the player in preparation for the next game
	$("#player").css({ y: 0, x: 0});
	updatePlayer($("#player"));
	
	//soundSwoosh.stop();
	//soundSwoosh.play();
	
	//clear out all the pipes if there are any
	$(".pipe").remove();
	pipes = new Array();
	
	//make everything animated again
	$(".animated").css('animation-play-state', 'running');
	$(".animated").css('-webkit-animation-play-state', 'running');
	
	//fade in the splash
	$("#splash").transition({ opacity: 1 }, 2000, 'ease');
}

function startGame()
{
	time_start = parseInt(Date.now() / 1000);

	$('#reward-amount > span').text(0);

	currentstate = states.GameScreen;
	
	// Ð·Ð°Ñ‚ÑƒÑ…Ð°Ð½Ð¸Ðµ Ð²ÑÐ¿Ð»ÐµÑÐºÐ°
	$("#splash").stop();
	$("#splash").transition({ opacity: 0 }, 500, 'ease');
	
	//update the big score
	setBigScore();

	// Ð·Ð°Ð¿ÑƒÑÐºÐ°ÐµÐ¼ Ð½Ð°ÑˆÐ¸ Ñ†Ð¸ÐºÐ»Ñ‹
	var updaterate = 1000.0 / 60.0 ; //60 times a second
	loopGameloop = setInterval(gameloop, updaterate);
	loopPipeloop = setInterval(updatePipes, 1400);
	
	//jump from the start!
	playerJump();
}

function updatePlayer(player)
{
	//rotation
	rotation = Math.min((velocity / 10) * 90, 90);
	
	//apply rotation and position
	$(player).css({ rotate: rotation, top: position });
}

function gameloop() {
	var player = $("#player");
	
	//update the player speed/position
	velocity += gravity;
	position += velocity;
	
	//update the player
	updatePlayer(player);
	
	// ÑÐ¾Ð·Ð´Ð°ÐµÐ¼ Ð¾Ð³Ñ€Ð°Ð½Ð¸Ñ‡Ð¸Ð²Ð°ÑŽÑ‰Ð¸Ð¹ Ð¿Ñ€ÑÐ¼Ð¾ÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº
	var box = document.getElementById('player').getBoundingClientRect();
	var origwidth = 34.0;
	var origheight = 29.0;
	
	var boxwidth = origwidth - (Math.sin(Math.abs(rotation) / 90) * 8);
	var boxheight = (origheight + box.height) / 2;
	var boxleft = ((box.width - boxwidth) / 2) + box.left;
	var boxtop = ((box.height - boxheight) / 2) + box.top;
	var boxright = boxleft + boxwidth;
	var boxbottom = boxtop + boxheight;
	
	//did we hit the ground?
	if(box.bottom >= $("#land").offset().top)
	{
		playerDead();
		return;
	}
	
	//have they tried to escape through the ceiling? :o
	var ceiling = $("#ceiling");
	if(boxtop <= (ceiling.offset().top + ceiling.height()))
		position = 0;
	
	//we can't go any further without a pipe
	if(pipes[0] == null)
		return;
	
	//determine the bounding box of the next pipes inner area
	var nextpipe = pipes[0];
	var nextpipeupper = nextpipe.children(".pipe_upper");
	
	var pipetop = nextpipeupper.offset().top + nextpipeupper.height();
	var pipeleft = nextpipeupper.offset().left - 2; // for some reason it starts at the inner pipes offset, not the outer pipes.
	var piperight = pipeleft + pipewidth;
	var pipebottom = pipetop + pipeheight;
	
	//have we gotten inside the pipe yet?
	if(boxright > pipeleft)
	{
		//we're within the pipe, have we passed between upper and lower pipes?
		if(boxtop > pipetop && boxbottom < pipebottom)
		{
			//yeah! we're within bounds
			
		}
		else
		{
			//no! we touched the pipe
			playerDead();
			return;
		}
	}
	
	
	//have we passed the imminent danger?
	if(boxleft > piperight)
	{
		//yes, remove it
		pipes.splice(0, 1);
		
		//and score a point
		playerScore();
	}
}

// ÐžÐ±Ñ€Ð°Ð±Ð°Ñ‚Ñ‹Ð²Ð°ÐµÐ¼ Ð¿Ñ€Ð¾Ð±ÐµÐ»
$(document).keydown(function(e){
	//space bar!
	if(e.keyCode == 32)
	{
		// Ð² ScoreScreen ÑƒÐ´Ð°Ñ€ Ð¿Ð¾ Ð¿Ñ€Ð¾Ð±ÐµÐ»Ñƒ Ð´Ð¾Ð»Ð¶ÐµÐ½ Ð½Ð°Ð¶Ð¸Ð¼Ð°Ñ‚ÑŒ ÐºÐ½Ð¾Ð¿ÐºÑƒ Â«Ð²Ð¾ÑÐ¿Ñ€Ð¾Ð¸Ð·Ð²ÐµÐ´ÐµÐ½Ð¸ÐµÂ». Ð¸Ð½Ð°Ñ‡Ðµ ÑÑ‚Ð¾ Ð¿Ñ€Ð¾ÑÑ‚Ð¾ Ð¾Ð±Ñ‹Ñ‡Ð½Ñ‹Ð¹ Ð¿Ñ€Ð¾Ð±ÐµÐ»
		if(currentstate == states.ScoreScreen)
			$("#replay").click();
		else
			screenClick();
	}
});

//Handle mouse down OR touch start
if("ontouchstart" in window)
	$(document).on("touchstart", screenClick);
else
	$(document).on("mousedown", screenClick);

function screenClick()
{
	if(currentstate == states.GameScreen)
	{
		playerJump();
	}
	else if(currentstate == states.SplashScreen)
	{
		startGame();
	}
}

function playerJump()
{
	velocity = jump;
	//play jump sound
	//soundJump.stop();
	//soundJump.play();
}

function setBigScore(erase)
{
	var elemscore = $("#bigscore");
	elemscore.empty();
	
	if(erase)
		return;
	
	var digits = score.toString().split('');
	for(var i = 0; i < digits.length; i++)
		elemscore.append("<img src='app/images/games/bird/font_big_" + digits[i] + ".png' alt='" + digits[i] + "'>");
}

function setSmallScore()
{
	var elemscore = $("#currentscore");
	elemscore.empty();
	
	var digits = score.toString().split('');
	for(var i = 0; i < digits.length; i++)
		elemscore.append("<input name='skidka1' id='skidka1' type='text' class='sales' value='" + digits[i] + "%'>");
}

function setSmallScore()
{
	var elemscore = $("#currentscore");
	elemscore.empty();
	
	var digits = score.toString().split('');
	for(var i = 0; i < digits.length; i++)
		elemscore.append("Ð’Ð°ÑˆÐ° ÑÐºÐ¸Ð´ÐºÐ°<br><img src='app/images/games/bird/font_big_" + digits[i] + ".png' alt='" + digits[i] + "'>");
}


function setHighScore()
{
	var elemscore = $("#sale");
	elemscore.empty();
	
	var digits = highscore.toString().split('');
	for(var i = 0; i < digits.length; i++)
		elemscore.append("<input name='skidka' id='skidka' type='text' class='form-control' value='" + digits[i] + "'>");
}


function setMedal()
{
	var elemmedal = $("#medal");
	elemmedal.empty();
	
	if(score < 10)
		// ÑÐ¸Ð³Ð½Ð°Ð» Ð¾ Ñ‚Ð¾Ð¼, Ñ‡Ñ‚Ð¾ Ð¼ÐµÐ´Ð°Ð»ÑŒ Ð½Ðµ Ð²Ñ‹Ð¸Ð³Ñ€Ð°Ð½Ð°
		return false;
	
	if(score >= 10)
		medal = "bronze";
	if(score >= 20)
		medal = "silver";
	if(score >= 30)
		medal = "gold";
	
	elemmedal.append('<img src="app/images/games/bird/medal_' + medal +'.png" alt="' + medal +'">');
	
	//signal that a medal has been won
	return true;
}

function playerDead()
{
	//stop animating everything!
	$(".animated").css('animation-play-state', 'paused');
	$(".animated").css('-webkit-animation-play-state', 'paused');
	
	//drop the bird to the floor
	var playerbottom = $("#player").position().top + $("#player").width(); //we use width because he'll be rotated 90 deg
	var floor = flyArea;
	var movey = Math.max(0, floor - playerbottom);
	$("#player").transition({ y: movey + 'px', rotate: 90}, 1000, 'easeInOutCubic');
	
	//it's time to change states. as of now we're considered ScoreScreen to disable left click/flying
	currentstate = states.ScoreScreen;

	//destroy our gameloops
	clearInterval(loopGameloop);
	clearInterval(loopPipeloop);
	loopGameloop = null;
	loopPipeloop = null;

	//mobile browsers don't support buzz bindOnce event
	if(isIncompatible.any())
	{
		//skip right to showing score
		showScore();
	}
	else
	{
		//play the hit sound (then the dead sound) and then show score
		//soundHit.play().bindOnce("ended", function() {
		//	soundDie.play().bindOnce("ended", function() {
				showScore();
		///	});
		//});
	}
}

function showScore()
{
	//unhide us
	$("#scoreboard").css("display", "block");
	
	//remove the big score
	setBigScore(true);
	
	//have they beaten their high score?
	if(score > highscore)
	{
		//yeah!
		highscore = score;
		//save it!
		setCookie("highscore", highscore, 999);
	}
	
	//update the scoreboard
	setSmallScore();
	setHighScore();
	var wonmedal = setMedal();
	
	//SWOOSH!
	//soundSwoosh.stop();
	//soundSwoosh.play();
	
	//show the scoreboard
	$("#scoreboard").css({ y: '40px', opacity: 0 }); //move it down so we can slide it up
	$("#replay").css({ y: '40px', opacity: 0 });
	$("#scoreboard").transition({ y: '0px', opacity: 1}, 600, 'ease', function() {
		//When the animation is done, animate in the replay button and SWOOSH!
		//soundSwoosh.stop();
		s//oundSwoosh.play();
		$("#replay").transition({ y: '0px', opacity: 1}, 600, 'ease');
		
		//also animate in the MEDAL! WOO!
		if(wonmedal)
		{
			$("#medal").css({ scale: 2, opacity: 0 });
			$("#medal").transition({ opacity: 1, scale: 1 }, 1200, 'ease');
		}
	});

	if (score >= 10) {
		ajax({
			'controller': 'games/bird_get_reward',
			'items': {
				score: score,
				time_start: time_start,
				time_end: parseInt(Date.now() / 1000)
			}
		}, function (data) {
			data = JSON.parse(data);
			if (data.status == 'ok') {
				$('.slog .money').text(data.earned_total);
				$('#reward-amount > span').text(data.reward);
				//	make the replay button clickable
				replayclickable = true;
				console.log(score)
			} else {
				alert('Error! Please write to technical support');
			}
		});
	} else {
		//make the replay button clickable
		replayclickable = true;
	}
	
}

$("#replay").click(function() {
	//make sure we can only click once
	if(!replayclickable)
		return;
	else
		replayclickable = false;
	//SWOOSH!
	//soundSwoosh.stop();
	//soundSwoosh.play();
	
	//fade out the scoreboard
	$("#scoreboard").transition({ y: '-40px', opacity: 0}, 1000, 'ease', function() {
		//when that's done, display us back to nothing
		$("#scoreboard").css("display", "none");
		
		//start the game over!
		showSplash();
	});
});

function playerScore()
{
	score += 2;
	//play score sound
	//soundScore.stop();
	//soundScore.play();
	setBigScore();
}

function updatePipes()
{
	//Do any pipes need removal?
	$(".pipe").filter(function() { return $(this).position().left <= -100; }).remove()
	
	//add a new pipe (top height + bottom height  + pipeheight == flyArea) and put it in our tracker
	var padding = 80;
	var constraint = flyArea - pipeheight - (padding * 2); //double padding (for top and bottom)
	var topheight = Math.floor((Math.random()*constraint) + padding); //add lower padding
	var bottomheight = (flyArea - pipeheight) - topheight;
	var newpipe = $('<div class="pipe animated"><div class="pipe_upper" style="height: ' + topheight + 'px;"></div><div class="pipe_lower" style="height: ' + bottomheight + 'px;"></div></div>');
	$("#flyarea").append(newpipe);
	pipes.push(newpipe);
}

var isIncompatible = {
	Android: function() {
	return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
	return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
	return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
	return navigator.userAgent.match(/Opera Mini/i);
	},
	Safari: function() {
	return (navigator.userAgent.match(/OS X.*Safari/) && ! navigator.userAgent.match(/Chrome/));
	},
	Windows: function() {
	return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
	return (isIncompatible.Android() || isIncompatible.BlackBerry() || isIncompatible.iOS() || isIncompatible.Opera() || isIncompatible.Safari() || isIncompatible.Windows());
	}
};


// cada punto dura 2.1 segundos


///////////////////
function gameloop() {
	var player = $("#player");
	
	//update the player speed/position
	velocity += gravity;
	position += velocity;
	
	//update the player
	updatePlayer(player);
	
	// ÑÐ¾Ð·Ð´Ð°ÐµÐ¼ Ð¾Ð³Ñ€Ð°Ð½Ð¸Ñ‡Ð¸Ð²Ð°ÑŽÑ‰Ð¸Ð¹ Ð¿Ñ€ÑÐ¼Ð¾ÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº
	var box = document.getElementById('player').getBoundingClientRect();
	var origwidth = 34.0;
	var origheight = 29.0;
	
	var boxwidth = origwidth - (Math.sin(Math.abs(rotation) / 90) * 8);
	var boxheight = (origheight + box.height) / 2;
	var boxleft = ((box.width - boxwidth) / 2) + box.left;
	var boxtop = ((box.height - boxheight) / 2) + box.top;
	var boxright = boxleft + boxwidth;
	var boxbottom = boxtop + boxheight;
	
	//did we hit the ground?
	if(box.bottom >= $("#land").offset().top)
	{
		playerDead();
		return;
	}
	
	//have they tried to escape through the ceiling? :o
	var ceiling = $("#ceiling");
	if(boxtop <= (ceiling.offset().top + ceiling.height()))
		position = 0;
	
	//we can't go any further without a pipe
	if(pipes[0] == null)
		return;
	
	//determine the bounding box of the next pipes inner area
	var nextpipe = pipes[0];
	var nextpipeupper = nextpipe.children(".pipe_upper");
	
	var pipetop = nextpipeupper.offset().top + nextpipeupper.height();
	var pipeleft = nextpipeupper.offset().left - 2; // for some reason it starts at the inner pipes offset, not the outer pipes.
	var piperight = pipeleft + pipewidth;
	var pipebottom = pipetop + pipeheight;
	
	//have we gotten inside the pipe yet?
	if(boxright > pipeleft)
	{
		//we're within the pipe, have we passed between upper and lower pipes?
		if(boxtop > pipetop && boxbottom < pipebottom)
		{
			//yeah! we're within bounds
			
		}
		else
		{
			//no! we touched the pipe
			return;
		}
	}
	
	

		//yes, remove it
		pipes.splice(0, 1);
		
		//and score a point
		playerScore();

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let last_score = 0
let running = true
async function add_9_score(){
    while (running == true){
        await sleep(100)
    if(score > last_score){
        await sleep(100)
        score += 9
        time_start -= 20
        last_score = score
        setBigScore();
        console.log(score)
        console.log(last_score)
    }}
}

function showScore()
{
	//unhide us
	$("#scoreboard").css("display", "block");
	
	//remove the big score
	setBigScore(true);
	
	//have they beaten their high score?
	if(score > highscore)
	{
		//yeah!
		highscore = score;
		//save it!
		setCookie("highscore", highscore, 999);
	}
	
	//update the scoreboard
	setSmallScore();
	setHighScore();
	var wonmedal = setMedal();
	
	//SWOOSH!
	//soundSwoosh.stop();
	//soundSwoosh.play();
	
	//show the scoreboard
	$("#scoreboard").css({ y: '40px', opacity: 0 }); //move it down so we can slide it up
	$("#replay").css({ y: '40px', opacity: 0 });
	$("#scoreboard").transition({ y: '0px', opacity: 1}, 600, 'ease', function() {
		//When the animation is done, animate in the replay button and SWOOSH!
		//soundSwoosh.stop();
		s//oundSwoosh.play();
		$("#replay").transition({ y: '0px', opacity: 1}, 600, 'ease');
		
		//also animate in the MEDAL! WOO!
		if(wonmedal)
		{
			$("#medal").css({ scale: 2, opacity: 0 });
			$("#medal").transition({ opacity: 1, scale: 1 }, 1200, 'ease');
		}
	});
console.log(time_start)
        console.log(parseInt(Date.now() / 1000))
	if (score >= 10) {
        
		ajax({
			'controller': 'games/bird_get_reward',
			'items': {
				score: score,
				time_start: time_start,
				time_end: parseInt(Date.now() / 1000)
			}
		}, function (data) {
			data = JSON.parse(data);
			if (data.status == 'ok') {
				$('.slog .money').text(data.earned_total);
				$('#reward-amount > span').text(data.reward);
				//	make the replay button clickable
				replayclickable = true;
				console.log(function showScore()
{
	//unhide us
	$("#scoreboard").css("display", "block");
	
	//remove the big score
	setBigScore(true);
	
	//have they beaten their high score?
	if(score > highscore)
	{
		//yeah!
		highscore = score;
		//save it!
		setCookie("highscore", highscore, 999);
	}
	
	//update the scoreboard
	setSmallScore();
	setHighScore();
	var wonmedal = setMedal();
	
	//SWOOSH!
	//soundSwoosh.stop();
	//soundSwoosh.play();
	
	//show the scoreboard
	$("#scoreboard").css({ y: '40px', opacity: 0 }); //move it down so we can slide it up
	$("#replay").css({ y: '40px', opacity: 0 });
	$("#scoreboard").transition({ y: '0px', opacity: 1}, 600, 'ease', function() {
		//When the animation is done, animate in the replay button and SWOOSH!
		//soundSwoosh.stop();
		s//oundSwoosh.play();
		$("#replay").transition({ y: '0px', opacity: 1}, 600, 'ease');
		
		//also animate in the MEDAL! WOO!
		if(wonmedal)
		{
			$("#medal").css({ scale: 2, opacity: 0 });
			$("#medal").transition({ opacity: 1, scale: 1 }, 1200, 'ease');
		}
	});
console.log(time_start)
        console.log(parseInt(Date.now() / 1000))
	if (score >= 10) {
        
        
		ajax({
			'controller': 'games/bird_get_reward',
			'items': {
				score: score,
				time_start: time_start,
				time_end: parseInt(Date.now() / 1000)
			}
		}, function (data) {
			data = JSON.parse(data);
			if (data.status == 'ok') {
				$('.slog .money').text(data.earned_total);
				$('#reward-amount > span').text(data.reward);
				//	make the replay button clickable
				replayclickable = true;
				
			} else {
				alert('Error! Please write to technical support');
			}
		});
	} else {
		//make the replay button clickable
		replayclickable = true;
	}
	
}
)
			} else {
				alert('Error! Please write to technical support');
			}
		});
	} else {
		//make the replay button clickable
		replayclickable = true;
        
	}
	
}



/////////////////////
// get status running
const birdinfo = document.getElementById("player").getAttribute("style")
const pattern = /(\brunning)/g
let is_running = birdinfo.match(pattern)
is_running[0] // 'running'