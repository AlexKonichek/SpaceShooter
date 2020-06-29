let config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 830,
    scene: [BootScene, PreloadScene, StartScene, GameScene],
    physics:{
        default:'arcade',
        arcade:{
            debug:false
        }
    }
};

let game = new Phaser.Game(config);