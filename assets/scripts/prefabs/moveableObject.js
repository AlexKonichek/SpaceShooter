class MoveableObject extends Phaser.GameObjects.Sprite {
    constructor(data) {
        super(data.scene, data.x, data.y, data.texture, data.frame);
        this.init(data);
    }

    init(data) {
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.enable = true;
        this.velocity = data.velocity ;
        this.scene.events.on('update', this.update, this);
    }
    isDead(){
        return false;
    }
    
    update() {
        if (this.active && this.isDead()) {
            this.setAlive(false);
        }
    } 

    reset(x,y){
        this.x = x+20;
        this.y = y+8;
        this.setAlive(true);
    }
    setAlive(status) {
        // активировать/деактивировать физическое тело
        this.body.enable = status;
        // скрыть/показать текстуру
        this.setVisible(status);
        // деактивировать/активироть объект
        this.setActive(status);
        if(this.timer){
           this.timer.paused = !status;
        }
    }

    move() {
        this.body.setVelocityX(this.velocity);
    }


}