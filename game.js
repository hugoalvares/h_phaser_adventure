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
    this.load.spritesheet('link', '/assets/link.png', {
        frameWidth: 32,
        frameHeight: 32
    });
}

let player;

function create () {
    player = this.physics.add.sprite(400, 350, 'link');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('link', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    
    this.anims.create({
        key: 'turn',
        frames: [ { key: 'link', frame: 4 } ],
        frameRate: 20
    });
    
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('link', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
}

function update() {
    // stop any previous movement from the last frame
    // player.body.setVelocity(0);
  
    // // horizontal movement
    // if (cursors.left.isDown) {
    //     player.body.setVelocityX(-100);
    // } else if (cursors.right.isDown) {
    //     player.body.setVelocityX(100);
    // }
  
    // // vertical movement
    // if (cursors.up.isDown) {
    //     player.body.setVelocityY(-100);
    // } else if (cursors.down.isDown) {
    //     player.body.setVelocityY(100);
    // }
  
    // // normalize and scale the velocity so that player can't move faster along a diagonal
    // player.body.velocity.normalize().scale(speed);
}
