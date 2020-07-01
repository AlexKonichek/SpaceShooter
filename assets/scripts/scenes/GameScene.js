class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }
    init(){
        this.cursors = this.input.keyboard.createCursorKeys()
        this.score = 0;
        this.life = 3;

        
        
    }
    create() {
    
        this.createBackground();
        if(!this.sounds){
            this.createSounds();
        }
        this.player = new Player(this);
        this.enemies = new Enemies(this);
        this.addOverlap();
        this.createCompleteEvents();
        this.createText();
        this.createButtons();
        
        
    }
    
     createButtons() {
         let buttonUp = this.add.sprite(100, config.height-100, 'up').setInteractive();
         buttonUp.on('pointerdown', this.playerUp);
         buttonUp.on('pointerup', this.playerNotUp);
         let buttonDown = this.add.sprite(config.width-100, config.height-100, 'down').setInteractive();
         buttonDown.on('pointerdown', this.playerDown);
         buttonDown.on('pointerup', this.playerNotDown);
        
     }  
    playerUp(){
        this.scene.player.upIsDown()   
    }

    playerNotUp(){
        this.scene.player.upIsNotDown()
    }
    playerDown(){
        this.scene.player.downIsDown()
    }
    playerNotDown(){
        this.scene.player.downIsNotDown()  
    }
    
        
    createSounds(){
        this.sounds = {
            boom:this.sound.add('expl',{volume:0.5})
        }

    }
    
    createText() {
        this.scoreText= this.add.text(40, 100,`Score:${this.score}`, {
            font: '40px CurseCasual',
            fill: '#3498DB'
        });
        this.lifeText= this.add.text(200, 100,`Life:${this.life}`, {
            font: '40px CurseCasual',
            fill: '#3498DB'
        });
        
    }
    addOverlap(){
        this.physics.add.overlap(this.player.fires, this.enemies, this.onOverlap, undefined, this);
        this.physics.add.overlap(this.enemies.fires, this.player, this.onOverlap, undefined, this);
        this.physics.add.overlap(this.player, this.enemies, this.onOverlap, undefined, this);
        this.physics.add.overlap(this.player.fires, this.enemies.fires, this.onOverlap, undefined, this);
    }
    onOverlap(source, target) {
        console.log(source.texture.key, target.texture.key)
        const enemy = [source, target].find(item => item.texture.key === 'enemies');
        const player = [source, target].find(item => item.texture.key === 'ship');
        if (enemy) {
            ++this.score;
            this.scoreText.setText(`Score: ${this.score}`);
            EnemyDestroy.generate(this, enemy.x, enemy.y);
            this.sounds.boom.play();
        }else if (player){
           // console.log("player",this.life )

            //--this.life;
            this.lifeText.setText(`Life: ${this.life}`);

        }
        if(!player){
            source.setAlive(false);
            target.setAlive(false)
        }
         
    }
    /* playerCrashAnim(){
        // Сгенерировать набор фреймов текстуры, необходимых для анимации
        const frames = this.anims.generateFrameNames(, {
            prefix: data.texture,
            start: 1,
            end: 4
        });

        // Создать новую анимацию на основе полученного набора фреймов
        this.scene.anims.create({
            key: 'shipMove',
            frames,
            frameRate: 24,
            repeat: -1
        });

        // Запустить анимацию
        this.play('shipMove');
    } */
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
        if(this.life==0){
            console.log('life==0')
            this.player.once('killed', this.onComplete, this)
        }
        this.events.once('enemies-killed', this.onComplete, this);

    }
    onComplete(){
        this.scene.start('Start',{
            score: this.score,
            completed:this.player.active
        });
    }
}