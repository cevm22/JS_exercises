let config = {
	type: Phaser.AUTO,
	width: 800,
	height: 800,
	parent: "phaser-example",
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 300 },
			debug: false,
		},
	},
	dom: {
		createContainer: true,
	},
	scene: {
		preload: preload,
		create: create,
		update: update,
	},
};

let game = new Phaser.Game(config);

// Ð·Ð°Ð³Ñ€ÑƒÐ¶Ð°ÐµÐ¼ Ð¾Ð±ÑŠÐµÐºÑ‚Ñ‹
function preload() {
	this.load.image("sky", "/app/images/games/bomber/sky.png");
	this.load.image("ground", "/app/images/games/bomber/ground.png");
	this.load.image("ground2", "/app/images/games/bomber/ground2.png");
	this.load.image("star", "/app/images/games/bomber/star.png");
	this.load.image("bomb", "/app/images/games/bomber/bomb.png");
	this.load.spritesheet("hero", "/app/images/games/bomber/player.png", {
		frameWidth: 29,
		frameHeight: 48,
	}); // Ð·Ð°Ð³Ñ€ÑƒÐ¶Ð°ÐµÐ¼ ÐºÐ°Ðº ÑÐ¿Ñ€Ð°Ð¹Ñ‚ - spritesheet
	this.load.image("check", "/app/images/games/bomber/check.png");
	this.load.image("up", "/app/images/games/bomber/button.png");
	this.load.image("left", "/app/images/games/bomber/button-left.png");
	this.load.image("right", "/app/images/games/bomber/button-right.png");
}
// Ð¾Ñ‚Ð¾Ð±Ñ€Ð°Ð¶Ð°ÐµÐ¼ Ð¾Ð±ÑŠÐµÐºÑ‚Ñ‹
function create() {
	let score = 0;
	let scoreText;

	this.add.image(400, 400, "sky"); // Ð¾Ñ‚Ð¾Ð±Ñ€Ð°Ð¶Ð°ÐµÐ¼ Ð¾Ñ‚Ð½Ð¾ÑÐ¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ Ñ†ÐµÐ½Ñ‚Ñ€Ð° Ð½Ð° 400 Ð¸ 300

	let check = this.add.image(320, 25, "check");
	check.visible = false;

	let text = this.add.text(320, 25, _txt_win, {
		fontSize: "18px",
		fill: "#fff",
		fontFamily: "Pexico"
	});
	if (already_win === false) {
		text.visible = false;
	} else {
		text.setText(_txt_already);
		text.visible = true;
	}

	platforms = this.physics.add.staticGroup(); // Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÐ¼ ÑÐ¸ÑÑ‚ÐµÐ¼Ñƒ Arcade Physics Ð¸ ÑÑ‚Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÑƒÑŽ Ð³Ñ€ÑƒÐ¿Ð¿Ñƒ Ð¿Ð»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼, Ð²ÑÐµ Ð¿Ð»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼Ñ‹ Ð±ÑƒÐ´ÑƒÑ‚ ÑÑ‚Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸Ðµ

	platforms.create(400, 780, "ground2"); // setScale-ÑƒÐ²ÐµÐ»Ð¸Ñ‡Ð¸Ð²Ð°ÐµÐ¼ Ð² 4.9 Ñ€Ð°Ð·; refreshBody-Ð´Ð°Ñ‘Ð¼ Ð·Ð½Ð°Ñ‚ÑŒ Ð´Ð²Ð¸Ð¶ÐºÑƒ Ñ‡Ñ‚Ð¾ Ð¼Ñ‹ Ð¿Ð¾Ð¼ÐµÐ½ÑÐ»Ð¸ Ñ€Ð°Ð·Ð¼ÐµÑ€

	platforms.create(500, 630, "ground");
	platforms.create(250, 350, "ground");
	// platforms.create(750, 150, "ground");
	platforms.create(750, 450, "ground");

	player = this.physics.add.sprite(140, 350, "hero"); // ÑÐ¾Ð·Ð´Ð°Ñ‘Ð¼ ÑÐ¿Ñ€Ð°Ð¹Ñ‚ Ð¸Ð³Ñ€Ð¾ÐºÐ°, Ð¡Ð¿Ñ€Ð°Ð¹Ñ‚ Ð±Ñ‹Ð» ÑÐ¾Ð·Ð´Ð°Ð½ Ñ Ð¿Ð¾Ð¼Ð¾Ñ‰ÑŒÑŽ Physics Game Object Factory

	player.setBounce(0.2);
	player.setCollideWorldBounds(false);

	player.body.setGravityY(300); // Ð²Ð»Ð¸ÑÐ½Ð¸Ðµ Ð³Ñ€Ð°Ð²Ð¸Ñ‚Ð°Ñ†Ð¸Ð¸ Ð½Ð° ÑÐ¿Ñ€Ð°Ð¹Ñ‚
	this.physics.add.collider(player, platforms); // ÐºÐ¾Ð»Ð¸Ð·Ð¸Ñ Ð¾Ð±ÐµÐºÑ‚Ð¾Ð² player Ð¸ platforms
	this.anims.create({
		key: "left",
		frames: this.anims.generateFrameNumbers("hero", { start: 0, end: 3 }), // Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ ÐºÐ°Ð´Ñ€Ñ‹ 0,1,2,3
		frameRate: 10, // ÑÐºÐ¾Ñ€Ð¾ÑÑ‚ÑŒ 10 ÐºÐ°Ð´Ñ€Ð¾Ð² Ð² ÑÐµÐºÑƒÐ½Ð´Ñƒ
		repeat: -1, // Ð·Ð°Ñ†Ð¸ÐºÐ»Ð¸Ð²Ð°ÐµÐ¼ Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸ÑŽ
	});

	this.anims.create({
		key: "turn",
		frames: [{ key: "hero", frame: 4 }],
		frameRate: 20,
	});

	this.anims.create({
		key: "right",
		frames: this.anims.generateFrameNumbers("hero", { start: 5, end: 8 }),
		frameRate: 10,
		repeat: -1,
	});

	stars = this.physics.add.group({
		// ÑÐ¾Ð·Ð´Ð°Ñ‘Ð¼ Ð·Ð²ÐµÐ·Ð´Ñ‹
		key: "star", // ÐºÐ»ÑŽÑ‡ Ñ‚ÐµÐºÑÑ‚ÑƒÑ€Ñ‹
		repeat: 11, // Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸ ÑÐ¾Ð·Ð´Ð°Ñ‘Ñ‚ ÐµÑ‰Ñ‘ 11 ÑˆÑ‚ÑƒÐº
		setXY: { x: 20, y: 0, stepX: 70 }, // ÐºÐ°Ð¶Ð´Ð°Ñ Ð·Ð²ÐµÐ·Ð´Ð° Ð±ÑƒÐ´ÐµÑ‚ Ñ€Ð°Ð·Ð¼ÐµÑ‰ÐµÐ½Ð°, Ð½Ð°Ñ‡Ð¸Ð½Ð°Ñ Ñ x: 22, y: 0 Ð¸ Ñ ÑˆÐ°Ð³Ð¾Ð¼ x 170.
	});

	stars.children.iterate(function (child) {
		child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.2));
	});

	this.physics.add.collider(stars, platforms); // ÐºÐ¾Ð»Ð¸Ð·Ð¸Ñ Ð¾Ð±ÑŠÐµÐºÑ‚Ð¾Ð² stars Ð¸ platforms

	scoreText = this.add.text(16, 16, _txt_score+": 0 / 600", {
		fontSize: "32px",
		fill: "#fff",
		fontFamily: "Pexico"
	});

	function collectStar(player, star) {
		star.disableBody(true, true);

		score += 10;
		scoreText.setText(_txt_score+": " + score + "/600");

		if (stars.countActive(true) === 0) {
			// ÑƒÐ·Ð½Ð°Ñ‘Ð¼ ÑÐºÐ¾Ð»ÑŒÐºÐ¾ Ð·Ð²Ñ‘Ð·Ð´ Ð¾ÑÑ‚Ð°Ð»Ð¾ÑÑŒ
			stars.children.iterate(function (child) {
				child.enableBody(true, child.x, 0, true, true);
			});

			let x =
				player.x < 400
					? Phaser.Math.Between(400, 800)
					: Phaser.Math.Between(0, 400);

			let bomb = bombs.create(x, 16, "bomb");
			bomb.setBounce(1);
			bomb.setCollideWorldBounds(true);
			bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
		}

		if (score == 600) {
			// check.visible = true;
			
			if (already_win === false) {
				ajax({
					'controller': 'games/bomber_get_reward'
				}, function(data) {
					data = JSON.parse(data);
					// if (data.status == 'ok') {

					// }
					text.visible = true;
				});
			}
		}
	}

	this.physics.add.overlap(player, stars, collectStar, null, this);

	bombs = this.physics.add.group();
	this.physics.add.collider(bombs, platforms);
	this.physics.add.collider(player, bombs, hitBomb, null, this);

	function hitBomb(player, bomb) {
		// ÐºÐ¾Ð½ÐµÑ† Ð¸Ð³Ñ€Ñ‹
		this.physics.pause();
		player.setTint(0xff0000);
		player.anims.play("turn");
		gameOver = true;
		showOverlay("gameover", "default");
	}

	let cursor_up = this.add.image(60, 660, "up").setInteractive(); // Ð²Ñ‹Ð²Ð¾Ð´Ð¸Ð¼ ÐºÐ½Ð¾Ð¿ÐºÐ¸
	let cursor_left = this.add.image(60, 740, "left").setInteractive();
	let cursor_up_two = this.add.image(740, 660, "up").setInteractive();
	let cursor_right = this.add.image(740, 740, "right").setInteractive();

	// ÐºÐ½Ð¾Ð¿ÐºÐ¸ Ð½Ð° ÑÐºÑ€Ð°Ð½Ðµ
	// Ð²Ð»ÐµÐ²Ð¾
	cursor_left.on("pointerdown", function (pointer) {
		playerLeft();
	});

	cursor_left.on("pointerout", function (pointer) {
		playerStatic();
	});

	cursor_left.on("pointerup", function (pointer) {
		playerStatic();
	});

	this.input.keyboard.on("keydown_LEFT", function (params) {
		playerLeft();
	});

	this.input.keyboard.on("keyup_LEFT", function (params) {
		playerStatic();
	});

	// Ð²Ð¿Ñ€Ð°Ð²Ð¾
	cursor_right.on("pointerdown", function (pointer) {
		playerRight();
	});

	cursor_right.on("pointerout", function (pointer) {
		playerStatic();
	});

	cursor_right.on("pointerup", function (pointer) {
		playerStatic();
	});

	this.input.keyboard.on("keydown_RIGHT", function (params) {
		playerRight();
	});

	this.input.keyboard.on("keyup_RIGHT", function (params) {
		playerStatic();
	});

	// Ð²Ð²ÐµÑ€Ñ…
	cursor_up.on("pointerdown", function (pointer) {
		if (player.body.touching.down) {
			playerUp();
		}
	});
	cursor_up.on("pointerout", function (pointer) {
		playerStatic();
	});
	cursor_up.on("pointerup", function (pointer) {
		playerStatic();
	});

	this.input.keyboard.on("keydown_UP", function (params) {
		if (player.body.touching.down) {
			playerUp();
		}
	});
	cursor_up_two.on("pointerdown", function (pointer) {
		if (player.body.touching.down) {
			playerUp();
		}
	});

	cursor_up_two.on("pointerout", function (pointer) {
		playerStatic();
	});
	cursor_up_two.on("pointerup", function (pointer) {
		playerStatic();
	});
}

// Ð´Ð²Ð¸Ð¶ÐµÐ½Ð¸Ðµ Ð¸Ð³Ñ€Ð¾ÐºÐ°
function playerLeft() {
	player.setVelocityX(-260);
	player.anims.play("left", true);
}
function playerRight() {
	player.setVelocityX(260);
	player.anims.play("right", true);
}
function playerUp() {
	player.setVelocityY(-500);
}
function playerStatic() {
	player.setVelocityX(0);
	player.anims.play("turn");
}

function update() {
	this.physics.world.wrap(player, 5);
}
////////////////////////////////////////////////////////////////////overlay

function showOverlay(classname, timeout, attributes) {
	$("." + classname).addClass("active");
	$(".b-overlay").addClass("active");
	$("html, body").addClass("overlay-active");
	$("body").addClass("overlay-" + classname);

	//  Ñ‚Ð°Ðº ÐºÐ°Ðº ÑÐ²Ð¾Ð¹ÑÑ‚Ð²Ð¾ 'display', ÐºÐ¾Ñ‚Ð¾Ñ€Ð¾Ðµ Ð¼ÐµÐ½ÑÐµÑ‚ÑÑ Ñ ÑÑ‚Ð¸Ð¼ ÐºÐ»Ð°ÑÑÐ¾Ð¼ Ð½Ðµ Ð°Ð½Ð¸Ð¼Ð¸Ñ€ÑƒÐµÑ‚ÑÑ
	//  Ð´ÐµÐ»Ð°ÐµÐ¼ Ð·Ð°Ð´ÐµÑ€Ð¶ÐºÑƒ Ð² 5Ð¼Ñ
	setTimeout(function () {
		$(".b-overlay").css("opacity", "1");
		$(".b-overlay__content").css("transform", "scale(1)");
	}, 5);
}
//  Ð—Ð°ÐºÑ€Ñ‹Ð²Ð°ÐµÑ‚ Ð²ÑÐµ Ð°ÐºÑ‚Ð¸Ð²Ð½Ñ‹Ðµ Ð²ÑÐ¿Ð»Ñ‹Ð²Ð°ÑŽÑ‰Ð¸Ðµ Ð¾ÐºÐ½Ð°
function closeOverlay() {
	$(".b-overlay").css("opacity", "0");
	$(".b-overlay__content").css("transform", "scale(.8)");
	setTimeout(function () {
		$(".b-overlay").removeClass("active");
		$("html, body").removeClass("overlay-active");
		$(".b-overlay__content>*").removeClass("active");

		$(".form-reviews .reviews-block").innerHTML = "";
		//let formReviewsText = document.querySelector('.form-reviews .reviews-block');
	}, 200);
}
$("[data-open]").on("click", function (e) {
	var target = $(this)[0];
	var attributes = e.target.attributes;
	if ($(this).hasClass("close-open-form")) {
		closeOverlay();
		setTimeout(() => {
			showOverlay($(this).attr("data-open"), "default");
		}, 1000);
	}

	showOverlay($(this).attr("data-open"), "default");
});
//  Ð’Ñ‹Ð·Ð¾Ð² Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¸ closeOverlay() Ð¿Ñ€Ð¸ ÐºÐ»Ð¸ÐºÐµ Ð½Ð° ÐºÑ€ÐµÑÑ‚Ð¸Ðº Ð¸Ð»Ð¸ Ñ„Ð¾Ð½ Ð²ÑÐ¿Ð»Ñ‹Ð²Ð°ÑŽÑ‰ÐµÐ³Ð¾ Ð¾ÐºÐ½Ð°
// $(".b-overlay__close, .b-overlay__bg").on("click", function (e) {
// 	e.preventDefault();
// 	//closeOverlay();
// 	location.reload();
// });