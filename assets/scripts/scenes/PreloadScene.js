class PreloadScene extends Phaser.Scene {
    constructor() {
        super('Preload');
        
    }
    preload() {
        this.load.atlas('ship','assets/sprites/player/ship3/playerShip3.png','assets/sprites/player/ship3/playerShip3.json')
        this.load.atlas('enemies','assets/sprites/enemies/enemy.png','assets/sprites/enemies/enemy.json')
        this.load.atlas('enemiesCrash','assets/sprites/enemies/enemiesCrash.png','assets/sprites/enemies/enemiesCrash.json')
        this.load.atlas('fires','assets/sprites/fires/fires.png',
        'assets/sprites/fires/fires.json')

        this.load.atlas('boom','assets/sprites/fires/boom.png',
        'assets/sprites/fires/boom.json')
        this.load.image('bullet','assets/sprites/enemies/bullet.png')

        this.load.audio('expl','assets/sounds/contra-sfx-9.mp3')
    }
    create() {
        
        this.scene.start('Start');
    }
}