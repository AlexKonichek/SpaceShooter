class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    }
    preload() {
        this.load.image('start', 'assets/sprites/bg/light_planets.png');
        this.load.image('bg1', 'assets/sprites/bg/rocks1.png');
        this.load.image('bg2', 'assets/sprites/bg/rocks2.png');
        this.load.image('bg3', 'assets/sprites/bg/rocks3.png');
        this.load.image('bg4', 'assets/sprites/bg/back_stars.png');
    }
    create() {
        
        this.scene.start('Preload');
    }
}