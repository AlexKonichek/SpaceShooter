class StartScene extends Phaser.Scene {
    constructor() {
        super('Start');
    }
    create(data) {
        this.createBackground();
        if(data.score!==undefined){
            this.createStats(data)
        }
        this.createText();
        this.setEvents();
    }
    createBackground() {
        this.add.sprite(0, 0, 'start').setOrigin(0);
       

    }
    createText() {
        this.add.text(config.width / 2, 500, 'Tap to start', {
            font: '40px CurseCasual',
            fill: '#3498DB'
        }).setOrigin(0.5);
    }
    setEvents() {
        this.input.on('pointerdown', () => {
            this.scene.start('Game');
        });
    }
    createStats(data){
        const graphics = this.add.graphics();
        graphics.fillStyle(0x000000,0.5);
        graphics.fillRoundedRect(config.width/2-200, config.height/2-200, 400, 400)
        const textTitle= data.comleted ? 'Level completed' : 'Game Over';
        const textScore=`Score:${data.score}`;
        const textStyle={
            font: '60px CurseCasual',
            fill: '#3498DB'
        };
        this.add.text(config.width/2, 150, textTitle, textStyle).setOrigin(0.5);
        this.add.text(config.width/2, 250, textScore, textStyle).setOrigin(0.5)



    }
}