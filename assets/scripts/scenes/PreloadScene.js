class PreloadScene extends Phaser.Scene {
    constructor() {
        super('Preload');
    }
    preload() {
        this.load.atlas('ship','assets/sprites/ship.png','assets/sprites/ship.json')
        this.load.atlas('enemies','assets/sprites/enemies.png','assets/sprites/enemies.json')
    }
    create() {
        console.log('PreloadScene.create');
        this.scene.start('Start');
    }
}