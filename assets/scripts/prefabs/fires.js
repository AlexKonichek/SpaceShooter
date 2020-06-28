class Fires extends Phaser.Physics.Arcade.Group{
    constructor(scene){
        super(scene.physics.world, scene);
        
        this.timer = this.scene.time.addEvent({
            delay:1000,
            loop: true,
            callback: this.tick,
            callbackScope:this  
              })
    
       
    }
    tick(){
        if(this.getLength() < this.count){
        this.createEnemy()
    }else{
        this.timer.remove(); 
    }
    }
    createFire(source){
        let fire = this.getFirstDead()
        if(!fire){
            fire = Fire.generate(this.scene, source);
            this.add(fire);
        }else{
            fire.reset(source.x+20, source.y+8)
        }
         
        fire.move();

    }  
}