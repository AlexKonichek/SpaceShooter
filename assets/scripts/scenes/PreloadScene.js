class PreloadScene extends Phaser.Scene {
    constructor() {
        super('Preload');
    }
    preload() {
        this.load.atlas('ship','assets/sprites/ship.png','assets/sprites/ship.json')
        console.log('PreloadScene.preload');
    }
    create() {
        console.log('PreloadScene.create');
        this.scene.start('Start');
    }
}