let config = {
    type: Phaser.AUTO,
    width: 617,
    height: 347,
    scene: [BootScene, PreloadScene, StartScene, GameScene],
    physics:{
        default:'arcade',
        arcade:{
            debug:false
        }
    }
};

let game = new Phaser.Game(config);