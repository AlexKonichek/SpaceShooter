class PreloadScene extends Phaser.Scene {
    constructor() {
        super('Preload');
    }
    preload() {
        this.load.atlas('ship','assets/sprites/ship.png','assets/sprites/ship.json')
        this.load.atlas('enemies','assets/sprites/enemies/enemies.png','assets/sprites/enemies/enemies.json')
        this.load.image('fires','assets/sprites/fires/Shot5_exp_4.png')
        this.load.image('bullet','assets/sprites/enemies/bullet.png')
    }
    create() {
        
        this.scene.start('Start');
    }
}