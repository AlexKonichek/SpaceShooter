let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    scene: [BootScene, PreloadScene, StartScene, GameScene],
    physics:{
        default:'arcade',
        arcade:{
            debug:false
        }
    }
};

let game = new Phaser.Game(config);