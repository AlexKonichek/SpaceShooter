class Enemy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        this.init();
        
    }
    static generate(scene){
        const x = config.width+50;
        const y  = Phaser.Math.Between(100, config.height-100);
        const texture = 'enemies';
        const id = Phaser.Math.Between(1, 2);
        const frame = `enemy${id}`;
        return new Enemy(scene, x, y, texture, frame)
    }
    init(){
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.enable = true;
        this.velocity = -400
    }
    move(){
        this.body.setVelocityX(this.velocity);
    }
}