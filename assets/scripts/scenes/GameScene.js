class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }
    init(){
        this.cursors = this.input.keyboard.createCursorKeys()
    }
    create() {
        console.log('GameScene loaded');
        this.createBackground();
        this.player = new Player(this);
    }
    createBackground() {
        this.bg = this.add.tileSprite(0, 0, config.width, config.height, 'bg').setOrigin(0);
    }
    update(){
        this.bg.tilePositionX+=7
        this.player.move()
    }
}