class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }
    init(){
        this.cursors = this.input.keyboard.createCursorKeys()
        this.score= 0;
    }
    create() {
        
        this.createBackground();
        this.player = new Player(this);
        this.enemies = new Enemies(this);
        this.addOverlap();
        this.createCompleteEvents();
        this.createText();
        
    }
    createText() {
        this.scoreText= this.add.text(50, 50,`Score:${this.score}`, {
            font: '20px CurseCasual',
            fill: '#3498DB'
        });
    }
    addOverlap(){
        this.physics.add.overlap(this.player.fires, this.enemies, this.onOverlap, undefined, this);
        this.physics.add.overlap(this.enemies.fires, this.player, this.onOverlap, undefined, this);
        this.physics.add.overlap(this.player, this.enemies, this.onOverlap, undefined, this);
        this.physics.add.overlap(this.player.fires, this.enemies.fires, this.onOverlap, undefined, this);
    }
    onOverlap(source, target){
        if(source !== this.player && target !== this.player){
            ++this.score;
            this.scoreText.setText(`Score:${this.score}`)
        }
        source.setAlive(false);
        target.setAlive(false);
        //add destroy animation
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
    createCompleteEvents(){
        this.player.once('killed', this.onComplete, this)
        this.events.once('enemies-killed', this.onComplete, this);

    }
    onComplete(){
        this.scene.start('Start',{
            score: this.score,
            completed:this.player.active
        });
    }
}