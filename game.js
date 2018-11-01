const config = {
    type: Phaser.AUTO,
    width: 1500,
    height: 900,
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
        },
    },
};

let game = new Phaser.Game(config);

function preload () {
    this.load.spritesheet('dude', 'assets/dude.png', {
        frameWidth: 32,
        frameHeight: 48
    });
}

let player;

function create () {
    player = this.physics.add.sprite(400, 350, 'dude');
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', {
            start: 0,
            end: 3
        }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', {
            start: 5,
            end: 8
        }),
        frameRate: 10,
        repeat: -1
    });
}

function update() {
    player.body.setVelocity(0);
    cursors = this.input.keyboard.createCursorKeys();

    // horizontal movement
    if (cursors.left.isDown) {
        player.body.setVelocityX(-160);
        player.anims.play('left');
    } else if (cursors.right.isDown) {
        player.body.setVelocityX(160);
        player.anims.play('right');
    }

    // vertical movement
    if (cursors.up.isDown) {
        player.body.setVelocityY(-160);
    } else if (cursors.down.isDown) {
        player.body.setVelocityY(160);
    }

    // Normalize and scale the velocity so that player can't move faster along a diagonal
    player.body.velocity.normalize().scale(160);
    // } else {
    //     player.setVelocityX(0);
    //     player.setVelocityY(0);
    //     player.anims.play('turn');
    // }
    // player.body.velocity.normalize().scale(160);
}
