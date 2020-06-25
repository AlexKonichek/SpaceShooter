class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }
    init(){
        this.cursors = this.input.keyboard.createCursorKeys()
    }
    create() {
        
        this.createBackground();
        this.player = new Player(this);
        this.enemies = new Enemies(this);
        

        
    }
    
    createBackground() {
        this.bg4 = this.add.tileSprite(0, 0, config.width, config.height, 'bg4').setOrigin(0);
        
        this.bg1 = this.add.tileSprite(0, 0, config.width, config.height, 'bg1').setOrigin(0);
        this.bg2 = this.add.tileSprite(0, 0, config.width, config.height, 'bg2').setOrigin(0);
        this.bg3 = this.add.tileSprite(0, 0, config.width, config.height, 'bg3').setOrigin(0);
        
        
        
        

    }
    update(){
        this.bg4.tilePositionX+=0;
        this.bg1.tilePositionX+=0.5; 
        this.bg2.tilePositionX+=2;
        this.bg3.tilePositionX+=3;
        
        
        
        this.player.move();
        
    }
}