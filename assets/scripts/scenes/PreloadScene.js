class PreloadScene extends Phaser.Scene {
    constructor() {
        super('Preload');
    }
    preload() {
        this.load.atlas('ship','assets/sprites/player/ship.png','assets/sprites/player/ship.json')
        this.load.atlas('enemies','assets/sprites/enemies/enemies.png','assets/sprites/enemies/enemies.json')
        this.load.image('fires','assets/sprites/fires/Ship5_turbo_003.png')
        this.load.image('bullet','assets/sprites/enemies/bullet.png')
    }
    create() {
        
        this.scene.start('Start');
    }
}