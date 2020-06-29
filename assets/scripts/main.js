let config = {
    type: Phaser.AUTO,
    width: 864,
    height: 386,
    scene: [BootScene, PreloadScene, StartScene, GameScene],
    physics:{
        default:'arcade',
        arcade:{
            debug:false
        }
    }
};

let game = new Phaser.Game(config);