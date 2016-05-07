const GRAVITY = 3000;
const PLAYER_HORIZONTAL_SPEED = 400;

var game = new Phaser.Game(1280, 720, Phaser.AUTO);

var myGameState = {

	player : null,
	cursors : null,

	init : function () {

		this.physics.startSystem(Phaser.Physics.ARCADE);

        // The World gravity setting. Defaults to x: 0, y: 0, or no gravity.
		this.physics.arcade.gravity.y = GRAVITY;

	},

	preload : function () {

		this.load.image('background', 'assets/background.png');
		this.load.image('cloud', 'assets/cloud-platform.png');
		this.load.spritesheet('dude', 'assets/dude.png', 32, 48);

	},

	create : function () {

		var background = this.add.sprite(0,0,'background');
		background.scale.set(game.height/background.height);

		var background2 = this.add.sprite(background.width,0,'background');
		background2.anchor.set(1, 0);
		background2.scale.set(-game.height/background2.height, game.height/background2.height);

		this.player = this.add.sprite(0, 480, 'dude', 4);
		this.player.anchor.y = 1;

	    // left, using frames 0 to 3 at 10 frames/sec and looping
		this.player.animations.add('left', [0,1,2,3], 10, true);

	    // right, using frames 5 to 8 at 10 frames/sec and looping
	    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

		this.physics.arcade.enable(this.player);

		this.player.body.collideWorldBounds = true;

		this.cursors = this.input.keyboard.createCursorKeys();

	},

	update : function() {

		if (this.cursors.left.isDown) {

			// Move left
			this.player.body.velocity.x = -PLAYER_HORIZONTAL_SPEED;

			this.player.animations.play('left');

		}
		else if (this.cursors.right.isDown) {

	        //  Move to the right
	        this.player.body.velocity.x = PLAYER_HORIZONTAL_SPEED;

	        this.player.animations.play('right');

		}
		else {

	        this.player.body.velocity.x = 0;

			// stand still
			this.player.animations.stop();

			this.player.frame = 4;

		}

		if (this.cursors.up.isDown) {

	        //  fly
	        this.player.body.velocity.y = -PLAYER_HORIZONTAL_SPEED;

		}

	}
}

game.state.add('mainState', myGameState, true);
